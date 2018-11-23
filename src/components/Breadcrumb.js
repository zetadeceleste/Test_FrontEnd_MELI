import React, { Component } from 'react';
import './Breadcrumb.scss';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="Breadcrumb">
                Instrumentos Musicales > Instrumentos de Cuerdas > <span className="Breadcrumb__search">Guitarras</span>
            </div>
        );
    }
}

export default Breadcrumb;