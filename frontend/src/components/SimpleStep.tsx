import React, { useState } from 'react';
import arrow from '../img/button-home-arrow.svg';

const SimpleStep: React.FC<{title: string, describe:string, btn:string}> = (props) => {
    const icon = require(`../img/${props.btn+'.svg' || 'default.svg'}`);

  return (
    <div className='simple-step-card'>
        <img src={icon} alt={props.title} className="simple-step-icon" />
        <div className="simple-step-title">
            {props.title}
        </div>
        <div className='simple-step-describe'>
            {props.describe}
        </div>
        <a href="" className="simple-step-button">
        {props.btn}
        <img src={arrow} alt="" />
        </a>
    </div>
  );
};

export default SimpleStep;