import React from 'react';
import styled from 'styled-components';

const circleSize = 60;

const Style = styled.div`

    > div > div{
        width:${circleSize*3}px;
        height:${circleSize}px;
        display:flex;
        justify-content:space-between;
    }
    > div{
        display:inline-block;
    }
    width:100vw;
    text-align:center;
`;

const Circle = styled.div`
    width:${circleSize}px;
    height:${circleSize}px;
    border-radius:${circleSize/2}px;
    border:${circleSize/20}px black solid;
    box-sizing:border-box;
    background-color:${(props => props.num == 1)?"black":"white"};
`;

export default class Dice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a:((props.num%8)/4 + props.num%2 > 0)?1:0,
            b:((props.num%8)/4 + (props.num%4)/2 > 0)?1:0,
            c:((props.num%8)/4 + props.num%2 == 2)?1:0,
            d:(props.num%2 == 0)?1:0
        };
    }
    render() {
        console.log((this.props.num/4 + this.props.num%2 >= 1));
        return (
        <Style>
            <div>
                a:{((this.props.num%8)/4+this.props.num%2>= 1)?1:0}
            </div>
            <div>
                <div>
                    <Circle num={((this.props.num%8)/4 + this.props.num%2>= 1)?1:0}></Circle>
                    <Circle num={this.state.c}></Circle>
                </div>
                <div>
                    <Circle num={this.state.b}></Circle>
                    <Circle num={this.state.d}></Circle>
                    <Circle num={this.state.b}></Circle>
                </div>
                <div>
                    <Circle num={this.state.c}></Circle>
                    <Circle num={this.state.a}></Circle>
                </div>
            </div>
        </Style>
        );
    }
}