// //import KHD22 from "../Message/KHD22";

import { _decorator, Node, Camera, Button, director, find ,Animation} from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import { SHMessage } from "../Message/SHMessage";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import CCS from "../UIS/CCS";
import timeC from "../UIS/timeC";
import btc from "./butcontrol";
import playimage from "./playimage";
import KHD2 from "../Message/KHD2";
import AnimalManager from "../Manager/AnimalManager";
import fsc from "./fashucontrol";
import MUI from "../UIS/MMUI/MUI";
import fimage from "./fashuimage";
import DJT from "./DJT";
import { AudioManager } from '../BASE/music';
import { Vec3, tween } from 'cc';
import { start } from 'repl';




@ccclass('Choose')
export default class Choose extends ComponentBase {
 DP:number=1;
    sst:number=1;
    BJ:string[]=[]
    cj:string[]=[]
    juese:string[]=["0","1","2","3","4","5","6"];//按1,2,4,3,5,6存
    lun:number[][]=[[3],[4],[1],[2,4],[3,5],[6]];//轮次,按玩家选择顺序来存
   XU:number=0;//记录点击了几次
    tj:Node=null;
    tj2:Node=null;
   KYD:boolean=false;
   stb:Node[]=[];
   bu:Node=null;
   re:Node=null;
   pi:playimage[]=[];
   FAS:Node=null;
 YJR:boolean=false

   @property(Camera)
   private mainCamera: Camera  = null; // 主摄像机


   
 private _originalCameraPos: Vec3 = new Vec3();
    private _originalNodePos: Vec3 = new Vec3();
    private _isShaking: boolean = false;
    private _currentIntensity: number = 0;

    /**
     * 同时震动相机和节点
     * @param camera 目标相机组件
     * @param node 需要震动的节点
     * @param intensity 震动强度
     * @param duration 持续时间（秒）
     */
    public shakeCameraAndNode(camera: Camera, node: Node, intensity: number, duration: number) {
        if (this._isShaking) {
            this.stopShakeImmediately();
        }

        // 记录原始位置
        Vec3.copy(this._originalCameraPos, camera.node.position);
        Vec3.copy(this._originalNodePos, node.position);

        this._currentIntensity = intensity;
        this._isShaking = true;

        // 使用tween实现衰减震动
        tween(this)
            .to(duration, { _currentIntensity: 0 }, {
                onUpdate: (target: this) => {
                    this.applyShake(camera.node, node, target._currentIntensity);
                },
                easing: 'sineOut' // 添加缓动效果使震动更自然
            })
            .call(() => {
                this.resetPositions(camera.node, node);
                this._isShaking = false;
            })
            .start();
    }

    // 应用单帧震动
    private applyShake(cameraNode: Node, targetNode: Node, intensity: number) {
        // 生成随机偏移（圆形分布更自然）
        const angle = Math.random() * Math.PI * 2;
        const offsetX = Math.cos(angle) * intensity;
        const offsetY = Math.sin(angle) * intensity;

        // 设置新位置
        cameraNode.setPosition(
            this._originalCameraPos.x + offsetX,
            this._originalCameraPos.y + offsetY,
            this._originalCameraPos.z
        );

        targetNode.setPosition(
            this._originalNodePos.x + offsetX,
            this._originalNodePos.y + offsetY,
            this._originalNodePos.z
        );
    }

    // 立即停止震动
    public stopShakeImmediately() {
        this.unscheduleAllCallbacks();
        tween(this).stop();
        this.resetPositions(this.node.scene.getComponentInChildren(Camera).node, this.node);
        this._isShaking = false;
    }

    // 重置位置
    private resetPositions(cameraNode: Node, targetNode: Node) {
        cameraNode.setPosition(this._originalCameraPos);
        targetNode.setPosition(this._originalNodePos);
    }

    // 自动清理
    protected onDestroy() {
        this.stopShakeImmediately();
    }


