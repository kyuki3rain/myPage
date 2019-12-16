import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const Style = styled.div`
    display:flex;
    flex-direction:column;
    align-items:top;
    width:80vw;
    margin:0 auto;
    height:100%;
`;

const MenuList = styled.li`
    font-size:2vmax;
    box-sizing:border-box;
    display:inline-block;

    :hover{
        color:blue;
        text-decoration: underline;
    }
`;

const ListParent = styled.ul`
    display:flex;
    flex-direction:column;
    margin:0 auto 0 0;
    list-style: disc;
`;

const Dive = styled.div`
    display:flex;
`;

class Home extends React.Component {
    navigate(value){
        this.props.history.push(value);
    }
    render() {
        return (
        <Style>
            <div>ページ一覧</div>
            <Dive>
                <ListParent>
                    <MenuList onClick={this.navigate.bind(this,"game1")}>Game1</MenuList>
                    <div>Web謎もどきです。スマホでもできます。</div>
                    <MenuList onClick={this.navigate.bind(this,"cell")}>Life Game</MenuList>
                    <div>ライフゲームができます。ボタンはいろいろ増やす予定。スマホだと見ずらい。</div>
                    {/* <MenuList onClick={this.navigate.bind(this,"glitch")}>glitch</MenuList> */}
                </ListParent>
            </Dive>
        </Style>
        );
    }
}

export default withRouter(Home);