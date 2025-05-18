import { _decorator, Component, Label } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('NewScript')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {

    }
    te(){
        // this.getComponent(cc.Button).interactable=false;
    }
//    // update (dt) {}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property(cc.Label)
//     label: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
// 
//     }
// 
//     te(){
//         this.getComponent(cc.Button).interactable=false;
//     }
//     // update (dt) {}
// }
