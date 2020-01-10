import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
class ImageSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    };
    return (
      <Slider {...settings}>
        {this.props.images.map(image => {
          return <img src={image} alt="iamge" />;
        })}
      </Slider>
    );
  }
}

export default ImageSlider;
