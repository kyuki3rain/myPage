import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Header from "./header";
import Main from "./main";


const Style = styled.div`
    width:100vw;
    top:0;
    left:0;
`;

     

export default class Layout extends React.Component {
    constructor(){
        super();
        this.name = "Yuki";
        this.state = {name:"Minami"};
        setTimeout(()=>{this.name="Minami";},1000);
        setTimeout(()=>{this.setState({name:"Yuki"});},3000);
    }
    render() {
        return (
            <Style>
                <Router>
                    <Header></Header>
                    <Main name={this.name} stateName={this.state.name}></Main>
                </Router>
            </Style>
        );
    }
}