import React, { useState} from 'react';
import Loginheader from '../components/LoginHeader/Loginheader';
import googleLogo from '../assets/ico_google.png';
import githubLogo from '../assets/github.png';
import facebookLogo from '../assets/facebook2.png';
import question from '../assets/question.png';
import Recap from '../assets/RecaptchaLogo.png';
import tag from '../assets/tag.png';
import trophy from '../assets/trophy.png';
import updowm from '../assets/up-down.png';
import { useNavigate } from "react-router-dom";
import {
  Container,Wrapper,Content,TextContent,Hypertext,Textimg,Text,Stext,Atext,
  ButtonForm,IconButton,Icon,Icon2,SignupColumn,Inputform,InputLabel,Input,
  PasswordRequirements,RobotCheckContainer,RobotCheckWrapper,SignupAll,SignupText,
  SignupLink,Checkboxlabel,CheckboxWrapper,CheckboxInput,SignUpButton,Textminl,IconButton2,IconButton3
} from '../components/signuppageComponents/sigupstyles';




export default function SignupPage() {

  const [name, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRobotChecked, setRobotChecked] = useState(false);
  const navigate = useNavigate();


  const isFormValid =
  name.trim() !== '' &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) &&
  isRobotChecked;
  
  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRobotCheckChange = () => {
    setRobotChecked(!isRobotChecked);
  };

  const handleSignUp = () => {
    if(!isFormValid){

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('모든 필드를 작성해주세요.');
      return;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert('유효한 비밀번호를 입력해주세요.');
      return;
    }

    else if (!isRobotChecked) {
      alert('로봇이 아닙니다 체크해주세요.');
      return;
    }
  }
  else {
    fetch('http://localhost:8080/members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: 'name',
        email: 'email',
        password: 'password',
      })
    })
      .then(response => response.json())
      .then((json) => {
        console.log('회원가입 성공:', json);
        navigate("/login");
      })
      .catch(error => {
        console.error('회원가입 실패:', error);
      });
  }
  }


  return (
    <Container>
      <Loginheader />
      <Content>
        <Wrapper>
          <TextContent>
            <Hypertext>Join the Stack Overflow community</Hypertext>
            <Text>
              <Textimg src={question}/>
              Get unstuck — ask a question</Text>
            <Text>
            <Textimg src={updowm}/>
            Unlock new privileges like voting and commenting</Text>
            <Text>
            <Textimg src={tag}/>
            Save your favorite questions, answers, watch tags, and more</Text>
            <Text>
              <Textimg src={trophy}/>
            Earn reputation and badges</Text>
            <Stext>Collaborate and share knowledge with a private group for FREE.</Stext>
            <Atext href='https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up'>Get Stack Overflow for Teams free for up to 50 users.</Atext>
          </TextContent>
          <SignupColumn>
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
        <Inputform>
            <InputLabel>Display name</InputLabel>
            <Input type='text' value={name} onChange={handleDisplayNameChange} />
            <InputLabel>Email</InputLabel>
            <Input type='email' value={email} onChange={handleEmailChange} />
            <InputLabel>Password</InputLabel>
            <Input type='password' value={password} onChange={handlePasswordChange} />
            <PasswordRequirements>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</PasswordRequirements>
            <RobotCheckContainer>
                <RobotCheckWrapper>
                  <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="robotCheck" checked={isRobotChecked} onChange={handleRobotCheckChange} />
                    <Checkboxlabel >I'm not a robot</Checkboxlabel>
                    </CheckboxWrapper>
                    <Icon2 src={Recap} alt="GitHub" />
                    <PasswordRequirements>Privacy - Teams</PasswordRequirements>
                  </RobotCheckWrapper>
              </RobotCheckContainer>
                  <CheckboxWrapper>
                    <CheckboxInput type="checkbox"  />
                    <PasswordRequirements htmlFor="optInCheck">Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</PasswordRequirements>
                  </CheckboxWrapper>
                  <SignUpButton  onClick={handleSignUp}>Sign up</SignUpButton>
            <Textminl>By clicking “Sign up”, you agree to our terms of service and acknowledge that you have read and understand our privacy policy and code of conduct.</Textminl>
            </Inputform>
            <SignupAll>
        <SignupText>
        Already have an account?{' '}
          <SignupLink href="http://localhost:3000/login">
            Log in
          </SignupLink>
        </SignupText>
        </SignupAll>
          </SignupColumn>
        </Wrapper>
      </Content>
    </Container>
  );
} 