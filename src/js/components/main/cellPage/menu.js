import React from 'react';
import styled from 'styled-components';



const Style = styled.div`
    display:flex;
    flex-direction:row;
`;

export default class Menu extends React.Component {
    render() {
        return (
            <Style>
                <div>
                    <div>
                        <div>row:</div>
                        <input value={this.props.row} id={"row"} onChange={this.props.changeState.bind(this)}></input>
                    </div>
                    <div>
                        <div>col:</div>
                        <input value={this.props.col} id={"col"} onChange={this.props.changeState.bind(this)}></input>
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