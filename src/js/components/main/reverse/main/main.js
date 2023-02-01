import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  } from "../actions";

import Page1 from "./page1";


const Style = styled.div`
    display:flex;
    position:absolute;
    top:${props => -100*props.step}vh;
    left:0;
    flex-direction:column;
    justify-content:center;
    width:100vw;
    height:2000vh;
    z-index:100;
    margin:0 auto;
    background-color:#fffffe;
    background: linear-gradient(#FFFFFF, #00FFFF,#0000FF,#000000);
    transition:top .5s;
`;

const Disp = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:100;
    pointer-events: none;
`;


const Tytle = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width:18vh;
    height:30vh;
    font-size:10vh;
    writing-mode: vertical-rl;
    z-index:101;
`;

const Page = styled.div`
    width:100vw;
    height:100vh;
`;


class Container extends React.Component {
    componentWillUnmount(){

    }
    render() {
        return (
            <Disp>
                <Style step={this.props.step}>
                    <Page1></Page1>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                    <Page></Page>
                </Style>
                <Disp>
                    <Tytle>終末謎</Tytle>
                </Disp>
            </Disp>
        );
    }
}

export default connect(
    state => ({step:state.step, }),
    { }
)(Container);