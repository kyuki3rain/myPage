import React from 'react';
import styled from 'styled-components';



const Style = styled.div`
    min-width:40px;
    height:40px;
    border:2px black solid;
    box-sizing:border-box;
    margin:-1px;
`;

export default class Box extends React.Component {
    render() {
        return (
            <Style></Style>
        );
    }
}