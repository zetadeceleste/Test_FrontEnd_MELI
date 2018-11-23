import React, { Component } from 'react';
import './Main.scss';
import SearchBar from './SearchBar';
import Breadcrumb from './Breadcrumb';
import SearchResults from './SearchResults';
import ItemDetail from './ItemDetail';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__search-bar">
                    <SearchBar></SearchBar>
                </div>
                <div className="Main__search-breadcrumb">
                    <Breadcrumb></Breadcrumb>
                </div>
                <div className="Main__search-results">
                    <SearchResults></SearchResults>
                    {
                        /*
                        
                        <ItemDetail></ItemDetail>
                        */
                    }
                </div>
            </div>
        );
    }
}

export default Main;