import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const Style = styled.div`
    display:inline-block;
`;

const MenuList = styled.div`
    display:inline-block;
    font-size:2vh;
    height:3vh;
    line-height:3vh;
    margin:0 1vw;
    box-sizing:border-box;

    :hover{
        border-bottom:0.2vh white solid;
    }
`;

class headerMenu extends React.Component {
    navigate(value){
        this.props.history.push(value);
    }
    render() {
        return (
        <Style>
            <MenuList onClick={this.navigate.bind(this,"game1")}>Game1</MenuList>
            <MenuList onClick={this.navigate.bind(this,"cell")}>Life Game</MenuList>
            {/* <MenuList onClick={this.navigate.bind(this,"glitch")}>glitch</MenuList> */}
        </Style>
        );
    }
}

export default withRouter(headerMenu);