// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, color, find, math, Node, Quat, sp, Sprite, tween, UIOpacity, Vec3 ,Animation} from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import ComponentBase from "../BASE/ComponentBase";
import Qin from "../BASE/qin";
import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import  gif1  from "../BASE/spineANDgif/gif";
import AnimalManager from "../Manager/AnimalManager";
import turn from "../game/time/turn";
import { UIOPACITY } from '../../../extensions/plugin-import-2x/creator/components/UIOpacity';
import { v3 } from 'cc';
import GeZiManager from '../Manager/GeZiManager';
import SXX from '../Scharacter/SXX';
import { SubtitleManager } from '../UIS/baom';

@ccclass('DITUManager')
export default class DITUManager extends ComponentBase {
dorn:string="day"
k:Node | null=null;
AM:Node | null=null;
 SKYrn: number[] = [];
//// 序列数字
SKYs: number = 0;
onLoad(): void {
//   this.water2.timeArray=[63,63,63,63,63,63,63,63,63,63]
        turn.Roo.push(this)
        this.k=find("Canvas/thingsManager/nightL")
        this.AM= find("Canvas/DituManager/New Node/AnimalManager")
//   this.changeDirection(6);
//设置动画结束监听
        this.node.children[0].children[0].getComponent(sp.Skeleton).setCompleteListener((trackEntry:sp.spine.TrackEntry) => {
////清空监听
//// this.spine2.setCompleteListener(null);
////console.log(trackEntry.animation.name+"动画播放完毕！");
        this.getRj()

        });


}
start() {
//    初始化随机数组
        this.generateRandomArray();
     
}
//// 生成随机数组的方法
private generateRandomArray(): void {
        this.SKYrn = [];
        const onesAndTwosCount = Math.floor(Math.random() * 3) + 3; 3
        for (let i = 0; i < onesAndTwosCount; i++) {
        this.SKYrn.push(Math.random() > 0.5 ? 1 : 2);
        }
//    确保至少有一个1和一个2
        if (this.SKYrn.filter(num => num === 1).length === 0) {
        this.SKYrn.push(1);
        }
        if (this.SKYrn.filter(num => num === 2).length === 0) {
        this.SKYrn.push(2);
        }
//    其余填充0
        while (this.SKYrn.length < 20) {
        this.SKYrn.push(0);
        }
//    打乱数组顺序
        for (let i = this.SKYrn.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.SKYrn[i], this.SKYrn[j]] = [this.SKYrn[j], this.SKYrn[i]];
        }
        return
}
//// 触发方法
public getRj(): void {
        switch (this.SKYrn[this.SKYs]) {
        case 0:
        this.methodForZero();
        break;
        case 1:
        this.methodForOne();
        break;
        case 2:
        this.methodForTwo();
        break;
        default:
        this.SKYs = 0; 
        break;
        }
        this.SKYs++;
        if ( this.SKYs==20) {
        this.SKYs=0
        }
}
//// 为0触发的方法
private methodForZero(): void {
        if (turn.DorN=="day") {
        this.node.children[0].children[0].getComponent(sp.Skeleton).animation="day"
        }else{ this.node.children[0].children[0].getComponent(sp.Skeleton).animation="night"}
}
//// 为1触发的方法
private methodForOne(): void {
        if (turn.DorN=="day") {
        this.node.children[0].children[0].getComponent(sp.Skeleton).animation="day1"
        }else{ this.node.children[0].children[0].getComponent(sp.Skeleton).animation="night1"}
}
//// 为2触发的方法
private methodForTwo(): void {
        if (turn.DorN=="day") {
        this.node.children[0].children[0].getComponent(sp.Skeleton).animation="day2"
        }else{ this.node.children[0].children[0].getComponent(sp.Skeleton).animation="night2"}
}
roundPass(): void {



if (turn.round%12==6) {
        SubtitleManager.show(
                {
                    bgSprite: "Yellow",
                    image1:null,
                    text1: "太阳要下山了，连哥布林的商店也要关门了",
                    image2: null,
                    text2: "",
                    duration: 3
                })  
}
if (turn.round%12==12) {
        SubtitleManager.show(
                {
                    bgSprite: "Yellow",
                    image1:null,
                    text1: "天就要亮了，夜猫子也要睡觉了",
                    image2: null,
                    text2: "",
                    duration: 3
                })  
}





















        if (turn.DorN!=this.dorn) {
        this.dorn=turn.DorN
        if( this.dorn=="day"){
                
                
                SubtitleManager.show(
                                    {
                                        bgSprite: "Yellow",
                                        image1:null,
                                        text1: "太阳要晒屁股了",
                                        image2: null,
                                        text2: "",
                                        duration: 3
                                    })
                
                
                
                this.node.getComponent(Animation).play("today");
        this.node.children[0].children[0].getComponent(sp.Skeleton).animation="change to day"



find("Canvas/DituManager/New Node/AnimalManager/QP").getComponent(Sprite).color=color(255,255,255,255)
find("Canvas/DituManager/New Node/map").getComponent(Sprite).color=color(255,255,255,255)

find("Canvas/DituManager/New Node/map4").getComponent(sp.Skeleton).color=color(255,255,255,255)
find("Canvas/DituManager/New Node/map2").getComponent(sp.Skeleton).color=color(255,255,255,255)
find("Canvas/DituManager/New Node/map8").getComponent(sp.Skeleton).color=color(255,255,255,255)


        for(let a of find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).YuanGong){
                if (a.node.getComponent(Sprite)!=null) {
                        
                
                a.node.getComponent(Sprite).color=color(255,255,255)}}
        tween(this.k.getComponent(UIOpacity)).to(3, { opacity:0}).start();



              for(let a of find("Canvas/DituManager/New Node/AnimalManager").children){
if ( a.getComponent(Sprite)!=null) {
        if (a.getComponent(Qin)==null) {
              //  a.getComponent(Sprite).color=color(200,190,239)
}
     

        if (a.getComponent(Character)==null) {
        for(let c of a.children){if(c.getComponent(Sprite)!=null){c.getComponent(Sprite).color=color(255,255,255)}}
        } else{
        for(let c of a.children){if (c.getComponent(sp.Skeleton)!=null) {


        c.getComponent(sp.Skeleton).color=color(255,255,255)}


        }}
        }
        }

        }












        else{
                
                
                SubtitleManager.show(
                        {
                            bgSprite: "Yellow",
                            image1:null,
                            text1: "夜幕降临了，小朋友要记得回家哦",
                            image2: null,
                            text2: "",
                            duration: 3
                        })
                
                
                
                
                
                
                
                this.node.getComponent(Animation).play("tonight");


        for(let a of find("Canvas/DituManager/New Node/AnimalManager").children){
if ( a.getComponent(Sprite)!=null) {
        if (a.getComponent(Qin)==null) {
                a.getComponent(Sprite).color=color(200,190,239)
}
     

        if (a.getComponent(Character)==null) {
        for(let c of a.children){if(c.getComponent(Sprite)!=null){c.getComponent(Sprite).color=color(200,190,239)}}
        } else{
        for(let c of a.children){if (c.getComponent(sp.Skeleton)!=null) {


        c.getComponent(sp.Skeleton).color=color(200,190,239)}


        }}
        }
        }




        tween(this.k.getComponent(UIOpacity)).to(3, { opacity:255}).start();
        this.node.children[0].children[0].getComponent(sp.Skeleton).animation="change to night"

find("Canvas/DituManager/New Node/map").getComponent(Sprite).color=color(200,190,239,255)
find("Canvas/DituManager/New Node/map4").getComponent(sp.Skeleton).color=color(200,190,239,255)
find("Canvas/DituManager/New Node/map4").getComponent(sp.Skeleton).color=color(200,190,239,255)
find("Canvas/DituManager/New Node/map2").getComponent(sp.Skeleton).color=color(200,190,239,255)
find("Canvas/DituManager/New Node/map8").getComponent(sp.Skeleton).color=color(200,190,239,255)
}
        }

        let a= find("Canvas/DituManager/New Node/2 copy")
        tween(a)
  .to(0.3, { eulerAngles: v3(0, 0, a.eulerAngles.z -30) })
  .start();



}








}






