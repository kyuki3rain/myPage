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
    font-size:5vh;
    color:white;
    box-sizing:border-box;
    /* display:inline-block; */

    :hover{
        color:blue;
        text-decoration: underline;
    }
`;

const ListParent = styled.ul`
    margin:0 auto 0 0;
    list-style: disc;
`;

const Dive = styled.div`
    display:flex;
    margin:3vh 0 0;
`;

const Text = styled.div`
    font-size:3vh;
    margin:0 0 5vh;
    color:white;
`;

class Home extends React.Component {
    navigate(value){
        this.props.history.push(value);
    }
    render() {
        return (
        <Style>
            <div style={{color:"white"}}>ページ一覧</div>
            <Dive>
                <ListParent>
                    <MenuList onClick={this.navigate.bind(this,"game1")}>Game1</MenuList>
                    <Text>優しさが足りないWeb謎もどきです。スマホでもできます。「Clear!」がでたらクリアです。</Text>
                    <MenuList onClick={this.navigate.bind(this,"cell")}>Life Game</MenuList>
                    <Text>ライフゲームができます。ボタンはいろいろ増やす予定。スマホだと見づらい。</Text>
                    {/* <MenuList onClick={this.navigate.bind(this,"glitch")}>glitch</MenuList> */}
                </ListParent>
            </Dive>
        </Style>
        );
    }
}

export default withRouter(Home);