import React, { Component } from 'react';
import style from '../App/App.css'

let onSubmit = null;

export default class SearchInput extends Component {
    constructor() {
        super();
        onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();
        const query = ev.target.elements.query.value;
        this.props.onSearch(query);
    }

    componentDidMount() {
        const { onSearch, initialQuery } = this.props;
        if (initialQuery) {
            onSearch(initialQuery);
        }
    }

    render() {
        const { initialQuery } = this.props;
        return (
            <section>
                <form onSubmit={onSubmit}>
                    <div className={style.title}>
                        Enter a word or phrase: <br/><br/>
                        <input type="text" name="query" defaultValue={initialQuery} />
                        <button type="submit">Search</button>
                    </div>
                </form>
            </section>
        );
    }
}
