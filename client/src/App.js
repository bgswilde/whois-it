import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  return (
    <div className="app">
        <div className="content-wrap">
          <Header />
          <Content />
        </div>
      <Footer />
    </div>
  );
}

export default App;
