import {Container} from "@pixi/display";
import {createStairsButton} from "./stairButtons";
import {animationSwing, createSprite, fadeOut} from "../utils/utils";
import {newStairs, oldStairs} from "./stairs";
import {STAIRS_BUTTON_OFFSET, STAIRS_BUTTON_POSITION_Y, STAIRS_FALL_OFFSET, STAIRS_POSITION_Y} from "../constants/constants";
import {getContainer} from "./finalStage";

let buttonX = 830;
let isStairsButtonInit = false;
let timeoutDelay = 0;

export const initIntarectiveElements = () => {
    const container = new Container();

    const stairsButtons = [
        createStairsButton('stairs-1.png'),
        createStairsButton('stairs-2.png'),
        createStairsButton('stairs-3.png'),
    ];

    const okButton = createSprite('interactive/ok-button.png');
    const hammerIcon = createSprite('interactive/hammer.png');

    let selectedIndex = null;

    /**
     * Sets the starting point of stairs
     */
    const setStairsDefault = (index) => {
        const activeStairs = newStairs[index];

        activeStairs.y = STAIRS_POSITION_Y - STAIRS_FALL_OFFSET;
        activeStairs.alpha = 0;
        activeStairs.visible = true;
    }

    /**
     * Sets the position of the OK button when toggling stair icons
     */
    const setOkButtonPosition = (stairsButton) => {
        const { x, y, width, height } = stairsButton;

        okButton.alpha = 0;
        okButton.visible = true;
        okButton.x = x - ((okButton.width - width) / 2);
        okButton.y = y + height - 30;
    };

    /**
     * stair click handler
     */
    const clickStairsButtonHandler = (stairsButton, index) => {
        if (selectedIndex === index) return;
        selectedIndex = index;

        stairsButtons.forEach((btn) => {
            btn.getChildAt(1).visible = false;
        });

        stairsButton.getChildAt(1).visible = true;


        newStairs.forEach((stairs) => stairs.visible = false);
        oldStairs.visible = false;

        initOkButton();
        setStairsDefault(index);
        setOkButtonPosition(stairsButton);
    };

    /**
     * OK button handler
     */
    const clickOkButtonHandler = () => {
        const finalStage = getContainer();
        finalStage.visible = true;
        finalStage.alpha = 0;
    };

    /**
     * Init hummer icon
     * Handle the initialization of the stairs icon buttons
     */
    const hammerIconInit = () => {
        hammerIcon.interactive = true;
        hammerIcon.buttonMode = true;
        hammerIcon.position.set(1090, 265);

        hammerIcon.on('pointerdown', () => {
            if (isStairsButtonInit) return;
            stairsButtons.forEach(initStairsButton);
            isStairsButtonInit = true;
        });

        animationSwing(hammerIcon, 0.7, 0.1);
        container.addChild(hammerIcon);
    };

    /**
     * Initialize of the stairs icon button
     */
    const initStairsButton = (button, index) => {
        hammerIcon.alpha = 0;
        button.position.set(buttonX, STAIRS_BUTTON_POSITION_Y);

        timeoutDelay += 120;
        buttonX += STAIRS_BUTTON_OFFSET;
        button.on('pointerdown', () => clickStairsButtonHandler(button, index));

        setTimeout(() => {
            button.alpha = 0;
            container.addChild(button);
        }, timeoutDelay);
    };

    /**
     * Init ok button
     */
    const initOkButton = () => {
        okButton.visible = false;
        okButton.interactive = true;
        okButton.buttonMode = true;

        okButton.on('pointerdown', () => clickOkButtonHandler());
        fadeOut(okButton);

        container.addChild(okButton);
    };

    setTimeout(() => {
        hammerIconInit();
    }, 1500);

    return container;
}
