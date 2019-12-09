import React from 'react';
import styled, { keyframes } from 'styled-components';

const GritchKeyBlue = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
        transform: scale(1.2, 1.4) translate(-10px, -3px) skewX(-25deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.9, 1.1) translate(16px, 3px) skewX(5deg);
    }
    75% {
        opacity: 1;
        transform: scale(1.3, 2) translate(-30px, -3px) skewX(20deg);
    }
`;
const GritchKeyRed = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
        transform: scale(1.8, 1.6) translate(-10px, 3px) skewX(30deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.5, 1.2) translate(20px, 6px) skewX(5deg);
    }
    75% {
        opacity: 1;
        transform: scale(0.9, 1.8) translate(-16px, -1px) skewX(-20deg);
    }
`;
const GritchKeyGreen = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
        transform: scale(1.3, 1.5) translate(3px, 6px) skewX(25deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.6, 1.1) translate(-16px, -5px) skewX(-15deg);
    }
    75% {
        opacity: 1;
        transform: scale(1, 1.8) translate(18px, 4px) skewX(15deg);
    }
`;

const Style = styled.div`
    .tveffect {
            position:relative;
            font-size:calc( ${props => props.fontSize} * 0.6);
        }

      .tveffect div {
          position: absolute;
          /* text-align: center; */
          width: 100%;
          height:${props => props.fontSize};
      }

      .tveffect div:nth-child(1) {
          color:#000000;
          background-color: #ffffff;
          -webkit-transition: all 0.1s ease;
      }

      .tveffect div:nth-child(2) {
          overflow: hidden;
      }

      .tveffect div:nth-child(2) div {
          position: absolute;
          /* text-align: center; */
          width: 100%;
          font-size:calc( ${props => props.fontSize} * 0.6);
      }

      .tveffect div:nth-child(2) div:nth-child(1) {
          color: rgba(200, 120, 120, 0.8);
          opacity: 0;
      }

      .tveffect div:nth-child(2) div:nth-child(2) {
          color: rgba(120, 200, 120, 0.8);
          opacity: 0;
      }

      .tveffect div:nth-child(2) div:nth-child(3) {
          color: rgba(120, 120, 200, 0.8);
          opacity: 0;
      }

      .tveffect div:nth-child(2) div:nth-child(1) {
          animation: ${GritchKeyRed} 0.25s linear;
          -webkit-animation: ${GritchKeyRed}  0.25s linear;
          -moz-animation: ${GritchKeyRed}  0.25s linear;
      }

      .tveffect div:nth-child(2) div:nth-child(2) {
          animation: ${GritchKeyGreen}  0.25s linear;
          -webkit-animation: ${GritchKeyGreen} 0.25s linear;
          -moz-animation: ${GritchKeyGreen} 0.25s linear;
      }

      .tveffect div:nth-child(2) div:nth-child(3) {
          animation: ${GritchKeyBlue} 0.25s linear;
          -webkit-animation: ${GritchKeyBlue} 0.25s linear;
          -moz-animation: ${GritchKeyBlue} 0.25s linear;
      }
`;

export default class Gritch extends React.Component {
    constructor(){
        super();
        this.state = {color:true};
        setInterval(()=>{
            this.setState({color:false});
            this.setState({color:true});
        },3000);
    }
    render() {
        return (
        <Style style={{width:this.props.width,height:this.props.height}} fontSize={this.props.height}>
            {(this.state.color)?<div  className={"tveffect"}>
                <div>{this.props.text}</div>
                <div>
                    <div>{this.props.text}</div>
                    <div>{this.props.text}</div>
                    <div>{this.props.text}</div>
                </div>
            </div>:<div>{this.props.text}</div>}
        </Style>
        );
    }
}