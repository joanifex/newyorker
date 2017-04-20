import React, { Component } from 'react';
import Cartoon from './components/Cartoon';
import Caption from './components/Caption';

class App extends Component {
  state = { cartoon: '' }

  componentWillMount() {
    this.fetchCartoon();
  }

  fetchCartoon = () => {
    fetch('http://www.newyorker.com/cartoons/random/randomAPI')
      .then( response => response.json())
      .then( json => {
        const { src } = json[0];
        this.setState({ cartoon: src });
      })
      .catch( e => console.log(e));
  }

  isLoading(cartoon){
    return cartoon === '';
  }

  displayCartoon(cartoon) {
    return(
      <div className="cartoon-container">
        <Cartoon cartoon={cartoon}/>
        <Caption />
      </div>
    );
  }

  render() {
    const { cartoon } = this.state;
    const { isLoading, displayCartoon } = this;
    return (
      <div className="flexbox-container">
        { isLoading(cartoon) ? null : displayCartoon(cartoon) }
      </div>
    );
  }
}

export default App;
