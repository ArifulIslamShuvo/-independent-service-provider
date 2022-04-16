import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../imagea/banner/banner-1.jpg'
import banner2 from '../../../imagea/banner/banner-2.jpg'
import banner3 from '../../../imagea/banner/banner-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>A Memory it's Forever</h3>
                    <p>Capture Important moments on your wedding</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Wedding & portraits</h3>
                    <p>Modern and natural romantic photography</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>WPPIC Association Certified</h3>
                    <p>
                        Timless style of natural light photography
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;