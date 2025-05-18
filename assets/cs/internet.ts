import { find } from 'cc';
import { _decorator, Component ,EventMouse,Input,input,Node} from 'cc';
import Pchange from '../TS/Message/Pchange';
import { EventTouch } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Internet')
export default class internet extends Component {
////网联通信,获取玩家角色轮次,传给playlun修改p
    start () {

this.node.on(Node.EventType.TOUCH_START, this.onMouseDown);
this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown);
this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseDown);
input.on(Input.EventType.MOUSE_DOWN,this.hhh)
this.node.on(Node.EventType.TOUCH_START,this.onTouchStart)
}

onMouseDown(event: EventMouse) {
    // 检查事件是否被拦截
    if (event.isStopped()) {
       
    } else {
        console.log("Mouse down event was not intercepted.");
        // 打印鼠标点击的位置
        console.log("Mouse down at position:"+ event);
    }
}



onLoad() {
    // 绑定触摸事件
   // this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
}

onTouchStart(event: EventTouch) {
    try {
        console.log('Touch start event triggered');
        console.log('Event details:', event);
    } catch (error) {
        console.error('Error in touch-start event listener:', error);
    }
}


hhh(event: EventMouse){

   
   // find("Canvas/UIManager/tiaoshi").getComponent(Pchange).tt()
}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class internet extends cc.Component {
// //网联通信,获取玩家角色轮次,传给playlun修改p
//     start () {
// 
//     }
// }
