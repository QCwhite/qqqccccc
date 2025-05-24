// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, director, find, Label } from 'cc';
const {ccclass, property} = _decorator;

import DTTS from "../../dddd/DTTS";

import AnimalManager from "../Manager/AnimalManager";
import BUIManager from "../Manager/BUIManager";
import GeZiManager from "../Manager/GeZiManager";
import TNanager from "../Manager/TNanager";
import ZManager from "../Manager/ZManager";
import GMessage from "./GMessage";
import MessageCenter from "./MessageCenter";
import { SHMessage } from "./SHMessage";
import { AudioManager } from '../BASE/music';
import { WebSocketManager } from './websocket';
import { NONE } from '../../../@cocos/creator-types/editor/packages/scene/@types/cce/3d/manager/physics-2d/marching-squares';
import { PP } from '../CU/PP';
import { set } from '../../../@cocos/creator-types/editor/packages/scene/@types/cce/utils/misc';
import state from '../game/time/state';
import CustomButton from '../BASE/CButton';
import { TogglePosition } from '../CU/CS';

export interface GetGameAllLoadReadyReq
{
    playername:string;
}

export interface GetGameAllLoadReadyRes
{
    id:MsgId;
    is_all_ready:boolean;
    allreadyplayer:string[];
    error:ErrorCode;
}
export interface GetAllLocationRes
{id:MsgId;
error:ErrorCode;
alllocation:[];}
export interface ChangeLocationRes
{id:MsgId;
error:ErrorCode;
playername:string;
nextlocation:number;
nowlocation:number;
value:number;}

export interface CreateRoomReq {
    roomname: string;  // 房间名称
    password: string;  // 房间密码（可选，取决于您的需求）
}
export interface CreateRoomRes
{
    error:ErrorCode;
}
export interface ConnectRoomReq{
    roomname:string;
    password:string;
}
export interface ConnectRoomRes
{
    error:ErrorCode;
}
export interface GameLoadReadyReq
{
    playername:string;
   
}

export interface GameLoadReadyRes
{
    id:MsgId;
    playername:string;
    error:ErrorCode;
}

export enum MsgId{
    StressTest=888888,

    CreateRoom=0,
    ConnectRoom=1,
    ChangeLocation=2,
    GetAllLocation=3,
    GameStart=4,
    GameMessage=5,
    GamePlayerLoadFinish=6,
    GameEnd=7,
    GameRoomClose=8,
    SetPlayerName=9,
    GetRoomGameMessageList=10,
    GetRoomGameMessageListItem=11,
    ReConnectRoom=12,
    SetRandomLeavePlayerManager=13,
    RandomLeavePlayerManagerSendmsg=14,
    ObtainTimestamp=15,
    OnePlayerLeave=16,
    
    RadomMatchRoomCreate=17,
    RadomMatchRoomPrepare=18,
    RandomMatch=19,

    LeaveRoom=20,

