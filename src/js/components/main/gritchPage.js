import React from 'react';
import styled from 'styled-components';

import Gritch from "../gritch";

const Style = styled.div`
    width:100%;
    height:80vh;
    text-align:center;
    padding:35vh 0;
    box-sizing:border-box;
`;

export default class gritchPage extends React.Component {
    render() {
        return (
        <Style>
            <Gritch text="Hello World!" width="100vw" height="5vh"></Gritch>
        </Style>
        );
    }
}