import { _decorator, Component, Node, Vec3,Skeleton,sp, AnimationState, tween, Tween, find, Color, Texture2D,  Rect, SpriteFrame, UIOpacity, UITransform, Vec2, color } from 'cc';


import MTX from "../../../pictures/TX/MTX/MTX";
import SXX from "../../Scharacter/SXX";
import JJ from "../../UIS/else/JJ";
import shopM from "../../UIS/shop/ShopM";
import Shops from "../../UIS/shop/shops";
import weapon from "../../equipment/weapon/weapon";
import Character from "../Character";
import ComponentBase from "../ComponentBase";

import { gif1 } from './gif';
import { ImageAsset } from 'cc';
import { gfx } from 'cc';
import { Sprite } from 'cc';

const { property, ccclass } = _decorator;

@ccclass('Cspine')
export default class Cspine extends ComponentBase {

  
        @property({ type:sp.Skeleton })
    spine2: sp.Skeleton = null; // 正面朝向的Spine动画

    @property({ type:sp.Skeleton })
    spine8: sp.Skeleton = null; // 背面朝向的Spine动画

    @property({ type:sp.Skeleton })
    spine4: sp.Skeleton = null; // 左侧朝向的Spine动画

    @property({ type:sp.Skeleton })
    spine6: sp.Skeleton = null; // 右侧朝向的Spine动画

    currentSpine:sp.Skeleton = null;

    @property(Number)
    i: number = -1;

    @property(gif1)
    tx: gif1 = null;

    @property(gif1)
    shadow: gif1 = null;

    @property(gif1)
    atx: gif1 = null;

    yanci: number[] = [200, 200, 200, 200, 200, 200, 200, 200];
    an: number = 0; // 某些动作的使用次数，如拳击手

    a8: Node = null;
    a6: Node = null;
    a4: Node = null;
    a2: Node = null;

    B: boolean = true;
    toBlue(){
      this.spine2.color=color(0,0,128);
      this.spine4.color=color(0,0,128);
      this.spine6.color=color(0,0,128);
      this.spine8.color=color(0,0,128);
    
    
    
    }
    
    
    tored(){
      this.spine2.color=color(128,0,0);
      this.spine4.color=color(128,0,0);
      this.spine6.color=color(128,0,0);
      this.spine8.color=color(128,0,0);
    
    
    
    }
    onLoad() { 
        // 默认显示正面朝向的Spine
        //this.changeDirection(6);
     //设置动画结束监听
this.spine2.setCompleteListener((trackEntry:sp.spine.TrackEntry) => {
	//清空监听
	// this.spine2.setCompleteListener(null);
	//console.log(trackEntry.animation.name+"动画播放完毕！");
    if(this.B){this.idle();}

});
this.spine4.setCompleteListener((trackEntry:sp.spine.TrackEntry) => {
	//清空监听
	// this.spine2.setCompleteListener(null);
if(this.B){this.idle();}//console.log(trackEntry.animation.name+"动画播放完毕！");
 

});
this.spine6.setCompleteListener((trackEntry:sp.spine.TrackEntry) => {
	//清空监听
	// this.spine2.setCompleteListener(null);
	//console.log(trackEntry.animation.name+"动画播放完毕！");
    if(this.B){this.idle();}

});
this.spine8.setCompleteListener((trackEntry:sp.spine.TrackEntry) => {
	//清空监听
	// this.spine2.setCompleteListener(null);

    //console.log(trackEntry.animation.name+"动画播放完毕！");
    if(this.B){this.idle();}

});

    }

    start(): void {
        this.spine2.node.active=true
        this.spine4.node.active=true
        this.spine6.node.active=true
        this.spine8.node.active=true
        this.spine2.node.active=false
        this.spine4.node.active=false
        this.spine6.node.active=false
        this.spine8.node.active=false
      
      
      
      
        this.changeDirection(this.node.getComponent(Character).faceTo);
          this.node.getComponent(gif1).timeArray=[50,50,50,45,40,40,40,40,40,50,55,50,50,40,140,140,140]
      
      //this.a8=this.findFirstNodeWithName(this.spine8.node,"weapon1")
         
      //this.a6=this.findFirstNodeWithName(this.spine6.node,"weapon1")
         
      //this.a4=this.findFirstNodeWithName(this.spine4.node,"weapon1")
         
      //this.a2=this.findFirstNodeWithName(this.spine2.node,"weapon1")
          //this.spine8.findSlot("ARM").setZIndex(100)
          
      
      }
         
