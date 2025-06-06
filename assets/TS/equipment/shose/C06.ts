// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import moveUI from "../../UIS/BASEUI/moveUI";
import CXX from "./CXX";

@ccclass('C06')
export default class C06 extends CXX {
  target:Character=null;
  TheNumber:string ='C06';
  wt:number=0;
  M:number=0;
          Cname:string="迈扣shose"


          fWwalkWay=1;




  start () {
      this.target=this.node.getComponent(Character);
     
      this.target.UIC=function(){

          let A =find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(moveUI)
       switch (this.faceTo) {
          case 2:  
             A.TX(8, "walk8");
             A.TX(2, "walk");
            A.TX(4, "turn4");
            A.TX(6, "turn6");
             break;
           case 4:
            A.TX(6, "walk8");
            A.TX(2, "turn6");
           A.TX(4, "walk");
           A.TX(8, "turn4");
             break;
           case 6:
             A.TX(4, "walk8");
             A.TX(2, "turn4");
             A.TX(6, "walk");
             A.TX(8, "turn6");
             break;
           case 8:
             A.TX(2, "walk8");
            A.TX(4, "turn6");
            A.TX(6, "turn4");
             A.TX(8, "walk");
             break;
         }
             
         this.ST();
       
       if(this.walkWay==0.5){A.TX(this.PfaceFinal(this.faceTo,[2])[0], "推石头");}
       
       
       
       
       
       
       
       
       }

    MessageCenter.MakeSHMessage("AM",[65],1,this.target.Pturn,"getOneCs");

 for (let c of GeZiManager.Tcharacters) {
    
        let k= c.PfaceFinal(c.faceTo,[2])[0]
        let j=this.target.faceIs(c.ZB)
        let Y
        switch (k) {
        case 6:if ([7,8,9].includes(j)) {
        Y="turn6"
        }else if ([1,2,3].includes(j)) {
        Y="turn4"
        }else if (j==4) {
        Y="turn8"
        }

        break;
        case 8:if ([7,4,1].includes(j)) {
        Y="turn6"
        }else if ([3,6,9].includes(j)) {
        Y="turn4"
        }else if (j==2) {
        Y="turn8"
        }

        break;

        case 4:if ([1,2,3].includes(j)) {
        Y="turn6"
        }else if ([7,8,9].includes(j)) {
        Y="turn4"
        }else if (j==6) {
        Y="turn8"
        }

        break;



        case 2:if ([3,6,9].includes(j)) {
        Y="turn6"
        }else if ([1,4,7].includes(j)) {
        Y="turn4"
        }else if (j==8) {
        Y="turn8"
        }

        break;
        default:
        break;
        }
        if (j!=k) {
        MessageCenter.MakeSHMessage("AM",[c.ZB],1,this.target.Pturn,Y);

        }
        }





          this.changeEP()
    }
  
  
  
  
  
  remove(){
      this.target.UIC=function(){

          let A =find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(moveUI)
       switch (this.faceTo) {
          case 2:  
             A.TX(8, "BAN");
             A.TX(2, "walk");
            A.TX(4, "turn4");
            A.TX(6, "turn6");
             break;
           case 4:
            A.TX(6, "BAN");
            A.TX(2, "turn6");
           A.TX(4, "walk");
           A.TX(8, "turn4");
             break;
           case 6:
             A.TX(4, "BAN");
             A.TX(2, "turn4");
             A.TX(6, "walk");
             A.TX(8, "turn6");
             break;
           case 8:
             A.TX(2, "BAN");
            A.TX(4, "turn6");
            A.TX(6, "turn4");
             A.TX(8, "walk");
             break;
         }
             
         this.ST();
       
       if(this.walkWay==0.5){A.TX(this.PfaceFinal(this.faceTo,[2])[0], "推石头");}
       
       
       
       
       
       
       
       
       }
     
       this.target.MwalkWay=this.fWwalkWay;
       this.target.walkWay=this.fWwalkWay;
    
   }
  }