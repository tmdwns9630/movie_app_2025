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

  //클래스형 컴포넌트가 생성될 때 호출하는 함수
  constructor(props) {
    super(props);
    console.log("hello");
  }

  //컴포넌트가 처음 화면에 그려지면 실행되는 함수
  componentDidMount() {
    console.log("컴포넌트 Rendered");
  }

  //컴포넌트가 업데이트될 때만 발동하는 함수
  componentDidUpdate() {
    console.log("---I just Update-----");
  }

  //컴포넌트가 죽을 때 발동하는 함수
  componentWillUnmount() {
    console.log("마운트 해제");
  }

  render() {
    console.log("render() 함수");
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
