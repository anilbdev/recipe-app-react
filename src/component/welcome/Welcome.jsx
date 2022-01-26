import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Welcome.scss'

const Welcome = () => {
  return <div className='welcome-container'>
      
       <TypeAnimation
      cursor={false}
      sequence={['Welcome..Select a recipe..!!😝😝', 5000, '']}
      wrapper="h2"
    />
  </div>;
};

export default Welcome;
