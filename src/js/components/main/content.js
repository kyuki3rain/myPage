import React from 'react';
import styled from 'styled-components';
import {Route} from "react-router-dom";

import Home from "./home";
import GritchPage from "./gritchPage";
import DicePage from "./dicePage";
import cellPage from "./cellPage";


const Style = styled.div`
    font-size:6vh;
    width:100vw;
`;

const Bg = styled.div`
    background-color:midnightblue;
    height:100vh;
    width:100vw;
`;


export default class Content extends React.Component {
    render() {
        return (
            <Style>
                <Route exact path="/" component={Home}></Route>
                <Route path="/content0" component={GritchPage}></Route>
                <Route path="/content1" component={Bg}></Route>
                <Route path="/content2" component={DicePage}></Route>
                <Route path="/content3" component={cellPage}></Route>
            </Style>
        );
    }
}