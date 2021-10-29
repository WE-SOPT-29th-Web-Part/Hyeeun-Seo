import './App.css';
import CenterText from './components/CenterText';
import Dateinput from './components/Dateinput';
import Footer from './components/Footer';
import Header from './components/Header';
import Result from './components/Result';

function App() {
  // DateInput에서 year, month, date을 Result로 가지고와서
  // result의 input 값과 연산을 실시
  // 무엇을 상태로 관리할 것이냐?
  // year, month, date, inputValue, resultDate

  return (
    <div id="app">
      <Header />
      <Dateinput />
      <CenterText />
      <Result />
      <Footer />
    </div>
  );
}

export default App;
