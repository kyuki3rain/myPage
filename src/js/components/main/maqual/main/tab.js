import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Style = styled.div`
    
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
