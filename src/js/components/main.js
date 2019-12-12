import React from "react";
import styled from "styled-components";

import Content from "./main/content";

const Style = styled.div`
    padding:10vh 0 0;
    width:100vw;
    height:100vh;
    font-size:4vh;
`;

const Footer = styled.div`
    width:100vw;
    height:10vh;
    background-color:black;
    color:white;
`;

export default class Main extends React.Component {
    render() {
        return (
        <Style>
            <Content></Content>
            <Footer>
                <div>{this.props.name}</div>
            </Footer>
        </Style>
        );
    }
}