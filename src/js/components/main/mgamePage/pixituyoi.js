import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addValue,initialize } from "../actions";
import * as PIXI from "pixi.js";
import {Stage,Graphics} from '@inlet/react-pixi';



const Style = styled.div`
    width:${props => props.width}px;
    height:${props => props.height}px;
    margin:120px auto 0;
`;



class Container extends React.Component {
    render() {
        const { height, width } = this.props;
        const OPTIONS = {
            backgroundColor: 0x1099bb,
            height: height,
            width: width
        };
        return (
        <Style width={width} height={height}>
            <Stage options={OPTIONS}>
            <Graphics
    draw={g => {
      // clear the graphics
      g.clear()
      // start drawing
      g.beginFill(0xff3300)
      g.lineStyle(4, 0xffd900, 1)

    //   g.moveTo(50, 50)
    //   g.lineTo(250, 50)
    //   g.lineTo(100, 100)
    //   g.lineTo(50, 50)
    //   g.endFill()
      
      g.lineStyle(2, 0x000000, 1)
      g.beginFill(0xffffff, 1)
      g.drawRect(50, 150, 120, 120)
      g.endFill()
      
    //   g.lineStyle(2, 0xff00ff, 1)
    //   g.beginFill(0xff00bb, 0.25)
    //   g.drawRoundedRect(150, 100, 300, 100, 15)
    //   g.endFill()

    //   g.lineStyle(0)
    //   g.beginFill(0xffff0b, 0.5)
    //   g.drawCircle(470, 90, 60)
    //   g.endFill()
    }}
  />
            </Stage>
        </Style>
        );
    }
}

export default connect(
    state => ({ height:state.height,width:state.width }),
    { addValue , initialize }
)(Container);