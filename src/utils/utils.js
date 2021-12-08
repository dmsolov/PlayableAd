import * as PIXI from 'pixi.js';
import { RES_PATH } from '../constants/constants';
import {app, tween} from "../main";

export const createSprite = (image) => {
    return new PIXI.Sprite(PIXI.Texture.from(`${RES_PATH}${image}`));
};

/**
 * Element appearance animation
 */
export const fadeOut = (element, step = 0.1) => {
    app.ticker.add(() => {
        if (element.alpha < 1) {
            element.alpha += step;
        }
    });
};

/**
 * Drop of an element to a given point
 */
export const fallingDown = (element, finalPosition, step = 1.5) => {
    if (!finalPosition) {
        finalPosition = element.y;
    }

    app.ticker.add(() => {
        if (element.y < finalPosition) {
            element.y += step;
        }
    })
}

/**
 * Button pulsation animation
 */
export const continueBtnAnimation = (continueBtn, deltaPulse) => {
    app.ticker.add(() => {
        deltaPulse += 0.1;
        continueBtn.scale.set(1 + Math.sin(deltaPulse) * 0.05);
    })
}

/**
 * Hammer swing animation
 */
export const animationSwing = (element, amplitude = 0.3, speed = 0.05) => {
    let currentAnimationTime = 0;

    app.ticker.add(() => {
        element.y += Math.sin(currentAnimationTime) * amplitude;
        currentAnimationTime += speed;
    });
}
