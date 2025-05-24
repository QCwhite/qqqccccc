// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import ComponentBase from "./ComponentBase";

@ccclass('Obstacles')
export default class Obstacles extends ComponentBase {
    ZB:number//坐标
    ObstaclesName:string//障碍物名
FW:number[]=[0]//作用范围
    ObstacleClear()//清除当前坐标障碍物
    {
        GeZiManager.AllObstacles.filter((obs)=>obs.ZB!==this.ZB)
    }
    BZ(preZB:number)
    {
        
        MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
        switch (this.ObstaclesName)
        {
            case "DL"://地雷
          //  console.log(GeZiManager.Tcharacter.shose.TheNumber)
            if(GeZiManager.Tcharacter.shose.TheNumber=="C01"){GeZiManager.dm-=1}
            MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli") ;
//          //  DESManager.Des(this.ZB);
            
                this.ObstacleClear()
                break;
            case "Banana"://香蕉
               // MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.Tcharacter[0].turn8([GeZiManager.Tcharacter[0].faceIs(preZB)])[0],GeZiManager.Tcharacter[0].Pturn,"move")
                //this.ObstacleClear();
               // this.ObstacleClear();
                break;
            case "FlagRed"://旗子red
                if(GeZiManager.Tcharacter.color=="Red")
                {
//                  // MessageCenter.MakeSHMessage("AM",[this.ZB],2,GeZiManager.Tcharacter[0].Pturn,"Qi+")
                   this.ObstacleClear();
                   this.ObstacleClear();
                }
                break;
            case "FlagBlue"://旗子blue
                if(GeZiManager.Tcharacter.color=="Blue")
                {
//                  // MessageCenter.MakeSHMessage("AM",[this.ZB],2,GeZiManager.Tcharacter[0].Pturn,"Qi+")
                   this.ObstacleClear();
                   this.ObstacleClear();
                }
                break;
            case "XJ"://陷阱
//                //负面效果体力+2
                for(let i=0;i<GeZiManager.Tcharacter[0].TNJJ.length;i++)GeZiManager.Tcharacter[0].TNJJ[i]+=2;
//                //给当前上面的角色绑定非即时陷阱,不立刻销毁,等下一次BZ
            
                break;
            default:
                break;
        }
        GeZiManager.Tcharacter=null
    }
LK(){ 
        // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
        // switch (this.ObstaclesName)
        // {//旗子red
        // case "FlagRed": if(GeZiManager.Tcharacter.color=="blue"){

//          //  GeZiManager.Tcharacter[0].turnBan[2]=0


        // }
        // break;
        // case "FlagBlue": if(GeZiManager.Tcharacter.color=="Red"){

//    //GeZiManager.Tcharacter.turnBan[2]=0


        // }
        // break;
        // }

}
JR(){

        // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
        // switch (this.ObstaclesName)
        // {//旗子red
        // case "FlagRed": if(GeZiManager.Tcharacter[0].color=="blue"){

//         //   GeZiManager.Tcharacter[0].turnBan[2]=100


        // }
        // break;
        // case "FlagBlue": if(GeZiManager.Tcharacter[0].color=="Red"){

//   // GeZiManager.Tcharacter[0].turnBan[2]=100


        // }
        // break;
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
// import GeZiManager from "../Manager/GeZiManager";
// import MessageCenter from "../Message/MessageCenter";
// import ComponentBase from "./ComponentBase";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class Obstacles extends ComponentBase {
// 
//     ZB:number//坐标
//     ObstaclesName:string//障碍物名
// FW:number[]=[0]//作用范围
//     ObstacleClear()//清除当前坐标障碍物
//     {
//         GeZiManager.AllObstacles.filter((obs)=>obs.ZB!==this.ZB)
//     }
// 
//     BZ(preZB:number)
//     {
//         
//         MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
//         switch (this.ObstaclesName)
//         {
//             case "DL"://地雷
//             console.log(GeZiManager.Tcharacter.shose.TheNumber)
//             if(GeZiManager.Tcharacter.shose.TheNumber=="C01"){GeZiManager.dm-=1}
//             MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli") ;
//           //  DESManager.Des(this.ZB);
//             
//                 this.ObstacleClear()
//                 break;
//             case "Banana"://香蕉
//                 MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.Tcharacter[0].turn8([GeZiManager.Tcharacter[0].faceIs(preZB)])[0],GeZiManager.Tcharacter[0].Pturn,"move")
//                 this.ObstacleClear();
//                 this.ObstacleClear();
//                 break;
//             case "FlagRed"://旗子red
//                 if(GeZiManager.Tcharacter.color=="Red")
//                 {
//                   // MessageCenter.MakeSHMessage("AM",[this.ZB],2,GeZiManager.Tcharacter[0].Pturn,"Qi+")
//                    this.ObstacleClear();
//                    this.ObstacleClear();
//                 }
//                 break;
//             case "FlagBlue"://旗子blue
//                 if(GeZiManager.Tcharacter.color=="Blue")
//                 {
//                   // MessageCenter.MakeSHMessage("AM",[this.ZB],2,GeZiManager.Tcharacter[0].Pturn,"Qi+")
//                    this.ObstacleClear();
//                    this.ObstacleClear();
//                 }
//                 break;
//             case "XJ"://陷阱
//                 //负面效果体力+2
//                 for(let i=0;i<GeZiManager.Tcharacter[0].TNJJ.length;i++)GeZiManager.Tcharacter[0].TNJJ[i]+=2;
//                 //给当前上面的角色绑定非即时陷阱,不立刻销毁,等下一次BZ
//             
//                 break;
//             default:
//                 break;
//         }
//         GeZiManager.Tcharacter=null
//     }
// LK(){ 
//     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
//     switch (this.ObstaclesName)
//     {//旗子red
//         case "FlagRed": if(GeZiManager.Tcharacter.color=="blue"){
// 
//           //  GeZiManager.Tcharacter[0].turnBan[2]=0
// 
// 
//         }
// break;
// case "FlagBlue": if(GeZiManager.Tcharacter.color=="Red"){
// 
//     //GeZiManager.Tcharacter.turnBan[2]=0
// 
// 
// }
// break;
//     }
//     
// }
// 
// JR(){
// 
//     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
//     switch (this.ObstaclesName)
//     {//旗子red
//         case "FlagRed": if(GeZiManager.Tcharacter[0].color=="blue"){
// 
//          //   GeZiManager.Tcharacter[0].turnBan[2]=100
// 
// 
//         }
// break;
// case "FlagBlue": if(GeZiManager.Tcharacter[0].color=="Red"){
// 
//    // GeZiManager.Tcharacter[0].turnBan[2]=100
// 
// 
// }
// break;
//     }
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
// 
// 
// 
// }
