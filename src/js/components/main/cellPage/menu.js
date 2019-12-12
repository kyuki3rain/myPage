import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    display:flex;
    flex-direction:row;
    font-size:2vh;
    input{
        font-size:2vh;
    }
    > div{
        margin:0 2vw 0 1vw;
    }
`;

const Button = styled.button`
    
`;

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={code:0};
    }
    loop(){
        if(this.state.code !== 0)clearInterval(this.state.code);
        let code = setInterval(this.props.startGame,100);
        this.setState({code:code});
    }
    stopLoop(){
        clearInterval(this.state.code);
    }
    render() {
        return (
            <Style>
                <div>
                    <div>
                        <div>row:</div>
                        <input value={this.props.row} id={"row"} onChange={this.props.changeState}></input>
                    </div>
                    <div>
                        <div>col:</div>
                        <input value={this.props.col} id={"col"} onChange={this.props.changeState}></input>
                    </div>
                    <div>
                        <div>scale:</div>
                        <input value={this.props.scale} id={"scale"} onChange={this.props.changeState}></input>
                    </div>
                </div>
                <div>
                    <Button onClick={this.loop.bind(this)}>start</Button>
                    <div>
                    </div>
                    <Button onClick={this.stopLoop.bind(this)}>stop</Button>
                    <div>
                    </div>
                    <div>
                        <div>scale:</div>
                        <input value={this.props.scale} id={"scale"} onChange={this.props.changeState.bind(this)}></input>
                    </div>
                </div>
            </Style>
        );
    }
}