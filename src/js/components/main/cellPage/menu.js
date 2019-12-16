import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    display:flex;
    flex-direction:column;
    font-size:2vh;
    input{
        font-size:2vh;
    }
    > div > div{
        margin:0 0 2vh 2vh;
    }
    > div *{
        display:inline-block;
    }
`;

const Button = styled.button`
    width:6vh;
    height:3vh;
    font-size:2vh;
    margin:0 0 0 1vh;
`;

const Text = styled.div`
    width:6vh;
    height:3vh;
    margin:0 1vh 0 0;
`;

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={code:0,row:50,col:30,scale:0.5};
    }
    loop(){
        if(this.state.code !== 0)clearInterval(this.state.code);
        let code = setInterval(this.props.startGame,100);
        this.setState({code:code});
    }
    stopLoop(){
        clearInterval(this.state.code);
    }
    changeState(e){
        let obj  = {};
        obj[e.target.id]=e.target.value;
        this.setState(obj);
    }
    changeSt(){
        let row = this.state.row;
        let col = this.state.col;
        let scale = this.state.scale;
        this.props.changeStage(row,col,scale);
    }
    reset(){
        this.props.changeCell(-1,-1);
    }
    render() {
        return (
            <Style>
                <div>
                    <div>
                        <Text>row:</Text>
                        <input value={this.state.row} id={"row"} onChange={this.changeState.bind(this)}></input>
                    </div>
                    <div>
                        <Text>col:</Text>
                        <input value={this.state.col} id={"col"} onChange={this.changeState.bind(this)}></input>
                    </div>
                    <div>
                        <Text>scale:</Text>
                        <input value={this.state.scale} id={"scale"} onChange={this.changeState.bind(this)}></input>
                    </div>
                    <Button onClick={this.changeSt.bind(this)}>更新</Button>
                </div>
                <div>
                    <Button onClick={this.loop.bind(this)}>start</Button>
                    <Button onClick={this.stopLoop.bind(this)}>stop</Button>
                    <Button onClick={this.reset.bind(this)}>reset</Button>
                </div>
            </Style>
        );
    }
}