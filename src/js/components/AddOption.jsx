import React from 'react';

class AddOption extends React.Component {
  state = { error: null };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements['option'].value.trim();
    e.target.elements['option'].value = '';
    const error = this.props.addOption(option);
    if (!error) return this.setState({ error: undefined });
    this.setState({ error });
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
