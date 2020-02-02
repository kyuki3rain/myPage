
import {ActionType} from "./actions.js";

let tbl = new Array(21);
for(let y = 0; y < 20; y++) {
    tbl[y] = new Array(10).fill(0);
}
tbl[20] = new Array(10).fill(10)

let block = new Array(4);
for(let y = 0; y < 4; y++) {
    block[y] = new Array(2).fill(0);
}
let preBlock = new Array(4);
for(let y = 0; y < 4; y++) {
    preBlock[y] = new Array(2).fill(0);
}
let blockBox = new Array(5);
for(let y = 0; y < 5; y++) {
    blockBox[y] = new Array(4);
    for(let z = 0; z < 4; z++) {
        blockBox[y][z] = new Array(4).fill(0);
    }
}


function shaffle(){
    var arr = [1,2,3,4,5,6,7];
    var a = arr.length;

    while (a) {
        var j = Math.floor( Math.random() * a );
        var t = arr[--a];
        arr[a] = arr[j];
        arr[j] = t;
    }
    return arr;
}

let time = new Array(2).fill(0);

const initialStates = {
    gamePlay:0,
    map:tbl,
    intervalId:0,
    advanceId:0,
    gameSpeed:30,
    advanceSpeed:3,
    mino:shaffle(),
    position:[0,4],
    block:block,
    rotation:0,
    wait:0,
    minoNum:0,
    preBlock:preBlock,
    blockBox:blockBox,
    holdBlock:0,
    score:0,
    time:time,
    flame:0,
};

export default (state = initialStates, action) => {
    switch(action.type){
        case ActionType.GAMEPLAY: return { ...state, gamePlay:action.payload};
        case ActionType.INTERVALID: return { ...state, intervalId:action.payload};
        case ActionType.ADVANCEID: return { ...state, advanceId:action.payload};
        case ActionType.WAITTIME: return {...state, wait:action.payload};
        case ActionType.MAPUPDATE: return {...state, map:action.payload};
        case ActionType.BLOCKROTATECHANGE: return {...state, rotate:action.payload};
        case ActionType.BLOCKCHANGE: return {...state, block:action.payload};
        case ActionType.ADDMINO: return {...state, mino:state.mino.concat(shaffle())};
        case ActionType.PULLMINO: return {...state, mino:action.payload};
        case ActionType.SETPOSITION: return {...state, position:[0,4]};
        case ActionType.LEFTPOSITION: return {...state, position:[state.position[0],state.position[1]-1]};
        case ActionType.RIGHTPOSITION: return {...state, position:[state.position[0],state.position[1]+1]};
        case ActionType.ADVANCEPOSITION: return {...state, position:[state.position[0]+1,state.position[1]]};
        case ActionType.UPDATEMINO: return {...state, minoNum:action.payload};
        case ActionType.PREBLOCK: return {...state, preBlock:action.payload};
        case ActionType.RESETPREBLOCK: return {...state, preBlock:preBlock};
        case ActionType.SETNEXTBLOCK: return {...state, blockBox:action.payload};
        case ActionType.ADDSCORE: return {...state, score:state.score+action.payload};
        case ActionType.TIMEUPDATE: return {...state, time:action.payload}
        case ActionType.TIMERESET: return {...state, time:time}
        case ActionType.FLAMEUPDATE: return {...state, flame:action.payload}
        
        case ActionType.SETHOLDBLOCK: 
        if(state.holdBlock==0){
            return {...state,mino:state.mino,holdBlock:state.minoNum}
        }
        else{
            let mino= state.mino;mino.unshift(state.holdBlock);
            return {...state,mino:mino,holdBlock:state.minoNum}
        }

        case ActionType.INITIALIZE: return initialStates;
            
        default:return state;
    }
}