   LCC(s1:string,s2:string){
    
if(this.hasOverlap(this.lun[this.XU],KHD2.PT)){ 
  find("Canvas/Main Camera/background/juese background/cS").getComponent(Button).interactable=true;
    if(this.XU==0){MessageCenter.MakeGMessage("CH",-1,[s1,s2],1,"choose")}
    else if(this.XU==1){MessageCenter.MakeGMessage("CH",0,[s1,s2],1,"choose")}
    else {MessageCenter.MakeGMessage("CH",KHD2.PT[KHD2.xz],[s1,s2],1,"choose")}}

    if(s1==s2){}else{ this.tj=this.tj2;
        this.tj2=null;}

   }
  
   
   
    fixui(pi:number,name:string)//修改ui
    {
        
       
        if(pi==-1)
        {
            let x=this.bu.children[0].getChildByName('-1b image').getComponent(playimage);
            x.changeui(name);
            
        }
        else if(pi==0)
        {
            let x=this.re.children[0].getChildByName('0b image').getComponent(playimage);
            x.changeui(name);
        }
      
        else if(pi==1)
        {
            let x=this.bu.children[1].getChildByName('p1 image').getComponent(playimage);
            x.changeui(name);
            
        }
        else if(pi==2)
        {
            let x=this.re.children[1].getChildByName('p2 image').getComponent(playimage);
            x.changeui(name);
            
        }
        else if(pi==3)
        {
            let x=this.bu.children[2].getChildByName('p3 image').getComponent(playimage);
            x.changeui(name);
           
        }
        else if(pi==4)
        {
            let x=this.re.children[2].getChildByName('p4 image').getComponent(playimage);
            x.changeui(name);
            
        }
        else if(pi==5)
        {
            let x=this.bu.children[3].getChildByName('p5 image').getComponent(playimage);
            x.changeui(name);
            
        }
        else
        {
            let x=this.re.children[3].getChildByName('p6 image').getComponent(playimage);
            x.changeui(name);
            
        }
  
     
        //if(this.nowlun==7) 转换场景 
    }

    

 onLoad(){
 
        MessageCenter.Managers.push(this)
      console.log(MessageCenter.Managers)
        this.re=find("Canvas/Main Camera/background/redside")
        this.bu=find("Canvas/Main Camera/background/blueside")
        
        
}

start(): void {
    this.FAS=find("Canvas/Main Camera/background/fashu background")


    //director.preloadScene("SL", (err) => {
    //    if (err) {
       //     console.error('预加载场景失败:', err);
       //     return;
       // }
  //  })

   let o=function(){}

   this.YJR=false
    this.node.getComponent(DJT).startCountdown(21,o)
console.log(KHD2.PT)
}




        tothis(){
   
if (KHD2.PT.includes(this.lun[this.XU][0])) {
  




    this.shakeCameraAndNode(this.mainCamera,find("Canvas/Main Camera/background"),20,0.4)
}



    for(let a of this.stb){if(this.juese.includes(a.name)||this.BJ.includes(a.name)||this.cj.includes(a.name)){a.getComponent(btc).td();}else{a.getComponent(btc).tl();}}
}
queding(){

    this.shakeCameraAndNode(this.mainCamera,find("Canvas/Main Camera/background"),8,0.05)
   
    
switch (this.XU) {
    case 0:MessageCenter.MakeGMessage("CH",0,this.tj.name,KHD2.PT[KHD2.xz],"Ban");
        
        break;
        case 1:MessageCenter.MakeGMessage("CH",1,this.tj.name,KHD2.PT[KHD2.xz],"Ban");
        
        break;

    default:MessageCenter.MakeGMessage("CH",KHD2.PT[KHD2.xz],this.tj.name,1,"Pchoose")
        break;
}
//this.node.children[7].active=true;this.node.children[7].getComponent(Button).enabled=false;
//find("Canvas/Main Camera/background/shang/time").getComponent(timeC).resetTimer();
find("Canvas/Main Camera/background/juese background/cS").getComponent(Button).interactable=false;
this.KYD==false;
MessageCenter.MakeGMessage("CH",KHD2.PT[KHD2.xz],this.tj.name,1,"PASS")
console.log(this.juese);
if (KHD2.PT.length>1) {
    KHD2.xz++
  }  
}

shanchu(arr:any,target:any){

    for (let i: number = arr.length - 1; i >= 0; i--) {
      if (arr[i] == target) {
        arr.splice(i, 1);  // 使用splice方法删除匹配的元素
      }
    }




}


BTG(){
let o=function(){
    this.node.getComponent(Choose).togame()
}
this.YJR=true
find("Canvas/Main Camera/background/juese background/babda/BZS").active=true
this.node.getComponent(DJT).startCountdown(21,o)
    
}






togame(){  


    let ac:string[];
    ac= this.juese.slice();
this.node.parent.getComponent(Animation).play();
 let B =find("Canvas/Main Camera/background/fashu background").getComponent(fsc).Bfashu
 let R= find("Canvas/Main Camera/background/fashu background").getComponent(fsc).Rfashu
 let G= find("Canvas/Main Camera/background/fashu background").getComponent(fsc).Gfashu
setTimeout(() => {
  
  
  director.loadScene("SL", function() {
        // 将信息传递给下一个场景
        
            // 获取场景中的目标节点
            let myNode =find("Canvas/DituManager/New Node/AnimalManager")
    //  let Node = director.getScene().getChildByName('Canvas').getChildByName('UIManager').children[5].children[0].children[0]
            
           // console.log(myNode)
            // 获取目标节点上的目标脚本组件，将数据赋值给对应的属性
          

            myNode.getComponent(AnimalManager).juese=ac
        find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).BLfas=B
        find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).RLfas=R
        find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).fashu=G
          //  console.log(this.FAS)
      //   Node.getComponent(MUI).fashu=this.FAS.getComponent(fsc).allfs[KHD2.PT-1]
         //   console.log(myNode.getComponent(AnimalManager).juese)
            
      
        });
           
},0);
  
    
}



