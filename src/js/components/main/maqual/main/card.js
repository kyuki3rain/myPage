import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectCard } from "../actions";

const Style = styled.div`
    flex:1;
    /* margin:1vh; */
    box-sizing:border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    position: relative;
    width: 70%;
    ::before {
        content:"";
        display: block;
        padding-top: 150%; /* 高さを幅の75%に固定 */
    }
`;

const CardText = styled.div`
    background-color:#29b6ec;
    border-radius:10%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    color:#fffffe;
    text-align:center;
`;

class Container extends React.Component {
    click(e){
        this.props.selectCard(this.props.card)
    }
    render() {
        return (
        <Style>
            <Card onClick={(e)=>this.click(e)}>
                <CardText>
                    <Text>{this.props.card}</Text>
                </CardText>
            </Card>
        </Style>
        );
    }
}

export default connect(
    state => ({ order:state.order,answer:state.answer,question:state.question,questionArray:state.questionArray }),
    { selectCard }
)(Container);
