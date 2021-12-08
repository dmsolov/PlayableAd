import {Container} from "@pixi/display";
import {createSprite, fadeOut} from "../utils/utils";
import {FOREGROUND_PLANT_X, FOREGROUND_PLANT_Y} from "../constants/constants";


export const foregroundPlantInit = () => {
    const container = new Container();

    const plantForeground = createSprite('decoration/plant-foreground.png');
    plantForeground.position.set(FOREGROUND_PLANT_X, FOREGROUND_PLANT_Y - 50);
    plantForeground.alpha = 0;


    fadeOut(plantForeground);
    container.addChild(plantForeground);

    return container;
}