      changeDirection(direction:number) {
        if (this.currentSpine) {
            this.currentSpine.node.active = false; // 隐藏当前Spine
        }
        switch (direction) {
            case 2:
                this.currentSpine = this.spine2;
                break;
            case 4:
                this.currentSpine = this.spine4;
                break;
            case 6:
                this.currentSpine = this.spine6;
                break;
            case 8:
                this.currentSpine = this.spine8;
                break;
            default:
                this.currentSpine = null;
                console.error('Invalid direction:', direction);
                break;
        }
        if (this.currentSpine) {
            this.currentSpine.node.active = true; // 显示新的Spine
            this.currentSpine.animation="Idle" 
        }
  if (this.i!=-1) {
    this.changeXT(this.i)
  } 
    }
      attackAIN(n:number){
      
      if (this.currentSpine) {
        
    
      find("Canvas/Main Camera").getComponent(JJ).JJ(this.node,1)
      
        
      if(this.node.getComponent(SXX).Snumber=="S06"){
          switch (this.an) {
              case 0:this.currentSpine.animation="A0H-L"; 
                  
             this.an=1
                  
                  break;
                  default: case 0:this.currentSpine.animation="A0H-R"; 
                  
             this.an=0
                      break;
      
      }}
          switch (n) {
          case 0:this.currentSpine.animation="A0H"; 
              // 切换到下一个动画，例如切换到名为"nextAnimation"的动画
              break;
         case 1:this.currentSpine.animation="A1H"; 
              
              break;
              case 2:this.currentSpine.animation="A2H"; 
              
              break;
              case 3:this.currentSpine.animation="A0H"; 
              
              break;
              case 81:this.currentSpine.animation="A1H"; 
              
              break;
              case 82:this.currentSpine.animation="A1H2"; 
              
              break;
      
          default:
              break;
      }
      
      }
        }
      //toI(n:number){setTimeout(()=>{this.currentSpine.animation="Idle"},n)}
      
      Dead(){ 
          
           this.node.scale = new Vec3(this.node.scale.x * 0.7, this.node.scale.y * 0.7, 1);

    // 设置节点透明度
    this.node.getComponent(UIOpacity).opacity = 210;

    // 播放 gif1 动画
    this.node.getComponent(gif1).moveToNextFrame(0, 12, 0);

    // 延迟 700ms 后设置 gif1 动画循环
    setTimeout(() => {
        this.node.getComponent(gif1).kk = true;
        this.node.getComponent(gif1).loop = 13;
        this.node.getComponent(gif1).loopF(13, 15, 0);
    }, 700);

    // 调整节点的锚点
    const uiTransform = this.node.getComponent(UITransform);
    if (uiTransform) {
        uiTransform.anchorPoint = new Vec2(0.5, 0.3); // 设置锚点为 (0.5, 0.3)
    }

    // 延迟 500ms 后启动缓动动画
    setTimeout(() => {
        tween(this.node)
            .to(7.5, { position: new Vec3(this.node.position.x, this.node.position.y + 2000, this.node.position.z) })
            .start();
    }, 500)
      }
      
      idle() {
          // 执行您想要的操作
      
      
          
          // 从指定范围中获取随机延迟时间（单位：毫秒）
          const minDelay =  0.3* 1000; // 将秒转换为毫秒
          const maxDelay =  1* 1000;
          const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
          
          // 输出下一次执行的等待时间
      
          
          // 利用setTimeout函数，在随机延迟时间后再次执行该方法
          setTimeout(() => {
              this.currentSpine.animation="Idle"
        
          }, 0);
      // 传入一个长度为二的数组表示延迟范围（单位：秒），例如[1, 5]代表1秒到5秒之间的随机延迟
      
      }
      
      
      
