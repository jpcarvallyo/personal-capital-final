import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItemContent from './CarouselItemContent';
import '../css/carousel.css';



class MainCarousel extends React.Component {


  render () {
    return (
      <div>
        <Carousel indicators='true'>
          <Carousel.Item>
            <CarouselItemContent/>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItemContent/>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItemContent/>
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}

export default MainCarousel;