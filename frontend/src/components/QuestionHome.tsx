import React, { useState } from 'react';
import cross from '../img/cross.svg';
import plus from '../img/plus.svg';

const QuestionHome: React.FC<{title: string, describe:string}> = (props) => {
    const [icon, setIcon]=useState(false);

  return (
    <div className="question">
        <div className='question-header'>
            <h1>{props.title}</h1>
            {icon ? <img src={cross} alt="cross1" onClick={()=>setIcon(!icon)} />:
            <img src={plus} alt="plus1" onClick={()=>setIcon(!icon)} />}
         </div>
            {icon ? <h2>{props.describe}</h2>: null}
    </div>
  );
};

export default QuestionHome;