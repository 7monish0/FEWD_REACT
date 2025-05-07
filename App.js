import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is initialized');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('ComponentDidUpdate: Count updated from', prevState.count, 'to', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be unmounted');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment} style={{ margin: '10px' }}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    showCounter: true,
  };

  toggleCounter = () => {
    this.setState((prevState) => ({
      showCounter: !prevState.showCounter,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleCounter} style={{ display: 'block', margin: '20px auto' }}>
          {this.state.showCounter ? 'Unmount Counter' : 'Mount Counter'}
        </button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

