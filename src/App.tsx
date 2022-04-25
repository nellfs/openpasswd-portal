import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './containers/Home';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
