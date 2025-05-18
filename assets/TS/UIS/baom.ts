import { UIOpacity } from 'cc';
import { SpriteFrame } from 'cc';
import { _decorator, Component, Node, instantiate, Prefab, Sprite, Label, tween, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

// 报幕项数据接口
interface ISubtitleItem {
    bgSprite?:  string;   // 背景图资源
    image1?: SpriteFrame;    // 图1资源
    text1?: string;          // 文本1内容
    image2?: SpriteFrame;    // 图2资源
    text2?: string;          // 文本2内容
    duration?: number;       // 显示时长（秒）
}

@ccclass('SubtitleManager')
export class SubtitleManager extends Component {
    private static _instance: SubtitleManager = null!;
    private static queue: ISubtitleItem[] = [];
    private static isPlaying = false;

    @property({ type: Prefab })
    public subtitlePrefab: Prefab = null!;
    @property(SpriteFrame)
        red:SpriteFrame=null
        @property(SpriteFrame)
       blue:SpriteFrame=null
        @property(SpriteFrame)
        yellow:SpriteFrame=null
    onLoad() {
        if (!SubtitleManager._instance) {
            SubtitleManager._instance = this;
        }
    }

    // 添加报幕到队列（静态方法）
    public static show(item: ISubtitleItem): void {
        this.queue.push(item);
        this.checkQueue();
    }

    // 执行报幕队列
    private static checkQueue(): void {
        if (this.isPlaying || this.queue.length === 0) return;
        
        this.isPlaying = true;
        const item = this.queue.shift()!;
        this._instance.playSubtitle(item);
    }

    // 播放具体报幕
    private playSubtitle(item: ISubtitleItem): void {
        const node = instantiate(this.subtitlePrefab);
        this.node.addChild(node);

        // 获取组件引用
        const bg = node.getChildByName('bg')!.getComponent(Sprite)!;
        const content = node.getChildByName('content')!;
        const image1 = content.getChildByName('S1')!.children[0].getComponent(Sprite)!;
        const text1 = content.getChildByName('L1')!.getComponent(Label)!;
        const image2 = content.getChildByName('S2')!.children[0].getComponent(Sprite)!;
        const text2 = content.getChildByName('L2')!.getComponent(Label)!;

        // 设置内容
       switch (item.bgSprite) {
        case "Red":    if (item.bgSprite) bg.spriteFrame =this.red
            
            break;
            case "Yellow":    if (item.bgSprite) bg.spriteFrame =this.yellow
            
            break;
            case "Blue":    if (item.bgSprite) bg.spriteFrame =this.blue
            
            break;
        default: if (item.bgSprite) bg.spriteFrame =this.yellow
            break;
       } 

    
        if (item.image1) image1.spriteFrame = item.image1;
        if (item.text1) text1.string = item.text1;
        if (item.image2) image2.spriteFrame = item.image2;
        if (item.text2) text2.string = item.text2;

        // 入场动画
        content.setScale(v3(0.8, 0.8, 1));
        content.getComponent(UIOpacity).opacity = 0;
        
        tween(content.getComponent(UIOpacity))
            .to(0.3, { 
               
                opacity: 255 
            }, { easing: 'backOut' })
            .start();
            tween(content)
            .to(0.3, { 
                scale: Vec3.ONE, 
              
            }, { easing: 'backOut' })
            .start();
        // 自动关闭
        this.scheduleOnce(() => {
            tween(content.getComponent(UIOpacity))
                .to(0.6, { 
                   
                    opacity: 0 
                })
                .call(() => node.destroy())
                .start();

                tween(content)
                .to(0.6, { 
                    scale: v3(0.8, 0.8, 1),
                  
                })
                .call(() => node.destroy())
                .start();
                
            SubtitleManager.isPlaying = false;
            SubtitleManager.checkQueue();
        }, item.duration || 3);
    }
}
