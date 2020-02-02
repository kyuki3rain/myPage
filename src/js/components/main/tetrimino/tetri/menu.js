import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { leftPosition,rightPosition,makeGame,
    resetGame,initialize,setIntervalId,waitTime,
    blockChange,blockRotateChange,mapUpdate,
    addMino,updatePreBlock,pullMino,setPosition,
    advancePosition,updateMino,resetPreBlock,
    setNextBlock,setAdvanceId,setHoldBlock } from "../actions";

const Style = styled.div`
    width:30vw;
    height:20vw;
    background-color:black;
    position:absolute;
    top:10vw;
    opacity:0.8;
    color:white;
    text-align:center;
    padding:4vw 0;
    box-sizing:border-box;
    display:${props => props.f};
`;

const Button = styled.button`
    width:10vw;
    height:4vw;
    font-size:2.4vw;
    margin:2.4vw 1.5vw;
`;

export const minoForm = [
    [
        1,
        [0,0],
        [0,0],
        [0,0],
        [0,0]
    ],
    [
        2,
        [0,0],
        [1,1],
        [1,0],
        [0,-1]
    ],
    [
        2,
        [0,0],
        [1,0],
        [1,-1],
        [0,1]
    ],
    [
        4,
        [0,0],
        [0,1],
        [0,-1],
        [1,-1]
    ],
    [
        4,
        [0,0],
        [0,1],
        [0,-1],
        [1,1]
    ],
    [
        1,
        [0,0],
        [0,1],
        [1,0],
        [1,1]
    ],
    [
        2,
        [0,0],
        [0,1],
        [0,-1],
        [0,2]
    ],
    [
        4,
        [0,0],
        [0,1],
        [1,0],
        [0,-1]
    ],
]

const maxWait = 30;

var arr = [1,2,3,4,5,6,7];
var a = arr.length;

let count = 0;
 
//シャッフルアルゴリズム


