import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
// import Container from './components/Container'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';
import QuestionPage from './pages/QuestionPage';
import AskQuestionPage from './pages/AskQuestionPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/question" element={<QuestionPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/askquestion" element={<AskQuestionPage/>}/>;
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
