// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, v3, Component } from "cc";
import ComponentBase from "./ComponentBase";

const { ccclass, property } = _decorator;

@ccclass('MTX')
export default class MTX extends ComponentBase {
    // 修改属性声明为通用Component类型
    @property({ type: Component })
    XUQI: any = null;
    
    @property({ type: Component })
    CURE: any = null;
    
    @property({ type: Component })
    ICE: any = null;
    
    @property({ type: Component })
    TP: any = null;
    
    @property({ type: Component })
    THUNDER: any = null;
    
    @property({ type: Component })
    water: any = null;
    
    @property({ type: Component })
    Dun: any = null;
    
    @property({ type: Component })
    turn: any = null;
    
    @property({ type: Component })
    BA: any = null;
    
    @property({ type: Component })
    TN: any = null;
    
    @property({ type: Component })
    FuG: any = null;
    
    @property({ type: Component })
    FH: any = null;
    
    @property({ type: Component })
    KB: any = null;
    
    @property({ type: Component })
    Banan: any = null;
    
    @property({ type: Component })
    BZ1: any = null;
    
    @property({ type: Component })
    BZ2: any = null;
    
    @property({ type: Component })
    Tui: any = null;

    AT0_28: any = null;
    AT0_46: any = null;
    AT1_28: any = null;
    AT1_46: any = null;
    AT2k2: any = null;
    AT2k3: any = null;

    onLoad(): void {
        // 初始化所有组件引用
        this.initComponents();
    }

    // 初始化所有组件引用的方法
    private initComponents() {
        // 如果属性还未初始化，则尝试获取
  if (!this.BA) this.BA = this.getGifComponent("BA");
        if (!this.XUQI) this.XUQI = this.getGifComponent("xuqi");
        if (!this.ICE) this.ICE = this.getGifComponent("ice");
        if (!this.THUNDER) this.THUNDER = this.getGifComponent("TH");
        if (!this.Dun) this.Dun = this.getGifComponent("Dun");
        if (!this.CURE) this.CURE = this.getGifComponent("cure");
    if (!this.FuG) this.FuG = this.getGifComponent("FuG");
        if (!this.TN) this.TN = this.getGifComponent("TN");
    if (!this.turn) this.turn = this.getGifComponent("Turn");


        if (!this.FH) this.FH = this.getGifComponent("FH");
        if (!this.KB) this.KB = this.getGifComponent("KB");
        if (!this.Banan) this.Banan = this.getGifComponent("Banan");
        if (!this.BZ1) this.BZ1 = this.getGifComponent("BZ");
        if (!this.TP) this.TP = this.getGifComponent("TP");
        if (!this.Tui) this.Tui = this.getGifComponent("Tui");
        
        const atxNode = this.node.getChildByName("ATX");
        if (atxNode) {
            if (!this.AT0_28) this.AT0_28 = atxNode.getChildByName("AT0_28")?.getComponent("gif1");
            if (!this.AT0_46) this.AT0_46 = atxNode.getChildByName("AT0_46")?.getComponent("gif1");
            if (!this.AT2k2) this.AT2k2 = atxNode.getChildByName("AT2k2")?.getComponent("gif1");
            if (!this.AT2k3) this.AT2k3 = atxNode.getChildByName("AT2k3")?.getComponent("gif1");
        }
    }

    // 辅助方法：获取gif1组件
    private getGifComponent(path: string): any {
        const node = this.node.getChildByName(path);
        return node ? node.getComponent("gif1") : null;
    }

    start(): void {
        setTimeout(() => {
            // 确保所有组件都已初始化
            this.initComponents();
            
            // 设置timeArray（添加空检查）
            if (this.XUQI) this.XUQI.timeArray = [60,60,60,58,58,58,80,98,47,55,60,90,90,90,90];
            if (this.CURE) this.CURE.timeArray = [65,65,60,65,65,65,80,98,47,55,60,90,90,90,90];
            if (this.ICE) this.ICE.timeArray = [60,60,60,58,58,58,80,98,47,55,60,90,90,90,90];
            if (this.KB) this.KB.timeArray = [35,35,35,35,35,35,50,50,70,65,50,40,40,40,40,40,40,40,60];
            if (this.TP) this.TP.timeArray = [55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55];
            if (this.Banan) this.Banan.timeArray = [55,55,55,55,65,45,40,40,40,40,35,35,35,35,35,35,35,35,35];
            if (this.Tui) this.Tui.timeArray = [55,55,55,55,65,45,40,40,40,40,35,35,35,35,35,35,35,35,35];
            if (this.AT0_28) this.AT0_28.timeArray = [35,35,35,35,35,35,40,40,40,40,35,35,35,35,35,35,35,35,35];
        }, 1000);
    }

