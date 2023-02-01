
import {ActionType} from "./actions.js";



const initialStates = {
    step:0,
};

export default (state = initialStates, action) => {
    switch(action.type){
        case ActionType.INC_STEP: return {...state,step:(state.step<19)?state.step+1:state.step};
        case ActionType.DEC_STEP: return {...state,step:(state.step>0)?state.step-1:state.step};

        default:return state;
    }
}