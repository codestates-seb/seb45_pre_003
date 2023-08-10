import React from 'react'
import { MyPageCardStyle } from '../mypageComponents/MyPage.styled';
import { ProfileLeftBarStyle } from '../mypageComponents/MyPage.styled';
import { ActivityCardContainer } from '../mypageComponents/MyPage.styled';
import {ActivityStyleCardTitleStyle} from '../mypageComponents/MyPage.styled';
import {ActivityCardTextStyle} from '../mypageComponents/MyPage.styled';

export default function Profile() {
  return (
    <>
    <MyPageCardStyle>
      <ProfileLeftBarStyle>
      <div style={{margin:"8px"}}>
        <div style={{fontSize:"17px"}}>0</div>
        <div style={{fontSize:"13px"}}>answers</div>
      </div>
      <div style={{margin:"8px"}}>
        <div style={{fontSize:"17px"}}>0</div>
        <div style={{fontSize:"13px"}}>questions</div>
      </div>
      <div style={{margin:"8px"}}>
        <div style={{fontSize:"17px"}}>0</div>
        <div style={{fontSize:"13px"}}>reputation</div>
      </div>
      <div style={{margin:"8px"}}>
        <div style={{fontSize:"17px"}}>0</div>
        <div style={{fontSize:"13px"}}>reached</div>
      </div>
     </ProfileLeftBarStyle>
     <ActivityCardContainer>
      <ActivityStyleCardTitleStyle className="profileDetails">
      About
     </ActivityStyleCardTitleStyle>
     <ActivityCardTextStyle className="profileDetails">
        Your about me section is currently blank. Would you like to add one? <span>Edit profile</span>
      </ActivityCardTextStyle>
      </ActivityCardContainer>
    </MyPageCardStyle>
     

    <div>

     </div>
      </>

  )
}
