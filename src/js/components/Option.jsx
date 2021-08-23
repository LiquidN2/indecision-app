import React from 'react';

export default props => {
  const removeOption = () => props.removeOption(props.text);
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.text}
      </p>
      <button className="btn btn--link" onClick={removeOption}>
        Delete
      </button>
    </div>
  );
};
