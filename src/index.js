import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import MainCarousel from './components/MainCarousel';
import JumboTron from './components/JumboTron';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <JumboTron/>
        <MainCarousel/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));