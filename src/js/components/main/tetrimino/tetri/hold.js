import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Style = styled.div`
    width:10vw;
    height:10vw;
    border:3px black solid;
    box-sizing:border-box;
    margin:0;
`;


class Container extends React.Component {
    render() {
        const {  } = this.props;
        return (
        <Style>
            
        </Style>
        );
    }
}

export default connect(
    state => ({  }),
    {  }
)(Container);
