import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { initialize } from "../actions";

import Field from "./field";
import Next from "./next";
import Hold from "./Hold";
import Score from "./score";
import Menu from "./menu";


const Style = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:90vw;
    margin:40px auto 0;
    position:relative;
`;

const Left = styled.div`
    width:10vw;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Notes = styled.div`
    width:25vw;
    height:40vw;
    padding:0 0 0 1vw;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;
const LNotes = styled.div`
    width:25vw;
    height:40vw;
    box-sizing:border-box;
    padding:0 0 0 8vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const Text = styled.div`
    color:#112d4e;
    font-size:2.4vw;
    margin:1vw 0;
`;
const Textx = styled(Text)`
    text-decoration: line-through;
`;

class Container extends React.Component {
    componentWillUnmount(){
        this.props.initialize();
        clearInterval(this.props.intervalId);
        clearInterval(this.props.advanceId);
        console.log("clear "+ this.props.intervalId);
        console.log("clear "+ this.props.advanceId);
    }
    render() {
        return (
        <Style>
            <Menu></Menu>
            <LNotes>
                <Text>A:左回転</Text>
                <Text>D:右回転</Text>
                <Text>E:ホールド</Text>
                <Text>Esc:ポーズ</Text>
            </LNotes>
            <Left>
                <Hold></Hold>
                <Score></Score>
            </Left>
            <Field></Field>
            <Next></Next>
            <Notes>
                <Textx>↑:ハードドロップ</Textx>
                <Text>←:左移動</Text>
                <Text>→:右移動</Text>
                <Text>↓:加速</Text>
            </Notes>
        </Style>
        );
    }
}

export default connect(
    state => ({ intervalId:state.intervalId,advanceId:state.adviceId }),
    { initialize }
)(Container);