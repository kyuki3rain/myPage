import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { initialize } from "../actions";

import Field from "./field";
import Next from "./next";
import Hold from "./Hold";
import Score from "./score";
import Menu from "./menu";


const Style = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:60vw;
    margin:40px auto 0;
    position:relative;
`;

const Left = styled.div`
    width:10vw;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

class Container extends React.Component {
    render() {
        return (
        <Style>
            <Menu></Menu>
            <Left>
                <Hold></Hold>
                <Score></Score>
            </Left>
            <Field></Field>
            <Next></Next>
        </Style>
        );
    }
}

export default connect(
    state => ({ map:state.map }),
    { initialize }
)(Container);