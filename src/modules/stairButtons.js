import { Container } from '@pixi/display';
import {createSprite, fadeOut} from "../utils/utils";

export const createStairsButton = (image) => {
    const button = new Container();
    const nonActiveButton = createSprite('interactive/non-active-button.png');
    const activeButton = createSprite('interactive/active-button.png');
    const stairsTexture = createSprite(`interactive/${image}`);

    button.addChild(nonActiveButton);
    button.addChild(activeButton);
    button.addChild(stairsTexture);

    button.interactive = true;
    button.buttonMode = true;

    activeButton.visible = false;

    fadeOut(button);

    return button;
}

