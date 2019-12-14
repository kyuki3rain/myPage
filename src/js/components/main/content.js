import React from 'react';
import styled from 'styled-components';
import {Route} from "react-router-dom";

import Home from "./home";
import GritchPage from "./gritchPage";
import DicePage from "./nicePage";
import CellPage from "./cellPage";
import Maintain from "./maintain";


const Style = styled.div`
    font-size:6vh;
    width:100vw;
    /* height:80vh; */
`;


export default class Content extends React.Component {
    render() {
        return (
            <Style>
                <Route exact path="/" component={Home}></Route>
                <Route path="/glitch" component={GritchPage}></Route>
                <Route path="/nice" component={DicePage}></Route>
                <Route path="/cell" component={CellPage}></Route>
            </Style>
        );
    }
}