// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label, Sprite, SpriteAtlas, UIOpacity } from 'cc';
const {ccclass, property} = _decorator;

import character from "../BASE/Character";
import ComponentBase from "../BASE/ComponentBase";
import { Message } from "../Message/Message";

@ccclass('GhostUI')
export default class NewClass extends ComponentBase {
        @property(SpriteAtlas)
        Atlas:SpriteAtlas=null;
    
    
    start(){
    
        switch (this.node.parent.getComponent(character).Pturn) {
            case 1: this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("1")
    break;
    case 2: this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("2")
    break;
    case 3: this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("3")
    break;
    case 4: this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("4")
    break;
    case 5: this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("5")
    break;
    case 6: this.node.getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("6")
    break;
    
        
            default:
                break;
        }
    }
    
    
    ReceiveMessage(message: Message) {
       let a=""+ this.node.parent.getComponent(character).qi;
        this.node.getChildByName("n").getComponent(Label).string=a
    this.node.getComponent(UIOpacity).opacity=233;
    
    
    }
    
    
    }
    