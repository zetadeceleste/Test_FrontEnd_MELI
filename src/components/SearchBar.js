import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    render() {
        return (
            <header className="SearchBar">
                <div className="SearchBar__logo"></div>
                <div className="SearchBar__search">
                    <form className="SearchBar__search-form" method="GET">
                        <input className="SearchBar__search-form__input" placeholder="Nunca dejes de buscar" type="text" />
                        <input className="SearchBar__search-form__button" type="submit" value="" />
                    </form>
                </div>
            </header>
        );
    }
}

export default SearchBar;