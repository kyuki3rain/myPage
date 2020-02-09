import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    color:#112d4e;
`;


export default class Maintain extends React.Component {
    render() {
        return (
        <Style>
            現在メンテナンス中です
        </Style>
        );
    }
}