class Container extends React.Component {
    constructor(props){
        super(props);
        this.count = 0;
        this.holdCount = 0;
    }
    blockRotate(){
        let nextBlock=new Array(4);
        let minoRotate=(this.props.rotate+1)%minoForm[this.props.minoNum][0];
        let map = JSON.parse(JSON.stringify(this.props.map));
        // let preMap = this.props.preMap;
        let preBlock = JSON.parse(JSON.stringify(this.props.preBlock));
        for(let i=0;i<4;i++){
            if(preBlock[i][0]>=0){
                map[preBlock[i][0]][preBlock[i][1]]=0;
            }
        }
        // console.log(minoForm[this.props.minoNum][0]);
        let f = 0;
        for(let i=1;i<5;i++){
            nextBlock[i-1]= JSON.parse(JSON.stringify(minoForm[this.props.minoNum][i]));
            for(let j=0;j<minoRotate;j++){
                nextBlock[i-1] = [nextBlock[i-1][1],-nextBlock[i-1][0]];
            }
            if(nextBlock[i-1][0]+this.props.position[0]>=20
                ||nextBlock[i-1][0]+this.props.position[0]<0
                ||nextBlock[i-1][1]+this.props.position[1]>=10
                ||nextBlock[i-1][1]+this.props.position[1]<0){
                    if(map[nextBlock[i-1][0]+this.props.position[0]][nextBlock[i-1][1]+this.props.position[1]]!=0)
                    f=1;
                }
        }
        if(f==0){
            this.props.blockRotateChange(minoRotate);
            this.props.blockChange(nextBlock);
            // console.log(nextBlock);
        }
    }
    shaffle(){
        while (a) {
            var j = Math.floor( Math.random() * a );
            var t = arr[--a];
            arr[a] = arr[j];
            arr[j] = t;
        }
        return arr;
    }
    blockSet(){
        this.props.setPosition();
        if(this.props.mino.length<7){
            this.props.addMino();
        }
        let mino = this.props.mino;
        let p = mino.shift();
        let nextBlock = new Array(4);
        for(let i=0;i<4;i++){
            nextBlock[i] = minoForm[p][i+1];
        }
        this.props.blockChange(nextBlock);
        this.props.blockRotateChange(0);
        this.props.pullMino(mino);
        this.props.updateMino(p);
        this.props.resetPreBlock();
        this.props.waitTime(0);
        this.holdCount = 0;
    }
    Hold(){
        this.props.setHoldBlock();
        this.blockSet();
        this.nextSet();
        this.holdCount = 1;
        // console.log(this.holdCount);
    }
    gameCheck(){
        let map = JSON.parse(JSON.stringify(this.props.map));
        let zero = new Array(10).fill(0);
        if(map[0][4]!=0&&map[0][5]!=0){
            this.props.resetGame();
            clearInterval(this.props.intervalId);
            this.props.setIntervalId(0);
            console.log("clear "+ this.props.intervalId);
        }
        else{
            for(let i=0;i<20;i++){
                let f=0;
                for(let j=0;j<10;j++){
                    if(map[i][j]==0){f=1;break;}
                }
                if(f==0){
                    map.splice(i,1);
                    map.unshift(zero);
                }
            }
            this.props.mapUpdate(map);
        }
    }
    nextSet(){
        let blockBox = new Array(5);
        for(let k=0;k<5;k++){
            blockBox[k] = new Array(4);
            for(let i=0;i<4;i++){
                blockBox[k][i] = new Array(4).fill(0);
            }
            for(let i=0;i<4;i++){
                if(k<4)blockBox[k][minoForm[this.props.mino[k]][i+1][0]+1][minoForm[this.props.mino[k]][i+1][1]+1]=this.props.mino[k];
                else blockBox[k][minoForm[this.props.holdBlock][i+1][0]+1][minoForm[this.props.holdBlock][i+1][1]+1]=this.props.holdBlock;
            }
        }
        this.props.setNextBlock(blockBox);
    }
    Loop(){
        let map = JSON.parse(JSON.stringify(this.props.map));
        // let preMap = this.props.preMap;
        let f=0;
        let preBlock = JSON.parse(JSON.stringify(this.props.preBlock));
        for(let i=0;i<4;i++){
            if(preBlock[i][0]>=0){
                map[preBlock[i][0]][preBlock[i][1]]=0;
            }
        }
        for(let i=0;i<4;i++){
            if(
                this.props.position[0]+this.props.block[i][0]>=0
                && this.props.position[0]+this.props.block[i][0]<20
                && this.props.position[1]+this.props.block[i][1]>=0
                && this.props.position[1]+this.props.block[i][1]<10
            ){
                // console.log([this.props.position[0]+this.props.block[i][0],this.props.position[1]+this.props.block[i][1]])
                if(map[this.props.position[0]+this.props.block[i][0]][this.props.position[1]+this.props.block[i][1]]!=0){
                    if(this.props.wait>=maxWait){
                        this.props.waitTime(0);
                        this.gameCheck();
                        this.blockSet();
                        this.nextSet();
                    }
                    else{
                        this.props.waitTime(this.props.wait+1);
                    }
                    f=1;break;
                }
                else{
                    map[this.props.position[0]+this.props.block[i][0]][this.props.position[1]+this.props.block[i][1]]=this.props.minoNum;
                }
            }
            else if(this.props.position[0]+this.props.block[i][0]<0
                && this.props.position[0]+this.props.block[i][0]<20
                && this.props.position[1]+this.props.block[i][1]>=0
                && this.props.position[1]+this.props.block[i][1]<10
                ){

            }
            else{
                if(this.props.position[1]+this.props.block[i][1]<10){
                    if(this.props.wait>=maxWait){
                        this.props.waitTime(0);
                        this.gameCheck();
                        this.blockSet();
                        this.nextSet();
                    }
                    else{
                        this.props.waitTime(this.props.wait+1);
                    }
                }
                f=1;break;
            }
            preBlock[i]=[this.props.position[0]+this.props.block[i][0],this.props.position[1]+this.props.block[i][1]];
        }
        if(f==0){
            this.count++;
            this.props.updatePreBlock(preBlock);
            this.props.mapUpdate(map);
            if(this.count >= this.props.gameSpeed/this.props.advanceSpeed){
                this.props.advancePosition();
                this.count = 0;
            }
        }
    }
    startGame(){
        this.props.initialize();
        this.props.makeGame();
        this.blockSet();
        this.nextSet();
        let localIntervalId = setInterval(this.Loop.bind(this), 1000/this.props.gameSpeed);
        // let localAdvanceId = setInterval(this.advanceMino.bind(this), 1000/this.props.advanceSpeed);
        this.props.setIntervalId(localIntervalId);
        // this.props.setAdvanceId(localAdvanceId);
        console.log("start "+ localIntervalId);
        // console.log("start "+ localAdvanceId);
    }
    stopGame(){
        // this.props.initialize();
        this.props.makeGame();
        let localIntervalId = setInterval(this.Loop.bind(this), 1000/this.props.gameSpeed);
        // let localAdvanceId = setInterval(this.advanceMino.bind(this), 1000/this.props.advanceSpeed);
        this.props.setIntervalId(localIntervalId);
        // this.props.setAdvanceId(localAdvanceId);
        console.log("start "+ localIntervalId);
        // console.log("start "+ localAdvanceId);
    }
    pauseGame(){
        this.props.resetGame();
        clearInterval(this.props.intervalId);
        // clearInterval(this.props.advanceId);
        this.props.setIntervalId(0);
        // this.props.setAdvanceId(0);
        console.log("clear "+ this.props.intervalId);
        // console.log("clear "+ localAdvanceId);
    }
    keyCheck(e){
        if(e.keyCode == 27){
            this.pauseGame();
        }
        if(e.keyCode == 68){
            this.blockRotate();
        }
        if(e.keyCode == 69){
            if(this.holdCount==0){
                let map = JSON.parse(JSON.stringify(this.props.map));
                // let preMap = this.props.preMap;
                let preBlock = JSON.parse(JSON.stringify(this.props.preBlock));
                for(let i=0;i<4;i++){
                    if(preBlock[i][0]>=0){
                        map[preBlock[i][0]][preBlock[i][1]]=0;
                    }
                }
                this.props.mapUpdate(map);
                this.Hold();
            }

        }
        if(e.keyCode == 37){
            let map = JSON.parse(JSON.stringify(this.props.map));
            // let preMap = this.props.preMap;
            let preBlock = JSON.parse(JSON.stringify(this.props.preBlock));
            for(let i=0;i<4;i++){
                if(preBlock[i][0]>=0){
                    map[preBlock[i][0]][preBlock[i][1]]=0;
                }
            }
            let f = 0;
            for(let i=0;i<4;i++){
                if(this.props.position[1]+this.props.block[i][1]-1>=0){
                    if(map[this.props.position[0]+this.props.block[i][0]][this.props.position[1]+this.props.block[i][1]-1]!=0){
                        f=1;
                    }
                }
                else{
                    f=1;
                }
            }
            if(f==0)this.props.leftPosition();
        }
        if(e.keyCode == 39){
            let map = JSON.parse(JSON.stringify(this.props.map));
            // let preMap = this.props.preMap;
            let preBlock = JSON.parse(JSON.stringify(this.props.preBlock));
            for(let i=0;i<4;i++){
                if(preBlock[i][0]>=0){
                    map[preBlock[i][0]][preBlock[i][1]]=0;
                }
            }
            let f = 0;
            for(let i=0;i<4;i++){
                if(this.props.position[1]+this.props.block[i][1]+1<10){
                    if(map[this.props.position[0]+this.props.block[i][0]][this.props.position[1]+this.props.block[i][1]+1]!=0){
                        f=1;
                    }
                }
                else{
                    f=1;
                }
            }
            if(f==0)this.props.rightPosition();
        }
    }
    componentDidMount(){
        window.addEventListener("keydown",this.keyCheck.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener("keydown",this.keyCheck.bind(this));
    }
    render() {
        // const {gameSpeed,gamePlay,intervalId,makeGame,resetGame,initialize,setIntervalId,minoNum,waitTime,wait,blockChange,blockRotateChange} = this.props;
        return (
        <Style f={(this.props.gamePlay)?"none":"block"}>
            <div>開始しますか？</div>
            <Button onClick={this.startGame.bind(this)}>restart</Button>
            <Button onClick={this.stopGame.bind(this)}>resume</Button>
        </Style>
        );
    }
}

export default connect(
    state => state,
    { leftPosition,rightPosition,makeGame,resetGame,
        initialize,setIntervalId,waitTime,blockChange,
        blockRotateChange,mapUpdate,updatePreBlock,
        addMino,pullMino,setPosition,advancePosition,
        updateMino,resetPreBlock,setNextBlock,setAdvanceId,
        setHoldBlock }
)(Container);
