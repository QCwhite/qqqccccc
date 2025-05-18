// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, tween, UIOpacity, Vec2 } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";

import MessageCenter from "../../Message/MessageCenter";
import turn from "../time/turn";
import KHD2 from '../../Message/KHD2';

@ccclass('EatPfish')
export default class Efish extends ComponentBase {
        ZB:number=63;
        rxturn:number=4;
        
        
        start(): void {
         turn.YuanGong.push(this) 
        
        }
          
        
        turnPass(): void {
         
        if(this.rxturn==0){this.node.getComponent(UIOpacity).opacity=255;this.eat();this.sw()}else{this.rxturn-=1;}
        
        
        }
        
        
        sw(){if(this.ZB>57){this.ZB-=1}else{if(this.ZB==57){this.ZB-=8}else if(this.ZB==49){this.node.getComponent(UIOpacity).opacity=0;this.ZB=63;
        if(KHD2.PT.includes(1)){
         
          let random = Math.random();  // 生成一个0到1之间的随机数
        
          let  ra = Math.floor(random * 4) + 2;  // 将随机数映射到2到5之间的  
        
            this.rxturn=ra
            MessageCenter.MakeGMessage("TU",[1],ra,1,"fish")
          
          }   }
        }
        this.moveto(0.5,this.ZB);
        this.eat();
        }
        
        
        eat(){MessageCenter.MakeSHMessage("AM",[this.ZB],1,null,"wuli")}
        
        
        
        
        moveto(time: number, ZB: number) {
        
            let point;
            switch (ZB) {
              case 0: point = new Vec2(0, 0);
        
                break;
        
        
              case 1: point = new Vec2(300, 65);
                break;
              case 2: point = new Vec2(634, 65);
                break;
              case 3: point = new Vec2(906, 65);
                break;
              case 4: point = new Vec2(1188, 65);
                break;
              case 5: point = new Vec2(1485, 65);
                break;
              case 6: point = new Vec2(1774, 65);
                break;
              case 7: point = new Vec2(2058, 65);
                break;
              case 8: point = new Vec2(2228, 65);
                break;
        
        
        
              case 9: point = new Vec2(445, 270);
                break;
              case 10: point = new Vec2(684, 270); console.log("10");
                break;
              case 11: point = new Vec2(950, 270);
                break;
              case 12: point = new Vec2(1212, 270);
                break;
              case 13: point = new Vec2(1465, 270);
                break;
              case 14: point = new Vec2(1724, 270);
                break;
              case 15: point = new Vec2(1983, 270);
                break;
              case 16: point = new Vec2(2203, 270);
                break;
        
        
              case 17: point = new Vec2(445, 436);
                break;
              case 18: point = new Vec2(684, 436);
                break;
              case 19: point = new Vec2(950, 436);
                break;
              case 20: point = new Vec2(1212, 436);
                break;
              case 21: point = new Vec2(1465, 436);
                break;
              case 22: point = new Vec2(1724, 436);
                break;
              case 23: point = new Vec2(1983, 436);
                break;
              case 24: point = new Vec2(2203, 436);
                break;
        
        
        
              case 25: point = new Vec2(572, 592);
                break;
              case 26: point = new Vec2(792, 592);
                break;
              case 27: point = new Vec2(1008, 592);
                break;
              case 28: point = new Vec2(1229, 592);
                break;
              case 29: point = new Vec2(1439, 592);
                break;
              case 30: point = new Vec2(1660, 592);
                break;
              case 31: point = new Vec2(1886, 592);
                break;
              case 32: point = new Vec2(2083, 592);
                break;
        
        
        
        
        
        
              case 33: point = new Vec2(654, 740);
                break;
              case 34: point = new Vec2(843, 740);
                break;
              case 35: point = new Vec2(1039, 740);
                break;
              case 36: point = new Vec2(1241, 740);
                break;
              case 37: point = new Vec2(1431, 740);
                break;
              case 38: point = new Vec2(1630, 740);
                break;
              case 39: point = new Vec2(1831, 740);
                break;
              case 40: point = new Vec2(2018, 740);
                break;
        
        
        
        
        
              case 41: point = new Vec2(719, 883);
                break;
              case 42: point = new Vec2(888, 883);
                break;
              case 43: point = new Vec2(1067, 883);
                break;
              case 44: point = new Vec2(1246, 883);
                break;
              case 45: point = new Vec2(1423, 883);
                break;
              case 46: point = new Vec2(1600, 883);
                break;
              case 47: point = new Vec2(1784, 883);
                break;
              case 48: point = new Vec2(1958, 883);
                break;
        
        
        
        
              case 49: point = new Vec2(765, 995);
                break;
              case 50: point = new Vec2(924, 995);
                break;
              case 51: point = new Vec2(1088, 995);
                break;
              case 52: point = new Vec2(1252, 995);
                break;
              case 53: point = new Vec2(1412, 995);
                break;
              case 54: point = new Vec2(1578, 995);
                break;
              case 55: point = new Vec2(1742, 995);
                break;
              case 56: point = new Vec2(1900, 995);
                break;
        
        
        
              case 57: point = new Vec2(815, 1080);
                break;
              case 58: point = new Vec2(956, 1096);
                break;
              case 59: point = new Vec2(1107, 1096);
                break;
              case 60: point = new Vec2(1260, 1096);
                break;
              case 61: point = new Vec2(1410, 1096);
                break;
              case 62: point = new Vec2(1562, 1096);
                break;
              case 63: point = new Vec2(1708, 1096);
                break;
              case 64: point = new Vec2(1848, 1096);
                break;
              case 65:
                break;
        
        
        
        
        
        
              default: point = new Vec2(300, 65);
                break;
            }
        
        
        
        
            tween(this.node)
              .to(time, { position: point })
              .start();
          }//在time秒内把物体移动到坐标对应的实际位置
        
        
        }
        