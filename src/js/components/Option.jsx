import React from 'react';

export default props => {
  const removeOption = () => props.removeOption(props.text);
  return (
    <div>
      {props.text}
      <button onClick={removeOption}>Delete</button>
    </div>
  );
};
