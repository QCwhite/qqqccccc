import { _decorator, Button, color, Component, director, find, Label, Sprite } from 'cc';
const { ccclass, property } = _decorator;


import KHD2 from "../TS/Message/KHD2";
import state from "../TS/game/time/state";
import { AudioManager } from '../TS/BASE/music';
import { WebSocketManager } from '../TS/Message/websocket';



@ccclass('DTTS')
export default class DTTS extends Component {
@property(Number)
  nn:number=0;
  isF(str: string): boolean {
//  使用正则表达式匹配四位数字
      const regex = /^\d{4}$/;
      return regex.test(str);

  }
WZTS(str:string){
      let a=find("Canvas/WZTS")
      a.active=true;
      a.getComponent(Label).string=str
      setTimeout(()=>{a.active=false;},1000)


}
BC(str:string){

    //  console.log(str)

      if(this.nn==0){}else{
      this.node.children[0].children[0].getComponent(Label).string=str;
      this.node.getComponent(Button).interactable=false;
      this.node.children[0].getComponent(Sprite).color=color(200,200,200)

      }
}
LK(){
   //   console.log(this.nn)


      if(this.nn!=0){
      this.node.children[0].children[0].getComponent(Label).string="空缺";
      this.node.getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)}

      if (this.nn==7) {
      find("Canvas/fangJian/p1").children[0].children[0].getComponent(Label).string="空缺";
      find("Canvas/fangJian/p1").getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)
      find("Canvas/fangJian/p3").children[0].children[0].getComponent(Label).string="空缺";
      find("Canvas/fangJian/p3").getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)
      find("Canvas/fangJian/p5").children[0].children[0].getComponent(Label).string="空缺";
      find("Canvas/fangJian/p5").getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)
      }
      if (this.nn==8) {
      find("Canvas/fangJian/p2").children[0].children[0].getComponent(Label).string="空缺";
      find("Canvas/fangJian/p2").getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)
      find("Canvas/fangJian/p4").children[0].children[0].getComponent(Label).string="空缺";
      find("Canvas/fangJian/p4").getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)
      find("Canvas/fangJian/p6").children[0].children[0].getComponent(Label).string="空缺";
      find("Canvas/fangJian/p6").getComponent(Button).interactable=true;
      this.node.children[0].getComponent(Sprite).color=color(255,255,255)
      }

}
LC(){
      let a
      if (KHD2.PT.length==1) {
      a=KHD2.PT[0]
      }else if(KHD2.PT[0]==3){a=7}else{a=8}

      let j=0
      switch (this.nn) {
      case 7:KHD2.PT=[3,1,3,5];if(a==0){j=3}else if (a==8) {j=0
      }else{j=2}

      break;
      case 8:KHD2.PT=[4,2,4,6];if(a==0){j=3}else if (a==7) {j=0
      }else{j=2}

      break;
      default:KHD2.PT=[this.nn];if(a==0){j=1}else if (a==7||a==8) {j=-2
      }else{j=0}

      break;

      }
      if (KHD2.PT[0]==0) {
      j=0
      }

      const data = {
      id:2,
      error:0,
      playername:KHD2.Cname,
      nextlocation:this.nn,
      nowlocation:a,
      value:j,

      };




      WebSocketManager.instance.ws.send(JSON.stringify(data))
}
kaiShi(){
    find("Canvas/fangJian/kaishi").active=false
     // console.log("xi")
      const data = {
      id:4

      };




      WebSocketManager.instance.ws.send(JSON.stringify(data))




}
dengLu(){
      let a=this.node.parent.children[0].children[1].getComponent(Label).string
      if(a.length>8){this.node.parent.children[0].children[1].getComponent(Label).string=null;this.WZTS("名字太长了靓仔");}else{
////KHD2.inDT(a);
      this.node.parent.active=false;
      }
}
dinroom(){

      let a= this.node.parent.children[0].children[1].getComponent(Label).string
      let b=this.node.parent.children[1].children[1].getComponent(Label).string
      if(!this.isF(a)&&!this.isF(b)){
      this.node.parent.children[0].children[1].getComponent(Label).string="";
      this.node.parent.children[1].children[1].getComponent(Label).string="";
      this.WZTS("房间名和密码都是四位数哦");
      } else{

      KHD2.ConnectRoom(a,b)

      }


}
dcroom(){
      let a= this.node.parent.children[0].children[1].getComponent(Label).string
      let b=this.node.parent.children[1].children[1].getComponent(Label).string
      if(!this.isF(a)&&!this.isF(b)){
      this.node.parent.children[0].children[1].getComponent(Label).string="";
      this.node.parent.children[1].children[1].getComponent(Label).string="";
      this.WZTS("房间名和密码都是四位数哦");
      } else{
      KHD2.creatRoom(a,b)
////this.node.parent.active=false;
      }
}
 quick_match()
{
  KHD2.Client.emit('socketname',KHD2.Cname);
  KHD2.Client.on("JRconnectroom",dat=>{
//// KHD2.JR(dat[0],dat[0])
})
    KHD2.Client.emit('quick_match',['0','0','0','0'])
    KHD2.Client.on('quick_match_uuid',dat=>{
     KHD2.dat=dat
     .log("hhh")
     KHD2.Client.emit('createroom',[  KHD2.dat, KHD2.dat,KHD2.Cname,1]);
    })
    
    KHD2.Client.on('createroomTF',(data:any)=>{
     // .log(data)
      switch (data) {
      case 'T':KHD2.FZ=true;
//         KHD2.inRoom(KHD.dat,KHD.dat);

    //  console.log(KHD2.dat)
      find("Canvas/New Node/New Label").getComponent(Label).string="匹配中"


      break;
      case 'F':find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("kkk");

      break;

      default:
      break;


      }})

//    KHD.inRoom(FJname,PassW)




      }


      text(){


      setTimeout(() => {
      director.loadScene("SL", function() {
//      将信息传递给下一个场景

//          获取场景中的目标节点
      let myNode = director.getScene().getChildByName('Canvas').getChildByName('thingsManager').getChildByName('AnimalManager')
//         let Node = director.getScene().getChildByName('Canvas').getChildByName('UIManager').children[5].children[0].children[0]

//         console.log(myNode)
//          获取目标节点上的目标脚本组件，将数据赋值给对应的属性



//         console.log(this.FAS)
//         Node.getComponent(MUI).fashu=this.FAS.getComponent(fsc).allfs[KHD.PT-1]



      });

      }, 1200);


      }


      start(): void {

      if (this.nn==1) {
      //KHD2.Cname=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000+""
// //KHD2.indl()
     // console.log("llla")
       AudioManager.instance.ZJP("bgm",2,{
                            loop: true,
                            volume: 0.8,
                            fadeIn: 2})



      if (!KHD2) {
      find("Canvas/New Label").active=true
      find("Canvas/New Label").getComponent(Label).string="KHD没了"
      }

} 
//// find("Canvas").getComponent("HPD").checkCb()
}



