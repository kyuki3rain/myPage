
export const ActionType ={
    INC_STEP:"ncreaseStep",
    DEC_STEP:"decreaseStep",
};



export const incStep = () => ({type:ActionType.INC_STEP});
export const decStep = () => ({type:ActionType.DEC_STEP});

