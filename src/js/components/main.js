import React from "react";
import styled from "styled-components";

import Content from "./main/content";

const Style = styled.div`
    padding:10vh 0 0;
    width:100vw;
    height:90vh;
    font-size:4vh;
    padding:0;
`;

const Footer = styled.div`
    width:100vw;
    height:8vh;
    background-color:black;
    color:white;
`;

export default class Main extends React.Component {
    render() {
        return (
        <Style>
            <Content></Content>
            <Footer></Footer>
        </Style>
        );
    }
}