// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
import { _decorator, Component, Node, Camera, UIOpacity, Vec3, tween } from 'cc';
const {ccclass, property} = _decorator;
import MTX from "../../pictures/TX/MTX/MTX";
import DXX from "../equipment/accessory/DXX";
import BXX from "../equipment/body/BXX";
import CXX from "../equipment/shose/CXX";
import weapon from "../equipment/weapon/weapon";
import turn from "../game/time/turn";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import KHD2 from "../Message/KHD2";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import ComponentBase from "./ComponentBase";
import { gif1 } from "./spineANDgif/gif";
import { Sprite } from 'cc';
import { Color } from 'cc';
import HUI from '../UIS/HUI';
import { AudioManager } from './music';

@ccclass
export default class realThing extends ComponentBase{
lastZB:number=0;
  TNJJ: number[]=[0,0,0,0,0,0,0,0,0,0];
  ice: number=0;
  KB:number=0//
MZ:number=0
CZ:number=0
DY:number=0
QX:number=0
fly:boolean=false
D05:number=1
  UI:ComponentBase[]=[];
  GD: number;
    FH2(i:number,FT:number,HP:number){}
    K() {
    
    }
    XRJ:number=0
  
    YS:boolean=false  
  WK: any;
  wk: any;
  cdl:boolean=true
    turnBan: any;
   @property(Number)
    zyx:number=0.1
   shop2: ComponentBase[]=[];
  turn1: any[]=[];
  DZD:boolean=true
    idle() {
     
    }
    MAXWAT: number=3;
  faceTo: number;//朝向
  faceHurt: number;//受伤面
  speed: number;//移速
  walkWay: number = 0;//移动方式
  CanTmove: number[] = [];//不能移动或者移动受阻的方位

  HP: number = 0;
MaxHP: number = 0;
qi:number=0
  WD: Boolean = false;//防风
  M:string = "正常";//质量，用于判断风吹和击退等，补充玩法使用
  Mn:number=1
  ghost: Boolean = false;//是否有碰撞体积
  DiXing: string = "grass";//所处地形
  ZB: number = 0;//坐标，1到64
  y: number = 0;//y，从下往上，1到8
  x: number = 0;//x，从左往右，1到8
  tt: string = "tree"// 类型 
  tname:string = "aee"// 类型 
  sh:number=0;
gif:gif1=null
color:string="green"
kill3:ComponentBase[] = [];
kill2:ComponentBase[] = [];
  walk1:ComponentBase[] = [];
  walk2:ComponentBase[] = [];
  walk3:ComponentBase[] = [];
  move3:ComponentBase[] = [];
  move2: ComponentBase[] = [];
   attack25: any;
    ooo: number;
  kcd: boolean=true;
  Pturn: number=0;
  WAT:number=0;
   attack35: any;
   timeArray:number[];
   gui:boolean=false

   weapon: weapon = null;//武器
   body:BXX = null//身体（盔甲） B

   shose:CXX = null//鞋子 C
   accessory:DXX = null//饰品 D

  YXJ:number=0;
  S02:number=0;
LST:number=0
   deadgif(){}


onLoad(): void {
  this.gif=this.node.getComponent(gif1)
if(this.gif){this.gif.timeArray=this.timeArray}
this.tname=this.tt
}



  start() {
    this.setXY(0.6);
this.Pturn=this.ZB*-1
  AudioManager.instance.ZJP("hit",24);
  }


