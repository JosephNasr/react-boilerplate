import React from 'react';
import style from './App.css'
import GiphySearch from '../GiphySearch'

export default class App extends React.Component {
    render() {
        return (
            <div className={style.container}>
                {/* <h1 className={style.title}>
                    Hello World!
                </h1> */}
                <div>
                    <h1 className={style.title}>Giphy Search</h1>
                    <GiphySearch initialQuery="cat" />
                </div>
            </div>
        );
    }
}
