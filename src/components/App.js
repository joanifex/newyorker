import React, { Component } from 'react';
import Page from './Page';

class App extends Component {
  state = {
    cartoon: '',
    caption: '',
  }

  componentWillMount() {
    this.fetchCartoon();
  }

  fetchCartoon = () => {
    fetch('http://www.newyorker.com/cartoons/random/randomAPI')
      .then( response => response.json())
      .then( json => {
        const cartoon = this.findCartoonWithCaption(json);
        if (!cartoon) {
          this.fetchCartoon();
        } else {
          const { src } = cartoon;
          this.setState({ cartoon: src });
        }
      })
      .catch( e => console.log(e));
  }

  findCartoonWithCaption(cartoons) {
    return cartoons.find( cartoon => {
      return cartoon.caption !== "";
    });
  }

  isLoading(cartoon){
    return cartoon === '';
  }

  render() {
    const { cartoon, caption } = this.state;
    const { isLoading, fetchCartoon } = this;
    if ( isLoading(cartoon) )
      return null;
    else {
      return (
        <Page
          fetchCartoon={fetchCartoon}
          cartoon={cartoon}
          caption={caption}
        />
      );
    }
  }
}

export default App;
