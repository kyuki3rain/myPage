import React from 'react';
import styled from 'styled-components';
import Box from "./box";


const Style = styled.div`
    display:flex;
    flex-direction:row;
`;

const Pad = styled.div`min-width:30px;height:30px;margin:-1px;`;

export default class BoxRow extends React.Component {
    render() {
        const boxrow = [];
        boxrow.push(<Pad></Pad>)
        for(let i=0;i<this.props.row;i++){
            boxrow.push(<Box col={this.props.k} key={i} k={i}></Box>);
        }
        boxrow.push(<Pad></Pad>)
        return (
            <Style>
                {boxrow}
            </Style>
        );
    }
}