  getdis(n:number){
    let x1;
    let x2;
    let y1;
    let y2;
        
        if(this.ZB%8==0){x1=8}else {x1=this.ZB%8;}
            y1=Math.ceil(this.ZB/8);
        if(n%8==0){x2=8}else {x2=n%8;}
            y2=Math.ceil(n/8);
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

getc(nu:number){

if (nu>=10) {
  let k=nu.toString()
  let j
  switch (k[0]) {
    case "1":j=GeZiManager.P1
      break;
      case "2":j=GeZiManager.P2
      break;
      case "3":j=GeZiManager.P3
      break;
      case "4":j=GeZiManager.P4
      break;
      case "5":j=GeZiManager.P5
      break;
      case "6":j=GeZiManager.P6
      break;
    default:
      break;
  }
 return j.CHF[parseInt(k[1])]
}else{
  switch (nu) {
    
    
     case 1:return GeZiManager.P1
        
        break;
        case 2:return GeZiManager.P2
        
        break;
        case 3:return GeZiManager.P3
        
        break;
        case 4:return GeZiManager.P4
        
        break;
        case 5:return GeZiManager.P5
        
        break;
        case 6:return GeZiManager.P6
        
        break;
  case -10:return new realThing()
     default:return null
        break;


  }}
  } 



  To(ZB: number,time:number) {
    if(this.move2!=null){for(let w of this.move2){w.Move2(ZB,this.Pturn,time);}}
    GeZiManager.shanchu(GeZiManager.BanMove, this.ZB);
   
    const b=this.ZB
    this.ZB = ZB;


      
  GeZiManager.KCLR()




   
 setTimeout(()=>{  GeZiManager.getQin(this.ZB,this.ZB);if(!this.fly){GeZiManager.DLBZ(this.ZB,b,false)}},time*1000+20) 

//  console.log(this.ZB)
//console.log(b)



this.setXY(time);
    if (this.WD) { GeZiManager.shanchu(GeZiManager.WD, this.ZB); }


    if(this.move3!=null){for(let w of this.move3){w.Move3(this.ZB,this.Pturn);}}
    this.moveto(time,this.ZB);

  }//移动到某个坐标







  move(face: number, dis: number,zi?:boolean) {
  let k=true;
  if (face==0) {
    k=false
  }
  if(this.x==1&&[1,4,7].includes(face)){k=false}
  if(this.x==8&&[9,6,3].includes(face)){k=false}
  if(this.y==1&&[1,2,3].includes(face)){k=false}
  if(this.y==8&&[7,8,9].includes(face)){k=false}
    
  
  if (this.color=="Blue") {
    for (let o of GeZiManager.BQ) {
     if((o.includes(this.ZB)&&!o.includes(this.findGe(face, dis)))||(!o.includes(this.ZB)&&o.includes(this.findGe(face, dis)))){
      
k=false



     }
      
    }
  }
  if (this.color=="Red") {
    for (let o of GeZiManager.RQ) {
     if((o.includes(this.ZB)&&!o.includes(this.findGe(face, dis)))||(!o.includes(this.ZB)&&o.includes(this.findGe(face, dis)))){
      
k=false



     }
      
    }
  }
  






  if(this.ghost==true){
   
      if (this.findGe(face, 1) != 66&&k) {
        for (let i = 1; i <= dis; i++) {
          
         // if ((GeZiManager.BanMove.includes(this.findGe(face,1))==false)&&this.kcd&&this.findGe(face, 1) != 66&&k) {
       




        if (this.tt == "box") { GeZiManager.shanchuALL(GeZiManager.boxs, this.ZB) }
        if(this.move2!=null){for(let w of this.move2){w.Move2(this.findGe(face,dis),this.Pturn,0.8);}}
       
        this.ZB = this.findGe(face, 1)
      GeZiManager.getQin(this.ZB,this.ZB);
      
          }}
    
    //}
    




   } else{


   
  // console.log(this.kcd)
   
      for (let i = 1; i <= dis; i++) {



        if(this.move2!=null){for(let w of this.move2){w.Move2(this.findGe(face,dis),this.Pturn,0.8);}}


        if ( GeZiManager.boxs.includes( this.findGe(face, 1))&&GeZiManager.BanMove.includes(this.findGe(face, 1))) {
          MessageCenter.MakeSHMessage("AM",[this.findGe(face, 1)],[face,0.3],this.Pturn,"move")
        }  

        if ((GeZiManager.BanMove.includes(this.findGe(face,1))==false)&&this.kcd&&this.findGe(face, 1) != 66&&k) {
         
          GeZiManager.shanchu(GeZiManager.BanMove, this.ZB);
          if (this.tt == "rock") { GeZiManager.shanchu(GeZiManager.rock, this.ZB) }

          if (this.tt == "box") { GeZiManager.shanchuALL(GeZiManager.boxs, this.ZB) }
//console.log(GeZiManager.boxs)

          if (this.WD==true) {
            GeZiManager.shanchu(GeZiManager.WD, this.ZB);
          
          }
          const b=this.ZB
      
            this.ZB = this.findGe(face, 1)
       
            if (this.tt == "box") { GeZiManager.boxs.push(this.ZB)}

if (this.tt=="human"||this.tt=="pig") {
  GeZiManager.getQin(this.ZB,this.ZB);
}
        if (this.gui==false) {
        //  console.log(this.ZB)
       //   console.log(b)
        //  console.log(this.findGe(face, 1))
          let c=false
if (zi) {
  c=true
}

if(!this.fly){          GeZiManager.DLBZ(this.ZB,b,c)}

        } 

  GeZiManager.KCLR()
 
    
 
   
       
     
         
        }
      



     

    

    }
    
  }

 
this.kcd=true;
this.setXY(0.8);
if(this.move3!=null){for(let w of this.move3){w.Move3(this.ZB,this.Pturn);}}


  }//朝某个方向移动dis格
  Move3(ZB: number,pt:number) {
   
  }


getTG(N:string){

switch (N) {
  case "sWater":
    
    break;

  default:
    break;
}





}



setXY(time: number) {
  // ==================== 坐标计算 ====================
  // 计算网格坐标（保留原始逻辑）
   // ========== 坐标计算（保留原有逻辑） ==========
      // ========== 坐标计算（保留原有逻辑） ==========
      this.x = (this.ZB % 8 === 0) ? 8 : this.ZB % 8;
      this.y = Math.ceil(this.ZB / 8);
  
      // ========== 缩放比例计算（保留原有逻辑） ==========
      let targetScale;
      switch (this.y) {
          case 1: targetScale = 1; break;
          case 2: targetScale = 0.95; break;
          case 3: targetScale = 0.9; break;
          case 4: targetScale = 0.85; break;
          case 5: targetScale = 0.8; break;
          case 6: targetScale = 0.75; break;
          case 7: targetScale = 0.7; break;
          case 8: targetScale = 0.65; break;
          default: targetScale = 1; break;
      }
  
      // ========== 特殊地块逻辑（修改点：不再修改 zyx） ==========
      if (this.tt === "box" && GeZiManager.waterPool.includes(this.ZB)) {
          this.node.getComponentInChildren(MTX).playFrameAnimation1("water");
          // 注意：移除了错误的 zyx -= 1 操作
          targetScale *= 0.9; 
      }
      const BASE_LAYER_INTERVAL = 100; 
      // const MAX_ZYX = 10; // 根据需求定义 zyx 最大值（例如角色 zyx=1，按钮 zyx=0）
   
       // 计算基础层级（y 越小值越大）
       const baseLayer = (9 - this.y) * BASE_LAYER_INTERVAL;
   
       // 最终 Z 轴坐标 = 基础层级 - zyx（zyx 越大，层级越高）
       // 注意：使用减法确保 zyx=1 的层级 > zyx=0
      this.XRJ = baseLayer + this.zyx; 
   
       // 边界处理：y=8 时强制置底
       if (this.y === 8) {
        this.XRJ = -1000; 
       }
for (let a =0;a<= this.node.parent.children.length-1;a++) {
 if (this.node.parent.children[a].getComponent(realThing) instanceof realThing&&this.node.parent.children[a].getComponent(realThing).XRJ>this.XRJ) {
  this.node.setSiblingIndex(a-1)
  break;
 }
if (a==this.node.parent.children.length-1) {
  this.node.setSiblingIndex(a)
}

}



      // ========== 层级控制核心逻辑（关键修复） ==========
      /** 
       * 层级计算公式：
       * - y 越小层级越高（主导因素）
       * - 同 y 层时，zyx 越大层级越高（固定属性，无需动态修改）
       * - 每层基础间隔 100，确保跨层时层级不冲突
       */
     
  
      // 设置节点 Z 轴位置（直接控制渲染层级）
   

      // ========== 缩放动画（保留缓动优化） ==========
      tween(this.node)
          .to(time, { scale: new Vec3(targetScale, targetScale, 1) }, {
            
          })
          .start();
  
      // ========== 后续业务逻辑（保留原有逻辑） ==========
      if (this.ghost === false && this.HP >= 0 && !GeZiManager.BanMove.includes(this.ZB)) {
          GeZiManager.BanMove.push(this.ZB);
      }
  

  // 温度地块标记（保留原始逻辑）
  if (this.WD) { 
      GeZiManager.WD.push(this.ZB); 
  }

  // ==================== 地形类型判断 ====================
  if ((this.x === 1 || this.x === 8 || GeZiManager.waterPool.includes(this.ZB)) && !GeZiManager.boxs.includes(this.ZB)) {
      this.DiXing = "water";    AudioManager.instance.ZJP("hit",10)
  } else if ((this.y === 1 || this.y === 8 || GeZiManager.waterPool.includes(this.ZB)) && !GeZiManager.boxs.includes(this.ZB)) {
      this.DiXing = "water";AudioManager.instance.ZJP("hit",10)
  } else {
      if (GeZiManager.boxs.includes(this.ZB)) {
          this.DiXing = "box";
      } else {
          this.DiXing = "grass";
          this.WAT = this.MAXWAT;
      }
  }

  // ==================== 特殊地块处理 ====================
  // 箱子地块逻辑（保留原始逻辑）


  // ==================== 边缘地块处理 ====================


if (this.DiXing=="water") {
   if (this.LST == -1) { } else {
            
               /*   let at= this.PfaceFinal(this.th,[message.Content])[0]
  
                       switch (this.M) {
                          case -1:
  
                             break;
                          case 0: this.move(at, 1 ); this.CMget(); this.moveto(1.5, this.ZB);
  
                             break;
                          case 1: this.move(at, 1); this.CMget(); this.moveto(1.5, this.ZB);
  
                             break;
                          case 2: this.move(at, 1 ); this.CMget(); this.moveto(1.5, this.ZB);
  
                             break;
                          case 8: this.move(at, 1 ); this.CMget(); this.moveto(1.5, this.ZB);
  
                             break;
                          default:
                             break;
                       }
                    }*/ 
    
    
                       // this.ZB=8;

if (this.y==8) {

    setTimeout(()=>{
     this.moveto(0.6,57)
     this.ZB=57;
  },400)                   
  
  setTimeout(()=>{
     this.moveto(0.6,1)
     this.ZB=1;
  },1200)  
  setTimeout(()=>{
    this.moveto(0.6,8)
     this.ZB=8;
     this.moveto(0.6,8)
     if (this.ZB == 8) { this.dead(null); }
  },1800)             

}

if (this.x==1&&this.y!=8) {

                  
  
  setTimeout(()=>{
     this.moveto(0.6,1)
     this.ZB=1;
  },400)  
  setTimeout(()=>{
    this.moveto(0.6,8)
     this.ZB=8;
     this.moveto(0.6,8)
     if (this.ZB == 8) { this.dead(null); }
  },1200)             

}



if (this.x==8&&this.y!=8) {

                  
  
  
  setTimeout(()=>{
    // this.moveto(0.6,8)
     this.ZB=8;
     this.moveto(0.6,8)
     if (this.ZB == 8) { this.dead(null); }
  },400)             

}


if (this.y==1&&this.x!=1) {

                  
  
  
  setTimeout(()=>{
    // this.moveto(0.6,8)
     this.ZB=8;
     this.moveto(0.6,8)
     if (this.ZB == 8) { this.dead(null); }
  },400)             

}
}
}


  

  // ==================== 调试日志 ====================
  // console.log(`坐标更新：ZB=${this.ZB}, (x,y)=(${this.x},${this.y}), z=${finalZ}`);
}

  findGe(face: number, i: number) {
    let n = 0;
    let a = this.ZB;
    for (let b = 0; b < i; b++) {
      if ((this.x === 1) && (face === 4)) { n = 66 } else if ((this.x === 8) && (face === 6)) { n = 66; } else if ((this.y === 1) && (face === 2)) { n = 66; } else if ((this.y === 8) && (face === 8)) { n = 66; }
      else {

        switch (face) {
          case 1: n = a - 9
            break;

          case 2: n = a - 8
            break;

          case 3: n = a - 7
            break;
          case 4: n = a - 1
            break;
          case 5: n = a
            break;
          case 6: n = a + 1
            break;
          case 7: n = a + 7
            break;
          case 8: n = a + 8
            break;
          case 9: n = a + 9
            break;

default:n = a
        }
        a = n;
      }


    }

    return n;
  }//获取某个方向上第dis格的坐标

  NfindGe(a:number,face: number, i: number) {
    let n = 0;

    for (let b = 0; b < i; b++) {
      if ((this.x === 1) && (face === 4)) { n = 66 } else if ((this.x === 8) && (face === 6)) { n = 66; } else if ((this.y === 1) && (face === 2)) { n = 66; } else if ((this.y === 8) && (face === 8)) { n = 66; }
      else {

        switch (face) {
          case 1: n = a - 9
            break;

          case 2: n = a - 8
            break;

          case 3: n = a - 7
            break;
          case 4: n = a - 1
            break;
          case 5: n = a
            break;
          case 6: n = a + 1
            break;
          case 7: n = a + 7
            break;
          case 8: n = a + 8
            break;
          case 9: n = a + 9
            break;

default:n = a
        }
        a = n;
      }


    }

    return n;
  }





  CMget() {

    this.CanTmove = [];
    for (let i = 1; i <= 9; i++) {

      if (GeZiManager.BanMove.includes(this.findGe(i, 1))&&!(this.gui&&this.mArr1Arr2(GeZiManager.boxs,GeZiManager.trees,GeZiManager.rock).includes(this.findGe(i, 1)))) {

        this.CanTmove.push(i);

      }
    }

  }//更新新的阻挡数组CanTmove（里面是方位而不是具体坐标）










  faceIs(ZB: number) {

    let y;
    let x;

    if (ZB % 8 == 0) { x = 8 } else { x = ZB % 8; }
    y = Math.ceil(ZB / 8);








    if (this.ZB==ZB) {
      return 5; // 表示位置在原点
    } else if (this.x == x) {
      return this.y > y ? 8 : 2; // 表示位置在Y轴上
    } else if (this.y == y) {
      return this.x > x ? 6 : 4; // 表示位置在X轴上
    } else {
      if (this.x > x) {
        return this.y > y ? 9 : 3; // 表示位置在第一或第四象限
      } else {
        return this.y > y ? 7 : 1; // 表示位置在第二或第三象限
      }
    }
  }//判断某个坐标与自身的位置关系，返回1到9的一个方位






















  moveto(time: number, ZB: number) {

    let point;
    switch (ZB) {
      case 0: point = new Vec3(0, 0,1);

        break;


      case 1: point = new Vec3(300, -15,1);
        break;
      case 2: point = new Vec3(634, -15,1);
        break;
      case 3: point = new Vec3(906, -15,1);
        break;
      case 4: point = new Vec3(1188, -15,1);
        break;
      case 5: point = new Vec3(1485, -15,1);
        break;
      case 6: point = new Vec3(1774, -15,1);
        break;
      case 7: point = new Vec3(2058,-15,1);
        break;
      case 8: point = new Vec3(2228, -15,1);
        break;



      case 9: point = new Vec3(445, 200,1);
        break;
      case 10: point = new Vec3(684, 270,1);// console.log("10");
        break;
      case 11: point = new Vec3(950, 270,1);
        break;
      case 12: point = new Vec3(1212, 270,1);
        break;
      case 13: point = new Vec3(1465, 270,1);
        break;
      case 14: point = new Vec3(1724, 270,1);
        break;
      case 15: point = new Vec3(1983, 270,1);
        break;
      case 16: point = new Vec3(2203, 270,1);
        break;


      case 17: point = new Vec3(475, 380,1);
        break;
      case 18: point = new Vec3(740, 436,1);
        break;
      case 19: point = new Vec3(970, 436,1);
        break;
      case 20: point = new Vec3(1200, 436,1);
        break;
      case 21: point = new Vec3(1465, 436,1);
        break;
      case 22: point = new Vec3(1724, 436,1);
        break;
      case 23: point = new Vec3(1940, 436,1);
        break;
      case 24: point = new Vec3(2203, 380,1);
        break;



      case 25: point = new Vec3(572, 522,1);
        break;
      case 26: point = new Vec3(792, 592,1);
        break;
      case 27: point = new Vec3(1008, 592,1);
        break;
      case 28: point = new Vec3(1229, 592,1);
        break;
      case 29: point = new Vec3(1439, 592,1);
        break;
      case 30: point = new Vec3(1660, 592,1);
        break;
      case 31: point = new Vec3(1886, 592,1);
        break;
      case 32: point = new Vec3(2083, 522,1);
        break;






      case 33: point = new Vec3(654, 670,1);
        break;
      case 34: point = new Vec3(843, 740,1);
        break;
      case 35: point = new Vec3(1039, 740,1);
        break;
      case 36: point = new Vec3(1241, 740,1);
        break;
      case 37: point = new Vec3(1431, 740,1);
        break;
      case 38: point = new Vec3(1630, 740,1);
        break;
      case 39: point = new Vec3(1831, 740,1);
        break;
      case 40: point = new Vec3(2018,670,1);
        break;





      case 41: point = new Vec3(719, 813,1);
        break;
      case 42: point = new Vec3(888, 883,1);
        break;
      case 43: point = new Vec3(1067, 883,1);
        break;
      case 44: point = new Vec3(1246, 883,1);
        break;
      case 45: point = new Vec3(1423, 883,1);
        break;
      case 46: point = new Vec3(1600, 883,1);
        break;
      case 47: point = new Vec3(1784, 883,1);
        break;
      case 48: point = new Vec3(1958, 813,1);
        break;




      case 49: point = new Vec3(765, 925,1);
        break;
      case 50: point = new Vec3(924, 995,1);
        break;
      case 51: point = new Vec3(1088, 995,1);
        break;
      case 52: point = new Vec3(1252, 995,1);
        break;
      case 53: point = new Vec3(1412, 995,1);
        break;
      case 54: point = new Vec3(1578, 995,1);
        break;
      case 55: point = new Vec3(1742, 995,1);
        break;
      case 56: point = new Vec3(1900, 925,1);
        break;



      case 57: point = new Vec3(815, 1020,1);
        break;
      case 58: point = new Vec3(956, 1046,1);
        break;
      case 59: point = new Vec3(1107, 1046,1);
        break;
      case 60: point = new Vec3(1260, 1046,1);
        break;
      case 61: point = new Vec3(1410, 1046,1);
        break;
      case 62: point = new Vec3(1562, 1046,1);
        break;
      case 63: point = new Vec3(1708, 1046,1);
        break;
      case 64: point = new Vec3(1848, 1020,1);
        break;
      case 65:
        break;






      default: point = new Vec3(300, 65,1);
        break;
    }


if (GeZiManager.waterPool.includes(ZB)&&this.tt!="qin"&&this.DiXing=="water"&&!([1,8].includes(this.x)||[1,8].includes(this.y))) {
  point.y-=30
  
}

    tween(this.node)
      .to(time, { position: point })
      .start();


  }

dead(r:realThing){ 
  this.node.active = false; 
  GeZiManager.shanchu(GeZiManager.BanMove, this.ZB); 
  GeZiManager.shanchu(GeZiManager.WD, this.ZB); 
  if(this.tt=="rock"){GeZiManager.shanchu(GeZiManager.rock,this.ZB)}
  if(this.tt=="tree"){GeZiManager.shanchu(GeZiManager.trees,this.ZB)}
this.deadgif();

}


  ReceiveMessage(message: Message) {
    if (message instanceof SHMessage) {
  
      if (message.Command.includes(this.ZB) || message.Command[0] == 65) {

        switch (message.SHtype) {
          case "move": if(this.tt=="tree"){}else{this.move(message.Content[0], 1); this.moveto(message.Content[1], this.ZB);  this.CMget();}
            break;


          case "wuli":    if (this.gui==false) {
            if(this.getc(message.from)!=null)
              { for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}}
            let k=message.Content+GeZiManager.dm+GeZiManager.ms
            if (k<0) {
              k=0
            }
            this.HP-=k;  if(this.HP <= 0){this.dead(this.getc(message.from));}GeZiManager.dm=0;GeZiManager.ms=0;
          }   
            
            break;
          case "mofa":if(this.tt=="qin"||this.tt=="fireball"){}else{ this.HP -= message.Content;   if(this.HP <= 0){this.dead(this.getc(message.from)); }}
            break;
          case "wind": 
          
          if (GeZiManager.Ban.includes(this.ZB)||(this.tt=="qin"||this.tt=="fireball")){ } else {
            switch (this.M) {
          
              case "正常": this.move(message.Content, 1); this.CMget(); this.moveto(1.5, this.ZB);

                break;
              case "轻飘飘": this.move(message.Content, 2); this.CMget(); this.moveto(1.5, this.ZB);

                break;
            
              
              default:
                break;
            }
          }
         
            break;
           case "getQin":
           
           break;
           case "getOne"://GeZiManager.Tcharacter=this
           
           break;
            case "water": 
            
            
/*

                 switch (this.M) {
                    case -1:

                       break;
                    case 0: this.move(message.Content,1+ GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);

                       break;
                    case 1: this.move(message.Content,1+ GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);

                       break;
                    case 2: this.move(message.Content,1+ GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);

                       break;
                    case 8: this.move(message.Content,1+ GeZiManager.free); this.CMget(); this.moveto(1.5, this.ZB);

                       break;
                    default:
                      
                    
                    break;
                 }
             for (let index = 0; index < message.Content; index++) {
              MessageCenter.MakeSHMessage("AM",[this.ZB],[this.turn8([this.getc(message.from).faceIs(this.ZB)])[0],0.3],message.from,"move")
                     
                  }*/
                 break;
            default:
            break;
        }






      }

    }
  }



