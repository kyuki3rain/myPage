import React from 'react';
import styled from 'styled-components';

import Dice from "./dicePage/dice";

const Style = styled.div`
    width:100%;
    text-align:center;
`;

const In = styled.input`
    
`;

export default class DicePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:"1"};
    }
    handleChange(e){
        this.setState({value:e.target.value});
        console.log(e.target.value-1);
    }
    render() {
        return (
        <Style>
            <In value={this.state.value} onChange={this.handleChange.bind(this)}></In>
            <Dice num={this.state.value-1}></Dice>
        </Style>
        );
    }
}