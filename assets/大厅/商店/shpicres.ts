// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, SpriteFrame } from 'cc';
const {ccclass, property} = _decorator;



@ccclass('Shpicres')
export default class NewClass extends Component {
    @property([SpriteFrame])
    public charimgs: SpriteFrame[] = [];//角色头像
    si:number; //用于确认该节点属于那个角色
    st:boolean;//用于确认是否有该角色
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {


        // this.si=this.node.parent.parent.parent.parent.getComponent("sload").temp;
        // this.node.parent.parent.parent.parent.getComponent("sload").temp++;
//        //改button图片
        // this.node.getComponent(cc.Button).normalSprite=this.charimgs[this.si];
        // this.node.getComponent(cc.Button).hoverSprite=this.charimgs[this.si];

        // if(KHD.juese[this.si]==0){
//            //st会在ssmess中作为判断条件
        // this.st=false;
        // }
        // else{
        // this.st=true;
        // }


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
// 
// import KHD from "../../TS/Message/KHD";
// 
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property([cc.SpriteFrame])
//     public charimgs: cc.SpriteFrame[] = [];//角色头像
//     si:number; //用于确认该节点属于那个角色
//     st:boolean;//用于确认是否有该角色
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         
//         
//        this.si=this.node.parent.parent.parent.parent.getComponent("sload").temp;
//         this.node.parent.parent.parent.parent.getComponent("sload").temp++;
//         //改button图片
//         this.node.getComponent(cc.Button).normalSprite=this.charimgs[this.si];
//         this.node.getComponent(cc.Button).hoverSprite=this.charimgs[this.si];
// 
//         if(KHD.juese[this.si]==0){
//             //st会在ssmess中作为判断条件
//             this.st=false;
//         }
//         else{
//             this.st=true;
//         }
//         
//        
//     }
// 
//     // update (dt) {}
// }
