import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    width:30vmax;
    height:30vmax;
    border-radius:30vmax;
    border:0.3vmax black solid;
    background-color:${props => props.color};
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Text = styled.div`
    color:white;
    height:4vmax;
    font-size:3vmax;
    margin:4vmax auto;
    line-height:3vmax;
`;

const Answer = styled.input`
    border:none;
    width:20vmax;
    height:6vmax;
    margin:0 auto;
`;

let text = [
    [
    "*i*wvb",
    "*****h",
    "**eaun"],
    [
    "",
    "1*h*l*",
    ""],
    [
    "**thae",
    "*****i",
    "*s*ted"],
    [
    "Clear!",
    "Wrong!"
    ]
];
let map = [
    1,0,3,
    2,4,2,
    3,0,3
]

export default class Monitor extends React.Component {
    constructor(props){
        super(props);
        this.state={value:"",ans:2};
    }
    color(place,i){
        if(map[place]===1&&(i%8)/4+i%2>=1)return "black";
        if(map[place]===2&&(i%8)/4+i%2>=2)return "black";
        if(map[place]===3&&(i%8)/4+(i%4)/2>=1)return "black";
        if(map[place]===4&&i%2==0)if(i%6==0)return "red";else return "black";
        else return "white";
    }
    render() {
        return (
        <Style color={this.color(this.props.place[0]+this.props.place[1]*3,this.props.turn)}>
            <Text>{(this.props.ans==2||(this.props.place[0]!=1&&this.props.place[1]!=1))?text[this.props.place[0]][this.props.place[1]]:text[3][this.props.ans]}</Text>
            {(this.props.turn==0&&this.props.place[0]===1&&this.props.place[1]===1)?<Answer value={this.props.value} onChange={this.props.valueChange}></Answer>:""}
        </Style>
        );
    }
}