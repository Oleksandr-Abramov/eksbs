import Slider from 'react-slick';
import s from './SimpleSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../img/356454.jpg';
import image2 from '../../img/383027.png';
import image3 from '../../img/394623.jpg';
import image4 from '../../img/394625.jpg';
import image5 from '../../img/394627.jpg';
import arrowForw from '../../img/icons8-forward-48.png';
import arrowPrew from '../../img/icons8-back-48.png';

import { Component } from 'react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        right: '20px',
        zIndex: '15',
        height: '40px',
        width: '40px',
        opacity: '0.3',
      }}
      onClick={onClick}
    >
      <img src={arrowForw} alt="arrow_right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        left: '20px',
        zIndex: '15',
        height: '40px',
        width: '40px',
        opacity: '0.3',
      }}
      onClick={onClick}
    >
      <img src={arrowPrew} alt="arrow_right" />
    </div>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      fade: true,
      adaptiveHeight: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 3000,
    };
    return (
      <Slider {...settings} className={s.slider}>
        <div className={s.imgContainer}>
          <span className={s.imgTitle}>qweq qweqwe qweqwe qwe qw</span>
          <img src={image1} alt="phot" className={s.img} />
        </div>
        <div className={s.imgContainer}>
          <img src={image2} alt="phot" className={s.img} />
        </div>
        <div className={s.imgContainer}>
          <img src={image3} alt="phot" className={s.img} />
        </div>
        <div className={s.imgContainer}>
          <img src={image4} alt="phot" className={s.img} />
        </div>
        <div className={s.imgContainer}>
          <img src={image5} alt="phot" className={s.img} />
        </div>
      </Slider>
    );
  }
}
