// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Camera, EventMouse, find, Input, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import CustomButton from "../BASE/CButton";
import ComponentBase from "../BASE/ComponentBase";
import Cspine from "../BASE/spineANDgif/Cspine";
import  gif1  from "../BASE/spineANDgif/gif";
import { BlockInputEvents } from 'cc';
import { input } from 'cc';

@ccclass('Mouse')
export default class mouse extends ComponentBase {
        @property(Node)
        gif:Node = null; // 指定的鼠标指针素材
    C:CustomButton[]=[];
    n:number=0
    FDUIs:Node[]=[]
    i:number=0
    @property(Boolean)
    sj=false
    @property(Camera)
    camera: Camera = null; // 绑定 Camera 组件

    start() {
        // 绑定鼠标移动事件
        this.camera = find("Canvas/Main Camera").getComponent(Camera);
        this.node.on(Node.EventType.MOUSE_MOVE, this.mouseFun, this);
       
        if (!this.sj) {
          this.node.on(Node.EventType.MOUSE_DOWN, () => {
              this.gif.getComponent(gif1).changeF(3,1)
             
          } ,this);
          this.node.on(Node.EventType.MOUSE_UP,
             (event) => {
              this.gif.getComponent(gif1).changeF(2,1)
  
             if (event.getButton() === 0){
              for(let a of this.FDUIs){
                  
                  //a.active=false
                //  a.scale=1.2
              }
              this.FDUIs=[]
             } 
             
          } ,this);
      }    else{this.gif.active=false}










    
  }








          
    

    mouseFun(event: EventMouse) {
        if (!this.camera) {
            console.error('Camera 组件未绑定');
            return;
        }

        // 获取鼠标的屏幕坐标
        const screenPoint = event.getLocation();

        // 将屏幕坐标转换为世界坐标
        const worldPoint = this.camera.screenToWorld(new Vec3(screenPoint.x, screenPoint.y, 1));

      //  console.log('世界坐标：', worldPoint);


      
  
  
        //  game.frame.requestFullscreen();
  this.gif.setWorldPosition(worldPoint)
 // this.gif.setSiblingIndex(100)





    }

    
      onLoad(){
          //绑定事件
    
          const isMobile = /Mobile/i.test(navigator.userAgent)
     
          if (isMobile) {
           this.sj=true
          } 
    
    
    
    
    
    
    
    
    
    
    
    
          if (!this.sj) {
        
          
          document.body.style.cursor = 'none';
        }
      }
      
      
        
    
     
    
    
    }
    
    