import { _decorator, Component, Node } from 'cc';
import banana from './banana';
import MessageCenter from '../../TS/Message/MessageCenter';
import { AudioManager } from '../../TS/BASE/music';
const { ccclass, property } = _decorator;

@ccclass('Apple')
export class Apple extends banana {
      BZ(preZB:number)
      {       AudioManager.instance.ZJP("hit",11);
        MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"HP+")
        this.playFrameAnimation1("BZ",0,0)
      }
}


