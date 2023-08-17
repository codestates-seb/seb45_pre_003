import React from 'react'
import { UserInformationStyle,
         Avatar,
         UserdetailsStyle,
         UserInfomationConnected,
         MypageFilterStyle
} from './MyPage.styled' ; 
import Profile from './Profile';
import Activity from './Activity'; 


export default function MypageContent({selectedContent,setSelectedContent}) {

    const filteringitems = ["Profile", "Activity"]
  
    return (
      <>
      <div className = 'mypageContent'>
      <UserInformationStyle>
        <Avatar />
        <UserInfomationConnected>
          <div style={{fontSize:"34px", margin: "4px"}}> Elena </div>
          <UserdetailsStyle>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🎂 Members for 3days </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🕓 Last seen this week </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🗒️ Visited 3 days, 3consecutive </li>
          </UserdetailsStyle>
        </UserInfomationConnected>
     </UserInformationStyle>
     <div style={{padding:"2px", margin:"10px 0px 30px 2px"}}>
        {filteringitems.map((el) =>  
        <MypageFilterStyle 
        key={el} 
        onClick = {() => setSelectedContent(el)} 
        active = {selectedContent === el}>
        {el}
        </MypageFilterStyle>)}
      </div>
      {selectedContent === 'Profile' && <Profile/>}
      {selectedContent === 'Activity' && <Activity/>}

      </div>
      </>
    )
  }
  