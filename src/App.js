import React from "react";
//클래스 컴포넌트 사용 시 import 필요함.

class App extends React.Component {
  //isLoading : 로딩 중 현재 상태를 구분해주는 변수
  //movies:로딩된 영화데이터가 들어올 배열.
  state = {
    isLoading: true,
    movies: [],
  };

  //render함수 실행 이후 호출되는 생명주기 함수
  //시간경과로 로딩 상태 바꾸는 함수.
  //영화 데이터 로딩!
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    console.log("render() 함수");
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading 중..." : "We are Ready!"}</div>;
  }
}

export default App;
