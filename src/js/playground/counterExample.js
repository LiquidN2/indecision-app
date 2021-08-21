// let count = 0;
// const addOne = () => {
//   count++;
//   console.log('add one', count);
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   console.log('minus one');
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log('reset');
//   renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id="btn-plus-one" className="btn btn--add-one" onClick={addOne}>
//         +1
//       </button>
//       <button
//         id="btn-minus-one"
//         className="btn btn--minus-one"
//         onClick={minusOne}
//       >
//         -1
//       </button>
//       <button id="btn-reset" className="btn btn--reset" onClick={reset}>
//         Reset
//       </button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  plusOne() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  minusOne() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  reset() {
    this.setState({counter: 0});
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));