    RandomMatchFail=21,
    RadomMatchCancel=22,


}
            
            
            
            export interface GetAllLocationRes
            {id:MsgId;
            error:ErrorCode;
            alllocation:[];}
            export interface ChangeLocationRes
            {id:MsgId;
            error:ErrorCode;
            playername:string;
            nextlocation:number;
            nowlocation:number;
            value:number;}
            export enum ErrorCode{
                WebSocketErr=0,
                WebSocketSuccess=1,
                PlayerNameEmpty=2,
                CreateRoomSuccess=3,
                CreateRoomFail=4,
                ConnectRoomSuccess=5,
                PasswordORRoomnameErr=6,
                ChangeLocationSuccess=7,
                ChangeLocationFail=8,
                GetAllLocationSuccess=9,
                GetAllLocationFail=10,
                GameStartSuccess=11,
                GameStartNotAtRoomFail=12,
                GameStartNotOwnerFail=13,
                GameMessageSuccess=14,
                GameMessageFail=15,
                GamePlayerLoadFinishSuccess=16,
                GamePlayerLoadFinishFail=17,
                GameRoomClose=18,
                GameEndSuccess=19,
                GameEndFail=20,
                SetPlayerNameSuccess=21,
                SetPlayerNameFail=22,
            
                GetRoomGameMessageListSuccess=23,
                GetRoomGameMessageListRoomNotConnectFail=24,
                GetRoomGameMessageListPlayerNameError=25,
                GetRoomGameMessageListNotHaveList=26,
            
                GetRoomGameMessageListItemSuccess=27,
                
                ReConnectRoomSuccess=28,
                ReConnectRoomFail=29,
            
                SetRandomLeavePlayerManagerSuccess=30,
                SetRandomLeavePlayerManagerFail=31,
            
                RandomLeavePlayerManagerSendmsgSuccess=32,
                RandomLeavePlayerManagerSendmsgFail=33,
                RandomLeavePlayerManagerRoomNull=34,
                RandomLeavePlayerManagerYouNotManager=35,
            
                ObtainTimestampSuccess=36,
                ObtainTimestampFail=37,
            
                RandomMatchFail=38,
                PrepareSuccess=39,
    PrepareFail=40,
    RandomRoomGameStart=41,
            SomeoneHaveInThisLocation=10009,
                None=10086,
                YourGameRoomIsNull=10087,}
            
            export interface CreateRoomReq {
                roomname: string;  // 房间名称
                password: string;  // 房间密码（可选，取决于您的需求）
            }
            
            export interface CreateRoomRes
            {
                error:ErrorCode;
            }
            
            export interface ConnectRoomReq{
                roomname:string;
                password:string;
            }
            
            export interface ConnectRoomRes
            {
                error:ErrorCode;
            }




         //   MsgId OnePlayerLeave=16
    ///玩家离开回复
//当房间里面的人断线退出后会收到这个消息
//MsgId OnePlayerLeave=16
export interface OnePlayerLeaveRes
{
id:MsgId;
playername:string;
 error:ErrorCode;
}

//进入匹配房间后,发送这个请求告诉其他玩家已经准备
//MsgId RadomMatchRoomPrepare=18
///随机匹配房间准备请求
export interface RadomMatchRoomPrepareReq
{
playername:string;
 error:ErrorCode;
}



//MsgId RandomMatch=19
//发送随机匹配的请求
//下面是匹配类型,1v1,3v3,1v3_value=1,1v3_value=3,value表示这个人代表的人数
export enum MatchType{
 oneVone=0,
 moreVmore=1,
 oneVmore=2,//这个暂时不用
 oneVmore_value1=3,
 oneVmore_value3=4,
 default=5
}
///随机匹配请求
export interface RandomMatchReq
{
 matchtype:MatchType;
 playername:string;
}
///随机匹配房间创建回复
//随机匹配房间创建好后要求全部玩家点击准备,接收每个玩家准备的回复,比对allplayer,一旦allplayer里面的人都发准备消息了,ownplayer就发开始,到时间没发开始房间销毁,全部人要退出当前房间,发送LeaveRoomReq

//房间创建成功后的回复
//RadomMatchRoomCreate=17
export interface RadomMatchRoomCreateRes
{
 id:MsgId;
 ownplayername:string;
 allplayer:string[];
 roomname:string;
 password:string;
 error:ErrorCode;
}



//离开房间有两种可能性,一个是断开连接的离开,一个是到时没准备的离开,断连客户端不用管,我这边会记录惩罚并且告诉客户端,非断连而是没准备导致房间销毁的,客户端发LeaveRoomReq,situation填NotPrepare

//LeaveRoom=20
export interface LeaveRoomReq
{
 playername:string;
 situation:PlayerLeaveSituation;
}

export enum PlayerLeaveSituation
{
 None=0,
 NotPrepare=1,
}


export interface LeaveRoomRes
{
 id:MsgId;
 error:ErrorCode;
}
//ErrorCode一般只用判断
//None=10086,
//YourGameRoomIsNull=10087,

//收到这个的时候说明匹配到一起之后有人退出了,客户端重新发送匹配请求
//RandomMatchFail=21
export interface RandomMatchFailRes
{
 id:MsgId;
 error:ErrorCode;
}

//取消匹配的请求
//RadomMatchCancel=22
export interface RandomMatchCancelReq
{
 playername:string;
}

