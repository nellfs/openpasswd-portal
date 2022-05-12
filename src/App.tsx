import React from 'react';
import Navbar from './components/Layout/Navbar';
import Info from './components/Layout/Intro';
import Home from './containers/Home/Home';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Info />
        <Home />
      </>
    );
  }
}

export default App;
