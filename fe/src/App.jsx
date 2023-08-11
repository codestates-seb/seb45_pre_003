import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage'; 

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = {<HomePage/>} />
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/mypage' element = {<MyPage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
