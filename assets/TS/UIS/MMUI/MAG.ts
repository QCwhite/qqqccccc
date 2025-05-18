// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, color, Component, Label, Node } from 'cc';
const {ccclass, property} = _decorator;

import CustomButton from "../../BASE/CButton";
import ComponentBase from "../../BASE/ComponentBase";
import { gif1 } from "../../BASE/spineANDgif/gif";
import GeZiManager from "../../Manager/GeZiManager";
import MUI from "./MUI";
import A503 from '../../equipment/weapon/SC/A503';

@ccclass('MAG')
export default class MAG extends ComponentBase {
        @property(Number)
        n:number=0
        @property(Number)
        qi:number=0
        cd:number=0
        TN:number=0
        @property(Node)
        MUI:Node=null;
        onLoad(): void {
           this.MUI. getComponent(MUI).son.push(this);
        }
        
        
        
        
        
        getTNC(n:number){
        
        
           let k=  GeZiManager.PCP.TNJJ
           let l =GeZiManager.TNC
          if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
          }
        
        
        
        
        
        
        
        ST(){
        //console.log(this.MUI.getComponent(MUI).MCD[this.n]!=0||GeZiManager.PCP.qi+GeZiManager.free<this.qi)
        //if (this.n==5&&GeZiManager.PCP.FU[3]>0) {
         //  GeZiManager.free-=1;
        //}
        let j=0
        if (GeZiManager.PCP.weapon instanceof A503) {
         j=GeZiManager.PCP.weapon.BL
        }
        let o=this.qi-j
        if (o<=0) {
         o=1
        }




        if(GeZiManager.PCP.qi+j<this.qi){
        this.node.children[0].getComponent(Label).color=color(255,0,0)
        
        
        }else{ this.node.children[0].getComponent(Label).color=color(255,255,255)}
        if(this.MUI.getComponent(MUI).MCD[this.n]!=0){
        this.node.children[1].getComponent(Label).string=""+this.MUI.getComponent(MUI).MCD[this.n]}else this.node.children[1].getComponent(Label).string=""
      
        this.node.children[0].getComponent(Label).string=o+""
        this.node.children[2].getComponent(gif1).getComponent(gif1).changeF(this.getTNC(4)-1,1);
        
        
        if(this.MUI.getComponent(MUI).MCD[this.n]!=0||GeZiManager.PCP.qi<o||GeZiManager.PCP.TN<this.getTNC(4)){this.node.getComponent(CustomButton).disableButton();}else this.node.getComponent(CustomButton).enableButton();
        //GeZiManager.free=0;
        }
        
        js(qi:number, n: number,TN:number,name:string): void {
            // 更新节点的qi和n属性
            this.qi = qi;
            this.n = n;
            this.TN=TN
            // 更新节点的图片
            const sprite = this.node.getComponent(gif1);
         sprite.changeF(this.n+4,1);

         this.node.name=this.node.getComponent(gif1).spriteFrame.name;
            // 更新按钮的点击事件
            const button = this.node.getComponent(CustomButton);
        
        
            const newClickEventHandler = new Component.EventHandler();
            newClickEventHandler.target = this.MUI;
            newClickEventHandler.component ="MUI";
            newClickEventHandler.handler = name;
            button.DonClick=(newClickEventHandler);
          }
         
        
        
        
        }