import React from "react";

class Search extends React.Component {
  inputRef = React.createRef();

  handleClick = () => {
    const value = this.inputRef.current.value;

    alert(`The value of the input feild is ${value}`)
  };

  render() {
    return <div> 
      <input ref={this.inputRef} type="text" name="username" placeholder="Enter username"/>
      <button onClick={this.handleClick}>Click me</button>
    </div>
  }
}

export default Search;