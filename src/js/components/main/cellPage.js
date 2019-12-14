import React from 'react';
import styled from 'styled-components';

import BoxRow from "./cellPage/boxRow";
import Menu from "./cellPage/menu";

const Style = styled.div`
    display:flex;
    flex-direction:column;
    overflow:scroll;
    box-sizing:border-box;
    width:100%;
`;

const Sc = styled.div`
    transform:scale(${props => props.scale});
    margin:calc(${props => props.scale*50}vh - 50vh) 0 0 calc(${props => props.scale*50}vw - 50vw);
    width:calc(100vw - 15px);
    height:100vh;
`;

const Pad = styled.div`height:30px;`;

const Div = styled.div`height:100%;`;

let dx=[0,1,1,1,0,-1,-1,-1];
let dy=[1,1,0,-1,-1,1,0,-1];
let dx2=[0,1,2,2,2,2,2,1,0,-1,-2,-2,-2,-2,-2,-1];
let dy2=[2,2,2,1,0,-1,-2,-2,-2,-2,-2,-1,0,1,2,2];

function mod(a,b){return(a*b<0)*b+a%b}


export default class cellPage extends React.Component {
    constructor(props){
        super(props);
        let tbl = new Array(30);
        for(let y = 0; y < 50; y++) {
            tbl[y] = new Array(50).fill(0);
        }
        this.state = {row:50,col:30,scale:0.5,array:tbl,end:0,game:0};
    }
    startGame(){
        let nextP = [];
        let p = this.state.array;
        let endType = this.state.end;
        let gameMode= this.state.game;
        for(let i=0;i<this.state.col;i++){
            nextP[i]=[];
            for(let j=0;j<this.state.row;j++){
                if(endType===1){
                    if(i*j===0||i===p.length-1||j===p[i].length-1){
                        nextP[i][j]=p[i][j];
                        continue;
                    }
                }
                let psum=0;
                let psum2=0;
                let fl=0;
                for(let k=8;k--;){
                    if(endType===0){
                        psum+=p[mod((i+dx[k]),p.length)][mod((j+dy[k]),p[i].length)];
                    }
                    else{
                        psum+=p[i+dx[k]][j+dy[k]];
                    }
                }
                if(gameMode===1&&i>1&&j>1&&i<p.length-2&&j<p[i].length-2){
                    for(let k=16;k--;){
                        if(endType===0){
                            psum2+=p[mod((i+dx2[k]),p.length)][mod((j+dy2[k]),p[i].length)];
                        }
                        else{
                            psum2+=p[i+dx2[k]][j+dy2[k]];
                        }
                    }
                }
                // console.log(psum);
                if(psum===2&&psum2<16)nextP[i][j]=p[i][j];
                else if(psum===3&&psum2<16){
                    if(gameMode===1 && endType===0 && psum2<4){
                        if(p[mod(i,p.length)][mod((j+1),p[i].length)]+p[mod(i,p.length)][mod((j+2),p[i].length)]+p[mod(i-1,p.length)][mod((j+1),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                        }
                        else if(p[mod(i,p.length)][mod((j-1),p[i].length)]+p[mod(i,p.length)][mod((j-2),p[i].length)]+p[mod(i+1,p.length)][mod((j-1),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                        }
                        else if(p[mod(i+1,p.length)][mod(j,p[i].length)]+p[mod(i+2,p.length)][mod(j,p[i].length)]+p[mod(i+1,p.length)][mod((j+1),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                        }
                        else if(p[mod(i-1,p.length)][mod(j,p[i].length)]+p[mod(i-2,p.length)][mod(j,p[i].length)]+p[mod(i-1,p.length)][mod((j-1),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                        }
                        else nextP[i][j]=1;
                    }
                    else if(gameMode===1 && endType===1 && psum2<4){
                        if(j+2<p[i].length&&i-1>=0)if(p[i][j+1]+p[i][j+2]+p[i-1][j+1]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                            fl=1;
                        }
                        if(j-2>=0&&i+1<p.length)if(p[i][j-1]+p[i][j-2]+p[i+1][j-1]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                            fl=1;
                        }
                        if(i-2>=0&&j-1>=0)if(p[i-1][j]+p[i-2][j]+p[i-1][j-1]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                            fl=1;
                        }
                        if(i+2<p.length&&j+1<p[i].length)if(p[i+1][j]+p[i+2][j]+p[i+1][j+1]===3){
                            console.log(i,j);
                            nextP[i][j]=0;
                            fl=1;
                        }
                        if(fl===0) nextP[i][j]=1;
                    }
                    else 
                    nextP[i][j]=1;
                }
                else {
                    if(gameMode===1 && endType===0 && psum===1 && psum2<4){
                        if(p[mod(i,p.length)][mod((j+1),p[i].length)]+p[mod(i,p.length)][mod((j+2),p[i].length)]+p[mod(i-1,p.length)][mod((j+2),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                        }
                        else if(p[mod(i,p.length)][mod((j-1),p[i].length)]+p[mod(i,p.length)][mod((j-2),p[i].length)]+p[mod(i+1,p.length)][mod((j-2),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                        }
                        else if(p[mod(i+1,p.length)][mod(j,p[i].length)]+p[mod(i+2,p.length)][mod(j,p[i].length)]+p[mod(i+2,p.length)][mod((j+1),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                        }
                        else if(p[mod(i-1,p.length)][mod(j,p[i].length)]+p[mod(i-2,p.length)][mod(j,p[i].length)]+p[mod(i-2,p.length)][mod((j-1),p[i].length)]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                        }
                        else nextP[i][j]=0;
                    }
                    else if(gameMode===1 && endType===1 && psum===1 && psum2<4){
                        if(j+2<p[i].length&&i-1>=0)if(p[i][j+1]+p[i][j+2]+p[i-1][j+2]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                            fl=1;
                        }
                        if(j-2>=0&&i+1<p.length)if(p[i][j-1]+p[i][j-2]+p[i+1][j-2]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                            fl=1;
                        }
                        if(i-2>=0&&j-1>=0)if(p[i-1][j]+p[i-2][j]+p[i-2][j-1]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                            fl=1;
                        }
                        if(i+2<p.length&&j+1<p[i].length)if(p[i+1][j]+p[i+2][j]+p[i+2][j+1]===3){
                            console.log(i,j);
                            nextP[i][j]=1;
                            fl=1;
                        }
                        if(fl===0) nextP[i][j]=0;
                    }
                    else 
                    nextP[i][j]=0;
                }
            }
        }
        this.setState({array:nextP});
        console.log(nextP);
    }
    changeStage(row,col,scale){
        this.setState({row:row,col:col,scale:scale});
    }
    changeCell(i,j){
        let p = this.state.array;
        if(Number(i)<0&&Number(j)<0){
            for(let k=0;k<p.length;k++)for(let s=0;s<p[0].length;s++)p[k][s]=0;
        }
        else{
            p[i][j] = (p[i][j]+1)%2;
        }
        this.setState({array:p});
    }
    render() {
        const boxcol=[];
        boxcol.push(<Pad key={-1}></Pad>)
        for(let i=0;i<this.state.col;i++){
            boxcol.push(<BoxRow changeCell={this.changeCell.bind(this)} p={this.state.array[i]} row={this.state.row} key={i} k={i}></BoxRow>);
        }
        boxcol.push(<Pad key={-2}></Pad>)
        return (
            <Div>
                <Menu changeCell={this.changeCell.bind(this)} startGame={this.startGame.bind(this)} row={this.state.row} col={this.state.col} scale={this.state.scale} changeStage={this.changeStage.bind(this)}></Menu>
                <Style>
                    <Sc scale={this.state.scale}>
                        {boxcol}
                    </Sc>
                </Style>
            </Div>
        );
    }
}