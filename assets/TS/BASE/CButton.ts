import { _decorator, Node, Component, EventTouch, tween, Input, BlockInputEvents } from 'cc';
const { ccclass, property } = _decorator;


import moveUI from "../UIS/BASEUI/moveUI";
import mouse from "../UIS/mouse";
import ComponentBase from "./ComponentBase";

import { EventHandler } from 'cc';

import { gif1 } from './spineANDgif/gif';
import { input } from 'cc';
import { find } from 'cc';
import { AudioManager } from './music';


@ccclass('CButton')
export default class CustomButton extends ComponentBase {
    @property(Node)
    gif: Node  = null;

    @property(Number)
    fw: number = 0;

    @property(Number)
    n: number = 0;

    @property(Boolean)
    lj: boolean = false;

    @property(Boolean)
    dob: boolean = false;

    zt: number = 0; // 0正常，1悬浮，2点击选中,-1禁用

    @property(Boolean)
    sp: boolean = false;

    @property(Node)
    F1: Node  = null;

    @property(Node)
    F2: Node  = null;
    @property({ type: EventHandler })
    DonClick: EventHandler = new EventHandler();

    start() {
        this.node.on(Node.EventType.MOUSE_ENTER, this.onHover, this);
        this.node.on(Node.EventType.MOUSE_LEAVE, this.onLeave, this);
  
        
        this.node.on(Node.EventType.TOUCH_START, this.onPressDown, this);
        this.node.on(Node.EventType.TOUCH_END, this.onClick, this);



        
        
        
      
    }

    setSprite(n:number,tj:number) {
       if(this.sp){
       
        this.gif.getComponent(gif1).changeF(n,tj);}
    }
    onHover() {
     
           if(this.zt != 2){ 
           
            this.zt = 1;
            
            this.gif.getComponent(gif1).nodeBig(1.2,0.1);
        }
            this.gif.getComponent(gif1).setBrightness(0.25);
        
    }
    
    
     
    
    
    onLeave() {
        if(this.zt!=2){
            this.zt = 0;
         if(this.fw>8) { 
            this.setSprite(this.fw,1)}
          
            
            this.gif.getComponent(gif1).nodeBig(1,0.1);
           }
            this.gif.getComponent(gif1).setBrightness();}
        

       
    
    onClick(event: EventTouch) {

    
    AudioManager.instance.ZJP("ui",1,{
            loop: false,
            volume:0.9,
            fadeIn: 0.2,
            priority: 0.2,
        })

           if(this.dob){
            if (this.zt == 2) {
             
                this.gif.getComponent(gif1).setBrightness(0.2);
                this.click2();
                
              
            } else{
                if(this.fw!=99){ for(let a of this.node.parent.children){a.getComponent(CustomButton).toN()}}
                this.zt = 2;
                this.setSprite(this.fw+1,1);
                
              
            }
        }else {this.click2();}
        this.gif.getComponent(gif1).nodeBig(0.95,0.1);
       
        setTimeout(()=>{ if (this.gif) {
            this.gif.getComponent(gif1).nodeBig(1.4,0.05);
        }},100)
        setTimeout(()=>{ if (this.gif) {this.gif.getComponent(gif1).nodeBig(1,0.15);}},150)
        //event.stopPropagation();
        
    }

    onPressDown(event: EventTouch): void {
     
        if(this.fw>7){     
        this.gif.getComponent(gif1).setBrightness(-0.2);
        this.gif.getComponent(gif1).nodeBig(1.2,0.1);
        }
   
    if (this.zt == 2) {           
        this.setSprite(this.fw+2,1);}
    else{this.setSprite(this.fw+1,1);}

    

  //  event.stopPropagation();
//console.log(this.zt)

}

  



    disableButton() {
     if(this.zt!=-1)  {
        this.zt =-1;
        this.gif.getComponent(gif1).setBrightness(-0.3)

        this.node.off(Node.EventType.MOUSE_ENTER, this.onHover, this);
        this.node.off(Node.EventType.MOUSE_LEAVE, this.onLeave, this);
  
        
        this.node.off(Node.EventType.TOUCH_START, this.onPressDown, this);
        this.node.off(Node.EventType.TOUCH_END, this.onClick, this);
        if(this.fw==7){ this.gif.getComponent(gif1).setBrightness(0.3)
            this.gif.getComponent(gif1).nodeBig(1,0.2);}
    }}
    enableButton() {
      
        this.zt = 0;
        this.gif.getComponent(gif1).setBrightness()
        this.node.on(Node.EventType.MOUSE_ENTER, this.onHover, this);
        this.node.on(Node.EventType.MOUSE_LEAVE, this.onLeave, this);
  
        
        this.node.on(Node.EventType.TOUCH_START, this.onPressDown, this);
        this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
    }
    click2() {
        // 在这里加入您想实现的自定义点击事件逻辑
        // 调用父类原本的点击事件处理
if (this.DonClick==null) {
 find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(moveUI).kai() 
    
}else{ this.DonClick.emit([])}

      
this.zt=1;
     if(this.fw>8){  this.setSprite(this.fw,1);}
        this.gif.getComponent(gif1).nodeBig(0.95,0.1);
        setTimeout(()=>{ if (this.gif) {
            this.gif.getComponent(gif1).nodeBig(1.4,0.05);
        }},100)
        setTimeout(()=>{ if (this.gif) {this.gif.getComponent(gif1).nodeBig(1,0.15);}},150)
 if (this.lj==false) {
    this.disableButton()
   if (this.F1!=null) {
    this.F1.getComponent(CustomButton).disableButton()
   } 
   if (this.F2!=null) {
    this.F2.getComponent(CustomButton).disableButton()
   } 


 }   

    // console.log(  this.zt )
    }
toN(){if (this.zt !=-1) {
           
 if(this.fw==7){this.node.getComponent(moveUI).bi()}
     this.zt = 0;
     this.setSprite(this.fw,1);
   
     
     this.gif.getComponent(gif1).nodeBig(1,0.1);
     console.log(  this.zt )}
     this.gif.getComponent(gif1).setBrightness();
 }


}