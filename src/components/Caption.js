import React from 'react';

class Caption extends React.Component {
  state = { caption: '' }

  componentWillMount() {
    const { caption } = this.props;
    this.setState({ caption });
  }

  componentDidUpdate() {
    const newCaption = this.props.caption;
    const oldCaption = this.state.caption;
    if ( newCaption !== oldCaption )
      this.setState({ caption: newCaption });
  }

  handleChange = (event) => {
    const caption = event.target.value;
    this.setState({ caption });
  }

  render(){
    const { caption } = this.state;
    return(
      <div className="caption-container">
        <textarea
          autofocus
          className="text-center caption"
          value={caption}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Caption;