back(){
   KHD2.back()  








}






}



/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import { error } from "console";
// import KHD from "../TS/Message/KHD";
// import KHD2 from "../TS/Message/KHD2";
// import state from "../TS/game/time/state";
// import YP from "../sound/music";
// 
// const { ccclass, property } = _decorator;
// 
// @ccclass
// export default class DTTS extends Component {
// @property(Number)
//   nn:number=0;
//   isF(str: string): boolean {
//   使用正则表达式匹配四位数字
//     const regex = /^\d{4}$/;
//     return regex.test(str);
//   
//   }
// WZTS(str:string){
// let a=find("Canvas/WZTS")
// a.active=true;
// a.getComponent(Label).string=str
// setTimeout(()=>{a.active=false;},1000)
// 
// 
// }
// 
// BC(str:string){
//   
// console.log(str)
//   
//   if(this.nn==0){}else{
//   this.node.children[0].children[0].getComponent(Label).string=str;
// this.node.getComponent(Button).interactable=false;
// this.node.children[0].color=color(200,200,200)
// 
// }
// }
// LK(){
//   console.log(this.nn)
// 
//   
//   if(this.nn!=0){
//   this.node.children[0].children[0].getComponent(Label).string="空缺";
// this.node.getComponent(Button).interactable=true;
// this.node.children[0].color=color(255,255,255)}
// 
// if (this.nn==7) {
//   find("Canvas/fangJian/p1").children[0].children[0].getComponent(Label).string="空缺";
//   find("Canvas/fangJian/p1").getComponent(Button).interactable=true;
//   this.node.children[0].color=color(255,255,255)
//   find("Canvas/fangJian/p3").children[0].children[0].getComponent(Label).string="空缺";
//   find("Canvas/fangJian/p3").getComponent(Button).interactable=true;
//   this.node.children[0].color=color(255,255,255)
//   find("Canvas/fangJian/p5").children[0].children[0].getComponent(Label).string="空缺";
//   find("Canvas/fangJian/p5").getComponent(Button).interactable=true;
//   this.node.children[0].color=color(255,255,255)
// }
// if (this.nn==8) {
//   find("Canvas/fangJian/p2").children[0].children[0].getComponent(Label).string="空缺";
//   find("Canvas/fangJian/p2").getComponent(Button).interactable=true;
//   this.node.children[0].color=color(255,255,255)
//   find("Canvas/fangJian/p4").children[0].children[0].getComponent(Label).string="空缺";
//   find("Canvas/fangJian/p4").getComponent(Button).interactable=true;
//   this.node.children[0].color=color(255,255,255)
//   find("Canvas/fangJian/p6").children[0].children[0].getComponent(Label).string="空缺";
//   find("Canvas/fangJian/p6").getComponent(Button).interactable=true;
//   this.node.children[0].color=color(255,255,255)
// }
// 
// }
// 
// LC(){
//   let a
// if (KHD2.PT.length==1) {
//  a=KHD2.PT[0]
// }else if(KHD2.PT[0]==3){a=7}else{a=8}
// 
// let j=0
// switch (this.nn) {
//   case 7:KHD2.PT=[3,1,3,5];if(a==0){j=3}else if (a==8) {j=0    
//   }else{j=2}
//     
//     break;
//     case 8:KHD2.PT=[4,2,4,6];if(a==0){j=3}else if (a==7) {j=0    
//     }else{j=2}
//     
//     break;
//   default:KHD2.PT=[this.nn];if(a==0){j=1}else if (a==7||a==8) {j=-2    
//   }else{j=0}
//     
//   break;
//   
// }
// if (KHD2.PT[0]==0) {
//   j=0
// }
// 
//   const data = {
//     id:2,
//     error:0,
//     playername:KHD2.Cname,
//     nextlocation:this.nn,
//     nowlocation:a,
//     value:j,
//   
//   };
// 
// 
// 
// 
// KHD2.socket.send(JSON.stringify(data))
// }
// 
// 
// kaiShi(){
// 
// console.log("xi")
// const data = {
// id:4
// 
// };
// 
// 
// 
// 
// KHD2.socket.send(JSON.stringify(data))
// 
// 
// 
// 
// }
// 
// 
// 
// 
// 
// dengLu(){
//   let a=this.node.parent.children[0].children[1].getComponent(Label).string
// if(a.length>8){this.node.parent.children[0].children[1].getComponent(Label).string=null;this.WZTS("名字太长了靓仔");}else{
// //KHD2.inDT(a);
// this.node.parent.active=false;
// }
// }
// 
// 
// dinroom(){
// 
// let a= this.node.parent.children[0].children[1].getComponent(Label).string
//   let b=this.node.parent.children[1].children[1].getComponent(Label).string
// if(!this.isF(a)&&!this.isF(b)){
//   this.node.parent.children[0].children[1].getComponent(Label).string="";
//   this.node.parent.children[1].children[1].getComponent(Label).string="";
//   this.WZTS("房间名和密码都是四位数哦");
// } else{
// 
// KHD2.ConnectRoom(a,b)
// 
// }
// 
// 
// }
// 
// 
// 
// dcroom(){
//   let a= this.node.parent.children[0].children[1].getComponent(Label).string
//   let b=this.node.parent.children[1].children[1].getComponent(Label).string
// if(!this.isF(a)&&!this.isF(b)){
//   this.node.parent.children[0].children[1].getComponent(Label).string="";
//   this.node.parent.children[1].children[1].getComponent(Label).string="";
//   this.WZTS("房间名和密码都是四位数哦");
// } else{
// KHD2.creatRoom(a,b)
// //this.node.parent.active=false;
// }
// }
// 
//  quick_match()
// {
//   KHD2.Client.emit('socketname',KHD2.Cname);
//   KHD2.Client.on("JRconnectroom",dat=>{
// // KHD2.JR(dat[0],dat[0])
// })
// 
// 
//     KHD2.Client.emit('quick_match',['0','0','0','0'])
// 
//     KHD2.Client.on('quick_match_uuid',dat=>{
//      KHD2.dat=dat
//      console.log("hhh")
//      KHD2.Client.emit('createroom',[  KHD2.dat, KHD2.dat,KHD2.Cname,1]);
//     })
//     
// 
//     KHD2.Client.on('createroomTF',(data:any)=>{
//     console.log(data)
//       switch (data) {
//           case 'T':KHD2.FZ=true;   
//          KHD2.inRoom(KHD.dat,KHD.dat);
//           
//             console.log(KHD2.dat)
//             find("Canvas/New Node/New Label").getComponent(Label).string="匹配中"
//           
//               
//               break;
//               case 'F':find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("kkk");
//               
//               break;
//       
//           default:
//               break;
//      
//       
//          }})
//          
//     KHD.inRoom(FJname,PassW)
// 
//  
// 
// 
//     }
// 
// 
//  text(){
// 
// 
//   setTimeout(() => {
//     director.loadScene("SL", function() {
//       将信息传递给下一个场景
//         
//           获取场景中的目标节点
//           let myNode = director.getScene().getChildByName('Canvas').getChildByName('thingsManager').getChildByName('AnimalManager')
//          let Node = director.getScene().getChildByName('Canvas').getChildByName('UIManager').children[5].children[0].children[0]
//             
//          console.log(myNode)
//           获取目标节点上的目标脚本组件，将数据赋值给对应的属性
// 
// 
// 
//          console.log(this.FAS)
//          Node.getComponent(MUI).fashu=this.FAS.getComponent(fsc).allfs[KHD.PT-1]
//           
//            
//       
//         });
//            
// }, 1200);
// 
// 
// }
// 
// 
// start(): void {
// 
// if (this.nn==1) {
//  KHD2.Cname=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000+""
//  //KHD2.indl()
//   console.log("llla")
// this.node.getComponent(YP).PlayAudioclip("byp", true, 0);
// 
// if (!KHD) {
//   find("Canvas/New Label").active=true
//   find("Canvas/New Label").getComponent(Label).string="KHD没了"
// }
// 
// } 
// 
// // find("Canvas").getComponent("HPD").checkCb()
// }
// 
// 
// 
// }
