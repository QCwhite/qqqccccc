// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label, Vec3, v3, Event, find, RichText, tween,Node, EventMouse, UITransform, UIOpacity, Input } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import ComponentBase from "../../BASE/ComponentBase";
import realThing from "../../BASE/realThing";
import  gif1  from "../../BASE/spineANDgif/gif";
import SXX from "../../Scharacter/SXX";
import mouse from "../mouse";
import { JNFU } from "./JNFU";
import shopM from '../shop/ShopM';
import Shops from '../shop/shops';
import { resources, JsonAsset } from 'cc';
import { AudioManager } from '../../BASE/music';
interface SkillData {
    id: string; // 技能ID
    name: string; // 技能名称
    description: string; // 技能介绍
    jieS: string; // 解锁条件
    effect:string
}
@ccclass('FDUIs')
export default class FDUIs extends ComponentBase {


   
    
        target: realThing = null;
        sarget: SXX = null;
        n: number = 0;
        TK: string[] = ["EQM", "ZDM", "JNM"];
        Tname: Label = null;
        TKP: Vec3[] = [new Vec3(0, -230,1), new Vec3(0, -240,1), new Vec3(0, -214,1)];
        TtX: gif1 = null;

        skillDataMap: { [key: string]: SkillData } = {};

    protected onLoad(): void {

        resources.load("EQW", JsonAsset, (err: Error, data: JsonAsset) => {
            if (err) {
                console.error("Failed to load skills data:", err);
                return;
            }
        
            // 确保 data.json 是一个有效的 JSON 数组
            let skillList: SkillData[] = data.json;
        
            // 检查 skillList 是否有效
            if (!Array.isArray(skillList)) {
                console.error("Invalid skill data format:", skillList);
                return;
            }
        
            // 解析 JSON 数据并存储到字典中
            this.skillDataMap = {}; // 确保 skillDataMap 是一个空对象
            skillList.forEach((skill: SkillData) => {
                this.skillDataMap[skill.id] = skill;
            });
        
            // 现在可以访问 this.skillDataMap["A110"]
            console.log(this.skillDataMap["A110"]);
        
            console.log("Skills data loaded successfully.");
        });
    
      
    }
    
        start() {
            // 注册鼠标点击事件
           this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        }
    
        X() {
            this.node.active = false;
            this.node.setScale(1,1)
            this.node.position = this.target.node.position;
        }
    
        onMouseDown(event: EventMouse) {
            // 获取点击位置的世界坐标
            const worldPoint = event.getLocation()

            // 获取节点的世界坐标系下的包围盒
            const boundingBox = this.node.getComponent(UITransform).getBoundingBoxToWorld();
    
            // 判断点击位置是否在节点的边界内
            if (event.getButton() === EventMouse.BUTTON_LEFT && !boundingBox.contains(worldPoint)) {
                // 左键点击事件，设置标签并放大节点
   

                find("Canvas").getComponent(mouse).n += 1;
                this.node.getComponent(UITransform).priority += find("Canvas").getComponent(mouse).n;
            } else if (event.getButton() === EventMouse.BUTTON_RIGHT) {
                // 右键点击事件，只放大节点  
         
                find("Canvas").getComponent(mouse).n += 1;
                this.node.getComponent(UITransform).priority += find("Canvas").getComponent(mouse).n;
                this.node.scale = this.node.scale.multiplyScalar(1.2);
            }
            event.propagationStopped = true; // 阻止事件冒泡
        }
    
        toL() {
            this.node.getChildByName(this.TK[this.n]).active = false;
            this.node.getChildByName(this.TK[this.n]).getComponent(UIOpacity).opacity = 0;
    
            if (this.n == 0) {
                this.n = 2;
            } else {
                this.n -= 1;
            }
    
            for (let index = 0; index <= 2; index++) {
                if (this.n == index) {
                    this.node.getChildByName("star").children[index].active = true;
                } else {
                    this.node.getChildByName("star").children[index].active = false;
                }
            }
    
            this.node.getChildByName(this.TK[this.n]).active = true;
            this.J();
             AudioManager.instance.ZJP("ui",11,{volume:0.6})
        }
    
        toR() {
            this.node.getChildByName(this.TK[this.n]).active = false;
            this.node.getChildByName(this.TK[this.n]).getComponent(UIOpacity).opacity = 0;
    
            if (this.n == 2) {
                this.n = 0;
            } else {
                this.n += 1;
            }
    
            for (let index = 0; index <= 2; index++) {
                if (this.n == index) {
                    this.node.getChildByName("star").children[index].active = true;
                } else {
                    this.node.getChildByName("star").children[index].active = false;
                }
            }
    
            this.node.getChildByName(this.TK[this.n]).active = true;
            this.J();
                  AudioManager.instance.ZJP("ui",11,{volume:0.6})
        }
    
