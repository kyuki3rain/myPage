import React from 'react';
import styled from 'styled-components';

import Dice from "./dice";

const Style = styled.div`
    width:100%;
    text-align:center;
`;

const In = styled.input`
    width:
`;

export default class DicePage extends React.Component {
    render() {
        return (
        <Style>
            <input></input>
            <Dice></Dice>
        </Style>
        );
    }
}