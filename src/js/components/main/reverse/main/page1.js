import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { incStep,decStep } from "../actions";

const Body = styled.div`
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:100vw;
    height:100vh;
    z-index:110;
`;

const Button = styled.div`
    font-size:10vh;
    color:black;
    z-index:1200;
    background-color:black;
`;

class Container extends React.Component {
    render() {
        return (
        <Body>
            <Button onClick={() => console.log('a')}>前へ</Button>
            <Button onClick={() => console.log('b')}>次へ</Button>
        </Body>
        );
    }
}

export default connect(
    state => ({ }),
    { incStep,decStep }
)(Container);
