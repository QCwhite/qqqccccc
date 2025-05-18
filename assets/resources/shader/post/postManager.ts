import { director, Director, view } from 'cc';
import { Sprite, Material, RenderTexture } from 'cc';
import { Camera } from 'cc';
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('postManager')
export class postManager extends Component {
// WindowResizeHandler.ts


@property(Camera) // 拖拽相机节点到该属性
mainCamera: Camera | null = null;

private _colorTexture: RenderTexture | null = null;
private _depthTexture: RenderTexture | null = null;

start() {
    // 确保相机存在
    if (!this.mainCamera) {
        console.error("Main Camera is not assigned!");
        return;
    }

    // 初始化渲染纹理
    this.initRenderTextures();

    // 绑定窗口大小变化事件
    this.bindWindowResize();
}

private initRenderTextures() {
    const screenSize = view.getVisibleSize();

    // 创建颜色附件
    this._colorTexture = new RenderTexture();
    this._colorTexture.initialize({
        width: screenSize.width,
        height: screenSize.height,
        format: Format.RGBA8 // 颜色格式
    });

    // 创建深度模板附件
    this._depthTexture = new RenderTexture();
    this._depthTexture.initialize({
        width: screenSize.width,
        height: screenSize.height,
        format: Format.DEPTH_STENCIL // 深度模板格式
    });

    // 绑定到相机
    this.mainCamera.targetTexture = this._colorTexture; // 颜色附件
    this.mainCamera.depthTexture = this._depthTexture;  // 深度模板附件
}

private bindWindowResize() {
    // 监听窗口大小变化
    window.addEventListener('resize', this.onWindowResize.bind(this));
}

private onWindowResize() {
    const screenSize = view.getVisibleSize();

    // 更新颜色附件尺寸
    if (this._colorTexture) {
        this._colorTexture.reset({
            width: screenSize.width,
            height: screenSize.height
        });
    }

    // 更新深度模板附件尺寸
    if (this._depthTexture) {
        this._depthTexture.reset({
            width: screenSize.width,
            height: screenSize.height
        });
    }

    // 更新正交相机参数（适用于2D项目）
    if (this.mainCamera?.projection === Camera.ProjectionType.ORTHO) {
        this.mainCamera.orthoHeight = screenSize.height / 2;
    }
}

onDestroy() {
    // 移除事件监听
    window.removeEventListener('resize', this.onWindowResize.bind(this));
}
}