  PPC(){
    if(KHD2.PT.includes(turn.turn)){
      return true
    }else{return false}
  }


  Walk(T:boolean){}



    getTeamZB(n:number,ZB:number){
      for(let a of this.node.parent.getComponent(AnimalManager).YuanGong){
      
          if(a.ZB==ZB){
          
      
          if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
  }
      
      
     
      
      }
  }

  shakeNode(startDelay, duration, shakeStrengthX, shakeStrengthY) {
  
    const originalNodePos =this.node.position.clone();
    
    let elapsed = 0;
    const fps = 60;
    
    const interval = setInterval(() => {
        const randomX = (Math.random() - 0.5) * shakeStrengthX;
        const randomY = (Math.random() - 0.5) * shakeStrengthY;
        
    
        this.node.setPosition(originalNodePos.x + randomX, originalNodePos.y + randomY, originalNodePos.z);
        
        elapsed += 1000 / fps;
        
        if (elapsed >= duration) {
            clearInterval(interval);
          
            this.node.setPosition(originalNodePos);
        }
    }, 1000 / fps);
}
// 调用示例：this.shakeNode(0.5, 1.5, 5, 5); // 从0.5秒开始震动，持续1.5秒，在x和y方向上的震动强度为5
setB(n:number){


}

getYXJ(n:number){
  switch (n) {
    case 8:this.YXJ=8-this.y
      
      break;
      case 2:this.YXJ=this.y-1
      
      break;
      case 6:this.YXJ=8-this.x
      
      break;
      case 4:this.YXJ=this.x-1
      
      break;
    default:
      break;
  }
return this.YXJ
}
turn4(arr: number[]): number[] {
  for(let m of this.turn1){m.Turn1()}


  const transformationMap = {
     3: 1,
     6: 2,
     9: 3,
     2: 4,
     5: 5,
     8: 6,
     1: 7,
     4: 8,
     7: 9
  };
  for (let i = 0; i < arr.length; i++) {
     arr[i] = transformationMap[arr[i]] || arr[i];
  }
  

  return arr;
}//顺时针转身


turn6(arr: number[]): number[] {
  const transformationMap = {
     1: 3,
     2: 6,
     3: 9,
     4: 2,
     5: 5,
     6: 8,
     7: 1,
     8: 4,
     9: 7
  };
  for (let i = 0; i < arr.length; i++) {
     arr[i] = transformationMap[arr[i]] || arr[i];
  }

  return arr;
}//逆时针转身
FH(i:number,FT:number,HP:number){}
















Mjia(n:number){
  this.Mn+=n







  if (this.Mn==1) {
    this.M="正常"
  }
  if ( this.Mn<1) {
 this.M="轻飘飘"
  }
  if ( this.Mn>1) {
     this.M="沉甸甸"
     }
    
  
  
  
  }
  KBL(n:number){

    if (this.KB==0) {
      this.sh+=1
      this.wk+=1
    }
    
    this.KB+=n
    
    }


