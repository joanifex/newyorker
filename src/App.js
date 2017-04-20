import React, { Component } from 'react';

import Header from './components/Header';
import Cartoon from './components/Cartoon';
import Footer from './components/Footer';

class App extends Component {
  state = { cartoon: '' }

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
    const { cartoon } = this.state;
    const { isLoading, fetchCartoon } = this;
    if ( isLoading(cartoon) )
      return null;
    else {
      return (
        <div className="flexbox-container">
          <Header />
          <Cartoon cartoon={cartoon}/>
          <Footer nextCartoon={fetchCartoon}/>
        </div>
      );
    }
  }
}

export default App;
