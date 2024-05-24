import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon img'/>
        <p className='p__opensans'>
          Welcome to Alta Vista, where high quality meets high spirits. 
          At Alta Vista, we believe that a great drink is more than just 
          a beverage—it's an experience. Nestled above the bustling streets, 
          our bar offers a sophisticated haven for those who appreciate the 
          finer things in life.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt='spoon img'/>
        <p className='p__opensans'>
        We were born under the idea and the purpose of bringing all 
        the bandidas to the same place. We wanted this union to last 
        for generations, so we created a network of bars that will 
        be the ideal place to have a great time, surrounded by everything 
        you like; everything we like.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
