import React from 'react'
import { MyPageCardStyle } from '../mypageComponents/MyPage.styled';
import { ProfileLeftBarStyle } from '../mypageComponents/MyPage.styled';
import { ActivityCardContainer } from '../mypageComponents/MyPage.styled';
import {ActivityStyleCardTitleStyle} from '../mypageComponents/MyPage.styled';
import {ActivityCardTextStyle} from '../mypageComponents/MyPage.styled';
import { ProfileLeftBarContainerStyle } from '../mypageComponents/MyPage.styled';
import {CommunitySetStyle} from '../mypageComponents/MyPage.styled';
import picture1 from '../../assets/stack-overflow.png'

export default function Profile() {
  return (
    <>
    <MyPageCardStyle>
     <ProfileLeftBarContainerStyle>
      <div>Stats</div>
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
     <CommunitySetStyle>
     <div>Communities</div>
     <div style={{fontSize:"13px"}}>Edit</div>
     </CommunitySetStyle>
     <ProfileLeftBarStyle>
        <div>
        <img src={picture1} style={{height: "16px", width:"16px"}}alt="logo"/>
          Stack Overflow</div>
        <div>1</div>
      </ProfileLeftBarStyle>
      </ProfileLeftBarContainerStyle>
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
