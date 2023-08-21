import Loginheader from '../components/LoginHeader/Loginheader';
import React from 'react';
import picture1 from '../assets/stack-overflow.png';
import googleLogo from '../assets/ico_google.png';
import githubLogo from '../assets/github.png';
import facebookLogo from '../assets/facebook2.png';
import {
  LoginPageContainer,Card,ButtonForm,IconButton,Icon,MyPageLink,MyPageImage,Form,Input,
  LoginButton,SignupAll,SignupText,SignupLink,Label,ForgotPasswordLink,Loginform,SignupLink2,
} from '../components/loginpageComponents/styles';


export default function LoginPage() {
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
          <IconButton color="#2f3337" colors="white" hoverColor="#252121">
            <Icon src={githubLogo} alt="GitHub" />
            Log in with GitHub
          </IconButton>
          <IconButton color="#385499" colors="white" hoverColor="#4752b4">
            <Icon src={facebookLogo} alt="Facebook" />
            Log in with Facebook
          </IconButton>
        </ButtonForm>
        <Form>
          <Loginform>
          <Label>Email</Label>
          <Input type="email" />
          <ForgotPasswordLink>
            <Label>Password</Label>
            <SignupLink2>Forgot password?</SignupLink2>
          </ForgotPasswordLink>
          <Input type="password" />
          <LoginButton>Log in</LoginButton>
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
