import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Social from './components/Social.js';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Social />
      <div id="work" className='flex'>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
