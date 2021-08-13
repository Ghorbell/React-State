import React, { Component } from 'react'

export class List extends Component {
     state = {
    person: {
      fullName: "Amine Ghorbel",
      bio: "Web Developer",
      imgSrc:"Mike.jpg",
      profession: "doing things ....",
    },
    count: 0,
  };
  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    clearInterval(this.state.intervall);
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <img src={this.state.person.imgSrc} alt="scott" />
        <h1>{this.state.person.fullName}</h1>
        <h4> {this.state.person.bio}</h4>
        <p>
          {this.state.person.profession} I am a Masters student with robust
          problem-solving skills and the ability to analyze complex technical
          information. Extremely motivated to constantly develop my skills and
          grow professionally.
        </p>
        <h1>Time elapsed :{this.state.count}</h1>
      </div>
    );
  }
}


export default List
