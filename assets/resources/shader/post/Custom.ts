import { renderer, rendering } from 'cc';

class BuiltinPipelineBuilder implements rendering.PipelineBuilder {
    windowResize(
        ppl: rendering.BasicPipeline,
        window: renderer.RenderWindow,
        camera: renderer.scene.Camera,
        nativeWidth: number,
        nativeHeight: number,
    ): void {
        // 设置渲染资源
    }
    setup(
        cameras: renderer.scene.Camera[],
        ppl: rendering.BasicPipeline,
    ): void {
        // 设置相机渲染
    }
    
    
    if (rendering) {
        rendering.setCustomPipeline('Custom', new BuiltinPipelineBuilder());
    }











}