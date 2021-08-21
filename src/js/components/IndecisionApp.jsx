import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  title = 'Indecision App';
  subtitle = 'Put your life in the hands of a computer';
  state = { options: this.props.options, pickedOption: null };

  removeAll = () => this.setState({ options: [], pickedOption: null });

  removeOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(o => o !== option),
    }));
  };

  addOption = option => {
    if (!option) return 'Enter valid value to add item';
    if (this.state.options.indexOf(option) > -1)
      return 'This option already exists';
    this.setState(prevState => ({
      options: [...prevState.options, option],
    }));
  };

  pickOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({ pickedOption: this.state.options[index] });
  };

  clearPickedOption = () => {
    this.setState({ pickedOption: null });
  };

  componentDidMount() {
    const options = JSON.parse(localStorage.getItem('options'));
    if (!options) return;
    this.setState({ options });
  }

  componentDidUpdate() {
    localStorage.setItem('options', JSON.stringify(this.state.options));
  }

  render() {
    return (
      <div>
        <Header subtitle={this.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption}
          pickedOption={this.state.pickedOption}
        />
        <Options
          options={this.state.options}
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />
        <OptionModal
          pickedOption={this.state.pickedOption}
          clearPickedOption={this.clearPickedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
