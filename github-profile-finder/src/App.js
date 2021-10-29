import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import SearchBar from './components/SearchBar';


function App() {
  const [userInfo, setUserInfo] = useState();
  return (
    <div>
      <Header />
      <SearchBar />
      <Result />
    </div>
  );
}

export default App;
