import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";

import Menu from "./header/headerMenu";

const Style = styled.div`
    position:fixed;

    width:100vw;
    height:8vh;
    background-color:black;
    color:white;
    z-index:100;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    padding:0 6vw 1vh;
    box-sizing:border-box;
`;
const Home = styled.div`
    font-size:3vh;
    display:inline-block;
`;

class Header extends React.Component {
    navigate(value){
        this.props.history.push(value);
    }
    render() {
        return (
        <Style>
            <Home onClick={this.navigate.bind(this,"/")}>Snow Rabbit's Laboratory</Home>
            <Menu></Menu>
        </Style>
        );
    }
}

export default withRouter(Header);