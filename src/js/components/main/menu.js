import React from "react";
import styled from "styled-components";

const Style = styled.div`
    position:fixed;

    width:100vw;
    height:10vh;
    background-color:black;
    color:white;
`;

export default class Menu extends React.Component {
    render() {
        return (
        <Style onClick={() => {

        }}>
            
        </Style>
        );
    }
}