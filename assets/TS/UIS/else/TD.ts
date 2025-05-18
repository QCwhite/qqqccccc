// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Node, Event, find, EventTouch, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import ComponentBase from "../../BASE/ComponentBase";

@ccclass('TD')
export default class Drag extends ComponentBase {
      _isTouched: boolean = false;
  
      _parentNode: Node = null;
    
      // onLoad () {
      // }
    
      start() {
      this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
       this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
       this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this._parentNode = this.node.parent;
    }

     onTouchStart(evt: EventTouch) {
        this._isTouched = true;
        let pos = this.getWorldPos(this.node);
        let canvas = find("/Canvas");
        if (canvas) {
            this.node.setParent(canvas);
            this.setWorldPos(this.node, pos);
        }
    }

   onTouchMove(evt: EventTouch) {
        if (this._isTouched) {
            let deltaX = evt.getDelta().x;
            let deltaY = evt.getDelta().y;
            let newPos = this.node.position.add(new Vec3(deltaX, deltaY, 0));
            this.node.setPosition(newPos);
        }
    }

    onTouchEnd(evt: EventTouch) {
        this._isTouched = false;
        let pos = this.getWorldPos(this.node);
        if (this._parentNode) {
            this.node.setParent(this._parentNode);
            this.setWorldPos(this.node, pos);
        }
    }

   getWorldPos(node: Node): Vec3 {
        return node.worldPosition;
    }

  setWorldPos(node: Node, pos: Vec3) {
        node.worldPosition = pos;
    }
}
    
    