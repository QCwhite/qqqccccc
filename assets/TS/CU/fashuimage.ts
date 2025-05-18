import { _decorator, Sprite, SpriteAtlas } from 'cc';
const { ccclass, property } = _decorator;

import ComponentBase from "../BASE/ComponentBase";

import KHD2 from "../Message/KHD2";

@ccclass('Fashuimage')
export default class fimage extends ComponentBase {
        @property(SpriteAtlas)
        Atlas: SpriteAtlas = null; // 通用图集
    
    
        fixui(B:number[],R:number[])//修改ui
        {
    console.log(B)
    console.log(R)     
    if (KHD2.PT[0]%2==0) {
      for(let i=0;i<3;i+=1){
        //     console.log(PT)
           this.node.children[i+3].getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("FASHU2-"+(R[i]+2))
        
     }
    }else{   for(let i=0;i<3;i+=1){
      //     console.log(PT)
         this.node.children[i].getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("FASHU2-"+(B[i]+2))
      if (B[i]==0) {
       
      }
    }}
             
            
      
      
      
      }}
    