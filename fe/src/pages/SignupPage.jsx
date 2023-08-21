import React from 'react';
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
  SignupLink,Checkboxlabel,CheckboxWrapper,CheckboxInput,SignUpButton,Textminl,
} from '../components/signuppageComponents/sigupstyles';



export default function SignupPage() {
  
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
          <IconButton color="#2f3337" colors="white" hoverColor="#252121">
            <Icon src={githubLogo} alt="GitHub" />
            Log in with GitHub
          </IconButton>
          <IconButton color="#385499" colors="white" hoverColor="#4752b4">
            <Icon src={facebookLogo} alt="Facebook" />
            Log in with Facebook
          </IconButton>
        </ButtonForm>
        <Inputform>
            <InputLabel>Display name</InputLabel>
            <Input type='text' />
            <InputLabel>Email</InputLabel>
            <Input type='email' />
            <InputLabel>Password</InputLabel>
            <Input type='password' />
            <PasswordRequirements>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</PasswordRequirements>
            <RobotCheckContainer>
                <RobotCheckWrapper>
                  <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="robotCheck" />
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
            <SignUpButton>Sign Up</SignUpButton>
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