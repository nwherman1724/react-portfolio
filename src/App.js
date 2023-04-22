import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Social from './components/Social.js';
import Card from './components/Card.js';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Social />
      <div className='flex'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