export interface RadomMatchRoomPrepareRes
{ 
    id:MsgId;
    playername:string;
    allplayer:string[];
    roomname:string|null;
    error:ErrorCode;
}
export interface RandomMatchCancelRes
{
 id:MsgId;
 error:ErrorCode;
}
            




















            
            @ccclass
            export default class KHD2 extends Component {
                static Client:any|null=null;
                static Gammer:any|null=null;
            static n="qjc"
            static c=0
            static ln:number=0;
            static dn:number=0;
        
            static JMessage= []; 
            static PT:number[]=[0];//玩家序号，0为观战席
            static xz:number=0
            static FZ:boolean=false;//是否为房主
            static WZ:Node=null;
            static FJN:boolean=true;
            static id:number//唯一id
            static juese:number[]=[];
            static HB:number[]=[0,0,0];
            static Cname:string=null;//用户名
            //118.25.16.45:3001/
            static ingame:number=0;
              static dat: any;
            
                    
            protected onLoad(): void {


                
               
            }
            
            static startPP(){

                const request= {
                    id:19,
                    matchtype: MatchType.oneVone, // 关键参数
                    playername: this.Cname
                };
            
                // 发送网络请求（假设使用WebSocket）
              
                console.log(this.Cname)
                WebSocketManager.instance.ws.send(JSON.stringify(request))
            
            
                
            }










            static  PPOK(K){
KHD2.PT=[]
find("Canvas/SpriteSplash/SpriteSplash").active=true
find("Canvas/SpriteSplash/qingwa").active=true

console.log(K.allplayer)
console.log(K.allplayer[1])
if (K.allplayer.length==2) {
    if (KHD2.Cname==K.allplayer[1]) {
        KHD2.PT=[3,1,3,5]
    }else{   KHD2.PT=[4,2,4,6]}
}
console.log(KHD2.PT)


if (K.error==38) {
    KHD2.stopPP()
}




            }







            static yesPP(){ 
                const request= {
                    id:18,
                    playername:this.Cname,
                    error:18,
            };
        
            // 发送网络请求（假设使用WebSocket）
           
            
            WebSocketManager.instance.ws.send(JSON.stringify(request))}


            static NoPP(){

                const request={
                    id:20,
                    playername: this.Cname,
                    situation: PlayerLeaveSituation.NotPrepare
                };
        
            // 发送网络请求（假设使用WebSocket）
           
            
            WebSocketManager.instance.ws.send(JSON.stringify(request))



            find("Canvas").getComponent(PP).stop()

            }
            

static  stopPP(){


find("Canvas").getComponent(PP).stop()

const request={
    id:22,
    playername: this.Cname,
    situation: PlayerLeaveSituation.None
};

// 发送网络请求（假设使用WebSocket）


WebSocketManager.instance.ws.send(JSON.stringify(request))

}


static youl6(){  
    
    
    find("Canvas").getComponent(PP).stop()

    const request={
        id:22,
        playername: this.Cname,
        situation: PlayerLeaveSituation.None
    };
    
    // 发送网络请求（假设使用WebSocket）
    
    
    WebSocketManager.instance.ws.send(JSON.stringify(request))
}
                   static  start1(): void {
                        //  KHD2.Cname=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000+""
                     
                      const data = {
                        id: 9,
                       playername: KHD2.Cname
                    };
                   
                    WebSocketManager.instance.ws.onopen=function(event) {

                        // find("Canvas/Node").getComponent(Label).string="连上了"
                        WebSocketManager.instance.ws.send(JSON.stringify(data))}
            
                        
                  
                    //  KHD2.socket
                   //   KHD2.socket.onopen = function(event) {
                    //        console.log('WebSocket connection established');
                    //    };
                        
                        // 监听 WebSocket 错误事件
                     //   KHD2.socket.onerror = function(error) {
                      //      console.error('WebSocket error: ' + error);
                      //  };
                        
                        // 监听 WebSocket 消息事件
                        WebSocketManager.instance.ws.onmessage = function(event) {
                            console.log('Message from server ',event.data);
                            let k
                            if (typeof event.data === "object") {
                                k=event.data
                            }else{      k=JSON.parse(event.data)}
                      


                          
  Object.keys(k).forEach( key =>{
                console.log(key,k[key])
        })


                          //  console.log(event.data.id);
                            console.log(k.id);
                            switch (k.id) {
                                case 0:KHD2.BcreatRoom(k.error,k.roomname)//创建房间
                                    
                                    break;
                                    case 1:KHD2.BConnectRoom(k.error,k.roomname)//连接进入
                                    
                                    break;
            
                                    case 2:KHD2.ALLpeaple(k)//有人换位后所有人的坐标
                                    
                                    break;
            
                                    case 3:KHD2.BGETA(k)
                                    
                                    break;
                                    case 4:KHD2.redtos(k)
                                    
                                    break;
            
                                    case 5:KHD2.GM(k)
                                    
                                    break;
                                    case 6:KHD2.BGload(k)
                                    
                                    break;
                                    case 7:KHD2.FJG(k)
                                    
                                    break;
                                    case 8:KHD2.GFJ(k)
                                    
                                    break;
                                    case 9:KHD2.DLO(k)
                                    
                                    break;
                                    case 17:KHD2.PPOK(k)
                                    
                                    break;
                                    case 18:KHD2.redtos(k)
                                    
                                    break;
                                    case 20:KHD2.outroom(k)
                                    
                                    break;
                                    case 21://KHD2.stopPP()
                                    
                                    break;
                                    case 22://KHD2.youl6()
                                    
                                    break;
                                      case 23:KHD2.peoplo(k)
                                    
                                    break;
                                       case 24:KHD2.GetGameALL(k)
                                    
                                    break;
                                    case 38:KHD2.stopPP()
                                    break
                                default:
                                    break;
                            }
                        };
                        
                        // 监听 WebSocket 连接关闭事件
                        WebSocketManager.instance.ws.onclose = function(event) {
                            console.log('WebSocket connection closed');
                        };
            
                    }
            
            
            static creatRoom(FJname:string,PassW:string){
                const data = {
                    id: MsgId.CreateRoom,
                    roomname:FJname,
                password:PassW,
                };
               
               
               
                WebSocketManager.instance.ws.send(JSON.stringify(data))
              // KHD2.Client.on('createroomTF',(data:any)=>{
            //switch (data) {
               // case 'T':KHD2.FZ=true;KHD2.inRoom(FJname,PassW);  
                    
                 //   break;
                 //   case 'F':find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("创建房间失败");
                // /   
                   // break;
            
              //  default:
                  //  break;
            //}
              //})
               
             // }
            
            
            
            
            
                
            }
            static BcreatRoom(error:number,FJname:string){
            
               
               
               if (error==3) {
                KHD2.FZ=true
              KHD2.BConnectRoom(5,FJname)
               }
            
               if (error==4) {
                find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("创建房间失败");
               }
            
            
            
            
            }
               
              
            
            
            
            
            
                
            
            
            static ConnectRoom(FJname:string,PassW:string){
               
               KHD2.FJN=true
                const data = {
                    id: MsgId.ConnectRoom,
                    roomname:FJname,
                password:PassW,
                };
               
               
               
                WebSocketManager.instance.ws.send(JSON.stringify(data))
              // KHD2.Client.on('createroomTF',(data:any)=>{
            //switch (data) {
               // case 'T':KHD2.FZ=true;KHD2.inRoom(FJname,PassW);  
                    
                 //   break;
                 //   case 'F':find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("创建房间失败");
                // /   
                   // break;
            
              //  default:
                  //  break;
            //}
              //})
               
             // }
            
            
            
            
            
                
            }
            
            
            
            
            static BConnectRoom(error:number,FJname:string){
               console.log() 
                
                find("Canvas/New Node/New Label").getComponent(Label).string=FJname
               
               
               
                switch (error) {
                    case  4: find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("房间号或密码错误");
                        
                        break;
                       
                      
                        case  5:


                       

                             find("Canvas/CHU").active=false;
                    //房间重连
                    const data = {
                        id:2,
                        error:0,
                        playername:KHD2.Cname,
                        nextlocation:0,
                        nowlocation:0,
                        value:0,
                      
                      };
                    
              
                    
                    
                      WebSocketManager.instance.ws.send(JSON.stringify(data)) 
            
                
                    KHD2.GETA();
                                  break;

                    case 6:find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("房间号或密码错误");
                    break;

                       }
     
             
              
            
            
                     
                 
                
                   
                
          
                
                
                
            
            
            
            
            
            }
            
static DLO(k){

if (k.error==22) {
    find("Canvas/Label").active=true
     find("Canvas/Label").getComponent(Label).string="已经有人用了这个名字了"
WebSocketManager._instance=null

     setTimeout(()=>{ find("Canvas/Label").active=false},500)
}else{  
    
    GeZiManager.DLCG()



}


}








            static GETA(){
            
                const data = {
                    id:3,
                    error:0,
                    playername:KHD2.Cname,
                   
                  
                  };
                
                
                
                
                  WebSocketManager.instance.ws.send(JSON.stringify(data)) 
            
            
            
            
            
            
            }
            
            
            
            
            
            
            
            
            
            
            static BGETA(data){
           
                
                console.log(data)
                let n
                   for(let oo of data.alllocation){
                    let a=[oo.playername,oo.nextlocation,oo.nowlocation,oo.value]
            
                    //    if (a[2]!=0) {
                     //       find("Canvas/fangJian").children[a[2]].getComponent(DTTS).LK();
                      //     } 
                        
                         //   if (a[2]==7) {
                            //    find("Canvas/fangJian").children[1].getComponent(DTTS).LK();
                         //  find("Canvas/fangJian").children[3].getComponent(DTTS).LK();
                         //  find("Canvas/fangJian").children[5].getComponent(DTTS).LK();
                          //  }
                          //  if (a[2]==8) {
                          //      find("Canvas/fangJian").children[2].getComponent(DTTS).LK();
                         //   find("Canvas/fangJian").children[4].getComponent(DTTS).LK();
                         //   find("Canvas/fangJian").children[6].getComponent(DTTS).LK();
                          //  }
                  
                  
                  
                  
                  
                  
                        if (a[1]!=0&&a[1]<7) {
                    find("Canvas/fangJian").children[a[1]].getComponent(DTTS).BC(a[0]);
                
                } 
                
                    if (a[1]==7) {
                        find("Canvas/fangJian").children[1].getComponent(DTTS).BC(a[0])
                   find("Canvas/fangJian").children[3].getComponent(DTTS).BC(a[0])
                   find("Canvas/fangJian").children[5].getComponent(DTTS).BC(a[0])
                find("Canvas/fangJian").children[7].getComponent(DTTS).BC(a[0])
                    }
                    if (a[1]==8) {
                        find("Canvas/fangJian").children[2].getComponent(DTTS).BC(a[0])
                    find("Canvas/fangJian").children[4].getComponent(DTTS).BC(a[0])
                    find("Canvas/fangJian").children[6].getComponent(DTTS).BC(a[0])
                find("Canvas/fangJian").children[8].getComponent(DTTS).BC(a[0])
                    }
                
            
            
            KHD2.c+=a[3]
            
            
                
                }
                
             
                console.log(KHD2.c)
                //}
                this.FJN=true;
                for(let a of data.alllocation){
                    
                   // if(a[1]==0){this.FJN=false;break;}
                        }
                
                        console.log(this.FJN)
                if(KHD2.c==6&&this.FJN &&this.FZ){ find('Canvas/fangJian/kaishi').active=true
                }
                console.log(data)
                   }
            
            
            
            
            
            static ALLpeaple(data){
       if (KHD2.FJN) {
            
        
        
        
                let a=[]
            
            Object.keys(data).forEach( key =>{
                a.push(data[key])
        })
            



    











        
            console.log(a)
                //for(let a of data){
                    if (a[4]!=0) {
                        find("Canvas/fangJian").children[a[4]].getComponent(DTTS).LK();
                       } 
                    
                        if (a[4]==7) {
                            find("Canvas/fangJian").children[1].getComponent(DTTS).LK();
                       find("Canvas/fangJian").children[3].getComponent(DTTS).LK();
                       find("Canvas/fangJian").children[5].getComponent(DTTS).LK();
                        }
                        if (a[4]==8) {
                            find("Canvas/fangJian").children[2].getComponent(DTTS).LK();
                        find("Canvas/fangJian").children[4].getComponent(DTTS).LK();
                        find("Canvas/fangJian").children[6].getComponent(DTTS).LK();
                        }
              
              
              
              
              
              
                    if (a[3]!=0) {
                find("Canvas/fangJian").children[a[3]].getComponent(DTTS).BC(a[2]);
               } 
            
                if (a[3]==7) {
                    find("Canvas/fangJian").children[1].getComponent(DTTS).BC(a[2])
               find("Canvas/fangJian").children[3].getComponent(DTTS).BC(a[2])
               find("Canvas/fangJian").children[5].getComponent(DTTS).BC(a[2])
                }
                if (a[3]==8) {
                    find("Canvas/fangJian").children[2].getComponent(DTTS).BC(a[2])
                find("Canvas/fangJian").children[4].getComponent(DTTS).BC(a[2])
                find("Canvas/fangJian").children[6].getComponent(DTTS).BC(a[2])
                }
            
            
               
            
            KHD2.c+=a[5]
            console.log(KHD2.c)
            //}
            this.FJN=true;
            Object.keys(data).forEach( key =>{
                
                if(data[key][3]==0){this.FJN=false;}
        })
            
                    
            
                    console.log(this.FJN)
            if(KHD2.c==6&&this.FJN &&this.FZ){ find('Canvas/fangJian/kaishi').active=true
            }else{find('Canvas/fangJian/kaishi').active=false}
            console.log(data)
               }}
            
            
            
            
            static Gamemessa(){}
            
            static BPstart(data){
                let c=JSON.parse(data);
                    
                    KHD2.JMessage.push(c)
                    for(let v of KHD2.JMessage){
                       if(v[0]==KHD2.dn+1){
                        
                        KHD2.dn++
                    
                    let a=new GMessage(v[1].Type,v[1].Command,v[1].Content,v[1].from,v[1].SHtype)
                    
                    console.log(data)
                    MessageCenter.SendMessage(a)
                        KHD2.JMessage.splice(KHD2.JMessage.indexOf(v),1);
                       } 
                    
                    }
                    
                    
                    KHD2.ln=KHD2.dn;
                    
                        
                   
                director.loadScene("chooseui",()=>{
                   let a=new SHMessage("CH",0,0,1,"To")
                    MessageCenter.SendMessage(a);
                
            })
            
            } 
            
            static send(sh:GMessage){
            
            let a=[KHD2.ln+1 ,sh,"1"]
            let b=JSON.stringify(a)
            const data = {
                id:5,
                error:12,
                gamemessage:b
              
              };
            console.log(data)
            
            WebSocketManager.instance.ws.send(JSON.stringify(data))
            KHD2.ln++;
            }
            
            
            
            
            
            
            
            static redtos(data){
            
            switch (data.error) {
                case 11: 
             
                
                director.loadScene("chooseui",()=>{
                   let a=new SHMessage("CH",0,0,1,"To")
      MessageCenter.SendMessage(a);
                    
                    AudioManager.instance.stopAll(1.5)
                    AudioManager.instance.ZJP("bgm",3 ,{
                        loop: true,
                        volume: 0.8,
                        fadeIn: 2
                    })
                    
                    })
            
                    
                    break;
                    case 12:find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("不在房间内");
                    
                    break;
                    case 13:find("Canvas/CHU").children[2].getComponent(DTTS).WZTS("你不是房主");
                    
                    break;
                    case 10086: 
             
                    
                    
                    director.loadScene("chooseui",()=>{
                       let a=new SHMessage("CH",0,0,1,"To")
          MessageCenter.SendMessage(a);
                        
                        AudioManager.instance.stopAll(1.5)
                        AudioManager.instance.ZJP("bgm",3 ,{
                            loop: true,
                            volume: 0.8,
                            fadeIn: 2
                        })
                        
                        })
                
                        
                        break;


 case 10086: 
             
                    
                    
                    director.loadScene("chooseui",()=>{
                       let a=new SHMessage("CH",0,0,1,"To")
          MessageCenter.SendMessage(a);
                        
                        AudioManager.instance.stopAll(1.5)
                        AudioManager.instance.ZJP("bgm",3 ,{
                            loop: true,
                            volume: 0.8,
                            fadeIn: 2
                        })
                        
                        })
                
                        
                        break;

 case 41: 
             
                    
                    
                    director.loadScene("chooseui",()=>{
                       let a=new SHMessage("CH",0,0,1,"To")
          MessageCenter.SendMessage(a);
                        
                        AudioManager.instance.stopAll(1.5)
                        AudioManager.instance.ZJP("bgm",3 ,{
                            loop: true,
                            volume: 0.8,
                            fadeIn: 2
                        })
                        
                        })
                
                        
                        break;


                default:
                    break;
            }
            
            
            
            }
            
            
            static BGload(K){
                console.log(K)
                AudioManager.instance.stopAll(1)
                AudioManager.instance.ZJP("bgm",3 ,{
                    loop: true,
                    volume: 0.8,
                    fadeIn: 2
                })
             
                if(K.valuesum==6&&KHD2.PT.includes(1)){
             MessageCenter.MakeSHMessage("AM",[0],0,0,"CX");
             console.log(K)
            }}
            
            
            static GM(data){
            
            
                let c=JSON.parse(data.gamemessage);
                    
                KHD2.JMessage.push(c)
                for(let v of KHD2.JMessage){
                   if(v[0]==KHD2.dn+1){
                    
                    KHD2.dn++
                
                let a=new GMessage(v[1].Type,v[1].Command,v[1].Content,v[1].from,v[1].SHtype)
                
                console.log(data)
                MessageCenter.SendMessage(a)
                    KHD2.JMessage.splice(KHD2.JMessage.indexOf(v),1);
                   } 
                
                }
                
                
                KHD2.ln=KHD2.dn;
                
            
            
            
            
            }
            
            static FJG(data){
               KHD2.PT=[0]
            KHD2.FZ=false
            KHD2.FJN=false
               director.loadScene("CS", function() {AudioManager.instance.stopAll(1);});
            
            
            
            
            }
            
            
            
            static GFJ(data){
            KHD2.PT=[0]
            KHD2.FZ=false
            KHD2.FJN=false
            


console.log(data)

            if (data.error==18) {
                find("Canvas").getComponent(PP).stop()

            }
            }
            





static enmiLeave(k){

  KHD2.PT=[0]
            KHD2.FZ=false
            KHD2.FJN=false
            

  director.loadScene("CS", function() {AudioManager.instance.stopAll(1);});

}



static outroom(k){

if (k.situation==2&&this.FJN) {
    KHD2.back()
}


}


static back(){
      let a
      if (KHD2.PT.length==1) {
      a=KHD2.PT[0]
      }else if(KHD2.PT[0]==3){a=7}else{a=8}

 
     let j=0
     


  if(a==0){j=0}else if (a==7||a==8) {j=-3
      }else{j=-1}



      
      if (KHD2.PT[0]==0) {
      j=0
      }

      const data = {
      id:2,
      error:0,
      playername:KHD2.Cname,
      nextlocation:0,
      nowlocation:a,
      value:j,

      };



      WebSocketManager.instance.ws.send(JSON.stringify(data))
      



      if (KHD2.PT[0]==0) {
            j=0
            }
      let m=0
      if (KHD2.FZ) {
            m=2
      }
            const data1 = {
                  id:20,
                  playername: KHD2.Cname,
                  situation: m,
          
            };
      
      
            KHD2.PT=[0]
            KHD2.FZ=false
            KHD2.FJN=false
      
            WebSocketManager.instance.ws.send(JSON.stringify(data1))
      director.loadScene("CS", function() {})}


static GetGameALL(k){

if (!k.allreadyplayer.includes(KHD2.Cname)) {
    const data = { id:23,
    playername:KHD2.Cname
  
  };
  
  WebSocketManager.instance.ws.send(JSON.stringify(data))
}

if (k.is_all_ready) {
    state.JJW=true;
   GeZiManager.blueBan();
 state.Pchange()
}

}

static GetGameALLp(){

 const data = { 
    id:24,
    playername:KHD2.Cname
  
  };
  
  WebSocketManager.instance.ws.send(JSON.stringify(data))


}




static peoplo(k){


switch (k.error) {
       
    
    
    case 42:
        
        break;
        case 43:setTimeout(()=>{     const data = { id:23,
    playername:KHD2.Cname
  
  };
  
  WebSocketManager.instance.ws.send(JSON.stringify(data))},100)
        
   
        
        break;
          case 44:state.JJW=true;
   GeZiManager.blueBan();
 state.Pchange()
        
        break;


    default:
        break;
}
}






            }
            