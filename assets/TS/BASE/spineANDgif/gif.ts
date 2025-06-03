// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Sprite, SpriteAtlas, Color, Material, tween, Node, UIOpacity, MeshRenderer, resources,CCFloat  } from 'cc';
const { property, ccclass } = _decorator;
import { Vec3 } from 'cc';

import { find } from 'cc';
import AnimalManager from '../../Manager/AnimalManager';
@ccclass('gif1')
export default class gif1 extends Sprite {
    @property({ type: SpriteAtlas })
    atlas1: SpriteAtlas | null = null;

    @property({ type: SpriteAtlas })
    atlas2: SpriteAtlas | null = null;

    @property({ type: SpriteAtlas })
    atlas3: SpriteAtlas | null = null;


   

    @property(String)
    Bname: string = "";

    @property(Number)
    scX: number = 1;

    timeArray: number[] = [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70];

    kk: boolean = false;

    // 动画相关
    private currentIndex: number = 0; // 目前的帧序号
    private playing: boolean = false;
    private timer: number = 0;
    private frameIntervalTime: number[] = []; // 帧时长数组
    private startIndex: number = 0;
    private endIndex: number = 0;
    loop: number = 0; // 0: 停留在最后一帧, 1: 循环播放, 其他值: 正常播放
@property(Boolean)
ooo:false
    // 颜色相关
    @property({ type: Color, tooltip: "自发光颜色" })
    emissionColor: Color = Color.WHITE;

    @property({ type: Color, tooltip: "泛光颜色" })
    bloomColor: Color = new Color(255, 204, 128);

    @property({ 
        type: CCFloat,
        tooltip: "自发光强度",
        slide: true,
        min: 0,
        max: 1,
        step: 0.001
    })
    emissionPower: number = 1.0;

    @property({ 
        type: CCFloat,
        tooltip: "泛光强度",
        slide: true,
        min: 0,
        max: 1,
        step: 0.001
    })
    bloomIntensity: number = 1.0;

    @property({ 
        type: CCFloat,
        tooltip: "泛光采样半径",
        slide: true,
        min: 0,
        max: 1,
        step: 0.001
    })
    bloomRadius: number = 0.02;

    @property({ 
        type: CCFloat,
        tooltip: "亮度调节",
        slide: true,
        min: 0,
        max: 1,
        step: 0.001
    })
    brightness: number = 1.0;

    @property({ 
        type: CCFloat,
        tooltip: "饱和度调节",
        slide: true,
        min: 0,
        max: 1,
        step: 0.001
    })
    saturation: number = 1.0;

    @property({ 
        type: CCFloat,
        tooltip: "对比度调节",
        slide: true,
        min: 0,
        max: 1,
        step: 0.001
    })
    contrast: number = 1.0;

    start(): void {
       
     if(this.node.name!="shadow"){this.setMaterialToSprite("NB")}


if (this.ooo) {
    this.Cget()
}













    }

    setEmptyFrame() {
    
        this.spriteFrame = null;
    }

    moveToNextFrame(currentIndex: number, endIndex: number, m: number) {

        console.log(this.node.name)
        if (currentIndex <= endIndex) {
            this.scheduleOnce(() => {
                this.timer = 0;
                this.changeF(currentIndex, 1);
                this.moveToNextFrame(currentIndex + 1, endIndex, m);
            }, this.timeArray[currentIndex] / 1000);
        } else if (m==1) {
          console.log(this.node.worldPosition.z)
            this.setEmptyFrame();
        }
  
    }

    moveTolastFrame(currentIndex: number, endIndex: number, m: number) {
        if (currentIndex >= endIndex) {
            this.scheduleOnce(() => {
                this.timer = 0;
                this.changeF(currentIndex, 1);
                this.moveTolastFrame(currentIndex - 1, endIndex, m);
            }, this.timeArray[currentIndex] / 1000);
        } else if (m==1) {
            this.setEmptyFrame();
        }
    }

    loopF(currentIndex: number, endIndex: number, m: number) {
        if (this.kk) {
            if (currentIndex <= endIndex) {
                this.scheduleOnce(() => {
                    this.timer = 0;
                    this.changeF(currentIndex, 1);
                    this.loopF(currentIndex + 1, endIndex, m);
                }, this.timeArray[currentIndex] / 1000);
            } else {
                this.loopF(this.loop, endIndex, m);
            }
        }
    }

