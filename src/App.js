import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer'
import './assets/reset.css';
import './assets/css.css';
import Main from './pages/Main';
import Login from './pages/Login';
import Demo from './pages/Demo';
import Result from './pages/Result';
import Loading from './components/Loading'

function App() {
  // *JSX 문법 : return문 안에서는 jsx 문법임으로 하단 규칙을 지켜야한다
  // 리액트는 최상위 태그 하나만 리턴
  // {변수명} 사용해야 변수 사용 가능
  //if문 사용 불가
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/demo' element={<Demo/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
        <Route path='/load' element={<Loading/>}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
