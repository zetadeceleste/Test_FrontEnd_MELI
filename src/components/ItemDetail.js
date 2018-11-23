import React, { Component } from 'react';
import './ItemDetail.scss';

// Dummy Json
import { item } from '../dummy-data/description.json';

class ItemDetail extends Component {
    constructor() {
        super();
        this.state = {
            item
        }
    }

    render() {
        return (
            <div className="ItemDetail">
                <div className="ItemDetail__picture-detail">
                    <img className="ItemDetail__picture" src={item.picture} alt="Foto de una hermosa guitarra."/>
                    <div className="ItemDetail__detail">
                        <div className="ItemDetail__detail-condition-sold-quantity">
                            <div className="ItemDetail__detail-condition">{item.condition}&nbsp;</div>
                            <div className="ItemDetail__detail-sold-quantity">{item.sold_quantity} vendidos</div>
                        </div>
                        <div className="ItemDetail__detail-title">{item.title}</div>
                        <div className="ItemDetail__detail-price">{item.price.currency} {item.price.amount}</div>
                        <div className="ItemDetail__detail-input">
                            <input type="submit" value="Comprar" className="ItemDetail__detail-input-button" />
                        </div>
                    </div>
                </div>
                <div className="ItemDetail__description">
                    <div className="ItemDetail__description-title">Descripción del Producto</div>
                    <div className="ItemDetail__description-text">
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;