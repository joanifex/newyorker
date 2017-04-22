import React, { Component } from 'react';
import Page from './Page';

class App extends Component {
  state = { cartoon: '' }

  componentWillMount() {
    this.fetchCartoon();
  }

  fetchCartoon = () => {
    fetch('https://www.newyorker.com/cartoons/random/randomAPI')
      .then( response => response.json())
      .then( json => {
        const cartoon = this.findCartoonWithCaption(json);
        if (!cartoon) {
          this.fetchCartoon();
        } else {
          this.setState({ cartoon: cartoon.src });
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
    const { cartoon } = this.state;
    const { isLoading, fetchCartoon } = this;
    if ( isLoading(cartoon) )
      return null;
    else {
      return (
        <Page cartoon={cartoon} fetchCartoon={fetchCartoon} />
      );
    }
  }
}

export default App;
