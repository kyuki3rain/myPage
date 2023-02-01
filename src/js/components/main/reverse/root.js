
import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Main from "./main/main";
import { StylesProvider } from "@material-ui/styles"

import { applyMiddleware,createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import sagas from "./sagas";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer,applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(sagas);

export default class Container extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <StylesProvider injectFirst>
                    <Main></Main>
                </StylesProvider>
            </Provider>
        );
    };
}