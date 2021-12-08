import {Container} from "@pixi/display";
import {APP_HEIGHT, APP_WIDTH, BANNER_POSITION_Y} from "../constants/constants";
import {createSprite, fadeOut} from "../utils/utils";
import {Graphics} from "@pixi/graphics";

let container;

export const finalStage = () => {
    container = new Container();
    container.interactive = true;
    container.visible = false;

    const createOverlay = () => {
        const overlay = new Graphics();
        overlay.beginFill(0x000000);
        overlay.drawRect(0, 0, APP_WIDTH, APP_HEIGHT);
        overlay.alpha = 0.5;
        container.addChild(overlay);
    }

    const createBanner = () => {
        const banner = createSprite('interactive/banner.png');
        banner.x = APP_WIDTH / 2;
        banner.y = BANNER_POSITION_Y;
        banner.anchor.set(0.5, 0);

        container.addChild(banner);
    };

    createOverlay();
    createBanner();

    fadeOut(container);

    return container;
};

export function getContainer() {
    return container;
}
