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
        boxrow.push(<Pad key={-1}></Pad>)
        for(let i=0;i<this.props.row;i++){
            boxrow.push(<Box changeCell={this.props.changeCell} p={this.props.p[i]} col={this.props.k} key={i} k={i}></Box>);
        }
        boxrow.push(<Pad key={-2}></Pad>)
        return (
            <Style>
                {boxrow}
            </Style>
        );
    }
}