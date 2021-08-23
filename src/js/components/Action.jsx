import React from 'react';

const Action = props => (
  <div className="action">
    <button
      className="btn btn--lg btn--full"
      onClick={props.pickOption}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
    {props.pickedOption && <p>{props.pickedOption}</p>}
  </div>
);

export default Action;
