import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Todos from './components/Todos';

function App() {
  return (
    <div> 
      <Header />
      <Navigator />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
