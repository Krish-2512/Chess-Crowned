

import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Instruction.css'; // Import the custom CSS file
import ibg from './assets/img/ibg.png'

const Instruction = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="instruction-container">
            <div className="slider-wrapper">
                <div className="slider-container">
                    <Slider {...settings}>
                        {data.map((d, index) => (
                            <div key={index} className="slide">
                                <div className="image-container">
                                    <img src={ibg} alt="Instruction Background" />
                                    <p className="instruction-text">{d.Instruction}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        Instruction: '1Although '
    },
    {
        Instruction: '2Although '
    },
    {
        Instruction: '3Although '
    },
    {
        Instruction: '4Although '
    },
    {
        Instruction: '5Although '
    },
    {
        Instruction: '6Although '
    },
    {
        Instruction: '7Although '
    },
    {
        Instruction: '8Although '
    }
]

export default Instruction;