        J() {
            if (this.TK[this.n] == "ZDM") {
                this.ZDSX();
            }
            if (this.TK[this.n] == "JNM") {
                // this.ZDSX();
            }
            if (this.TK[this.n] == "EQM") {
                // this.ZDSX();
                this.EQSX()
            }
    
            let o = this.node.getChildByName(this.TK[this.n]);
            const k = this.TKP[this.n];
            tween(o.getComponent(UIOpacity))
            .to(0.2, { opacity: 255 }) .start();
            tween(o)
           
                .to(0.1, { position: new Vec3(k.x + 5, k.y + 5,1) }, { easing: "sineInOut" })
                .to(0.1, { position: new Vec3(k.x - 5, k.y - 5,1) }, { easing: "sineInOut" })
                .to(0.1, { position: k }, { easing: "sineInOut" })
                .start();
    
            this.showAndShakeChildren2(o, 0.3, 7);

            console.log(o.getComponent(UIOpacity).opacity)
        }
    
        ZDSX() {
            if (this.target instanceof Character) {
                for (let a of this.node.getChildByName("ZDM").children) {
                    a.children[0].getComponent(RichText).string = this.target.getZDSX(a.name);
                }
            }
        }
    
        JNSX() {
            if (this.target instanceof Character) {
                for (let a of this.node.getChildByName("JNM").children) {
                    // a.children[0].getComponent(RichText).string = this.target.getZDSX(a.name);


                    
                }
                this.node.getChildByName("JNJSB").getChildByName("JNFU").getComponent(JNFU).generateRichTextFromJieS("2xFU3+FU1/12xRO");
            }
        }
    

        EQSX() {
            let o=find("Canvas/DituManager/New Node/AnimalManager")
          
            if (this.target instanceof Character) {
                this.node.getChildByName("EQM").getChildByName("New Node").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.weapon.TheNumber,"",0)
               this.node.getChildByName("EQM").getChildByName("AXX").getChildByName("EQ").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.weapon.TheNumber,"",0)
               this.node.getChildByName("EQM").getChildByName("BXX").getChildByName("EQ").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.body.TheNumber,"",0)
               this.node.getChildByName("EQM").getChildByName("CXX").getChildByName("EQ").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.shose.TheNumber,"",0)
               this.node.getChildByName("EQM").getChildByName("DXX").getChildByName("EQ").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.accessory.TheNumber,"",0)
               this.node.getChildByName("EQM").getChildByName("WQFW").getChildByName("New Node").getComponent(gif1).changeF(this.target.weapon.RN,1)
               this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=this.skillDataMap[this.target.weapon.TheNumber]?.name;
               this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=this.skillDataMap[this.target.weapon.TheNumber]?.effect;
             
              // this.node.getChildByName("EQM").getChildByName("JNJSB").getChildByName("JNFU").getComponent(JNFU).generateRichTextFromJieS("2xFU3+FU1/12xRO");
            }
        }








        JND(n: number) {
            this.node.getChildByName("JNJSB").getChildByName("JNFU").getComponent(RichText).string =
                this.node.getChildByName("JNJSB").getChildByName("JNFU").getComponent(JNFU).skillDataMap[this.sarget.JX1[n]].id;
            this.node.getChildByName("JNJSB").getChildByName("des").getComponent(RichText).string =
                this.node.getChildByName("JNJSB").getChildByName("JNFU").getComponent(JNFU).skillDataMap[this.sarget.JX1[n]].description;
        }


dA(){ 
    let o=find("Canvas/DituManager/New Node/AnimalManager")
    this.node.getChildByName("EQM").getChildByName("New Node").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.weapon.TheNumber,"",0)
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=this.skillDataMap[this.target.weapon.TheNumber]?.name;
               this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=this.skillDataMap[this.target.weapon.TheNumber]?.effect; 
}
dB(){
    let o=find("Canvas/DituManager/New Node/AnimalManager")
    this.node.getChildByName("EQM").getChildByName("New Node").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.body.TheNumber,"",0)
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=this.skillDataMap[this.target.body.TheNumber]?.name;
               this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=this.skillDataMap[this.target.body.TheNumber]?.effect; 
}

dC(){
    let o=find("Canvas/DituManager/New Node/AnimalManager")
    this.node.getChildByName("EQM").getChildByName("New Node").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.shose.TheNumber,"",0)
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=this.skillDataMap[this.target.shose.TheNumber]?.name;
               this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=this.skillDataMap[this.target.shose.TheNumber]?.effect; 
}
dD(){
    let o=find("Canvas/DituManager/New Node/AnimalManager")
    this.node.getChildByName("EQM").getChildByName("New Node").getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,this.target.accessory.TheNumber,"",0)
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=this.skillDataMap[this.target.accessory.TheNumber]?.name;
               this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=this.skillDataMap[this.target.accessory.TheNumber]?.effect; 
}

    }