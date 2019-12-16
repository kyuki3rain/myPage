import React from 'react';
import styled from 'styled-components';

import Monitor from "./nicePage/monitor";
import Control from "./nicePage/control"

const Style = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    user-select:none;
    @media screen and (orientation: landscape) {
        flex-direction:row;
        height:100%;
        width:56vw;
        margin:0 22vw;
    }
    @media screen and (orientation: portrait) {
        flex-direction:column;
        height:56vh;
        width:100vw;
        margin:10vh 0;
    }
`;

let canPush = [
    [0,0,0,
    0,0,0,
    0,1,1],
    [0,0,0,
    1,0,1,
    1,1,1],
    [0,0,0,
    0,0,0,
    1,1,0],
    [0,1,0,
    0,0,1,
    0,1,0],
    [1,0,1,
    1,0,1,
    1,0,1],
    [0,1,0,
    1,0,0,
    0,1,0],
    [0,1,1,
    0,0,0,
    0,0,0],
    [1,1,1,
    1,0,1,
    0,0,0],
    [1,1,0,
    0,0,0,
    0,0,0]
]
let movex = [
    -1,0,1,
    -1,0,1,
    -1,0,1
]
let movey = [
    -1,-1,-1,
    0,0,0,
    1,1,1
]

export default class DicePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            place:[1,1],
            turn:0,
            ans:2,
            value:""
        };
    }
    controler(e){
        let place = this.state.place;
        let turn = this.state.turn;
        if(canPush[place[1]*3 + place[0]][e.target.id]>0){
            place[0]+=movex[e.target.id];
            place[1]+=movey[e.target.id];
            turn=(turn+1)%6;
            this.setState({place:place,turn:turn,ans:2});
        }
    }
    valueChange(e){
        this.setState({value:e.target.value});
        if(e.target.value == 6){
            this.setState({ans:0});
        }
        else{
            this.setState({ans:1});
        }
    }
    render() {
        return (
        <Style>
            <Monitor valueChange={this.valueChange.bind(this)} turn={this.state.turn} place={this.state.place} ans={this.state.ans} value={this.state.value}></Monitor>
            <Control controler={this.controler.bind(this)} canPush={canPush[this.state.place[1]*3 + this.state.place[0]]}></Control>
        </Style>
        );
    }
}