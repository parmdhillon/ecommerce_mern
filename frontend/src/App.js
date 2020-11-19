import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Router>
            <Route path="/" exact component={HomeScreen} />
          </Router>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
