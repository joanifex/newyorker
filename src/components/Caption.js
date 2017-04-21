import React from 'react';

class Caption extends React.Component {
  state = { caption: '"I call my own shots, largely based on an accumulation of data, and everyone knows it."' }

  handleChange = (event) => {
    const caption = event.target.value;
    this.setState({ caption });
  }

  render(){
    const { caption } = this.state;
    return(
      <textarea
        className="caption"
        value={caption}
        onChange={this.handleChange}
      />
    );
  }
}

export default Caption;
