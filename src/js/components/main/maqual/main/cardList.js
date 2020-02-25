import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Card from "./card";

const Style = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:8vh 2vh;
    box-sizing:border-box;
    width:90%;
`;

const CardRow = styled.div`
    /* background-color:grey; */
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

class Container extends React.Component {
    render() {
        return (
        <Style>
            <CardRow>
                <Card card={this.props.card[0]}></Card>
                <Card card={this.props.card[1]}></Card>
                <Card card={this.props.card[2]}></Card>
                <Card card={this.props.card[3]}></Card>
                <Card card={this.props.card[4]}></Card>
            </CardRow>
            <CardRow>
                <Card card={this.props.card[5]}></Card>
                <Card card={this.props.card[6]}></Card>
                <Card card={this.props.card[7]}></Card>
                <Card card={this.props.card[8]}></Card>
                <Card card={this.props.card[9]}></Card>
            </CardRow>
            <CardRow>
                <Card card={this.props.card[10]}></Card>
                <Card card={this.props.card[11]}></Card>
                <Card card={this.props.card[12]}></Card>
                <Card card={this.props.card[13]}></Card>
                <Card card={this.props.card[14]}></Card>
            </CardRow>
        </Style>
        );
    }
}

export default connect(
    state => ({ card:state.gameStates.card }),
    {  }
)(Container);
