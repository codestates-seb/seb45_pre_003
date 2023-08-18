import { React, useState } from 'react'
import Header from '../components/Header'; 
import LeftBar from '../components/LeftBar';
import MypageContent from '../components/mypageComponents/MyPageContent';
import { MyPageContainerStyle } from '../components/mypageComponents/MyPage.styled';
import { MypageContentStyle } from  '../components/mypageComponents/MyPage.styled';


export default function MyPage() {

   const [selectedContent, setSelectedContent] = useState('Activity');

  return (
    <>
    <Header />
    <MyPageContainerStyle className ="PageContainerSt">
        <LeftBar/>
        <MypageContentStyle className ="MypageContentStyle">
          <MypageContent className = "MypageContent"
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
          />
        </MypageContentStyle>
    </MyPageContainerStyle>
    </> 
    )
}

