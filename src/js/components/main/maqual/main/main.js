import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setGame } from "../actions";

import Formula from "./formula";
import CardList from "./cardList";
import Header from "./header";
import Tab from "./tab";
import Home from "./home";
import Finish from "./finish";


const Style = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:50.625vh;
    height:88vh;
    margin:0 auto;
    background-color:#fffffe;
    border:1px solid black;
`;

const Body = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;



class Container extends React.Component {
    componentWillUnmount(){

    }
    setBody(){
        switch(this.props.game){
            case 0: return(
                <Home></Home>
            );

            case 1: return(
            <Body>
                <Formula></Formula>
                <CardList></CardList>
            </Body>
            );

            case 2: return(
                <Finish></Finish>
            );

            default: return 0;
        }
    }
    render() {
        return (
        <Style>
            <Header></Header>
            {this.setBody()}
            {/* <Tab></Tab> */}
        </Style>
        );
    }
}

export default connect(
    state => ({game:state.game, }),
    { setGame }
)(Container);