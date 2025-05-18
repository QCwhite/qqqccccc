import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import weapon from "../weapon";
import Qiang from "./Qiang";

@ccclass('A223')
export default class A223 extends Qiang {
  TheNumber:string = 'A223';//小激光枪
  SH: number=2;
  ptr: number = 8; // 穿透数+1
  BT: boolean=false;
  Ytype: number=10;
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import weapon from "../weapon";
// import Qiang from "./Qiang";
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class A223 extends Qiang {
//   TheNumber:string = 'A223';//小激光枪
//   SH: number=2;
//   ptr: number = 8; // 穿透数+1
//   BT: boolean=false;
// }
