import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Style = styled.div`
    height:8vh;
    background-color:#21bbb8;
`;


class Container extends React.Component {
    render() {
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
