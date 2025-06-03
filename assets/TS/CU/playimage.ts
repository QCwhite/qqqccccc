import { _decorator, SpriteAtlas, Sprite, color, Label, find, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import  gif1  from "../BASE/spineANDgif/gif";
import Choose from "./choose";
import GeZiManager from '../Manager/GeZiManager';
  

@ccclass('Playimage')
export default class playimage extends ComponentBase {
    sd: boolean = false;
    @property(CCFloat)
    p: number|null = null;

    @property(SpriteAtlas)
    Atlas: SpriteAtlas = null; // 通用图集

    start() {
        //this.node.parent.children[2].getComponent(Sprite).color = color(175, 175, 175);


       // this.node.parent.children[2].getComponent(gif).setMaterial(0,this.node.parent.children[2].getComponent(gif).getMaterials()[0])
        find("Canvas/Main Camera/background/juese background").getComponent(Choose).pi.push(this);
    }

    changeui(num: string) {
        this.node.getComponent(Sprite).spriteFrame=find("Canvas/Main Camera/background/juese background").getComponent(Choose).getSTOux(num)
      
      this.node.parent.children[1].getComponent(Label).string =GeZiManager.skillDataMap[num].name
        // this.node.parent.children[2].color = color(255, 255, 255);
    }

    dao() {
    //    console.log("ad");
        if (this.p>0) {
            const targetSprite = this.node.parent.children[2].getComponent(Sprite);
     this.node.parent.children[1].getComponent(Label).string ="选择中...";
            if (targetSprite) {
                // 获取材质数组
                const materials = targetSprite.getSharedMaterial(1)
            
          
                //    targetSprite.setSharedMaterial(materials, 0);
                } else {
                   // console.error('材质数量不足，无法设置');
                }
            } else {
               // console.error('未找到 Sprite 组件');
            }
        }
     /*   this.schedule(() => {
            if (!this.sd) {
                tween(this.node.parent.children[2]).to(0.4, { color: color(255, 255, 255) }).start();
                setTimeout(() => {
                    tween(this.node.parent.children[2]).to(0.4, { color: color(175, 175, 175) }).start();
                }, 400);
            } else {
                tween(this.node.parent.children[2]).stop();
                tween(this.node.parent.children[2]).to(0.4, { color: color(255, 255, 255) }).start();
            }
        }, 1);*/
    

    qd() {
    if (this.p>0) {
      //  console.log(this.name)
       // const defaultMaterial = this.node.parent.children[2].getComponent(Sprite).getSharedMaterial(0)
       // this.node.parent.children[2].getComponent(Sprite).setSharedMaterial(defaultMaterial, 0)
    }    
}
}