import React from 'react';
import styled from 'styled-components';
import {Route} from "react-router-dom";

import Home from "./home";
import GritchPage from "./gritchPage";
import DicePage from "./nicePage/NicePage";
import CellPage from "./cellPage/CellPage";
import Maintain from "./maintain";
import tetriPage from "./tetrimino/tetriPage";
import maqualPage from "./maqual/root"


const Style = styled.div`
    font-size:6vh;
    width:100vw;
    box-sizing:border-box;
    padding:10vh 0 0;
    height:90vh;
`;


export default class Content extends React.Component {
    render() {
        return (
            <Style>
                <Route exact path="/" component={Home}></Route>
                <Route path="/glitch" component={GritchPage}></Route>
                <Route path="/game1" component={Maintain}></Route>
                <Route path="/cell" component={CellPage}></Route>
                <Route path="/tetris" component={tetriPage}></Route>
                <Route path="/maqual" component={maqualPage}></Route>
            </Style>
        );
    }
}