import { profiler } from "cc";
import { DEBUG, JSB } from "cc/env";
import { oops } from "../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIConfigData } from "./game/common/config/GameUIConfig";
import { ecs } from "../../extensions/oops-plugin-framework/assets/libs/ecs/ECS";
import { EcsAccountSystem } from "./game/account/Account";
import { EcsPositionSystem } from "./game/common/ecs/position/EcsPositionSystem";
import { smc } from "./game/common/ecs/SingletonModuleComp";
import { Initialize, EcsInitializeSystem } from "./game/initialize/Initialize";
import { EcsRoleSystem } from "./game/role/Role";
import { Component } from "cc";
import { _decorator } from "cc";
import { Root } from "db://oops-framework/core/Root";

const { property, ccclass } = _decorator;

@ccclass('Mainnm')
export default class Mainnm extends Root {
    start() {
       if (DEBUG) profiler.showStats();
    }

    protected run() {
        smc.initialize = ecs.getEntity<Initialize>(Initialize);
       if (JSB) {
            oops.gui.toast("热更新后新程序的提示");
        }
    }

    protected initGui() {
        oops.gui.init(UIConfigData);
    }

    protected initEcsSystem() {
        oops.ecs.add(new EcsPositionSystem())
        oops.ecs.add(new EcsAccountSystem());
        oops.ecs.add(new EcsRoleSystem());
        oops.ecs.add(new EcsInitializeSystem());
    }
}
