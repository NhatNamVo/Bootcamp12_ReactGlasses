import React, { Component } from 'react';
import './glassList.css';

export default class GlassList extends Component {

    render() {
        const {glass} = this.props;
        return (
            <div className="productItem" data-id={glass.id}>
                <img src={glass.url.replace('/v','/g').replace('.png','.jpg')} alt="" />                
            </div>
        )
    }
}
