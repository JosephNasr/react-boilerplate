import React from 'react';
import style from './App.css'

export default class App extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <h1 className={style.title}>
                    Hello World!
                </h1>
            </div>
        );
    }
}