import React from 'react';
import styled, { keyframes } from 'styled-components';
import Gritch from '../gritch';

const Style = styled.div`
    width:100%;
    height:80vh;
    text-align:center;
    box-sizing:border-box;
    position:relative;
`;

const Key = keyframes`
    0% {
        top:-110vh;
    }
    100%{
        top:-10vh;
    }
`;

const Comp = styled.div`
    position:absolute;
    top:-10vh;
    z-index:100;
    width:100vw;
    height:100vh;
    /* position:absolute;
    top:0;left:0; */
    font-size:50vw;
    line-height:110vh;
    color:white;
    text-align:center;
    animation: ${Key} 0.75s ease-in;
    -webkit-animation: ${Key}  0.75s ease-in;
    -moz-animation: ${Key}  0.75s ease-in;
    background-color:${props => props.color};
`;

const text = [
    "さん",
    "にい",
    "いち",
    "開始"
];

const color = [
    "blue",
    "green",
    "purple",
    "red"
]

export default class gritchPage extends React.Component {
    constructor(){
        super();
        let animate=[],i=0;
        this.state = {ani:[]};
            this.code = setInterval(()=>{
                if(i===6){
                    let glitch = <Gritch width={"100vw"} height={"100vh"} text={"Hello!"}></Gritch>;
                    this.setState({ani:glitch});
                    clearInterval(this.code);
                }
                else {
                    animate.push(<Comp color={color[i]}>{text[i]}</Comp>);
                    this.setState({ani:animate});
                }
                i++;
            },1000);
    }
    componentWillUnmount(){
        clearInterval(this.code);
    }
    render() {
        return (
        <Style>
            {this.state.ani}
        </Style>
        );
    }
}