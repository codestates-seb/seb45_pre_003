import React, {useState} from 'react'
import {
  Avatar, 
  MyPageCardStyle, 
  ProfileLeftBarStyle,
  CardTitleStyle,
  ActivityCardAnswerNoneStyle, 
  ProfileLeftBarContainerStyle,
  ProfileLeftBarContainerTitlelStyle,
  ProfileLeftBarContainerSubStyle,
  CommunitySetStyle,
  CommunitySetItemStyle,
  ProfileBoxStyle,
  ProfileBoxTextStyle,
  ProfileCardContainer, 
  NothingToshow,
  EditProfileTitle, 
  EditProfileStyle,
  EditProfileCardContainer, 
  ProfileInputStyle, 
  ProfileElementStyle, 
  CustomEditorStyle, 
  ButtonStyle
} from '../mypageComponents/MyPage.styled';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import picture1 from '../../assets/stack-overflow.png'
import { useNavigate } from "react-router-dom";
import Parser from 'html-react-parser';

export default function Profile({numberOfuserQuestions, numberOfuserAnswers, userName}) {
  const navigate = useNavigate();
  const [showprofile, showSetProfile] = useState(false); 
  const [parsedProfile, setParsedProfile] = useState(null); 
  const [dispalyedName, setDisplayedName] = useState('')
  const [showEditor, setShowEditor] = useState('')

  const handleProfile = () => {
    showSetProfile(true); 
  }
 
  const handleSubmit = () => {
    userName = dispalyedName;
    console.log(parsedProfile)
    setShowEditor(parsedProfile)
  }

  const handleName = (e) => {
    setDisplayedName(e.target.value)
  }

  return (
    <>
        <MyPageCardStyle>
            <ProfileLeftBarContainerStyle>
               <ProfileLeftBarContainerTitlelStyle>Stats</ProfileLeftBarContainerTitlelStyle>
                  <ProfileLeftBarStyle>
                    <ProfileBoxStyle >
                      <ProfileBoxTextStyle className="number _1">{numberOfuserAnswers}</ProfileBoxTextStyle>
                      <ProfileBoxTextStyle  className="item _1">answers</ProfileBoxTextStyle>
                    </ProfileBoxStyle>
                    <ProfileBoxStyle >
                      <ProfileBoxTextStyle className="number _2">{numberOfuserQuestions}</ProfileBoxTextStyle>
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
                <div className ="MyapgeProfileCommunity" onClick={()=> navigate(("/"))}>
                  <CommunitySetStyle>
                      <ProfileLeftBarContainerTitlelStyle>Communities</ProfileLeftBarContainerTitlelStyle>
                      <ProfileLeftBarContainerSubStyle>Edit</ProfileLeftBarContainerSubStyle>
                  </CommunitySetStyle>
                   <CommunitySetItemStyle>
                         <div >
                            <img src={picture1} style={{height: "16px", width:"16px"}}alt="logo"/>
                             Stack Overflow
                        </div>
                         <div>1</div>
                  </CommunitySetItemStyle>
                 </div>
               </ProfileLeftBarContainerStyle>
               { showprofile=== false ?  
                    <ProfileCardContainer >
                        <CardTitleStyle >
                           About
                        </CardTitleStyle>
                        <ActivityCardAnswerNoneStyle >
                           <NothingToshow onClick={handleProfile}>
                           { showEditor === '' ?
                           <div>Your about me section is currently blank. Would you like to add one? <span>Edit profile</span></div>
                          : <div>(showEditor)</div> }
                           </NothingToshow>
                        </ActivityCardAnswerNoneStyle>
                    </ProfileCardContainer>
                :
                <>
                <EditProfileStyle>
                <EditProfileTitle className="profileTitle" >Edit your profile</EditProfileTitle>
                    <EditProfileTitle className="profileTitlePublic">Public Information</EditProfileTitle>
                       <EditProfileCardContainer>
                          <EditProfileTitle className="profileTitleImage">Profile Image</EditProfileTitle>
                              <Avatar style={{marginLeft:"30px"}}/>
                              <EditProfileTitle className="profileTitleImage">Display name</EditProfileTitle>
                              <ProfileElementStyle className="formProfile"> 
                                 <ProfileInputStyle type={'text'} placeholder={userName} maxLength={240} onChange={handleName}/>
                              </ProfileElementStyle>
                              <EditProfileTitle className="profileTitleImage">About me</EditProfileTitle>
                                    <CustomEditorStyle className = "ProfileDescription">
                                      <CKEditor
                                       editor={CustomEditor}
                                       config = {{ placeholder : "Set Your Profile, here" }}
                                       onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        const parsedData = Parser(data);
                                        setParsedProfile(parsedData);
                                       }}           
                                        />
                                    </CustomEditorStyle>
                              <ButtonStyle onClick={handleSubmit}>Save Profile</ButtonStyle> 
                              {showEditor && <div style={{margin:"30px"}}>{showEditor}</div> }
                        </EditProfileCardContainer>
                </EditProfileStyle>
                </>}
         
       </MyPageCardStyle>
   
   </>
  )
}
