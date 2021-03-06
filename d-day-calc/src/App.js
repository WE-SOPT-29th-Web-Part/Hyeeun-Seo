import './App.css';
import CenterText from './components/CenterText.jsx';
import Dateinput from './components/Dateinput';
import Footer from './components/Footer';
import Header from './components/Header';
import Result from './components/Result';
import React, { useState } from 'react';

function App() {
  // DateInput에서 year, month, date을 Result로 가지고와서
  // result의 input 값과 연산을 실시
  // 무엇을 상태로 관리할 것이냐?
  // year, month, date, inputValue, resultDate
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth()+1);
  const [date, setDate] = useState(new Date().getDate());

  return (
    <div id="app">
      <Header />
      <Dateinput 
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
        year={year} 
        month={month} 
        date={date}
      />
      <CenterText />
      <Result 
        year={year} 
        month={month} 
        date={date}
      />
      <Footer />
    </div>
  );
}

export default App;
