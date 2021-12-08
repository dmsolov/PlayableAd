import {continueBtnAnimation, createSprite} from "../utils/utils";
import {APP_WIDTH, CONTINUE_BUTTON_POSITION_Y} from "../constants/constants";
import {Container} from "@pixi/display";

export const createContinueButton = () => {
    const container = new Container();
    const continueButton = createSprite('interactive/continue-button.png');
    continueButton.x = APP_WIDTH / 2;
    continueButton.y = CONTINUE_BUTTON_POSITION_Y;
    continueButton.anchor.set(0.5, 0);

    continueButton.interactive = true;
    continueButton.buttonMode = true;

    continueButton.on('pointerdown', () => {
        const win = window.open('https://www.youtube.com/watch?v=xm3YgoEiEDc', '_blank');
        win.focus();
    });

    continueBtnAnimation(continueButton, 0);
    container.addChild(continueButton);

    return container;
};