import './App.css';
import CenterText from './components/CenterText';
import Dateinput from './components/Dateinput';
import Footer from './components/Footer';
import Header from './components/Header';
import Result from './components/Result';

function App() {
  return (
    <div>
      <Header />
      <Dateinput />
      <CenterText />
      <Result />
      <Footer />
    </div>
  );
}

export default App;
