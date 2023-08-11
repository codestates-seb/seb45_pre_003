import React from 'react'
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F1F2F3;
`

const Content = styled.div`
height: 1249px;
width: 1264px;
padding: 24px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const Columnn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Textcontent = styled.div`
  display: flex;
  flex-direction: row;
  width: 421.33px;
  height: 300.22px;
  margin: 0px, 48px, 128px, 0px;
`


const Hypertext = styled.h1`
  font-size: 27px;
  margin: 0px,0px,32px;
`

export default function SignupPage() {
  return (
    <Container>
      <Header />
      <Content>
        <Columnn>
        <Textcontent>
          <Hypertext>Join the Stack Overflow community</Hypertext>
        </Textcontent>
        </Columnn>
        </Content>
    </Container>
  )
}