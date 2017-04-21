import React, { Component } from 'react';
import Page from './Page';

class App extends Component {
  state = {
    cartoon: '',
    caption: '',
  }

  componentWillMount() {
    this.randomCaption();
    this.fetchCartoon();
  }

  randomCaption = () => {
    const captions = [
      "Hi. I'd like to add you to my professional network on LinkedIn.",
      "Christ, what an asshole!",
      // "Perhaps our sex games have become too elaborate.",
      // "Everyone was apparently very bored at work that day.",
      "I call my own shots, largely based on an accumulation of data, and everyone knows it."
    ]
    const caption = captions[Math.floor(Math.random() * captions.length)];
    this.setState({ caption })
  }

  fetchCartoon = () => {
    fetch('http://www.newyorker.com/cartoons/random/randomAPI')
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
    const { cartoon, caption } = this.state;
    const { isLoading, fetchCartoon, randomCaption } = this;
    if ( isLoading(cartoon) )
      return null;
    else {
      return (
        <Page
          cartoon={cartoon}
          caption={caption}
          fetchCartoon={fetchCartoon}
          randomCaption={randomCaption}
        />
      );
    }
  }
}

export default App;
