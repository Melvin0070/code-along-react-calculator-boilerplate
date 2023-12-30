import React from 'react';

function Display(props) {
  const { inputs, result } = props;

  return (
    <div>
      <div className='values'>
        {inputs}
      </div>
    </div>
  );
}

export default Display;
