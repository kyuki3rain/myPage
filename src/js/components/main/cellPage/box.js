import React from 'react';
import styled from 'styled-components';



const Style = styled.div`
    min-width:40px;
    height:40px;
    border:2px black solid;
    box-sizing:border-box;
    margin:-1px;
    background-color:${props => props.p};
`;

export default class Box extends React.Component {
    change(){
        this.props.changeCell(this.props.col,this.props.k);
    }
    render() {
        return (
            <Style p={this.props.p?"black":"white"} onClick={this.change.bind(this)}></Style>
        );
    }
}