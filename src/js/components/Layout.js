import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Header from "./header";
import Main from "./main";


const Style = styled.div`
    width:100vw;
    top:0;
    left:0;
`;

     

export default class Layout extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <Style>
                <Router>
                    <Header></Header>
                    <Main></Main>
                </Router>
            </Style>
        );
    }
}