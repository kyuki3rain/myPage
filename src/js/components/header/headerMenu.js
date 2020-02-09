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
    /* color:#112d4e; */

    :hover{
        border-bottom:0.2vh #f9f7f7 solid;
        /* transition:border 500ms 0s ease; */
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
            <MenuList onClick={this.navigate.bind(this,"tetris")}>テトリス</MenuList>
            {/* <MenuList onClick={this.navigate.bind(this,"glitch")}>glitch</MenuList> */}
        </Style>
        );
    }
}

export default withRouter(headerMenu);