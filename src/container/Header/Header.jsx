import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Drinking is now an experience "/>
      <h1 className='app__header-h1'>The key to fine drinking</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Welcome to our premier bar in the heart of the city, where 
        every visit promises an unforgettable experience. Indulge in 
        expertly crafted signature cocktails, enjoy live music that 
        enhances the atmosphere, and savor gourmet bar bites designed 
        to delight your palate.
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>

  </div>
);

export default Header;
