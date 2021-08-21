import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = props => (
  <Modal
    isOpen={!!props.pickedOption}
    onRequestClose={props.clearPickedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.pickedOption && <p>{props.pickedOption}</p>}
    <button onClick={() => props.clearPickedOption()}>Close</button>
  </Modal>
);

export default OptionModal;
