import React from 'react';
import styled from 'styled-components';

import Dice from "./dicePage/dice";

const Style = styled.div`
    width:100%;
    text-align:center;
`;

const Bt = styled.button`
    width:30px;
    height:30px;
    margin:0 10px;
`;

export default class DicePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:"1"};
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    render() {
        const but=[];
        for(let i=0;i<6;i++){
            but.push(<Bt onClick={this.handleChange.bind(this)} value={i+1}>{i+1}</Bt>);
        }
        return (
        <Style>
            {but}
            <Dice num={this.state.value-1}></Dice>
        </Style>
        );
    }
}