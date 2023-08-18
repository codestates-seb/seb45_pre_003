import { React, useState, useEffect} from 'react';
import { FlexStyle,
         Avatar,
         UserdetailsStyle,
         UserInfomationConnected,
         MypageFilterStyle
} from './MyPage.styled' ; 
import Profile from './Profile';
import Activity from './Activity'; 
import axios from 'axios'; 


export default function MypageContent({selectedContent,setSelectedContent}) {

    const [mypageQuestions, setMypageQuestions ] = useState([])
    const userName = "elena"; //로그인시에 확정되므로 Backend에서 받을것 
    const filteringitems = ["Profile", "Activity"]
  
    useEffect(() => {
      axios.get('http://localhost:3001/questions')
        .then(res => {
          setMypageQuestions(res.data);
        })
        .catch(error => {
          console.log("MyPage Question Mapping Error:", error);
        });
    }, []);
  
    const userQuestions = mypageQuestions.filter(el => el.author === userName)
  
    console.log(mypageQuestions)
    console.log(userQuestions)

    return (
      <>
      <div className = 'mypageContent'>
      <FlexStyle className = 'userInformation'>
        <Avatar />
        <UserInfomationConnected>
          <div style={{fontSize:"34px", margin: "4px"}}> Elena </div>
          <UserdetailsStyle>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🎂 Members for 3days </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🕓 Last seen this week </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🗒️ Visited 3 days, 3consecutive </li>
          </UserdetailsStyle>
        </UserInfomationConnected>
     </FlexStyle>
     <div style={{padding:"2px", margin:"10px 0px 30px 2px"}}>
        {filteringitems.map((el) =>  
        <MypageFilterStyle 
        key={el} 
        onClick = {() => setSelectedContent(el)} 
        active = {selectedContent === el}>
        {el}
        </MypageFilterStyle>)}
      </div>
      {selectedContent === 'Profile' && <Profile userQuestions={userQuestions} 
      />}
      {selectedContent === 'Activity' && <Activity userQuestions={userQuestions} 
      />}

      </div>
      </>
    )
  }
  