      xuqiAIN(n){
      
              this.currentSpine.animation="xuqi"
        this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("xuqi")
      
      
      
      }
      
      
      Bhit(){    this.currentSpine.animation="Bhit"}
      Bdie(){  setTimeout(() => {
          this.currentSpine.animation="Bdie"; 
          this.B=false;
      }, 400); //
      
      }
      changeXT(n:number){
      
        this.i=n;
      
        if (this.node.getComponent(SXX).Snumber=="S00") {
          switch (n) {
            case 0: this.spine2.setSkin("normal")
            this.spine4.setSkin("normal")
            this.spine6.setSkin("normal")
            this.spine8.setSkin("normal")
                
                break;
                case 1: this.spine2.setSkin("golden")
                this.spine4.setSkin("golden")
                this.spine6.setSkin("golden")
                this.spine8.setSkin("golden")
                break;
            default:
                break;
         } 
       
        }
        
      
      
      }


      changeXT2(n:string){
      
     
      

   
            this.spine2.setSkin(n)
            this.spine4.setSkin(n)
            this.spine6.setSkin(n)
            this.spine8.setSkin(n)
                
              
        }
      FH(){
        this.B=true;
        this.idle();
      
        this.node.getComponent(gif1).kk=false
        this.node.getChildByName("TN").active=false
        //this.node.getComponent(gif1).changeF(0,1)
        this.node.getChildByName("to8").active=false
        this.node.getChildByName("to2").active=false
        this.node.getChildByName("to4").active=false
        this.node.getChildByName("to6").active=false
        this.node.getComponent(gif1).stop()
       this.changeDirection(this.node.getComponent(Character).faceTo)
        
       
        setTimeout(()=>{this.node.getComponent(gif1).spriteFrame =null},200)
      }
      setBrightness(value?: number) {
        
         
        // this.currentSpine.node.color=color(value*255)
         
        }
      
        changE(what:string,to:any){
        /*if (what=="A583"||what=="A583P"||what=="A582P"||what=="A581P"||this.node.getComponent(SXX).Snumber=="S14") {
          return
        }
        if ( this.a2) {
          this.a2.getComponent(Sprite).spriteFrame=null;
          this.a4.getComponent(Sprite).spriteFrame=null;
          this.a6.getComponent(Sprite).spriteFrame=null;
          this.a8.getComponent(Sprite).spriteFrame=null;
      
        }
        
      to=what[1]
      
       if (to=="5") {
         let to1=what[3]
         this.findFirstNodeWithName(this.spine2.node,"weapon51").active=false
        this.findFirstNodeWithName(this.spine4.node,"weapon51").active=false   
         this.findFirstNodeWithName(this.spine6.node,"weapon51").active=false
        this.findFirstNodeWithName(this.spine8.node,"weapon51").active=false
        this.findFirstNodeWithName(this.spine2.node,"weapon52").active=false
        this.findFirstNodeWithName(this.spine4.node,"weapon52").active=false   
         this.findFirstNodeWithName(this.spine6.node,"weapon52").active=false
        this.findFirstNodeWithName(this.spine8.node,"weapon52").active=false
      if (to1!="0") {
          this.findFirstNodeWithName(this.spine2.node,"weapon"+to+to1).active=true
         
          this.findFirstNodeWithName(this.spine4.node,"weapon"+to+to1).active=true
                   
          this.findFirstNodeWithName(this.spine6.node,"weapon"+to+to1).active=true
                   
          this.findFirstNodeWithName(this.spine8.node,"weapon"+to+to1).active=true 
      }
      
      
      
      
       } else{
         this.a2=this.findFirstNodeWithName(this.spine2.node,"weapon"+to)
         
         this.a4=this.findFirstNodeWithName(this.spine4.node,"weapon"+to)
              
         this.a6=this.findFirstNodeWithName(this.spine6.node,"weapon"+to)
              
         this.a8=this.findFirstNodeWithName(this.spine8.node,"weapon"+to)
          let b2=this.node.parent.getComponent(Shops).find(2,what.toLowerCase())
          let b4=this.node.parent.getComponent(Shops).find(4,what.toLowerCase())
          let b6=this.node.parent.getComponent(Shops).find(6,what.toLowerCase())
          let b8=this.node.parent.getComponent(Shops).find(8,what.toLowerCase())
        if(b2&&b4&&b6&&b6){
        
          this.a2.getComponent(Sprite).spriteFrame=b2;
          this.a4.getComponent(Sprite).spriteFrame=b4;
          this.a6.getComponent(Sprite).spriteFrame=b6;
          this.a8.getComponent(Sprite).spriteFrame=b8;}
       }
      */
      console.log(what)
      switch (what[0]) {
        case "A":this.node.getComponent(Character).weapon.changeEP();
       break;
       case "C":this.node.getComponent(Character).shose.changeEP();
       break;
       case "B":this.node.getComponent(Character).body.changeEP();
       break;
       case "D":this.node.getComponent(Character).accessory.changeEP();
       break;
        default:
          break;
      }
      
      
      
      
      }
      
      
      
      
      
        
      
      
      changE2(what:string,to:number){
        
         
       
          
          
          }
          

      
      
      
      
      
      
      
      
      
      
      
      
      
      