    MZL(n:number){
   
      if(this.MZ==0){
      
      this.TNJJ[0]+=1
      this.TNJJ[1]+=1
      this.TNJJ[3]+=1
      this.wk+=1
      }
      
      this.MZ+=1
      
      }



      CZJS(){
           
           
           
         
         }
         
         
         CZL(){
           
           
          this.CZ+=1
         
         }
         
         
         
         
         
         
         
         
           KBJS(){
           
           
              if (this.KB>0) {
                 this.KB-=1
                 this.ZBW(false,1)
                 if (this.KB==0) {
                    this.sh-=1
                    this.wk-=1
                 }
              }
           }
  ZBW(arg0: boolean, arg1: number) {
   
  }
  DYL(n:number){
    this.DY+=1
    if (this.DY>3) {
       this.DY=3
    }
    
    
    
    }
           
           DYJS(){
           
           
              if (this.DY>0) {
                 this.DY-=1
                 if (this.qi>0) {
                    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.Pturn,"Qi-");  
                 }else{     MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.Pturn,"HP-");  }
                 
              }
           
           }
           
QXL(){

  this.QX+=1
  let v=0

  if (KHD2.PT.includes(this.Pturn)) {
    v=168
  }
  this.fadeOut(this.node,0.3,v)
  this.YS=true

}
           QXJS(){
           
           
            if (this.QX>0) {
              this.QX-=1
               if (this.QX==0) {
                this.fadeOut(this.node,0.3,255)
           this.YS=false
               }
               
            }
         
         }






           
           MZJS(){
           
           
              if (this.MZ>0) {
                 this.MZ-=1
                 if (this.MZ==0) {
                  this.TNJJ[0]-=1;
                  this.TNJJ[1]-=1;
                  this.TNJJ[3]-=1;
                  this.wk-=1
                 }
                 
              }
           
           }
            ICEJS(){
              
                 if(this.ice>0){this.ice-=1;
                   
                 
                 
                 
                    if(this.ice==0){ this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("iceN");this.ST();}
                 }
                 
              
              }

                 ICEL(){
                 
                    if(this.shose.TheNumber!="C04"){
                       if(this.ice>0){this.ice+=1}else{this.ice+=2};this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("ice");  for (let mannger of this.UI) {
                         
                          }
                        
                       }
                 
                       if (this.DiXing=="water") {
                          this.WAT==this.MAXWAT
                          this.node.getComponentInChildren(MTX).playFrameAnimation1("waterE")
                       }
                       //this.GD+=1
                    
                 }
         ST(){}


         rearrangeArray(arr: unknown[]): number[] {
          // 处理条件3：检查并移除0、1、2、3各一个，添加10
          let counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
          for (const item of arr) {
              if (typeof item === 'number' && [0, 1, 2, 3].includes(item)) {
                  counts[item as keyof typeof counts]++;
              }
          }
          const hasCondition3 = counts[0] >= 1 && counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1;
          let processedArr: number[] = [];
          
          if (hasCondition3) {
              // 移除各一个0、1、2、3
              const toRemove = { 0: 1, 1: 1, 2: 1, 3: 1 };
              processedArr = [];
              for (const item of arr) {
                  if (typeof item === 'number') {
                      const num = item;
                      if (toRemove[num as keyof typeof toRemove] > 0 && [0, 1, 2, 3].includes(num)) {
                          toRemove[num as keyof typeof toRemove]--;
                      } else {
                          processedArr.push(num);
                      }
                  }
              }
              processedArr.push(10);
          } else {
              processedArr = arr.filter(item => typeof item === 'number') as number[];
          }
      
          // 分组处理（条件2）
          const groups: { [key: number]: { positives: number[], negatives: number[] } } = {
              0: { positives: [], negatives: [] },
              1: { positives: [], negatives: [] },
              2: { positives: [], negatives: [] },
              3: { positives: [], negatives: [] },
              10: { positives: [], negatives: [] }
          };
      
          for (const num of processedArr) {
              if (num === 0.5) {
                  groups[0].negatives.push(num);
              } else {
                  const abs = Math.abs(num);
                  if ([0, 1, 2, 3, 10].includes(abs)) {
                      const groupKey = abs;
                      if (num >= 0) {
                          groups[groupKey].positives.push(num);
                      } else {
                          groups[groupKey].negatives.push(num);
                      }
                  }
              }
          }
      
          // 按组顺序构建结果
          const order = [0, 1, 2, 3, 10];
          let result: number[] = [];
          for (const key of order) {
              const group = groups[key];
              result.push(...group.positives);
              result.push(...group.negatives);
          }
      
          // 处理条件4：正数数量超过4则删除第一个正数（正数指 >0 的数）
          const positiveNumbers = result.filter(num => num > 0);
          if (positiveNumbers.length > 4) {
              const firstPositiveIndex = result.findIndex(num => num > 0);
              if (firstPositiveIndex !== -1) {
                  result.splice(firstPositiveIndex, 1);
              }
          }
      
          return result;
      }
      
      // 示例用法
   
}