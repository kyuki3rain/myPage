import React from 'react';
import styled from 'styled-components';
import {Route} from "react-router-dom";

import Home from "./home";
import GritchPage from "./gritchPage";
import DicePage from "./nicePage/nicePage";
import CellPage from "./cellPage/cellPage";
import Maintain from "./maintain";


const Style = styled.div`
    font-size:6vh;
    width:100vw;
    box-sizing:border-box;
    padding:10vh 0 0;
    height:95%;
`;


export default class Content extends React.Component {
    render() {
        return (
            <Style>
                <Route exact path="/" component={Home}></Route>
                <Route path="/glitch" component={GritchPage}></Route>
                <Route path="/game1" component={DicePage}></Route>
                <Route path="/cell" component={CellPage}></Route>
            </Style>
        );
    }
}