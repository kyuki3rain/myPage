import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Style = styled.div`
    flex:2;
    display:flex;
    align-items:center;
    justify-content:center;
`;

class Container extends React.Component {
    render() {
        return (
        <Style>
            {this.props.formula}
        </Style>
        );
    }
}

export default connect(
    state => ({ formula:state.gameStates.formula }),
    {  }
)(Container);
