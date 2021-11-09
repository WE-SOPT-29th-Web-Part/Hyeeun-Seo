import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';


function App() {
  const [userInfo, setUserInfo] = useState({});//user와 userInfo 차이를 잘 몰겠네
  return (
    <Root>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result userInfo={userInfo} setUserInfo={setUserInfo}/>
    </Root>
  );
  //SearchBar에서는 반환되는 값을 갱신해야해서 상태값 갱신 함수를 사용하는 거고
  // Result에서는 저장된 값을 이용해햐하니까 상태값 저장 변수사용하는건지?
}

export default App;

const Root = styled.div`
  height: 100%;//왜??
  display: flex;
  flex-direction: column;//왜?
  justify-content: center;
  align-items: center;
`;
