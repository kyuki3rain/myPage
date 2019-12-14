import React from 'react';
import styled from 'styled-components';

// import But from "./but";

const Style = styled.div`
    width:21vmax;
    display:flex;
    flex-direction: column;
`;

const Row = styled.div`
    height:7vmax;
    display:flex;
`;

const But = styled.div`
    width:6vmax;
    height:6vmax;
    margin:0.5vmax;
    border:0.2vmax black solid;
    box-sizing: border-box;
    font-size:4vmax;
    text-align:center;
    line-height:6vmax;
`;

const arrow = [
   "↖","↑","↗",
   "←","・","→",
   "↙","↓","↘"
]

export default class Control extends React.Component {
    render() {
        let row = [];
        for(let i=0;i<3;i++){
            let but = [];
            for(let j=0;j<3;j++){
                if(this.props.canPush[i*3+j]){
                    but.push(<But onClick={this.props.controler} key={i*3+j} id={i*3+j}>{arrow[i*3+j]}</But>);
                }
                else{
                    but.push(<But key={i*3+j}></But>);
                }
            }
            row.push(<Row key={9+i}>{but}</Row>);
        }
        return (
            <Style>{row}</Style>
        );
    }
}