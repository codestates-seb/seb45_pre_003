import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import QuestionPage from './pages/QuestionPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/question" element={<QuestionPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;