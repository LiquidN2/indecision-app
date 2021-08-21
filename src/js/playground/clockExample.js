class ClockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    return (
      <div>
        <h1>What time is it?</h1>
        <h3>It's {this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

ReactDOM.render(<ClockApp />, document.getElementById('app'));