ReceiveMessage(message: Message){
  
if(message instanceof SHMessage&&message.Type=="CH"){

switch (message.SHtype) {
   
   
    case "choose":
        this.fixui(message.Command,message.Content[1]);
    let z=this.cj.indexOf(message.Content[0]);
   this.cj.splice(z,1)
    ;this.cj.push(message.Content[1]);
   
   
  
    for(let a of this.stb){if(this.juese.includes(a.name)||this.BJ.includes(a.name)||this.cj.includes(a.name)){a.getComponent(btc).td();}else{a.getComponent(btc).tl();}}

        break;
        case "Pchoose":
        for(let a of this.pi){if(message.Command==a.p){a.qd();}}
        
        this.juese[message.Command]=message.Content;
        for(let a of this.stb){if(this.juese.includes(a.name)||this.BJ.includes(a.name)||this.cj.includes(a.name)){a.getComponent(btc).td();}else{a.getComponent(btc).tl();}}
        break;
        case "Ban":this.BJ[message.Command]=message.Content;this.tothis(); for(let a of this.pi){if(message.from==a.p){a.qd();}}
        
        break;
        
    case "PASS": 
    let o=function(){
        // this.node.getComponent(Choose).togame()
     }
    this.node.getComponent(DJT).startCountdown(21,o)
    let c=this.lun[this.XU].indexOf(message.Command);
    this.lun[this.XU].splice(c,1)
    
    console.log(this.lun[this.XU]);if(this.lun[this.XU].length==0){this.XU++;

if(this.XU==6){this.BTG()}else{

        if(this.hasOverlap(this.lun[this.XU],KHD2.PT)){this.KYD=true;this.tothis();
            for(let a of this.pi){if(this.lun[this.XU].includes(a.p)){a.dao();}}} 
            if (this.lun[this.XU][0]%2==1) {
              find("Canvas/Main Camera/background/juese background/babda/BZS").active=true
              find("Canvas/Main Camera/background/juese background/babda/RZS").active=false
            }else{
              find("Canvas/Main Camera/background/juese background/babda/BZS").active=false
              find("Canvas/Main Camera/background/juese background/babda/RZS").active=true
        
            }      
}
        }

      
        break;

        default:
         
          
      

        this.XU=message.Content;console.log(this.XU);if(this.hasOverlap(this.lun[this.XU],KHD2.PT)){this.KYD=true;this.tothis();} 
        console.log("xz")
        for(let a of this.pi){if(this.lun[this.XU].includes(a.p)){a.dao();}}
        break;
    }

}
}






hasOverlap(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          return true; // 如果找到重叠数字，则返回true
        }
      }
    }
    return false; // 如果没有找到重叠数字，则返回false
  }





}
