import React, { Component } from 'react';
import ReactWebChat, { createDirectLine, createStore } from 'botframework-webchat';
import STYLE_OPTIONS from './styleOptions';
import * as CONFIG from '../config';

export class WebChat extends Component {

    constructor(props) {
        super(props);
        this.store = createStore({}, ({ dispatch }) => next => action => {
            if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
                dispatch({
                    type: 'WEB_CHAT/SEND_EVENT',
                    payload: {
                        name: 'webchat/join',
                        value: { language: window.navigator.language, userName: this.state.uname }
                    }
                });
            }

            const { type } = action;
            if (type === 'DIRECT_LINE/INCOMING_ACTIVITY') {
                return next(action);
            } else {
                return next(action);
            }
        });
        this.state = { dtoken: null, uid: null, uname: null, isSet: false };
    }

    async componentInit() {
        try {
            var res = await fetch(`${CONFIG.API_URL}/api/init`);
            if (!res.ok) {

            } else {
                var result = await res.json();
                var uid = localStorage.getItem("fd_Bot_UserId");
                var uname = localStorage.getItem('fd_Bot_UserName');
                if (typeof (uid) == 'undefined' || uid == null || uid.length !== 32) {
                    localStorage.setItem("fd_Bot_UserId", result.i);
                    uid = result.i;
                }

                //let directLine = new DirectLine({ token: result.dtoken });s
                this.setState({
                    dtoken: result.d,
                    uid: uid,
                    uname: uname,
                    isSet: true
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    async componentDidMount() {
        await this.componentInit();
    }
    render() {
        return (
            <div id="bot" className="col">
                {this.state.isSet && <ReactWebChat directLine={createDirectLine({ token: this.state.dtoken, webSocket: true })} userID={this.state.uid} username={this.state.uname} styleOptions={STYLE_OPTIONS} store={this.store} />}
            </div>
        );
    }
}