// import { Slider } from '@mui/material';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from "../../Assets/images/slider-1.jpg"
import Slider2 from "../../Assets/images/slider-2.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function CarousalSlider() {
    return (
        <React.Fragment>
            <Carousel fade>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block "
                        src={Slider1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block "
                        src={Slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </React.Fragment >
    );
}

export default CarousalSlider;
