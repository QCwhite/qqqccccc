// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../../Manager/GeZiManager";
import { SHMessage } from "../../Message/SHMessage";
import MessageCenter from "../../Message/MessageCenter";
import weapon from "../weapon/weapon";
import Character from "../../BASE/Character";
import BXX from "./BXX";

@ccclass('B16')
export default class B16 extends BXX {
    target:Character=null;
    TheNumber:string = 'B16';
    Cname:string="路人甲"
jj:number=0

    start () {
        this.target=this.node.getComponent(Character);
        this.target.move3.push(this)
   this.changeEP()
    }
  
remove(){
    GeZiManager.shanchu(this.target.move3,this)
   // GeZiManager.shanchu(this.target.t3,this)
}

Move3(ZB: number, pturn: number): void {
    GeZiManager.Tcharacters=[]
    let a =this.getNIG(this.target.ZB)
    MessageCenter.MakeSHMessage("AM",a,2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"getOnes"); 
    
  


let o=[]

for (let c of GeZiManager.Tcharacters) {
   
  let k= c.PfaceFinal(c.faceTo,[2])[0]
 let j=this.target.faceIs(c.ZB)
 let Y=""
switch (k) {
case 4:if ([7,8,9].includes(j)) {
Y="turn6"
}else if ([1,2,3].includes(j)) {
Y="turn4"
}else if (j==4) {
Y="turn8"
}

break;
case 2:if ([7,4,1].includes(j)) {
    Y="turn6"
}else if ([3,6,9].includes(j)) {
    Y="turn4"
}else if (j==2) {
    Y="turn8"
}
    
    break;

case 6:if ([1,2,3].includes(j)) {
        Y="turn6"
    }else if ([7,8,9].includes(j)) {
        Y="turn4"
    }else if (j==6) {
        Y="turn8"
    }
        
        break;



case 8:if ([3,6,9].includes(j)) {
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

MessageCenter.MakeSHMessage("AM",[c.ZB],1,this.target.Pturn,Y);

        
   }
}



}
