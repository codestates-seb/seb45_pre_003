import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
// import Container from './components/Container'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
