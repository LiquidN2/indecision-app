console.log('Visibility toggle');

// const app = {
//   dataHidden: true,
// };
//
// const onToggleVisibility = () => {
//   app.dataHidden = !app.dataHidden
//   render()
// };
//
// export const render = () => {
//   const template = (
//     <div>
//       <button onClick={onToggleVisibility}>
//         {app.dataHidden ? 'Show details' : 'Hide details'}
//       </button>
//       {!app.dataHidden && (
//         <p>Hey there! These are some details you can now see!</p>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(template, document.getElementById('app'));
// };

class InvisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Show details',
      hiddenText: true,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState, _) => ({
      hiddenText: !prevState.hiddenText,
      btnText: prevState.hiddenText ? 'Hide Details' : 'Show Details',
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>{this.state.btnText}</button>
        {!this.state.hiddenText && (
          <p>Hey there! These are some details you can now see!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<InvisibilityToggle />, document.getElementById('app'));
