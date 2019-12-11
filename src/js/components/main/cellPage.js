import React from 'react';
import styled from 'styled-components';

import BoxRow from "./cellPage/boxRow";
import Menu from "./cellPage/menu";

const Style = styled.div`
    display:flex;
    flex-direction:column;
    overflow:scroll;
    box-sizing:border-box;
`;

const Sc = styled.div`
    transform:scale(${props => props.scale});
    margin:calc(${props => props.scale*50}vh - 50vh) 0 0 calc(${props => props.scale*50}vw - 50vw);
    width:100vw;
    height:100vh;
`;

const Pad = styled.div`height:30px;`;

export default class cellPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {row:50,col:50,scale:0.5};
    }
    changeState(e){
        let obj  = {};
        obj[e.target.id]=e.target.value;
        this.setState(obj);
        console.log(this.state.row);
    }
    render() {
        const boxcol=[];
        boxcol.push(<Pad></Pad>)
        for(let i=0;i<this.state.col;i++){
            boxcol.push(<BoxRow row={this.state.row} key={i} k={i}></BoxRow>);
        }
        boxcol.push(<Pad></Pad>)
        return (
            <div>
                <Menu row={this.state.row} col={this.state.col} scale={this.state.scale} changeState={this.changeState}></Menu>
                <Style>
                    <Sc scale={this.state.scale}>
                        {boxcol}
                    </Sc>
                </Style>
            </div>
        );
    }
}