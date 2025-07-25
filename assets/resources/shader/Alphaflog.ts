import { UIOpacity } from 'cc';
import { _decorator, Component, Sprite, Color, Node, tween } from 'cc';
const { ccclass, property , executeInEditMode} = _decorator;

// 闪烁模式枚举
enum FlashMode {
    STEADY = 0,     // 恒定模式 - 保持最大透明度
    SUSTAIN = 1,    // 持续峰值模式 - 峰值保持一段时间
    HEARTBEAT = 2   // 心跳模式 - 双峰闪烁
}

@ccclass('Alphaflog')
@executeInEditMode
export  class Alphaflog extends Component {
    // ---------- 闪烁效果参数 ----------
 
    public flashMode: FlashMode = FlashMode.SUSTAIN;

    @property(Number
      )
    public totalDuration: number = 2.0;

     @property(Number
      )
    public maxAlpha: number = 1.0;

     @property(Number
      )
    public minAlpha: number = 0.3;

    @property(Boolean
      )
    public autoStart: boolean = true;

    // ---------- 内部状态 ----------
    private _sprite: UIOpacity | null = null;
    private _timeAccumulator: number = 0;
    private _isRunning: boolean = false;
    private _originalAlpha: number = 1.0;

    onLoad() {
        // 获取节点的 Sprite 组件
        this._sprite = this.node.getComponent(UIOpacity);
        
        // 保存原始透明度
        if (this._sprite) {
            this._originalAlpha = 0;
        }
    }

    start() {
        if (this.autoStart) {
            this.startFlicker();
        }
    }

    update(deltaTime: number) {
        if (!this._isRunning || !this._sprite) return;

        this._timeAccumulator += deltaTime;
        this._timeAccumulator %= this.totalDuration;
        const t = this._timeAccumulator / this.totalDuration;

        let alpha = 0.0;
        switch (this.flashMode) {
            case FlashMode.STEADY:
                alpha = this.maxAlpha;
                break;
            case FlashMode.SUSTAIN:
                alpha = this.calculateSustain(t);
                break;
            case FlashMode.HEARTBEAT:
                alpha = this.calculateHeartbeat(t);
                break;
        }

        // 应用计算出的透明度
        const color = this._sprite.opacity;
        this._sprite.opacity = alpha
    }

    // ---------- 闪烁控制方法 ----------
    startFlicker() {
        this._isRunning = true;
        this._timeAccumulator = 0;
    }

    stopFlicker() {
        this._isRunning = false;
        
        // 恢复到原始透明度
        if (this._sprite) {
            const color = this._sprite.opacity;
 this._sprite.opacity = this._originalAlpha
        }
    }

    // ---------- 闪烁效果计算方法 ----------
    private calculateSustain(t: number): number {
        const riseTime = 0.4;   // 上升时间占比
        const sustainTime = 0.2; // 峰值保持时间占比
        const fallTime = 0.4;   // 下降时间占比

        if (t < riseTime) {
            // 上升阶段
            return this.minAlpha + (this.maxAlpha - this.minAlpha) * (t / riseTime);
        } else if (t < riseTime + sustainTime) {
            // 峰值保持阶段
            return this.maxAlpha;
        } else {
            // 下降阶段
            return this.maxAlpha - (this.maxAlpha - this.minAlpha) * 
                ((t - riseTime - sustainTime) / fallTime);
        }
    }

    private calculateHeartbeat(t: number): number {
        const firstPeakTime = 0.3;
        const secondPeakTime = 0.7;
        const decayRate = 0.6; // 第二峰值的衰减率

        // 计算第一个峰值
        const firstPeak = Math.exp(-20 * Math.pow(t - firstPeakTime, 2));
        
        // 计算第二个峰值（幅度较小）
        const secondPeak = Math.exp(-20 * Math.pow(t - secondPeakTime, 2));
        
        // 组合两个峰值
        const combined = firstPeak + decayRate * secondPeak;
        
        // 映射到透明度范围
        return this.minAlpha + (this.maxAlpha - this.minAlpha) * combined;
    }

    // ---------- 参数设置方法 ----------
    setFlashMode(mode: FlashMode) {
        this.flashMode = mode;
    }

    setTotalDuration(duration: number) {
        this.totalDuration = Math.max(0.1, duration);
    }

    setAlphaRange(min: number, max: number) {
        this.minAlpha = Math.max(0, Math.min(1, min));
        this.maxAlpha = Math.max(0, Math.min(1, max));
    }
}

