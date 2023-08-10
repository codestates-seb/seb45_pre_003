import React from 'react'
import Header from '../components/Header'; 
import Content from '../components/Content'; 
import ContainerStyle from '../components/Container'
import Footer from '../components/Footer';


export default function MyPage() {
  return (
    <>
    <Header />
    <ContainerStyle >
    <Content />
    </ContainerStyle>
    <Footer />
    </>  
    )
}
