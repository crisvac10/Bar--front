import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.bartend} alt="bartend_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Founder's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          
        </div>
        <p className="p__opensans"> I have been working as a bartender for 20 years and have never had the opportunity to have my own business. It has been an honor to be able to bring everything I have learned to create and design a unique experience for the palate. Having a drink has never been so special. </p>
      </div>

      <div className="app__chef-sign">
        <p>Cristian Vaca</p>
        <p className="p__opensans">Bartender & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
