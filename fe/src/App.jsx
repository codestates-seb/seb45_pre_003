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
import React, { useEffect, useState } from 'react';
import PageNotFound from './components/PageNotFound';
import PathProtection from './PathProtection';
import { checkAuth } from './PathProtection';

function App() {
  const [isLogout, setisLogout] = useState(false);
  const [keyWord, setKeyWord] = useState('');

  useEffect(()=>{
    const memberId = checkAuth();
    if(memberId) {
      setisLogout(false);
    } else {
      setisLogout(true);
    }
  },[])
  
  return (
    <>
    {isLogout ? <LoginHeader setisLogout={setisLogout} setKeyWord={setKeyWord}/> : <Header  setisLogout={setisLogout} setKeyWord={setKeyWord}/>}
      <Routes>
        <Route path="/*" element={<HomePage keyWord={keyWord}/>}/>
        <Route path="/question/*" element={<QuestionPage keyWord={keyWord}/>}/>
        <Route path="/login" element={<PathProtection component={<HomePage/>} fallback={<LoginPage  setisLogout={setisLogout}/>}></PathProtection>}/>
        <Route path="/mypage" element={<PathProtection component={<MyPage/>} fallback={<LoginPage/>}></PathProtection>}/>
        <Route path="/signup" element={<PathProtection component={<HomePage/>} fallback={<SignupPage/>}></PathProtection>}/>
        <Route path="/askquestion" element={<PathProtection component={<AskQuestionPage/>} fallback={<LoginPage/>}/>}/>;
        <Route path="/404" element={<PageNotFound/>}/>
      </Routes>
      {!isLogout && <Footer/>}
    </>
  );
}
export default App;
