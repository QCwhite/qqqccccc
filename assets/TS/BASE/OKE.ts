import { _decorator, Component, Sprite, UITransform,  } from 'cc';
import GeZiManager from '../Manager/GeZiManager';
const { ccclass, property, menu } = _decorator;

@ccclass('SpriteDisplayListener')
@menu('UI/SpriteDisplayListener')
export class SpriteDisplayListener extends Component {
    @property(Sprite)
    targetSprite: Sprite = null!;  // 需要监听的精灵组件

    @property({ tooltip: "检测间隔（毫秒）" })
    checkInterval: number = 16.6;  // 默认约60FPS

    @property({ tooltip: "超时时间（毫秒）" })
    timeout: number = 3000;

    private _isMonitoring: boolean = false;
    private _checkTimer: any = null;

  @property(Number)
    e: number = 0;




    onLoad() {
     //   if (!this.targetSprite) {
     //       this.targetSprite = this.node.getComponent(Sprite)
     //   }

        // 监听精灵帧变化
   //     this.targetSprite.node.on(Sprite.EventType.SPRITE_FRAME_CHANGED, this.OK, this);
        
        // 初始检测
      //  this.scheduleOnce(() => this.startMonitor());
    }

    startMonitor() {
        if (this._isMonitoring) return;
        this._isMonitoring = true;
        
        const startTime = Date.now();
        
        const check = () => {
            if (this.checkDisplayValid()) {
                this.stopMonitor();
                this.OK();
            } else if (Date.now() - startTime > this.timeout) {
                this.stopMonitor();
             //   console.warn('Sprite display timeout:', this.node.name);
            } else {
                this._checkTimer = setTimeout(check, this.checkInterval);
            }
        };

        check();
    }

    stopMonitor() {
        this._isMonitoring = false;
        if (this._checkTimer) {
            clearTimeout(this._checkTimer);
            this._checkTimer = null;
        }
    }

    private checkDisplayValid(): boolean {
        if (!this.targetSprite?.spriteFrame) return false;
        if (!this.node.activeInHierarchy) return false;

        const uiTrans = this.node.getComponent(UITransform);
        return uiTrans?.width > 1 && uiTrans?.height > 1;
    }

    // 需要用户实现的回调方法
    OK() {
     switch (this.e) {
    case 0:
        GeZiManager.E0 = true;
        break;
    case 1:
        GeZiManager.E1 = true;
        break;
    case 2:
        GeZiManager.E2 = true;
        break;
    case 3:
        GeZiManager.E3 = true;
        break;
    case 4:
        GeZiManager.E4 = true;
        break;
    case 5:
        GeZiManager.E5 = true;
        break;
    case 6:
        GeZiManager.E6 = true;
        break;
    case 7:
        GeZiManager.E7 = true;
        break;
    case 8:
        GeZiManager.E8 = true;
        break;
    case 9:
        GeZiManager.E9 = true;
        break;
    case 10:
        GeZiManager.E10 = true;
        break;
    case 11:
        GeZiManager.E11 = true;
        break;
    case 12:
        GeZiManager.E12 = true;
        break;
    case 13:
        GeZiManager.E13 = true;
        break;
    case 14:
       // GeZiManager.E14 = true;
        break;
    case 15:
      //  GeZiManager.E15 = true;
        break;
    default:
        // 可以添加默认处理逻辑
        break;
}
    }

    onDestroy() {
     //   this.stopMonitor();
        //this.targetSprite.node.off(Sprite.EventType.SPRITE_FRAME_CHANGED, this.startMonitor, this);
    }
}