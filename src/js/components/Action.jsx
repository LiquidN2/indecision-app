import React from 'react';

const Action = props => (
  <div>
    <button
      className="btn btn--lg btn--full u-margin-bottom--xl"
      onClick={props.pickOption}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
    {props.pickedOption && <p>{props.pickedOption}</p>}
  </div>
);

export default Action;
