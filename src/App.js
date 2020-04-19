import React from 'react';
import Header from './components/header'
import RouteContainer from './components/RouteContainer'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <RouteContainer />
      <Footer />
    </React.Fragment>
  );
}

export default App;