        findFirstNodeWithName(node:Node, name: string): Node | null {
          if (node.name.toLowerCase() === name.toLowerCase()) {
            return node; // 返回第一个匹配的节点
          }
          
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const firstNode =this.findFirstNodeWithName(child, name);
            if (firstNode) {
              return firstNode; // 返回第一个找到的节点
            }
          }
          
          return null; // 如果没有找到匹配的节点，则返回 null
        }
      
      
      
      
      
      
      changeE(what:string,to:number){
      let h;
      
      
      
      
      
      
      
      
      
      }
      
      
      
      
      
      
      
      
      
      
      


      
 
          /**
           * 设置 Spine 插槽的纹理
           */
         
    
         
  changeSlot(sk:sp.Skeleton, slotName:string, Sprite1:SpriteFrame,o:number) {
    //获取插槽function spriteFrameToTexture2D(spriteFrame: SpriteFrame): Texture2D | null {
    
   

    Sprite1=find("Canvas/BAOm").getComponent(Sprite). spriteFrame
//find("Canvas/DituManager/New Node/AnimalManager").getComponent(Shops).S
   // console.log(find("Canvas/BAOm").getComponent(Sprite). spriteFrame)



    setTimeout(()=>{ 
      console.log(find("Canvas/BAOm").children[o].getComponent(Sprite).spriteFrame.texture)
            console.log(find("Canvas/BAOm").children[o].getComponent(Sprite).spriteFrame)
         let b=find("Canvas/BAOm").children[o].getComponent(Sprite).spriteFrame.texture
      if (b) {
const texture2D = b as unknown as Texture2D;

// 使用前验证关键属性




          sk.setSlotTexture(slotName,texture2D,true)
      }
     
      },600)
 
  console.log(Sprite1)

}






getUVS(Sprite:SpriteFrame,name:string){ 
  // 假设 spriteFrame 已经在编辑器中设置，或者通过代码获取
 // Sprite.trim=true

 //this.node.parent.getComponent(Shops).A1_2.getRect()
// getSpriteFrames().indexOf(Sprite);
// this.spriteAtlas

  let o= Sprite
 

  //console.log(this.node.parent.getComponent(Shops).A.getRect())
  //console.log(o.getRect())


  if (o) {
      // 获取图集的宽度和高度
      const atlasWidth: number = o.width;
      const atlasHeight: number = o.height;
let Trim=o.rect
      // 获取精灵帧的 trim 属性
       // getRect 方法返回的是 Rect 对象

      // 计算 UV 坐标
      let u1: number = Trim.x/ atlasWidth;
      let v1: number = (atlasHeight -Trim.y - Trim.height) / atlasHeight; // 注意 Y 轴是倒的
      let u2: number = (Trim.x + Trim.width) / atlasWidth;
      let v2: number = (atlasHeight - -Trim.y) / atlasHeight;

      // 构造长度为 8 的数组
     let uvs: number[] = [
          u1, v1, // 左下角
          u2, v1, // 右下角
          u2, v2, // 右上角
          u1, v2  // 左上角
      ];
       uvs=o.uv
 
     return [o.uv[2],o.uv[3],o.uv[0],o.uv[1],o.uv[4],o.uv[5],o.uv[6],o.uv[7]];
      
  }else return [0,0,0,0,0,0,0,0]

}}