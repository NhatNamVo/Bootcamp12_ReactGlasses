import React, { Component } from 'react'
import './Glass.css';
import GlassDisplay from './GlassDisplay/GlassDisplay';
import Header from './header/header';

export default class Glass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadding: true,
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({loadding:false});
        }, 3000);
    }
    render() {
        const {loadding} = this.state;
        if(loadding) {
            return null;
        }
        return (
            <div className="glassBody">
               <div className="Glass_overlay">
                   <Header/>
                    <GlassDisplay/>
                </div> 
            </div>
        )
    }
}

