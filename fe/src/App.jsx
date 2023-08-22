import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
// import Container from './components/Container'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';
import QuestionPage from './pages/QuestionPage';
import AskQuestionPage from './pages/AskQuestionPage';
import LoginHeader from './components/LoginHeader/Loginheader';
import React, { useState } from 'react';
import PageNotFound from './components/PageNotFound';
import PathProtection from './PathProtection';


function App() {
  const [isLogout, setisLogout] = useState(false);
  return (
    <>
    {isLogout ? <LoginHeader /> : <Header setisLogout={setisLogout}/>}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/question/*" element={<QuestionPage/>}/>
        <Route path="/login" element={<PathProtection component={<HomePage/>} fallback={<LoginPage/>}></PathProtection>}/>
        <Route path="/mypage" element={<PathProtection component={<MyPage/>} fallback={<LoginPage/>}></PathProtection>}/>
        <Route path="/signup" element={<PathProtection component={<HomePage/>} fallback={<SignupPage/>}></PathProtection>}/>
        <Route path="/askquestion" element={<PathProtection component={<AskQuestionPage/>} fallback={<LoginPage/>}/>}/>;
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
      {isLogout ? <null/> : <Footer/>}
    </>
  );
}
export default App;
