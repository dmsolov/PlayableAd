import {createSprite} from "../utils/utils";
import { Container } from '@pixi/display';
import { STATIC_ELEMENTS } from '../constants/constants';


export const staticElements = () => {
    const staticElements =  new Container();

    Object.values(STATIC_ELEMENTS).forEach((item) => {
        const element = createSprite(`decoration/${item.name}`);
        element.position.set(item.x, item.y);

        staticElements.addChild(element);
    });

    return staticElements;
};
