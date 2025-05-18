// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, SpriteFrame } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('AnserEvent')
export default class NewClass extends Component {
tag:number=0;
@property([SpriteFrame])
 public alts:SpriteFrame[]=[];
cnode:Node[];
num:number=0;
    start () {
        // for(let a of this.node.children){
        // a.active=true;
        // }
        // this.node.getChildByName("返回").active=false;

//        //注册各个监听事件
        // this.node.on('cha',this.UC,this);
        // this.node.on('list',this.UL,this);
        // this.node.on('shop',this.US,this);
        // this.node.on('oncon',this.UOC,this);
        // this.node.on('confi',this.UCO,this);
        // this.node.on('mailb',this.UM,this);
        // this.node.on('not',this.UN,this);
        // this.node.on('cj',this.UCJ,this);
        // this.node.on('start',this.UST,this);
        // this.node.on('back',this.UB,this);

    }
//    // update (dt) {}
    UC(){
        // this.tag=1;
//        //点击某个按键后，关闭其他的按键
        // this.CAU();
        // this.COP("角色头像");
//        //启用返回键的节点
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
    }
    UL(){ 
        // this.tag=2;
        // this.CAU();
        // this.COP("排行榜");
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
    }
    US(){
        // this.tag=3;
        // this.CAU();
        // this.COP("商店");
        // this.node.getChildByName("商店").getChildByName("clo").active=false;
        // this.node.getChildByName("返回").active=true;
        // this.node.getChildByName("货币").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];

//        //修改相应的子节点
        // this.node.getChildByName("货币").getChildByName("金币").getChildByName("gotoshop").active=false;
        // this.node.getChildByName("货币").getChildByName("钻石").getChildByName("gotoshop").active=false;
        // this.node.getChildByName("货币").getChildByName("猪币").getChildByName("gotoshop").active=false;
        // let m=this.node.getChildByName("商店");
        // for(let a of m.getChildByName("角色购买").children){
        // if(a.name!="Background"){
        // a.active=false;
        // }
        // }
        // for(let a of m.getChildByName("代币获取").children){
        // if(a.name!="Background"){
        // a.active=false;
        // }
        // }
        // for(let a of m.getChildByName("其他道具").children){
        // if(a.name!="Background"){
        // a.active=false;
        // }
        // }
        // m.getChildByName("角色购买").getComponent(cc.Button).enabled=true;
        // m.getChildByName("代币获取").getComponent(cc.Button).enabled=true;
        // m.getChildByName("其他道具").getComponent(cc.Button).enabled=true;
        // m.getChildByName("角色购买").getComponent(cc.Button).interactable=true;
        // m.getChildByName("代币获取").getComponent(cc.Button).interactable=true;
        // m.getChildByName("其他道具").getComponent(cc.Button).interactable=true;
        // m.getChildByName("clo").active=false;


    }
    UOC(){
        // this.tag=4;
        // this.CAU();
        // this.COP("局内配置");
        // this.node.getChildByName("返回").active=true;

//         //更换大厅的背景
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//       //打开可交互性
        // let w=this.node.getChildByName("局内配置");
        // w.getChildByName("角色详情").getComponent(cc.Button).enabled=true;
        // w.getChildByName("法术详情").getComponent(cc.Button).enabled=true;
        // w.getChildByName("天赋详情").getComponent(cc.Button).enabled=true;
        // w.getChildByName("角色详情").getComponent(cc.Button).interactable=true;
        // w.getChildByName("法术详情").getComponent(cc.Button).interactable=true;
        // w.getChildByName("天赋详情").getComponent(cc.Button).interactable=true;

        // w.getChildByName("NewScrollView").getChildByName("intr").active=false;

    }
    UCO(){
        // this.tag=5;
        // this.CAU();
        // this.COP("设置")
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
    }
    UM(){
        // this.tag=6;
        // this.CAU();
        // this.COP("邮箱")
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
    }
    UN(){
        // this.tag=7;
        // this.CAU();
        // this.COP("公告栏");
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
    }
   UCJ(){
        // this.tag=8;
        // this.CAU();
        // this.COP("签到");
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
}
    UST(){
        // this.tag=9;
        // this.CAU();
        // this.COP("开始游戏");
        // this.node.getChildByName("返回").active=true;
        // this.node.getComponent(cc.Sprite).enabled=true;
        // this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
        // let m=this.node.getChildByName("开始游戏");
        // for(let a of m.children){
        // if(a.name=="房间对战"){
        // a.active=true;
        // }
        // else if(a.name=="匹配"){
        // a.active=true;
        // }
        // else if(a.name=="Background"){

        // }
        // else {
        // a.active=false;
        // }
        // }
    }
    UB(){
        // for(let a of this.node.children){
        // for(let b of a.children){
        // if(b.name!="Background"){
        // b.active=false;
        // }
        // else
        // {b.opacity=255;}

        // }
        // a.active=true;
        // }
        // this.node.getChildByName("货币").active=true;
        // this.node.getChildByName("货币").opacity=255;
        // for(let a of  this.node.getChildByName("货币").children){
        // a.active=true;
        // if(a.name=="金币"||a.name=="钻石"||a.name=="猪币"){
        // a.getChildByName("gotoshop").active=true;
        // }
        // }
        // this.node.getChildByName("返回").active=false;
        // this.node.getComponent(cc.Sprite).enabled=false;

    }
    CAU(){
        // switch(this.tag){
        // case 1:
        // for(let a of this.node.children){
        // if(a.name!="角色头像"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 2:
        // for(let a of this.node.children){
        // if(a.name!="排行榜"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 3:
        // for(let a of this.node.children){
        // if(a.name!="商店"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 4:
        // for(let a of this.node.children){
        // if(a.name!="局内配置"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 5:
        // for(let a of this.node.children){
        // if(a.name!="设置"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 6:
        // for(let a of this.node.children){
        // if(a.name!="邮箱"){
        // a.active=false;
        // }

        // }

        // break;
        // case 7:
        // for(let a of this.node.children){
        // if(a.name!="公告栏"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 8:
        // for(let a of this.node.children){
        // if(a.name!="签到"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }

        // break;
        // case 9:
        // for(let a of this.node.children){
        // if(a.name!="开始游戏"){
        // a.active=false;
        // }
        // else{
        // a.getChildByName("Background").opacity=0;
        // }
        // }
        // break;
        // default:
        // break;
        // }
    }
//    //打开子节点的节点
    COP(na:string){
        // for(let a of this.node.getChildByName(na).children){
        // if(a.name=="NewScrollView"){
        // console.log("A");
        // a.active=false;
        // a.getChildByName("view").getChildByName("content").destroyAllChildren();
        // }
        // else{ a.active=true;}

        // }
    }
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
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// tag:number=0;
// 
// @property([cc.SpriteFrame])
//  public alts:cc.SpriteFrame[]=[];
// cnode:Node[];
// num:number=0;
//     start () {
//         for(let a of this.node.children){
//             a.active=true;
//         }
//         this.node.getChildByName("返回").active=false;
// 
//         //注册各个监听事件
//     this.node.on('cha',this.UC,this);
//     this.node.on('list',this.UL,this);
//     this.node.on('shop',this.US,this);
//     this.node.on('oncon',this.UOC,this);
//     this.node.on('confi',this.UCO,this);
//     this.node.on('mailb',this.UM,this);
//     this.node.on('not',this.UN,this);
//     this.node.on('cj',this.UCJ,this);
//     this.node.on('start',this.UST,this);
//     this.node.on('back',this.UB,this);
// 
//     }
// 
//     // update (dt) {}
//     UC(){
//         this.tag=1;
//         //点击某个按键后，关闭其他的按键
//         this.CAU();
//         this.COP("角色头像");
//         //启用返回键的节点
//         this.node.getChildByName("返回").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//     }
// 
//     UL(){ 
//         this.tag=2;
//         this.CAU();
//         this.COP("排行榜");
//         this.node.getChildByName("返回").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//     }
// 
//     US(){
//         this.tag=3;
//         this.CAU();
//         this.COP("商店");
//         this.node.getChildByName("商店").getChildByName("clo").active=false;
//         this.node.getChildByName("返回").active=true;
//         this.node.getChildByName("货币").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//       
//         //修改相应的子节点
//         this.node.getChildByName("货币").getChildByName("金币").getChildByName("gotoshop").active=false;
//         this.node.getChildByName("货币").getChildByName("钻石").getChildByName("gotoshop").active=false;
//         this.node.getChildByName("货币").getChildByName("猪币").getChildByName("gotoshop").active=false;
//         let m=this.node.getChildByName("商店");
//         for(let a of m.getChildByName("角色购买").children){
//             if(a.name!="Background"){
//                 a.active=false;
//             }
//         }
//         for(let a of m.getChildByName("代币获取").children){
//             if(a.name!="Background"){
//                 a.active=false;
//             }
//         }
//         for(let a of m.getChildByName("其他道具").children){
//             if(a.name!="Background"){
//                 a.active=false;
//             }
//         }
//         m.getChildByName("角色购买").getComponent(cc.Button).enabled=true;
//         m.getChildByName("代币获取").getComponent(cc.Button).enabled=true;
//         m.getChildByName("其他道具").getComponent(cc.Button).enabled=true;
//         m.getChildByName("角色购买").getComponent(cc.Button).interactable=true;
//         m.getChildByName("代币获取").getComponent(cc.Button).interactable=true;
//         m.getChildByName("其他道具").getComponent(cc.Button).interactable=true;
//         m.getChildByName("clo").active=false;
//         
// 
//     }
// 
//     UOC(){
//         this.tag=4;
//         this.CAU();
//         this.COP("局内配置");
//         this.node.getChildByName("返回").active=true;
// 
//          //更换大厅的背景
//        this.node.getComponent(cc.Sprite).enabled=true;
//        this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//        //打开可交互性
//        let w=this.node.getChildByName("局内配置");
//        w.getChildByName("角色详情").getComponent(cc.Button).enabled=true;
//        w.getChildByName("法术详情").getComponent(cc.Button).enabled=true;
//        w.getChildByName("天赋详情").getComponent(cc.Button).enabled=true;
//        w.getChildByName("角色详情").getComponent(cc.Button).interactable=true;
//        w.getChildByName("法术详情").getComponent(cc.Button).interactable=true;
//        w.getChildByName("天赋详情").getComponent(cc.Button).interactable=true;
// 
//        w.getChildByName("NewScrollView").getChildByName("intr").active=false;
//        
//     }
// 
//     UCO(){
//         this.tag=5;
//         this.CAU();
//         this.COP("设置")
//         this.node.getChildByName("返回").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//     }
// 
//     UM(){
//         this.tag=6;
//         this.CAU();
//         this.COP("邮箱")
//         this.node.getChildByName("返回").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//     }
// 
//     UN(){
//         this.tag=7;
//         this.CAU();
//         this.COP("公告栏");
//         this.node.getChildByName("返回").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//     }
// 
//    UCJ(){
//     this.tag=8;
//     this.CAU();
//     this.COP("签到");
//     this.node.getChildByName("返回").active=true;
//     this.node.getComponent(cc.Sprite).enabled=true;
//     this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
// }
// 
//     UST(){
//         this.tag=9;
//         this.CAU();
//         this.COP("开始游戏");
//         this.node.getChildByName("返回").active=true;
//         this.node.getComponent(cc.Sprite).enabled=true;
//         this.node.getComponent(cc.Sprite).spriteFrame=this.alts[0];
//         let m=this.node.getChildByName("开始游戏");
//         for(let a of m.children){
//             if(a.name=="房间对战"){
//                 a.active=true;
//             }
//             else if(a.name=="匹配"){
//                 a.active=true;
//             }
//             else if(a.name=="Background"){
// 
//             }
//             else {
//                 a.active=false;
//             }
//         }
//     }
// 
//     UB(){
//        for(let a of this.node.children){
//         for(let b of a.children){
//             if(b.name!="Background"){
//                 b.active=false;
//             }
//             else
//             {b.opacity=255;}
//            
//         }
//         a.active=true;
//        }
//        this.node.getChildByName("货币").active=true;
//        this.node.getChildByName("货币").opacity=255;
//        for(let a of  this.node.getChildByName("货币").children){
//         a.active=true;
//         if(a.name=="金币"||a.name=="钻石"||a.name=="猪币"){
//             a.getChildByName("gotoshop").active=true;
//         }
//        }
//        this.node.getChildByName("返回").active=false;
//        this.node.getComponent(cc.Sprite).enabled=false;
//       
//     }
// 
//     CAU(){
//         switch(this.tag){
//             case 1:
//                 for(let a of this.node.children){
//                     if(a.name!="角色头像"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//               
//                 break;
//             case 2:
//                 for(let a of this.node.children){
//                     if(a.name!="排行榜"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//               
//                 break;
//             case 3:
//                 for(let a of this.node.children){
//                     if(a.name!="商店"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//               
//                 break;
//             case 4:
//                 for(let a of this.node.children){
//                     if(a.name!="局内配置"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//           
//                 break;
//             case 5:
//                 for(let a of this.node.children){
//                     if(a.name!="设置"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//                
//                 break;
//             case 6:
//                 for(let a of this.node.children){
//                     if(a.name!="邮箱"){
//                         a.active=false;
//                     }
//             
//                   }
//                 
//                 break;
//             case 7:
//                 for(let a of this.node.children){
//                     if(a.name!="公告栏"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//               
//                 break;
//             case 8:
//                 for(let a of this.node.children){
//                     if(a.name!="签到"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//              
//                 break;
//             case 9:
//                 for(let a of this.node.children){
//                     if(a.name!="开始游戏"){
//                         a.active=false;
//                     }
//                     else{
//                         a.getChildByName("Background").opacity=0;
//                     }
//                   }
//                 break;
//             default:
//                 break;
//         }
//     }
// 
// 
//     //打开子节点的节点
//     COP(na:string){
//         for(let a of this.node.getChildByName(na).children){
//             if(a.name=="NewScrollView"){
//                 console.log("A");
//                 a.active=false;
//                 a.getChildByName("view").getChildByName("content").destroyAllChildren();
//             }
//             else{ a.active=true;}
//            
//         }
//     }
// }
