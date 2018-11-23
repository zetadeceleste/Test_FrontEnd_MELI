import React, { Component } from 'react';
import './SearchResults.scss';

// Dummy Json
import { items } from '../dummy-data/query.json';

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            items
        }
    }

    render() {
        const items = this.state.items.map((item) => {
            return (
                <div className="SearchResults">
                    <div className="SearchResults__result">
                        <img className="SearchResults__result__thumbnail" src={item.picture} alt="Foto de una hermosa guitarra."/>
                        <div className="SearchResults__result__detail">
                            <div className="SearchResults__result__detail-price-free-shipping">
                                <div className="SearchResults__result__detail-price">
                                    {item.price.currency} {item.price.amount}
                                </div>
                                <div className="SearchResults__result__detail-free-shipping"></div>
                            </div>
                            <div className="SearchResults__result__detail-title">
                                {item.title}
                            </div>
                            <div className="SearchResults__result__detail-condition">
                                {item.condition}
                            </div>
                        </div>
                        <div className="SearchResults__result__location">
                            {item.location}
                        </div>
                    </div>
                    <hr className="SearchResults__result-line" />
                </div>
            )
        });

        return (
            <div>
                {items}

            </div>
        )
    }
}

export default SearchResults;