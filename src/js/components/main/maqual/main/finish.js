import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {setGame,backHome} from "../actions";

const Body = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Button = styled.div`
    background-color:#29b6ec;
    border-radius:1vh;
    width:50%;
    height:7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:2vh;
`;

const Text = styled.div`
    color:#fffffe;
    text-align:center;
    font-size:4vh;
`;

const Logo = styled.div`
    width:70%;
    height:40%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Menu = styled.div`
    width:100%;
    height:50%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

class Container extends React.Component {
    render() {
        return (
        <Body>
            <Logo><div>score : {Math.floor(this.props.score)}</div></Logo>
            <Menu>
                <Button onClick={() => this.props.setGame()}>
                    <Text>restart</Text>
                </Button>
                <Button onClick={() => this.props.backHome()}>
                    <Text>back</Text>
                </Button>
            </Menu>
        </Body>
        );
    }
}

export default connect(
    state => ({ score:state.gameStates.score }),
    { setGame,backHome }
)(Container);
