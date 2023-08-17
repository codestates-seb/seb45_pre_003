import React from 'react'
import {
  MyPageCardStyle, 
  ProfileLeftBarStyle,
  ActivityCardContainer,
  ActivityStyleCardTitleStyle,
  ActivityCardTextStyle, 
  ProfileLeftBarContainerStyle,
  ProfileLeftBarContainerTitlelStyle,
  ProfileLeftBarContainerSubStyle,
  CommunitySetStyle,
  ProfileBoxStyle,
  ProfileBoxTextStyle

} from '../mypageComponents/MyPage.styled';

import picture1 from '../../assets/stack-overflow.png'

export default function Profile({userQuestions}) {
  return (
    <>
    <MyPageCardStyle>
      <ProfileLeftBarContainerStyle>
        <ProfileLeftBarContainerTitlelStyle>Stats</ProfileLeftBarContainerTitlelStyle>
          <ProfileLeftBarStyle>
            <ProfileBoxStyle >
              <ProfileBoxTextStyle className="number _1">0</ProfileBoxTextStyle>
              <ProfileBoxTextStyle  className="item _1">answers</ProfileBoxTextStyle>
            </ProfileBoxStyle>
            <ProfileBoxStyle >
              <ProfileBoxTextStyle className="number _2">{userQuestions.length}</ProfileBoxTextStyle>
              <ProfileBoxTextStyle  className="item _2">questions</ProfileBoxTextStyle>
            </ProfileBoxStyle>
            <ProfileBoxStyle>
              <ProfileBoxTextStyle className="number _3">0</ProfileBoxTextStyle>
              <ProfileBoxTextStyle  className="item _3">reputation</ProfileBoxTextStyle>
            </ProfileBoxStyle>
            <ProfileBoxStyle>
              <ProfileBoxTextStyle className="number _4">0</ProfileBoxTextStyle>
              <ProfileBoxTextStyle  className="item _4">reached</ProfileBoxTextStyle>
            </ProfileBoxStyle>
          </ProfileLeftBarStyle>
        <CommunitySetStyle>
          <ProfileLeftBarContainerTitlelStyle>Communities</ProfileLeftBarContainerTitlelStyle>
          <ProfileLeftBarContainerSubStyle>Edit</ProfileLeftBarContainerSubStyle>
        </CommunitySetStyle>
           <ProfileLeftBarStyle>
              <div>
                <img src={picture1} style={{height: "16px", width:"16px"}}alt="logo"/>
                Stack Overflow
              </div>
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
      </>

  )
}
