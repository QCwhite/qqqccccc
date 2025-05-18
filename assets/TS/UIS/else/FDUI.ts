// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Input, instantiate, Label, Node, Prefab } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import realThing from "../../BASE/realThing";
import state from "../../game/time/state";
import AnimalManager from "../../Manager/AnimalManager";
import SXX from "../../Scharacter/SXX";
import mouse from "../mouse";
import FDUIs from "./FDUIs";

@ccclass('FDUI')
export class FDUI extends ComponentBase {
    private spawnedNodes:Node | null= null;
    prefab: Prefab | null = null; // 用于指向预设体
    start() {
//      注册鼠标点击事件
    this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
      this.prefab=  this.node.parent.getComponent(AnimalManager).FDUIs
      //this.spawnPrefab();
    }
    onMouseDown(event) {
//      判断是否为右键点击
      if (event.getButton() === 2) { // 2 表示右键
//          右键点击事件
     // event.stopPropagation(); // 阻止事件传播
//          获取点击位置
//event.propagationStopped = true;
      const clickPosition = event.getLocation();
//          在点击位置生成预设体
      this.spawnedNodes.active=true
//         this.spawnedNodes.position=this.node.position

      this.setWorldPos(this.spawnedNodes,this.getWorldPos(this.node))
      find("Canvas").getComponent(mouse).FDUIs.push(this.spawnedNodes)
      this.spawnedNodes.getComponent(FDUIs).J();
      } else if (event.getButton() === 1) { // 0 表示左键
//          左键点击事件，隐藏所有实例节点
//         this.hideAllSpawnedNodes();
      }
    }
    spawnPrefab() {
      if (this.prefab) {
//          实例化预设体
      let   prefabInstance =instantiate(this.prefab);
//          设置实例位置（将点击位置转换为世界坐标）
      prefabInstance.setSiblingIndex( prefabInstance.getSiblingIndex()+1000)
//          将实例添加到场景中
      find("Canvas/Main Camera/UIManager").addChild(prefabInstance);
      prefabInstance.getComponent(FDUIs).target=this.node.getComponent(realThing)
      prefabInstance.getComponent(FDUIs).sarget=this.node.getComponent(SXX)
      prefabInstance.getChildByName("name").getComponent(Label).string=this.node.getComponent(realThing).tname
      this.setWorldPos(prefabInstance,this.getWorldPos(this.node))
      find("Canvas").getComponent(mouse).n+=1
    
      prefabInstance.setSiblingIndex( prefabInstance.getSiblingIndex()+find("Canvas").getComponent(mouse).n)
//          保存到数组中
      this.spawnedNodes=prefabInstance;
      console.log(   prefabInstance.position);

      if(state.ST==0){  prefabInstance.active=false}
      } else {
      console.warn('Prefab not assigned!');
      }



    }
    hideAllSpawnedNodes() {
//      隐藏所有实例化的节点
//     for (const node of this.spawnedNodes) {
//         node.active = false; // 隐藏节点
//     }
    }
    onDestroy() {
//      移除事件监听
      this.node.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
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
// import ComponentBase from "../../BASE/ComponentBase";
// import realThing from "../../BASE/realThing";
// import state from "../../game/time/state";
// import AnimalManager from "../../Manager/AnimalManager";
// import SXX from "../../Scharacter/SXX";
// import mouse from "../mouse";
// import FDUIs from "./FDUIs";
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// 
// 
// export class FDUI extends ComponentBase {
//     private spawnedNodes:Node= null;
//     prefab: Prefab | null = null; // 用于指向预设体
//     start() {
//       注册鼠标点击事件
//         this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
//       this.prefab=  this.node.parent.getComponent(AnimalManager).FDUIs
//      this.spawnPrefab();
//     }
//     onMouseDown(event) {
//       判断是否为右键点击
//         if (event.getButton() === 2) { // 2 表示右键
//           右键点击事件
//             event.stopPropagation(); // 阻止事件传播
//           获取点击位置
//             const clickPosition = event.getLocation();
//           在点击位置生成预设体
//             this.spawnedNodes.active=true
//          this.spawnedNodes.position=this.node.position
// 
//            this.setWorldPos(this.spawnedNodes,this.getWorldPos(this.node))
//           find("Canvas").getComponent(mouse).FDUIs.push(this.spawnedNodes)
//           this.spawnedNodes.getComponent(FDUIs).J();
//         } else if (event.getButton() === 1) { // 0 表示左键
//           左键点击事件，隐藏所有实例节点
//          this.hideAllSpawnedNodes();
//         }
//     }
//     spawnPrefab() {
//         if (this.prefab) {
//           实例化预设体
//       let   prefabInstance =instantiate(this.prefab);
//           设置实例位置（将点击位置转换为世界坐标）
//             prefabInstance.zIndex+=1000
//           将实例添加到场景中
//          find("Canvas/UIManager").addChild(prefabInstance);
//             prefabInstance.getComponent(FDUIs).target=this.node.getComponent(realThing)
//             prefabInstance.getComponent(FDUIs).sarget=this.node.getComponent(SXX)
//           prefabInstance.getChildByName("name").getComponent(Label).string=this.node.getComponent(realThing).tname
//        this.setWorldPos(prefabInstance,this.getWorldPos(this.node))
//             find("Canvas").getComponent(mouse).n+=1
//             prefabInstance.zIndex+=find("Canvas").getComponent(mouse).n
//            
//           保存到数组中
//             this.spawnedNodes=prefabInstance;
//             console.log(   prefabInstance.position);
// 
//             if(state.ST==0){  prefabInstance.active=false}
//         } else {
//             console.warn('Prefab not assigned!');
//         }
// 
// 
//      
//     }
//     hideAllSpawnedNodes() {
//       隐藏所有实例化的节点
//      for (const node of this.spawnedNodes) {
//          node.active = false; // 隐藏节点
//      }
//     }
//     onDestroy() {
//       移除事件监听
//         this.node.off(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
//     }
// 
// 
// 
// 
// 
// 
// 
// 
// 
//     
// }
