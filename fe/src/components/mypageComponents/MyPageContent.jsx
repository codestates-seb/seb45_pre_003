import React from 'react'
import { Avatar } from './MyPage.styled'; 
import { UserInformation } from './MyPage.styled' ; 
import { Userdetails } from './MyPage.styled'; 
import { UserInfomationConnected } from './MyPage.styled'; 
import { MypageFilter } from './MyPage.styled'
import Profile from './Profile';
import Activity from './Activity'; 


export default function MypageContent({selectedContent,setSelectedContent}) {

    const filteringitems = ["Profile", "Activity"]
  
    return (
      <>
      <div className = 'mypageContent'>
      <UserInformation>
      <Avatar />
      <UserInfomationConnected>
      <div style={{fontSize:"34px", margin: "4px"}}> 이지은 </div>
      <Userdetails>
      <li style={{listStyle:'none', margin:'0px 2px'}}>🎂 Members for 3days </li>
      <li style={{listStyle:'none', margin:'0px 2px'}}>🕓 Last seen tis week </li>
      <li style={{listStyle:'none', margin:'0px 2px'}}>🗒️ Visited 3 days, 3consecutive </li>
      </Userdetails>
      </UserInfomationConnected>
      </UserInformation>
      <div style={{padding:"2px", margin:"10px 0px 20px 2px"}}>
        {filteringitems.map((el) =>  <MypageFilter key={el} 
        onClick = {() => setSelectedContent(el)} 
        active = {selectedContent === el}>{el}
        </MypageFilter>)}
      </div>
      {selectedContent === 'Profile' && <Profile/>}
      {selectedContent === 'Activity' && <Activity/>}

      </div>
      </>
    )
  }
  