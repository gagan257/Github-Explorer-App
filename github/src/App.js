import React from "react";

class Search extends React.Component {
  state = {
    username: "",
  };

  HandleUserNameChange = (e) => {
    const value = e.target.value;

    this.setState({
      username: value,
    });
  };

  render() {
    const { username } = this.state;

    return (
      <input
        value={username}
        onChange={this.HandleUserNameChange}
        type="text"
        name="username"
        placeholder="Enter Username"
      />
    );
  }
}

export default Search;
