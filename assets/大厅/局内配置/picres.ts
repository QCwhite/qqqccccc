// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, SpriteFrame } from 'cc';
const {ccclass, property} = _decorator;



@ccclass('Picres')
export default class NewClass extends Component {
    @property([SpriteFrame])
    public charimgs: SpriteFrame[] = [];//角色头像的图片
    si:number; //用于确认该节点属于那个角色
    st:boolean;//用于确认是否有改角色
 
    start () {
        // this.si=this.node.parent.parent.parent.parent.getComponent("load").temp;
        // this.node.parent.parent.parent.parent.getComponent("load").temp++;
        // console.log(this.si);
        // this.node.getComponent(cc.Button).normalSprite=this.charimgs[this.si];
        // this.node.getComponent(cc.Button).hoverSprite=this.charimgs[this.si];


        // if( this.node.parent.parent.parent.getComponent("sccon").te==true){
//            //目的是控制灰色是否显示
//            //这里判断是否拥有这个角色
        // if(KHD.juese[this.si]==0){
        // this.st=false;//没有该角色 st在smess中作为判断条件
        // this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=true;
        // }
        // else{
        // this.st=true;
        // this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=false;
        // }
        // }




// /*
////原来的代码
        // if( this.node.parent.parent.parent.getComponent("sccon").te==true){
////这里判断是否拥有这个角色
        // if(this.si==0){
        // this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=false;
        // }
        // else{
        // this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=true;
        // }

        // }

//       */


    }
//    // update (dt) {}
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
// import KHD from "../../TS/Message/KHD";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property([cc.SpriteFrame])
//     public charimgs: cc.SpriteFrame[] = [];//角色头像的图片
//     si:number; //用于确认该节点属于那个角色
//     st:boolean;//用于确认是否有改角色
// 
// 
// 
//  
// 
//     start () {
//         this.si=this.node.parent.parent.parent.parent.getComponent("load").temp;
//         this.node.parent.parent.parent.parent.getComponent("load").temp++;
//         console.log(this.si);
//         this.node.getComponent(cc.Button).normalSprite=this.charimgs[this.si];
//         this.node.getComponent(cc.Button).hoverSprite=this.charimgs[this.si];
// 
//         
//         if( this.node.parent.parent.parent.getComponent("sccon").te==true){
//             //目的是控制灰色是否显示
//             //这里判断是否拥有这个角色
//             if(KHD.juese[this.si]==0){
//                 this.st=false;//没有该角色 st在smess中作为判断条件
//                 this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=true;
//             }
//             else{
//                 this.st=true;
//                 this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=false;
//             }
//                     }
// 
// 
// 
//         
//  /*
// //原来的代码
// if( this.node.parent.parent.parent.getComponent("sccon").te==true){
// //这里判断是否拥有这个角色
// if(this.si==0){
//     this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=false;
// }
// else{
//     this.node.getChildByName("Background").getChildByName("NewSprite").getComponent(cc.Sprite).enabled=true;
// }
// 
//         }
//         
//        */
// 
// 
//     }
// 
// 
// 
//     // update (dt) {}
// }
