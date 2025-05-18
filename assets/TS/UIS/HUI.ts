// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, SpriteAtlas, Prefab, Node, instantiate, Layout, Sprite, UITransform } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import { SHMessage } from "../Message/SHMessage";
import { Message } from "../Message/Message";
import HP from "./heart";
import heart from "./heart";
import character from "../BASE/Character";

import GeZiManager from "../Manager/GeZiManager";

@ccclass('HUI')
export default class HUI extends ComponentBase {
        MaxHP:number=0;
        HP:number=0;
        
        @property(SpriteAtlas)
        Atlas:SpriteAtlas=null;
        
        @property(Prefab)
        heart:Prefab=null;
        @property(Prefab)
        Pturn:Prefab=null;
        @property(Prefab)
        Qi:Prefab=null;
        @property(Prefab)
        GD:Prefab=null;
        @property(Prefab)
        ice:Prefab=null;
        hearts:HP[]=[];
        GDs:Node[]=[];
        
        
         onLoad(){
           
        
        
        }
        
        
        
        
        
        
        
        
         start(){
            this.node.parent.getComponent(character).UI.push(this)
            
           let Pturn=instantiate(this.Pturn)
            Pturn.setParent(this.node)
            this.MaxHP=this.node.parent.getComponent(character).MaxHP;
            this.HP=this.MaxHP;
        for(let i=1;i<=this.MaxHP;i++){
           let HP=instantiate(this.heart)
           HP.setParent(this.node)
         HP.getComponent(heart).DB=i;
        
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        switch (this.node.parent.getComponent(character).Pturn.toString()[0]) {
            case "1":this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("bule")
                Pturn.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("1");Pturn.getComponent(UITransform).anchorY=0.55;
                break;
             case "2":this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("red")
                Pturn.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("2");Pturn.getComponent(UITransform).anchorY=0.4;
                break;
                case "3":this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("bule")
                Pturn.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("3");this.node.getComponent(Layout).paddingLeft=18;Pturn.getComponent(UITransform).anchorY=0.53;
                break;
                case "4":this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("red");Pturn.getComponent(UITransform).anchorY=0.47;
                Pturn.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("4")
                break;
                case "5":this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("bule");Pturn.getComponent(UITransform).anchorX=0.52;
                Pturn.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("5")
                break;
                case "6":this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("red");Pturn.getComponent(UITransform).anchorY=0.53;
                Pturn.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("6")
                break;
        
            
            
        
            default:
                break;
        }
        
        
        
        this.setQi();
        
        
        
        
        
        
        
        
        
        
        
        }
        
        
        
        setQi(){
        
        
        if(this.node.parent.getComponent(character).qi>=15)
        {this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi15+");this.node.parent.getChildByName("qi").setScale(1.95,3);this.node.parent.getChildByName("qi").getComponent(UITransform).anchorY=0.53;
        }else if(this.node.parent.getComponent(character).qi>=10)
        {this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi10+");this.node.parent.getChildByName("qi").setScale(1.89,2.5);this.node.parent.getChildByName("qi").getComponent(UITransform).anchorX=0.64;this.node.parent.getChildByName("qi").getComponent(UITransform).anchorY=0.48;
        }else if(this.node.parent.getComponent(character).qi>5)
        {this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi5+");this.node.parent.getChildByName("qi").setScale(1.9,2);this.node.parent.getChildByName("qi").getComponent(UITransform).anchorX=0.65;
        }else switch (this.node.parent.getComponent(character).qi) {
                case 5:this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi5");
                break;
                case 4:this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi4");
                break;
                case 3:this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi3");
                break;
                case 2:this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi2");
                break;
                case 1:this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("Qi1");
                break;
        
            default:this.node.parent.getChildByName("qi").getComponent(Sprite).spriteFrame=null
                break;
        }
        
        
        
        
        
        }
        
        
        
        
        setHP(){
            this.MaxHP=this.node.parent.getComponent(character).MaxHP;
            this.HP=this.node.parent.getComponent(character).HP;
        
            let n=this.MaxHP-this.HP;
        for(let mannger of this.hearts){
            mannger.to1();
            
        }
        
         for(let i=this.MaxHP;i>this.HP;i--){
        for(let mannger of this.hearts){
          if(mannger.DB==i){mannger.to0();}
        
        }
        
        
        
        }
        
        
        
        }
        
        
        
        setGD(GDx:number,icex:number){
        for(let a of this.GDs){a.active=false;}
        this.GDs.length=0
        
        for(let i=1;i<=GDx;i++){
            let GD=instantiate(this.GD)
           GD.setParent(this.node)
         this.GDs.push(GD)
         }
        
         for(let i=1;i<=icex;i++){
            let ice=instantiate(this.ice)
          ice.setParent(this.node)
          this.GDs.push(ice)
        ice.angle=180 ;console.log("waowaowao")
        }}
        
        
        
        
        
        
        
        
        ReceiveMessage(message: Message) {
            if(message instanceof SHMessage){ switch (message.SHtype){
                case "Qi+":this.setQi();
                
                break;
                case "Qi-":this.setQi();
                
                break;
                case "Qi=":this.setQi();
                
                break;
                case "Qi":this.setQi();
                
                break;
                case "qi":this.setQi();
                
                break;
        
        
        
        
        
        
        
        
        
        
        
        
            }}else{
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                if(message){
        
            switch (message.Content) {
            case "Qi+":this.setQi();
                
                break;
        
            default:
                break;
        }}
        }
        
        
        }
        
        
        
        
        
        
        
        
        }
        