import { _decorator, Component, Material, Vec3, tween, Vec4 } from 'cc';
import { Sprite, find } from 'cc';
import AnimalManager from '../../TS/Manager/AnimalManager';
import gif1 from '../../TS/BASE/spineANDgif/gif';

const { ccclass, property, executeInEditMode } = _decorator;

// 闪烁模式枚举
enum FlashMode {
    STEADY = 0,     // 保持当前状态
    SUSTAIN = 1,    // 峰值保持 30% 时长
    HEARTBEAT = 2   // 心跳式双闪
}

@ccclass('DynamicFlickerEffect')
@executeInEditMode
export class flog extends Component {
    // ---------- 浮动动画参数 ----------
    @property({ tooltip: "浮动高度" })
    floatHeight: number = 35;

    floatDuration: number = 3;

    // ---------- 闪烁效果参数 ----------
    @property(Material)
    public sharedMaterial: Material | null = null;

    public flashMode: FlashMode = FlashMode.SUSTAIN;

    public totalDuration: number = 3.0;

    @property(Number)
    public maxEmissionPower: number = 0.3;

    // ---------- 内部状态 ----------
    materialInstance: Material[] = [];
    private _timeAccumulator: number = 0;
    private _originalPos: Vec3 = new Vec3();
    
    // 暂停状态变量
    private _isPaused: boolean = false;
    private _pausedPosition: Vec3 = new Vec3();
    private _pausedEmissionPower: number = 0;
    private _pausedFloatTime: number = 0;
    private _currentTween: any = null;

    onLoad() {
        Vec3.copy(this._originalPos, this.node.position);
    }

    start() {
        setTimeout(() => {
            this.setMaterialToSprite("m");
            this.initFloating();
        }, 300);
    }

    update(deltaTime: number) {
        if (this._isPaused || this.materialInstance.length == 0) { 
            return;
        }

        this._timeAccumulator += deltaTime;
        this._timeAccumulator %= this.totalDuration;
        const t = this._timeAccumulator / this.totalDuration;

        let emissionPower = 0.0;
        switch (this.flashMode) {
            case FlashMode.STEADY:
                emissionPower = this.maxEmissionPower;
                break;
            case FlashMode.SUSTAIN:
                emissionPower = this.calculateSustain(t);
                break;
            case FlashMode.HEARTBEAT:
                emissionPower = this.calculateHeartbeat(t);
                break;
        }

        this.setEmissionPower(emissionPower);
    }

    // ---------- 浮动动画 ----------
    private initFloating() {
        if (this.floatHeight != 0) {
            Vec3.copy(this._originalPos, this.node.position);
            this.startFloating();
        }
    }

    private startFloating() {
      if (!this._isPaused) {
        
      
      
      
        if (this._currentTween) {
            this._currentTween.stop();
        }

        this._currentTween = tween(this.node)
            .to(this.floatDuration / 2, 
                { position: new Vec3(this._originalPos.x, this._originalPos.y + this.floatHeight, this._originalPos.z) }, 
                { easing: 'cubicOut' }
            )
            .to(this.floatDuration / 2, 
                { position: new Vec3(this._originalPos.x, this._originalPos.y, this._originalPos.z) }, 
                { easing: 'cubicIn' }
            )
            .call(() => this.startFloating())
            .start();}
    }

    // ---------- 停止与恢复方法 ----------
    stop() {
        // 记录当前状态
        this._isPaused = true;
        Vec3.copy(this._pausedPosition, this.node.position);
        this._pausedEmissionPower = this.getCurrentEmissionPower();
        this._pausedFloatTime = this._timeAccumulator;
        
        // 停止浮动动画
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = null;
        }
        
        // 回到默认位置
        tween(this.node)
            .to(0.5, { position: this._originalPos })
            .call(() => {
                // 设置材质为默认状态
                this.setEmissionPower(0);
            })
            .start();
            console.log( this.node.name+":"+this._isPaused )
    }
    
    resume() {
        if (!this._isPaused) return;
        
        this._isPaused = false;
        
        // 恢复位置
        if (!Vec3.equals(this.node.position, this._pausedPosition)) {
            tween(this.node)
                .to(0.5, { position: this._pausedPosition })
                .call(() => {
                    // 恢复浮动动画
                    this.startFloating();
                    
                    // 恢复闪烁状态
                    this._timeAccumulator = this._pausedFloatTime;
                    this.setEmissionPower(this._pausedEmissionPower);
                })
                .start();
        } else {
            // 如果已经在暂停位置，直接恢复
            this.startFloating();
            this._timeAccumulator = this._pausedFloatTime;
            this.setEmissionPower(this._pausedEmissionPower);
        }
    }
    
    // ---------- 辅助方法 ----------
    private getCurrentEmissionPower(): number {
        if (this.materialInstance.length === 0) return 0;
        
        const material = this.materialInstance[0];
        if (material && material instanceof Material) {
            const pass = material.passes[0];
            const handle = pass.getHandle("emissionPower");
            
            // 使用 Vec4 接收结果
            const out = new Vec4();
            pass.getUniform(handle, out);
            
            // 返回 x 分量（标量值）
            return out.x;
        }
        return 0;
    }
    
    private setEmissionPower(power: number) {
        for (const material of this.materialInstance) {
            if (material && material instanceof Material) {
                const pass = material.passes[0];
                pass.setUniform(pass.getHandle("emissionPower"), power);
            }
        }
    }

    // ---------- 闪烁效果计算 ----------
    private calculateSteady(t: number): number {
        return this.maxEmissionPower;
    }

    private calculateSustain(t: number): number {
        const riseTime = 0.45;
        const sustainTime = 0.1;
        const fallTime = 0.45;

        if (t < riseTime) {
            return this.maxEmissionPower * (t / riseTime);
        } else if (t < riseTime + sustainTime) {
            return this.maxEmissionPower;
        } else {
            return this.maxEmissionPower * (1 - (t - riseTime - sustainTime) / fallTime);
        }
    }

    private calculateHeartbeat(t: number): number {
        const firstPeakTime = 0.3;
        const secondPeakTime = 0.7;
        const decayRate = 0.5;

        const firstPeak = Math.exp(-10 * Math.pow(t - firstPeakTime, 2));
        const secondPeak = Math.exp(-10 * Math.pow(t - secondPeakTime, 2));
        
        return this.maxEmissionPower * (firstPeak + decayRate * secondPeak);
    }

    setMaterialToSprite(materialName: string) {
        const targetSpriteNode = this.node;
        if (!targetSpriteNode) return;
      
        const targetSprite = this.node.getComponent(Sprite);
        if (!targetSprite) return;
      
        let material;
        if (find("Canvas/DituManager/New Node/AnimalManager")) {
            material = find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).NB;
        } else {
            material = this.node.getComponent(Sprite).customMaterial;
        }
  
        if (material) {
            const newMaterial = new Material();
            newMaterial.initialize({ effectName: material.effectName });
            newMaterial.copy(material);
            targetSprite.customMaterial = newMaterial;
            this.materialInstance.push(targetSprite.customMaterial);
        }

        if (this.node.getComponent(gif1)) {
            this.node.getComponent(gif1).Cget();
        }
    }
}
