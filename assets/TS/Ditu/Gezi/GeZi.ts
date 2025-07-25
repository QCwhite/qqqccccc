// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Node, color, Button, Sprite, UIOpacity } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import state from "../../game/time/state";
import GeZiManager from "../../Manager/GeZiManager";
import { Message } from "../../Message/Message";
import { Color } from 'cc';
import gif1 from '../../BASE/spineANDgif/gif';
import label from '../../UIS/label';
import { Label } from 'cc';


@ccclass('GeZi')
export default class GeZi extends ComponentBase {
 
        @property
        ZB: number = 0;
    
        @property
        X: number = 0;
    
        @property
        Y: number = 0;
    
        @property
        DiXing: string = "grass";
    ZT:string=""
        onLoad() {
            GeZiManager.YuanGong.push(this);
        }
    
        // 设置格子颜色和状态
        Kpuper() { this.setColor(color(255, 148, 255), false, 255); }
        puper() { this.setColor(color(255, 48, 255),  true, 155); }
        blue() { this.setColor(color(48, 48, 255), false, 155); }
        red() { this.setColor(color(255, 12, 12), false, 155); GeZiManager.kxg += 1; }
        green() { this.setColor(color(54, 231, 158), true, 155); }
        black() { this.setColor(color(0, 0, 0), false, 155); GeZiManager.kxg += 1; }
        null() {

this.ToBC(99,null,0,0,0,false,"")
 this.setColor(null, false, 0); 
            
        }
    



cto(n:number){

switch (n) {
    case 1:this.red()
        
        break;
        case 0.5:this.puper()
        
        break;
        case 0://this.green()
        
        break;
    default:this.null()
        break;
}


}











        // 设置颜色、按钮状态和透明度
        setColor(colorVal: any, enabled: boolean, opacity: number) {
            const sprite = this.node.getComponent(Sprite);
            const button = this.node.getComponent(Button);
            const uiOpacity = this.node.getComponent(UIOpacity);
    
            if (sprite && colorVal) sprite.color = colorVal;
            if (button) button.enabled = enabled;
            if (uiOpacity) uiOpacity.opacity = opacity;
        }
    
        // 判断距离并设置颜色
        getFar(dis: number) {
            const { x, y } = this.getCurrentPosition();
            if (Math.abs(x - this.X) + Math.abs(y - this.Y) >= dis) this.red();
            else this.green();
        }


        getFarH(dis: number) {
            const { x, y } = this.getCurrentPosition();
            if (Math.abs(x - this.X) + Math.abs(y - this.Y) >= dis){return false}
            else {return true}
        }
    
        // 判断距离并记录格子
        getFarIN(dis: number) {
            const { x, y } = this.getCurrentPosition();
            if (Math.abs(x - this.X) + Math.abs(y - this.Y) < dis) {
                GeZiManager.GeZis.push(this.ZB);
            }
        }
    
        // 获取当前棋子的位置
        getCurrentPosition() {
            const x = GeZiManager.GeZi % 8 === 0 ? 8 : GeZiManager.GeZi % 8;
            const y = Math.ceil(GeZiManager.GeZi / 8);
            return { x, y };
        }
    
        // 处理消息
        ReceiveMessage(message: Message) {
            switch (message.Content) {
                case "redBan":
                    this.handleBan(GeZiManager.blue, [2, 3, 4, 5], []);
                    break;
    
                case "blueBan":
                    this.handleBan(GeZiManager.red, [4, 5, 6, 7], []);
                    break;
    
                default:
                    if (message.Command[0] === 65&&message.Command.length==1) {
                        this.handleDefaultMessage(message);
                    }
                    if (message.Command.includes(this.ZB)) {
                        this.handleDefaultMessage(message);
                    }
                    break;
            }
        }
    
        // 处理 ban 逻辑
        handleBan(targetGroup: number[], defaultXS: number[], defaultYS: number[]) {
            let XS = [...defaultXS];
            let YS = [...defaultYS];
    
            for (let ZB of targetGroup) {
                const x = ZB % 8 === 0 ? 8 : ZB % 8;
                const y = Math.floor(ZB / 8) + 1;
                XS.push(x);
                YS.push(y);
            }
    
            if (XS.includes(this.X) || YS.includes(this.Y)) {
                this.red();
            }
    
            if (targetGroup === GeZiManager.blue && GeZiManager.red.includes(this.ZB)) {
                this.black();
            } else if (targetGroup === GeZiManager.red && GeZiManager.blue.includes(this.ZB)) {
                this.black();
            }
    
            GeZiManager.Gtree();
        }
    
        // 处理默认消息
        handleDefaultMessage(message: Message) {
            switch (message.Content) {
                case -1: this.red(); break;
                case 0: this.null(); break;
                case 1: this.green(); break;
                case 2: this.blue(); break;
                case 5: this.black(); break;
            }
        }


        out(){
            GeZiManager.shanchuALL(GeZiManager.GeZis,this.ZB)
            
            
            }





ToBC(p:number,color:Color,TN:number,Qi:number,HP:number,DJ:boolean,st:string){


this.setColor(color,DJ,255)


this.ZT=st
switch (p) {
    case 0:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(5,1)
        
        break;
 case 1:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(6,1)
        
        break;

         case 2:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(1,1)
        
        break;
         case 3:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(0,1)
        
        break;
         case 4:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(7,1)
        
        break;
         case 5:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(3,1)
        
        break;

         case 6:this.node.children[0].getChildByName("P").getComponent(gif1).changeF(5,1)
        
        break;
    default:this.node.children[0].getChildByName("P").getComponent(gif1).spriteFrame=null
        break;
}

switch (TN) {
    case 0:this.node.children[0].getChildByName("TN").getComponent(gif1).spriteFrame=null
        
        break;
 case 1:this.node.children[0].getChildByName("TN").getComponent(gif1).changeF(0,1)
        
        break;

         case 2:this.node.children[0].getChildByName("TN").getComponent(gif1).changeF(1,1)
        
        break;
         case 3:this.node.children[0].getChildByName("TN").getComponent(gif1).changeF(2,1)
        
        break;
         case 4:this.node.children[0].getChildByName("TN").getComponent(gif1).changeF(3,1)
        
        break;
         case 5:this.node.children[0].getChildByName("TN").getComponent(gif1).changeF(4,1)
        
        break;

         case 6:this.node.children[0].getChildByName("TN").getComponent(gif1).changeF(5,1)
        
        break;
    default:
        break;
}
switch (HP) {
    case 0:
     this.node.children[0].getChildByName("heart").active=false
    this.node.children[0].getChildByName("heart").children[0].getComponent(Label).string=""
        
        break;

    
        
    default:   this.node.children[0].getChildByName("heart").active=true
    this.node.children[0].getChildByName("heart").children[0].getComponent(Label).string=""+HP
        break;
}


switch (Qi) {
    case 0:
     this.node.children[0].getChildByName("Qi").active=false
    this.node.children[0].getChildByName("Qi").children[0].getComponent(Label).string=""
        
        break;

    
        
    default:   this.node.children[0].getChildByName("Qi").active=true
    this.node.children[0].getChildByName("Qi").children[0].getComponent(Label).string=""+Qi
        break;
}



}





    }