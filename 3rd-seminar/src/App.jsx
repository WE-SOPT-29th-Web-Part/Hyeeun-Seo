import "./App.css"
import Header from "./components/Header";
import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {

  const [year, setYear] = userState(new Date().getFullYear());
  const [month, setMonth] = userState(new Date().getMonth()+1);
  const [date, setDate] = userState(new Date().getDate());


  return (
  <div id="app">
    <Header />
    <DateInput 
      year={year}
      month={month}
      date={date}
      setYear={setYear}
      setMonth={setMonth}
      setDate={setDate}  />
    <CenterText />
    <Result year={year} month={month} date={date}/>
    <Footer />
  </div>
  )
}

export default App;
