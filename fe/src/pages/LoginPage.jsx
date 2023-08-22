import Loginheader from '../components/LoginHeader/Loginheader';
import React,{useState} from 'react';
import picture1 from '../assets/stack-overflow.png';
import googleLogo from '../assets/ico_google.png';
import githubLogo from '../assets/github.png';
import facebookLogo from '../assets/facebook2.png';
import { useNavigate } from 'react-router-dom';
import {
  LoginPageContainer,Card,ButtonForm,IconButton,IconButton2,IconButton3,Icon,MyPageLink,MyPageImage,Form,Input,
  LoginButton,SignupAll,SignupText,SignupLink,Label,ForgotPasswordLink,Loginform,SignupLink2,
} from '../components/loginpageComponents/styles';
import customAxios from '../customaxios';

export default function LoginPage({setisLogout}) {
  const [inputemail, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const navigate = useNavigate();

  const handleInputemail = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
      setInputPw(e.target.value)
  }

  const isFormValid =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputemail) &&
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputPw);


// login 버튼 클릭 이벤트
const onClickLogin = () => {
  if(!isFormValid){ 

    if (inputemail.trim() === '' || inputPw.trim() === '') {
      alert('모든 필드를 작성해주세요.');
      return;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputemail)) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }
    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputPw)) {
      alert('유효한 비밀번호를 입력해주세요.');
      return;
    }
  } else {
    const requestData = {
      "email" : inputemail,
      "password" : inputPw,
    };
    const headers = {
      headers : {
        'ngrok-skip-browser-warning': '69420'
      }
    }
    customAxios.post('http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/login',
        requestData,
        headers,
      )
      .then((res) => {
        console.log("로그인 성공", res);
        setisLogout(false);
        navigate("/",{replace:true});
      })
      .catch(err => {
        console.log("로그인 실패", err);
      });
  }
}



  return (
    
    <LoginPageContainer>
      <Loginheader />
      <Card>
        <MyPageLink href="/">
          <MyPageImage src={picture1} alt="My Page" />
        </MyPageLink>
        <ButtonForm>
          <IconButton> 
            <Icon src={googleLogo} alt="Google" />
            Log in with Google
          </IconButton>
          <IconButton2>
            <Icon src={githubLogo} alt="GitHub" />
            Log in with GitHub
          </IconButton2>
          <IconButton3>
            <Icon src={facebookLogo} alt="Facebook" />
            Log in with Facebook
          </IconButton3>
        </ButtonForm>
        <Form>
          <Loginform>
          <Label>Email</Label>
          <Input type="email" value={inputemail} onChange={e=>handleInputemail(e)} />
          <ForgotPasswordLink>
            <Label>Password</Label>
            <SignupLink2>Forgot password?</SignupLink2>
          </ForgotPasswordLink>
          <Input type="password" value={inputPw} onChange={e=>handleInputPw(e)} />
          <LoginButton type='button' onClick={onClickLogin}>Log in</LoginButton>
          </Loginform>
        </Form>
        <SignupAll>
        <SignupText>
          Don’t have an account?{' '}
          <SignupLink href="http://localhost:3000/signup">
            Sign up
          </SignupLink>
        </SignupText>
        </SignupAll>
      </Card>
    </LoginPageContainer>
  );
}
