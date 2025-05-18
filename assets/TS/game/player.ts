import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";

import GeZiManager from "../Manager/GeZiManager";
import KHD2 from "../Message/KHD2";

@ccclass('Player')
export default class player extends ComponentBase {
   
    static Pturn:number[]=[1];
   
   


    onLoad () {}

   start () {
player.Pturn=KHD2.PT;


       




   }


   static endGame(){

if(GeZiManager.P1.LST+GeZiManager.P3.LST+GeZiManager.P5.LST==-3){for (let m of GeZiManager.label){m.redWin()}}else if(GeZiManager.P2.LST+GeZiManager.P4.LST+GeZiManager.P6.LST==-3){for (let m of GeZiManager.label){m.blueWin()}}







   
}}
