import React from 'react';
import styled from 'styled-components';

const circleSize = 60;

const Style = styled.div`

    > div > div{
        width:${circleSize*3}px;
        height:${circleSize}px;
        display:flex;
        justify-content:space-between;
        margin:10px 10px;
    }
    > div{
        display:inline-block;
        border:${circleSize/20}px black solid;
        box-sizing:border-box;
        padding:${circleSize/4}px;
    }
    width:100vw;
    text-align:center;
`;

const Circle = styled.div`
    width:${circleSize}px;
    height:${circleSize}px;
    border-radius:${circleSize/2}px;
    /* border:${circleSize/20}px black solid; */
    box-sizing:border-box;
    background-color:${props => props.num};
`;

export default class Dice extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <Style>
            <div>
                <div>
                    <Circle num={((this.props.num%8)/4 + this.props.num%2 >= 1)?"black":"white"}></Circle>
                    <Circle num={((this.props.num%8)/4 + (this.props.num%4)/2 >= 1)?"black":"white"}></Circle>
                </div>
                <div>
                    <Circle num={((this.props.num%8)/4 + this.props.num%2 >= 2)?"black":"white"}></Circle>
                    <Circle num={(this.props.num%2 == 0)?(this.props.num%8==0)?"red":"black":"white"}></Circle>
                    <Circle num={((this.props.num%8)/4 + this.props.num%2 >= 2)?"black":"white"}></Circle>
                </div>
                <div>
                    <Circle num={((this.props.num%8)/4 + (this.props.num%4)/2 >= 1)?"black":"white"}></Circle>
                    <Circle num={((this.props.num%8)/4 + this.props.num%2 >= 1)?"black":"white"}></Circle>
                </div>
            </div>
        </Style>
        );
    }
}