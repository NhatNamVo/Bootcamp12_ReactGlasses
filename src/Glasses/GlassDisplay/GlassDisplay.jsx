import React, { Component } from 'react'
import './GlassDisplay.css';
import glassList from '../../Data/dataGlasses.json';
import Slider from '@bit/akiran.react-slick.slider';
import GlassList from './GlassList';

export default class GlassDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            "id": "",
            "price": "",
            "name": "",
            "url": "",
            "desc": ""
        }
    }

    handleTryGlass = (event) => {
        const glassItem = event.target.closest('.productItem');
        if(glassItem){
            let glassSelect = glassList.find((glass)=>{
                return glassItem.dataset.id == glass.id;
            })
            this.setState({
                id: glassSelect.id,
                price: glassSelect.price,
                name: glassSelect.name,
                url: glassSelect.url,
                desc: glassSelect.desc,
            });
        }   
    }

    render() {
        const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			rtl: true
		};
        console.log(glassList);
        const {name,url,desc} = this.state;
        return (
            <div className="container mt-3">
                <div className="showProduct">
                    <div className="imageGlass">
                        <img width="170px" src={url} alt="" />
                    </div>
                    <div className="productDerc">
                        <h5 className="productDerc_title">{name}</h5>
                        <p className="productDerc_text">{desc}</p>
                    </div>
                </div>
                <div>
				    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				    <style>{cssstyle}</style>
                    <div id="itemSelector" onClick={this.handleTryGlass}>
                        <Slider {...settings}>
                                {glassList.map((glass)=>{
                                    return <GlassList glass = {glass}/>
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 100%;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`