import { CHANGE_COLOR,CHANGE_FANCY_COLOR } from "../Constants/types.js";

function btnReducer(state, action) {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    const newState = {...state};
    switch (action.type) {
        case CHANGE_COLOR:
            newState.click = randomColor
            break;

        case CHANGE_FANCY_COLOR:
            newState.fancyClick = randomColor
            break;
    }

    return newState

}

export default btnReducer