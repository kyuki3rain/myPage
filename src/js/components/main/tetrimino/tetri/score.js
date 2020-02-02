import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Style = styled.div`
    height:25vw;
    width:10vw;
    border:3px black solid;
    box-sizing:border-box;
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