    playFrameAnimation1(n: string) {
        // 确保所有组件都已初始化
        this.initComponents();
        
        switch (n) {
            case "xuqi":
                if (this.XUQI) this.XUQI.moveToNextFrame(0, 15, 1);console.log("this.XUQI"+this.XUQI)
                break;
            case "cure":
                if (this.CURE) this.CURE.moveToNextFrame(0, 7, 1);
                break;
            case "ice":
                if (this.ICE) this.ICE.moveToNextFrame(0, 6, 0);
                break;
            case "iceN":
                if (this.ICE) this.ICE.moveTolastFrame(6, 0, 1);
                break;
            case "thunder":
                if (this.THUNDER) this.THUNDER.moveToNextFrame(0, 6, 1);
                break;
            case "Dun":
                if (this.Dun) this.Dun.moveToNextFrame(0, 4, 1);
                break;
            case "BA":
                if (this.BA) this.BA.moveToNextFrame(0, 7, 1);
                break;
            case "turn4":
                if (this.turn) {
                    this.turn.node.setScale(-1, 1, 1);
                    this.turn.moveToNextFrame(0, 4, 1);
                    this.turn.node.position = v3(-45, -50, 0);
                }
                break;
            case "turn6":
                if (this.turn) {
                    this.turn.node.setScale(1, 1, 1);
                    this.turn.moveToNextFrame(0, 3, 1);
                    this.turn.node.position = v3(45, -50, 0);
                }
                break;
            case "water":
                if (this.water) {
                    this.fadeINAndA(this.water.node.parent, 500);
                    this.water.kk = true;
                    this.water.loopF(0, 3, 0);
                }
                break;
            case "waterE":
                if (this.water) {
                    this.fadeOutAndDisappear(this.water.node.parent, 500);
                }
                break;
            case "TN":
                if (this.TN) this.TN.moveToNextFrame(0, 6, 1);
                break;
            case "BZ":
                if (this.BZ1) this.BZ1.moveToNextFrame(0, 17, 1);
                break;
            case "KB":
                if (this.KB) this.KB.moveToNextFrame(0, 18, 1);
                break;
            case "Banan":
                if (this.Banan) this.Banan.moveToNextFrame(0, 9, 1);
                break;
            case "FH":
                if (this.FH) this.FH.moveToNextFrame(0, 10, 1);
                break;
            case "TP":
                if (this.TP) this.TP.moveToNextFrame(0, 15, 1);
                break;
            case "Tui":
                if (this.Tui) this.Tui.moveToNextFrame(0, 11, 1);
                break;
            case "AT0_2":
                if (this.AT0_28) {
                    this.AT0_28.node.position = v3(0, 0, 0);
                    this.AT0_28.node.scale = v3(1, 1, 1);
                    this.AT0_28.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT0_8":
                if (this.AT0_28) {
                    this.AT0_28.node.position = v3(0, 170, 0);
                    this.AT0_28.node.scale = v3(-1, -1, 1);
                    this.AT0_28.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k2_2":
                if (this.AT2k2) {
                    this.AT2k2.node.position = v3(0, -40, 0);
                    this.AT2k2.node.scale = v3(2, 2, 1);
                    this.AT2k2.node.rotation = this.rotateB(-90);
                    this.AT2k2.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k2_4":
                if (this.AT2k2) {
                    this.AT2k2.node.scale = v3(-2, 2, 1);
                    this.AT2k2.node.position = v3(-160, 90, 0);
                    this.AT2k2.node.rotation = this.rotateB(0);
                    this.AT2k2.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k2_6":
                if (this.AT2k2) {
                    this.AT2k2.node.scale = v3(2, 2, 1);
                    this.AT2k2.node.position = v3(160, 90, 0);
                    this.AT2k2.node.rotation = this.rotateB(0);
                    this.AT2k2.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k2_8":
                if (this.AT2k2) {
                    this.AT2k2.node.position = v3(0, 170, 0);
                    this.AT2k2.node.scale = v3(2, -2, 1);
                    this.AT2k2.node.rotation = this.rotateB(-90);
                    this.AT2k2.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k3_2":
                if (this.AT2k3) {
                    this.AT2k3.node.position = v3(0, -40, 0);
                    this.AT2k3.node.scale = v3(1, 1, 1);
                    this.AT2k3.node.rotation = this.rotateB(-90);
                    this.AT2k3.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k3_4":
                if (this.AT2k3) {
                    this.AT2k3.node.scale = v3(-1, 1, 1);
                    this.AT2k3.node.position = v3(-130, 90, 0);
                    this.AT2k3.node.rotation = this.rotateB(0);
                    this.AT2k3.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k3_6":
                if (this.AT2k3) {
                    this.AT2k3.node.scale = v3(1, 1, 1);
                    this.AT2k3.node.position = v3(130, 90, 0);
                    this.AT2k3.node.rotation = this.rotateB(0);
                    this.AT2k3.moveToNextFrame(0, 5, 1);
                }
                break;
            case "AT2k3_8":
                if (this.AT2k3) {
                    this.AT2k3.node.position = v3(0, 170, 0);
                    this.AT2k3.node.scale = v3(1, -1, 1);
                    this.AT2k3.node.rotation = this.rotateB(-90);
                    this.AT2k3.moveToNextFrame(0, 5, 1);
                }
                break;
            default:
                break;
        }
    }

    playFrameAnimation2(n: string) {
        this.initComponents(); // 确保组件已初始化
        
        switch (n) {
            case "AT0-2":
                if (this.XUQI) this.XUQI.moveToNextFrame(0, 15, 1);
                break;
            case "cure":
                if (this.CURE) this.CURE.moveToNextFrame(0, 7, 1);
                break;
            case "ice":
                if (this.ICE) this.ICE.moveToNextFrame(0, 6, 0);
                break;
            case "iceN":
                if (this.ICE) this.ICE.moveTolastFrame(6, 0, 1);
                break;
            case "thunder":
                if (this.THUNDER) this.THUNDER.moveToNextFrame(0, 6, 1);
                break;
            case "Dun":
                if (this.Dun) this.Dun.moveToNextFrame(0, 4, 1);
                break;
            case "BA":
                if (this.BA) this.BA.moveToNextFrame(0, 7, 1);
                break;
            case "turn4":
                if (this.turn) {
                    this.node.setScale(-1, 1, 1);
                    this.turn.moveToNextFrame(0, 4, 1);
                }
                break;
            case "turn6":
                if (this.turn) {
                    this.node.setScale(-1, 1, 1);
                    this.turn.moveToNextFrame(0, 3, 1);
                }
                break;
            case "water":
                if (this.water) {
                    this.fadeINAndA(this.water.node.parent, 500);
                    this.water.kk = true;
                    this.water.loopF(0, 3, 0);
                }
                break;
            case "waterE":
                if (this.water) {
                    this.fadeOutAndDisappear(this.water.node.parent, 500);
                }
                break;
            case "TN":
                if (this.TN) this.TN.moveToNextFrame(0, 6, 1);
                break;
            case "BZ":
                if (this.BZ1) this.BZ1.moveToNextFrame(0, 17, 1);
                break;
            case "KB":
                if (this.KB) this.KB.moveToNextFrame(0, 18, 1);
                break;
            case "Banan":
                if (this.Banan) this.Banan.moveToNextFrame(0, 9, 1);
                break;
            case "FH":
                if (this.FH) this.FH.moveToNextFrame(0, 10, 1);
                break;
            case "TP":
                if (this.TP) this.TP.moveToNextFrame(0, 15, 1);
                break;
            case "Tui":
                if (this.Tui) this.Tui.moveToNextFrame(0, 11, 1);
                break;
            default:
                break;
        }
    }

    // 辅助方法：旋转角度
  
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import ComponentBase from "../../../TS/BASE/ComponentBase";
// import { gif1 } from "../../../TS/BASE/spineANDgif1/gif1";
// import { Message } from "../../../TS/Message/Message";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class MTX extends ComponentBase {
// @property(gif1)
//     XUQI:gif1=null;
//     @property(gif1)
//     CURE:gif1=null;
//     @property(gif1)
//     ICE:gif1=null;
//     @property(gif1)
//     TP:gif1=null;
//     @property(gif1)
//     THUNDER:gif1=null;
//     @property(gif1)
//     water:gif1=null;
//     @property(gif1)
//     Dun:gif1=null;
//     @property(gif1)
//    turn:gif1=null;
//     @property(gif1)
//     BA:gif1=null;
//     @property(gif1)
//    TN:gif1=null;
//    @property(gif1)
//    FuG:gif1=null;
// onLoad(): void {
//     this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
//     this.CURE.timeArray=[65,65,60,65,65,65,80,98,47,55,60,90,90,90,90]
//     this.ICE.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
//   
//this.THUNDER.timeArray=[60,40,35,35,70,40,65,98,47,55,60,90,90,90,90]
//   this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
// }
// 
// 
// playFrameAnimation1(n:string) {
//    switch (n) {
//     case "xuqi":this.XUQI.moveToNextFrame(0,15,1)
//         
//         break;
//         case "cure":this.CURE.moveToNextFrame(0,7,1)
//         
//         break;
//         case "ice":this.ICE.moveToNextFrame(0,6,0)
//         
//         break;
//         case "iceN":this.ICE.moveTolastFrame(6,0,1);//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "thunder":this.THUNDER.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "Dun":this.Dun.moveToNextFrame(0,4,1)
//         
//         break;
//         case "BA":this.BA.moveToNextFrame(0,7,1)
//         
//         break;
//         case "turn4":this.node.scaleX=-1;this.turn.moveToNextFrame(0,4,1);
//         
//         break;
//         case "turn6":this.node.scaleX=1;this.turn.moveToNextFrame(0,3,1);
//         
//         break
//         case "water":this.fadeINAndA(this.water.node.parent,500);this.water.kk=true;this.water.loopF(0,3,0);//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "waterE":this.fadeOutAndDisappear(this.water.node.parent,500);//this.water.loopF(0,4,0);//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "TN":this.TN.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//     default:
//         break;
//    }
//  }
// 
// }
