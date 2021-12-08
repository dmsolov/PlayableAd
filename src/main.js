import * as PIXI from 'pixi.js'
import {createSprite} from "./utils/utils";
import {APP_HEIGHT, APP_WIDTH} from "./constants/constants";
import {staticElements} from "./modules/staticElements";
import {stairsInit} from "./modules/stairs";
import {initIntarectiveElements} from "./modules/gameFlow";
import {finalStage} from "./modules/finalStage";
import {createContinueButton} from "./modules/continueButton";
import {foregroundPlantInit} from "./modules/foregroundPlant";

export const app = new PIXI.Application({
    width: APP_WIDTH,
    height: APP_HEIGHT,
})

document.getElementById('game').appendChild(app.view);

app.stage.addChild(createSprite('bg.jpg'));
app.stage.addChild(staticElements());
app.stage.addChild(stairsInit());
app.stage.addChild(foregroundPlantInit());
app.stage.addChild(initIntarectiveElements());
app.stage.addChild(finalStage());
app.stage.addChild(createContinueButton());