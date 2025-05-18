// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, instantiate, Prefab } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import JNU from "./JNU";

@ccclass('JNUmanager')
export default class JNUM extends ComponentBase {
        @property(Prefab)
        JUN: Prefab = null;
    
        @property(Prefab)
        BMN: Prefab = null;
    
    
    
    B(n){let kk
        
    
    
        let k=instantiate(this.JUN) 
    
       
       
    
       
    
      
    
    }
    
    
    
    
    
    
    
    
    
    
    
       JNF(n:string,ZB:number,param?:number){
        let kk
        if (param==undefined) {
     kk=0
        }else{kk=param}
    
        setTimeout(() => {
        let k=instantiate(this.JUN) 
    
        k.setParent(this.node)
        console.log(ZB)
        console.log(this.getpos(ZB))
       k.position=this.getpos(ZB)
       
       let y = Math.ceil(ZB / 8);
       let targetScale
       switch (y) {
    
         case 1: targetScale = 1;
           break;
         case 2: targetScale = 0.95;
           break;
         case 3: targetScale = 0.9;
           break;
         case 4: targetScale = 0.85;
           break;
         case 5: targetScale = 0.8;
           break;
         case 6: targetScale = 0.75;
           break;
         case 7: targetScale = 0.7;
           break;
         case 8: targetScale = 0.65;
           break;
    
    
    
    
         default:
           break;
    
    
    
    
    
       }
       
    
        k.setSiblingIndex( k.getSiblingIndex()+900);
        k.getComponent(JNU).scaleTo=targetScale+0.2
        k.getComponent(JNU).node.setScale(0,0)
        k.getComponent(JNU).text.string=n
        k.getComponent(JNU).fadeInAndScaleAndShake()
     }, kk);  
      
    }
    }