import React from "react";
//클래스 컴포넌트 사용 시 import 필요함.

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
    //this.setState({ count: this.state.count + 1 });
    //current에서 현재 state가 넘어온 후, 그 state의 count에 +1;
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  //state 값을 직접 바꾸면 안됨.
  minus = () => {
    console.log("Minus");
    //this.state.count = -1;
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>나는 클래스 컴포넌트야</h1>
        <h1>지금 State는 {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
