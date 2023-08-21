import { React, useState, useEffect} from 'react';
import { FlexStyle,
         Avatar,
         UserdetailsStyle,
         UserInfomationConnected,
         MypageFilterStyle
} from './MyPage.styled' ; 
import Profile from './Profile';
import Activities from './Activity'; 
import axios from 'axios'; 


export default function MypageContent({selectedContent,setSelectedContent}) {

    const [mypageQuestions, setMypageQuestions ] = useState([])
    const [mypageAnswers, setMypageAnswers ] = useState([])

    
    const handleFilter = (el) => {
      setSelectedContent(el)
    }
    
    useEffect(() => {
      axios.get('http://localhost:8080/questions')
        .then(res => {
          setMypageQuestions(res.data);
        })
        .catch(error => {
          console.log("MyPage Question Mapping Error:", error);
        });
    }, []);

    useEffect(() => {
      axios.get('http://localhost:8080/answers')
        .then(res => {
          setMypageAnswers(res.data)
        })
        .catch(error => {
          console.log("MyPage Question Mapping Error:", error);
        });
    }, []);
  
    const userName = "elena"; //로그인시에 확정된 값을 이용할것 
    const userQuestions = mypageQuestions.filter(el => el.author === userName) //백엔드에서 최신 3개
    const userAnswers = mypageAnswers.filter(el => el.author === userName) //백엔드에서 최신 3개
    const numberOfuserQuestions = 5; // 통신을 통해 Backend에서 받아옴  (유저의 총 질문수)
    const numberOfuserAnswers = 4 ; // 통신을 통해 Backend에서 받아옴  (유저의 총 답변수)
    console.log(userQuestions)

    return (
      <>
      <div className = 'mypageContent'>
      <FlexStyle className = 'userInformation'>
        <Avatar />
        <UserInfomationConnected>
          <div style={{fontSize:"34px", margin: "4px"}}> {userName} </div>
          <UserdetailsStyle>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🎂 Members for 3days </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🕓 Last seen this week </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🗒️ Visited 3 days, 3consecutive </li>
          </UserdetailsStyle>
        </UserInfomationConnected>
     </FlexStyle>
     <div style={{padding:"2px", margin:"10px 0px 30px 2px"}}>
     { selectedContent === "Activity" ?
      <div>
          <MypageFilterStyle onClick={() => handleFilter("Profile")}>Profile</MypageFilterStyle>
          <MypageFilterStyle style={{backgroundColor: '#f48225' , color:"white"}} onClick={() => handleFilter("Activity")}>Activity</MypageFilterStyle>
      </div>
      : 
      <div>
          <MypageFilterStyle  style={{backgroundColor: '#f48225' , color:"white"}} onClick = {()=>handleFilter("Profile")}>Profile</MypageFilterStyle>
          <MypageFilterStyle onClick = {()=>handleFilter("Activity")}>Activity</MypageFilterStyle>
      </div>
      }
      </div>
      {selectedContent === 'Profile' && <Profile numberOfuserQuestions={numberOfuserQuestions} numberOfuserAnswers={numberOfuserAnswers} userName={userName}
      />}
      {selectedContent === 'Activity' && <Activities userQuestions={userQuestions} userAnswers={userAnswers}
      />}

      </div>
      </>
    )
  }