// OrthoUIController.ts
import { find } from 'cc';
import { _decorator, Component, Camera, Widget, UITransform, view } from 'cc';
import GeZiManager from '../Manager/GeZiManager';
const { ccclass, property } = _decorator;

@ccclass('UIm')
export class UIm extends Component {
    @property(Camera)
    mainCamera: Camera = null!; // 关联正交相机

    @property(Widget)
    edgeWidget: Widget = null!; // 需要对齐边缘的Widget组件

 @property(Number)
top:number=10
 @property(Number)
left:number=10
 @property(Number)
right:number=10
 @property(Number)
bottom:number=10


    onLoad() {
        // 确保是正交相机
     this.mainCamera=find("Canvas/Main Camera").getComponent(Camera)
     this.edgeWidget=this.node.getComponent(Widget)
        // 一次性计算并设置边距
      
    }
protected start(): void {
  GeZiManager.UIm.push(this)
  this.setupUIBounds()


  console.log(find("Canvas/Main Camera/UIManager/CUIManager/yesno").position)
  console.log(find("Canvas/Main Camera/UIManager/CUIManager/yesno").active)
}
   setupUIBounds() {
        // 获取正交相机参数
         const canvas = find("Canvas")!;
        this.edgeWidget.target = canvas;

        // 计算正交相机参数
        const orthoHeight = this.mainCamera.orthoHeight;
        const designSize = view.getDesignResolutionSize();
        const aspectRatio = designSize.width / designSize.height;

        // 设置边距（直接赋值）
        this.edgeWidget.left = this.left;
        this.edgeWidget.right = this.right;
        this.edgeWidget.top = this.top;
        this.edgeWidget.bottom = this.bottom;

        // 强制刷新布局
        this.edgeWidget.updateAlignment();
       // this.edgeWidget.update();
    }
}
