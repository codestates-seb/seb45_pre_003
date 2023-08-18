import Loginheader from '../components/LoginHeader/Loginheader';
import React from 'react';
import picture1 from '../assets/stack-overflow.png';
import googleLogo from '../assets/ico_google.png';
import githubLogo from '../assets/github.png';
import facebookLogo from '../assets/facebook2.png';
import {
  LoginPageContainer,Card,ButtonForm,IconButton,IconButton2,IconButton3,Icon,MyPageLink,MyPageImage,Form,Input,
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
