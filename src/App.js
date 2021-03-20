import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';

import Employee from './pages/Employee';

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route path='/' exact component={HomePage} />
        <Route path='/details' component={Employee} />
      </Container>
    </Router>
  );
}

export default App;