    stop() {
        this.kk = false;
    }

    changeF(index: number, tj: number) {
        let k;
        switch (tj) {
            case 1:
                k = this.atlas1;
                break;
            case 2:
                k = this.atlas2;
                break;
            case 3:
                k = this.atlas3;
                break;
            default:
                k = this.atlas1;
                break;
        }
        if (index >= 0 && k) {
            this.spriteFrame = k.getSpriteFrames()[index];
        } else {
           // console.log(this.node.worldPosition.z)
            this.setEmptyFrame();
        }
    }

    nodeBig(n: number, time: number) {


tween(this.node)
    .to(time, { scale: new Vec3(n * this.scX, n, 1) }) // 设置 scale 属性
    .start();
    }

    setBrightness(value?: number) {
        if (value === undefined || value === null) {
            this.brightness = 1.0;
        } else {
            this.brightness += value;
        }


        this.updateMaterialProperties()
    }


    updateMaterialProperties() {
        if (!this) {
           // console.error("Target Sprite component is not set.");
            return;
        }

        // 获取目标精灵的共享材质
        const sharedMaterial = this.customMaterial
        if (!sharedMaterial) {
           // console.error("Shared material not found on the target sprite.");
            return;
        }

        // 创建一个新的材质实例
        const newMaterial = new Material();
        newMaterial.copy(sharedMaterial); // 使用 copy 方法复制属性

        // 修改新材质实例的属性
        newMaterial.setProperty('brightness', this.brightness);
        newMaterial.setProperty('saturation', this.saturation);
        newMaterial.setProperty('contrast', this.contrast);
        // 将新的材质实例应用到目标精灵
        this.customMaterial = newMaterial;
    }


    setOpacity(value?: number) {
        if (value === undefined || value === null) {
            value = 255;
        } else {
            value = this.node.getComponent(UIOpacity).opacity + value;
        }
        this.node.getComponent(UIOpacity).opacity = value;
    }

    setsaturation(value?: number) {
        if (value === undefined || value === null) {
            this.saturation = 1.0;
        } else {
      this.saturation += value;
        }
      
     
     
            this.updateMaterialProperties()
        
    }

    setcontrast(value?: number) {
        if (value === undefined || value === null) {
            this.contrast = 1.0;
        } else {
            this.contrast += value;
        }
        this.updateMaterialProperties()
    }


    setMaterialToSprite( materialName: string) {
        // 查找目标精灵节点
        const targetSpriteNode = this.node
        if (!targetSpriteNode) {
          //  console.error(`未找到名称为 的节点`);
            return;
        }
      
        // 获取目标精灵组件
        const targetSprite =this.node.getComponent(Sprite);
        if (!targetSprite) {
          //  console.error(`节点 " 上未找到 Sprite 组件`);
            return;
        }
      
        // 加载材质资源

        let material
        
        if (find("Canvas/DituManager/New Node/AnimalManager")) {
            material=find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).NB
        }else{material=this.customMaterial}
        
  
    
  
            // 设置材质
if (material) {
    

          

            const newMaterial = new Material();
            newMaterial.initialize({ effectName: material.effectName }); // 显式初始化
            newMaterial.copy(material); // 复制属性
            targetSprite.customMaterial = newMaterial;
         
         
         
            
        //    console.log(`成功将材质 "${materialName}" 设置到节点 "" 的 Sprite 组件上`);


          //  material.setProperty('contrast', this.contrast);
        
           // material.setProperty('brightness', 1);
      
        }
      }



falsh(){

     this.customMaterial.setProperty('brightness', 1.5);
  setTimeout(() => {
      this.customMaterial.setProperty('brightness', this.brightness);
  },100); 




}


      Cget(){
        this.customMaterial.setProperty('brightness', this.brightness);
        this.customMaterial.setProperty('saturation', this.saturation);
        this.customMaterial.setProperty('contrast', this.contrast);
        this.customMaterial.setProperty('emissionPower', this.emissionPower);
        this.customMaterial.setProperty('bloomColor', this.bloomColor);
        this.customMaterial.setProperty('bloomIntensity', this.bloomIntensity);
        this.customMaterial.setProperty('bloomRadius', this.bloomRadius);
        this.customMaterial.setProperty('emissionColor', this.emissionColor);


      }
}