// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Node, Camera } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../../TS/BASE/ComponentBase";
import  gif1  from "../../../TS/BASE/spineANDgif/gif";
import { v3 } from 'cc';

@ccclass('WeatherM')
export default class weatherM extends ComponentBase {
@property(Node)
  wind:Node | null=null
Wwind(face:number){

     switch (face) {
     case 2:this.wind.angle=-90;this.wind.scale=v3(17,17.5,1)

     break;
     case 4:this.wind.angle=0

     break;
     case 8:this.wind.angle=90;this.wind.scale=v3(17,17.5,1)

     break;

     default:this.wind.angle=180;
     break;
     }





     this.fadeINAndA(this.wind,1600)
     let count: number = 0; // 计数器
// 创建一个间隔定时器，每300毫秒执行一次







     let interval = setInterval(() => {


     this.wind.getComponent(gif1).moveToNextFrame(0, 9, 0); // 执行代码

     count++; // 计数器加1

//  判断是否达到执行次数上限
     if (count >= 6) {
//         清除定时器
     clearInterval(interval);

     this.fadeOutAndDisappear(this.wind,700)

     }
     }, 300);

////cc.tween(this.wind)
     setTimeout(() => {
     this.fadeOutAndDisappear(this.wind,700)
     }, 1800);


}
start(): void {
     this.wind.getComponent(gif1).timeArray=[30,30,30,30,30,30,30,30,30,30,30,30,30]
//  //  this.node.getChildByName("rg").opacity=55
}
shakeCameraAndNode(camera: Camera, node: Node, intensity: number, duration: number) {
     const originalCameraPos = camera.node.position.clone();
     const originalNodePos = node.position.clone();

     let elapsed = 0;
     const fps = 60;

     const interval = setInterval(() => {
     const randomX = (Math.random() - 0.5) * intensity;
     const randomY = (Math.random() - 0.5) * intensity;

     camera.node.setPosition(originalCameraPos.x + randomX, originalCameraPos.y + randomY);
     node.setPosition(originalNodePos.x + randomX, originalNodePos.y + randomY);

     elapsed += 1000 / fps;

     if (elapsed >= duration) {
     clearInterval(interval);
     camera.node.setPosition(originalCameraPos);
     node.setPosition(originalNodePos);
     }
     }, 1000 / fps);
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
// import ComponentBase from "../../../TS/BASE/ComponentBase";
// import { gif } from "../../../TS/BASE/spineANDgif/gif";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class weatherM extends ComponentBase {
// @property(cc.Node)
//   wind:cc.Node=null
// 
// 
// 
// Wwind(face:number){
//     
//     switch (face) {
//         case 2:this.wind.angle=-90;this.wind.scaleY=17.5
//             
//             break;
//             case 4:this.wind.angle=0
//             
//             break;
//             case 8:this.wind.angle=90;this.wind.scaleY=17.5
//             
//             break;
//     
//         default:this.wind.angle=180;
//             break;
//     }
//     
//     
//     
//     
//     
//     this.fadeINAndA(this.wind,1600)
//     let count: number = 0; // 计数器
//  创建一个间隔定时器，每300毫秒执行一次
// 
//     
//  
// 
// 
//     
// 
//     let interval = setInterval(() => {
//         
//         
//         this.wind.getComponent(gif).moveToNextFrame(0, 9, 0); // 执行代码
//         
//     count++; // 计数器加1
//         
//   判断是否达到执行次数上限
//     if (count >= 6) {
//          清除定时器
//     clearInterval(interval);
//         
//     this.fadeOutAndDisappear(this.wind,700)
// 
//        }
//     }, 300);
// 
// //cc.tween(this.wind)
// setTimeout(() => {
//     this.fadeOutAndDisappear(this.wind,700)
// }, 1800);
// 
// 
// }
// 
// 
// start(): void {
//     this.wind.getComponent(gif).timeArray=[30,30,30,30,30,30,30,30,30,30,30,30,30]
//   //  this.node.getChildByName("rg").opacity=55
// }
// 
// 
// 
// 
// 
// 
// 
// shakeCameraAndNode(camera: cc.Camera, node: cc.Node, intensity: number, duration: number) {
//     const originalCameraPos = camera.node.position.clone();
//     const originalNodePos = node.position.clone();
//     
//     let elapsed = 0;
//     const fps = 60;
//     
//     const interval = setInterval(() => {
//         const randomX = (Math.random() - 0.5) * intensity;
//         const randomY = (Math.random() - 0.5) * intensity;
//         
//         camera.node.setPosition(originalCameraPos.x + randomX, originalCameraPos.y + randomY);
//         node.setPosition(originalNodePos.x + randomX, originalNodePos.y + randomY);
//         
//         elapsed += 1000 / fps;
//         
//         if (elapsed >= duration) {
//             clearInterval(interval);
//             camera.node.setPosition(originalCameraPos);
//             node.setPosition(originalNodePos);
//         }
//     }, 1000 / fps);
// }
// 
// 
// 
// 
// 
// 
// }
