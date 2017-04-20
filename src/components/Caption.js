import React from 'react';

class Caption extends React.Component {
  state = {
    caption: '"Hi. I\'d like to add you to my professional network on LinkedIn."'
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ caption: value });
  }

  render(){
    const { caption } = this.state;
    return(
      <div className="caption-container">
        <input
          className="text-center caption"
          value={caption}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Caption;
