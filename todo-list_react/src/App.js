import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  const [view, setView] = useState('');
  return (
    <div> 
      <Header />
      <NavBar setView={setView}/>
      <Main view={view}/>
      <Footer />
    </div>
  );
}

export default App;
