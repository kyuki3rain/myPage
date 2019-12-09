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
`;

export default class Dice extends React.Component {
    render() {
        return (
        <Style>
            <div>
                <div>
                    <Circle></Circle>
                    <Circle></Circle>
                </div>
                <div>
                    <Circle></Circle>
                    <Circle></Circle>
                    <Circle></Circle>
                </div>
                <div>
                    <Circle></Circle>
                    <Circle></Circle>
                </div>
            </div>
        </Style>
        );
    }
}