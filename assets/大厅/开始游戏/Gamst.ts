// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label } from 'cc';
const {ccclass, property} = _decorator;


// //加入房间


@ccclass('Gamst')
export default class NewClass extends Component {
//    // onLoad () {}
    start () {
        // if(this.node.name=="加入房间"){
        // this.node.parent.getChildByName("Roomna").active=false;
        // this.node.parent.getChildByName("Roompa").active=false;
        // this.node.parent.getChildByName("jiaru").active=false;
        // this.node.parent.getChildByName("chuangjian").active=false;
        // this.node.parent.getChildByName("New Button").active=false;

        // }
        // else if(this.name=="创建房间"){
        // this.node.parent.getChildByName("Roomna").active=false;
        // this.node.parent.getChildByName("Roompa").active=false;
        // this.node.parent.getChildByName("jiaru").active=false;
        // this.node.parent.getChildByName("chuangjian").active=false;
        // }

    }
CRo(){
        // this.node.parent.getChildByName("New Button").active=true;
        // this.node.parent.getChildByName("加入房间").active=false;
        // this.node.parent.getChildByName("Roomna").active=true;
        // this.node.parent.getChildByName("Roompa").active=true;
        // this.node.parent.getChildByName("chuangjian").active=true;
        // this.node.active=false;

}
////创建房间
CRo1(){
        // KHD.creatRoom(this.node.parent.getChildByName("Roomna").getChildByName("TEXT_LABEL").getComponent(cc.Label).string,
        // this.node.parent.getChildByName("Roompa").getChildByName("TEXT_LABEL").getComponent(cc.Label).string);

}
inRo(){
//   /* this.node.parent.getChildByName("New Button").active=true;
        // this.node.parent.getChildByName("创建房间").active=false;
        // this.node.parent.getChildByName("Roomna").active=true;
        // this.node.parent.getChildByName("Roompa").active=true;
        // this.node.parent.getChildByName("jiaru").active=true;
        // this.node.active=false;
//    */ cc.director.loadScene("thi",()=>{
//       //KHD.juese[0]==1
//     //  console.log(KHD.juese)
        // KHD.updateJuese(1)
        // })
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
// 
//     // onLoad () {}
// 
//     start () {
// if(this.node.name=="加入房间"){
//     this.node.parent.getChildByName("Roomna").active=false;
//     this.node.parent.getChildByName("Roompa").active=false;
//     this.node.parent.getChildByName("jiaru").active=false;
//     this.node.parent.getChildByName("chuangjian").active=false;
//     this.node.parent.getChildByName("New Button").active=false;
//     
// }
// else if(this.name=="创建房间"){
//     this.node.parent.getChildByName("Roomna").active=false;
//     this.node.parent.getChildByName("Roompa").active=false;
//     this.node.parent.getChildByName("jiaru").active=false;
//     this.node.parent.getChildByName("chuangjian").active=false;
// }
// 
//     }
// 
// CRo(){
//     this.node.parent.getChildByName("New Button").active=true;
//     this.node.parent.getChildByName("加入房间").active=false;
//     this.node.parent.getChildByName("Roomna").active=true;
//     this.node.parent.getChildByName("Roompa").active=true;
//     this.node.parent.getChildByName("chuangjian").active=true;
//     this.node.active=false;
//     
// }
// 
// //创建房间
// CRo1(){
//     KHD.creatRoom(this.node.parent.getChildByName("Roomna").getChildByName("TEXT_LABEL").getComponent(cc.Label).string,
//     this.node.parent.getChildByName("Roompa").getChildByName("TEXT_LABEL").getComponent(cc.Label).string);
// 
// }
// 
// inRo(){
//    /* this.node.parent.getChildByName("New Button").active=true;
//     this.node.parent.getChildByName("创建房间").active=false;
//     this.node.parent.getChildByName("Roomna").active=true;
//     this.node.parent.getChildByName("Roompa").active=true;
//     this.node.parent.getChildByName("jiaru").active=true;
//     this.node.active=false;
//     */ cc.director.loadScene("thi",()=>{
//        //KHD.juese[0]==1
//      //  console.log(KHD.juese)
//        KHD.updateJuese(1)
//     })
// }
// 
// //加入房间
// inRo1(){
//     KHD.inRoom(this.node.parent.getChildByName("Roomna").getChildByName("TEXT_LABEL").getComponent(cc.Label).string,
//     this.node.parent.getChildByName("Roompa").getChildByName("TEXT_LABEL").getComponent(cc.Label).string);
// 
// }
// 
// Back(){
//     this.node.parent.getChildByName("创建房间").active=true;
//     this.node.parent.getChildByName("chuangjian").active=false;
//     this.node.parent.getChildByName("jiaru").active=false;
//     this.node.parent.getChildByName("加入房间").active=true;
//     this.node.parent.getChildByName("Roomna").active=false;
//     this.node.parent.getChildByName("Roompa").active=false;
//     this.node.active=false;
// 
// }
//     // update (dt) {}
// }
}
