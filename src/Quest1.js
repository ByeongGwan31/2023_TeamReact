import React, { Component } from 'react';

class Quest1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { value } = props;
    return {
      value
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count === 0 ? 10 : 0,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        부모 컴포넌트<br />
        [프로퍼티 값, 스테이트 값 1초마다 번갈아 출력 : {this.state.count===0? this.state.count : this.state.value }]
      </div>
    );
  }
}

export default Quest1;