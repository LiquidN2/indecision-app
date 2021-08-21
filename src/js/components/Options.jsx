import React from 'react';
import Option from './Option';

export default props => (
  <div>
    <button onClick={props.removeAll}>Remove all</button>
    {props.options.map((option, i) => (
      <Option key={i} text={option} removeOption={props.removeOption} />
    ))}
  </div>
);
