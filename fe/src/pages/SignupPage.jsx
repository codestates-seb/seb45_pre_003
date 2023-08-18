import React,{useState} from 'react';
import Loginheader from '../components/LoginHeader/Loginheader';
import googleLogo from '../assets/ico_google.png';
import githubLogo from '../assets/github.png';
import facebookLogo from '../assets/facebook2.png';
import question from '../assets/question.png';
import Recap from '../assets/RecaptchaLogo.png';
import tag from '../assets/tag.png';
import trophy from '../assets/trophy.png';
import updowm from '../assets/up-down.png';
import {
  Container,Wrapper,Content,TextContent,Hypertext,Textimg,Text,Stext,Atext,
  ButtonForm,IconButton,Icon,Icon2,SignupColumn,Inputform,InputLabel,Input,
  PasswordRequirements,RobotCheckContainer,RobotCheckWrapper,SignupAll,SignupText,
  SignupLink,Checkboxlabel,CheckboxWrapper,CheckboxInput,SignUpButton,Textminl,IconButton2,IconButton3,Test
} from '../components/signuppageComponents/sigupstyles';



export default function SignupPage() {
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);


  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;


  const emailCheck = (usermail) => {
    return emailRegEx.test(usermail);
  };

  const passwordCheck = (password) => {
    return password.match(passwordRegEx) !== null;
  };

  // 로봇 체크 여부 업데이트
  const handleRobotCheck = (e) => {
    setIsRobotChecked(e.target.checked);
  };

  // 이메일과 패스워드 입력시 유효성 검사 및 버튼 활성화 여부 업데이트
  const handleUsermailChange = (e) => {
    const newValue = e.target.value;
    setUsermail(newValue);
    setIsFormValid(emailCheck(newValue) && passwordCheck(password) && isRobotChecked);
  };
  
  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setIsFormValid(emailCheck(usermail) && passwordCheck(newValue) && isRobotChecked);
  };

  // 회원가입 버튼 클릭시 실행될 함수
  const handleSignUp = () => {
    if (isFormValid) {
      // 회원가입 성공시 메시지 표시
      setIsRegistered(true);
      // 나머지 회원가입 관련 동작 수행
    }
  };
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
            <Input type='text' />
            <InputLabel>Email</InputLabel>
            <Input type='email' onChange={handleUsermailChange} placeholder='이메일을 입력하세요.' />
            <InputLabel>Password</InputLabel>
            <Input type='password' onChange={handlePasswordChange} placeholder='패스워드를 입력하세요.'/>
            <PasswordRequirements>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</PasswordRequirements>
            <RobotCheckContainer>
                <RobotCheckWrapper>
                  <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="robotCheck" checked={isRobotChecked} onChange={handleRobotCheck} />
                    <Checkboxlabel >I'm not a robot</Checkboxlabel>
                    </CheckboxWrapper>
                    <Icon2 src={Recap} alt="GitHub" />
                    <PasswordRequirements>Privacy - Teams</PasswordRequirements>
                  </RobotCheckWrapper>
              </RobotCheckContainer>
                  <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="optInCheck" />
                    <PasswordRequirements htmlFor="optInCheck">Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</PasswordRequirements>
                  </CheckboxWrapper>
                  <SignUpButton disabled={!isFormValid} onClick={handleSignUp}>
                    Sign Up
                  </SignUpButton>
                  {isRegistered ? <Test>회원가입 되셨습니다.</Test> : <Test> 입력이 잘못되었습니다. 다시한번 확인해 주세요. </Test>}
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