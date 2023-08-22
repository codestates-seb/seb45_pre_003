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
import Loading from '../Loading'
import checkAuth from '../../PathProtection'

export default function MypageContent({selectedContent,setSelectedContent}) {

    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState('')
    const [signupDate, setSignupDate] = useState(null); 
    const [visit, setVisit] = useState(null)
    const [answerCount, setAnswerCount] = useState(null)
    const [questionCount, setQuestionCount] = useState(null)
    const [userQuestions, setMypageQuestions ] = useState([])
    const [userAnswers, setMypageAnswers ] = useState([])
    
    const userId = checkAuth(); 
      //  const userId = 9; 
    const handleFilter = (el) => {
      setSelectedContent(el)
    }
    
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
      axios.get(`http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/members/${userId}`)
        .then(res => {
          setIsLoading(true); 
          console.log(res)
          setUserName(res.data.name)
          setSignupDate(res.data.createdAt)
          setVisit(res.data.continuousVisitCount)
          setAnswerCount(res.data.answerCount)
          setQuestionCount(res.data.questionCount); 
          setMypageQuestions(res.data.questionsData.data);
          setMypageAnswers(res.data.questionsWithMyAnswers.data)
   
          setIsLoading(false); 
        })
        .catch(error => {
          console.log("MyPage Question Mapping Error:", error);
        });

      }, 300); 
    
      return () => clearTimeout(loadingTimeout); 
    }, []);

   console.log(userQuestions)
   console.log(userAnswers)

    if(isLoading){
      return <Loading />
    }
    
    function duration(el) {
      const createdDate = new Date(el) ; 
      const today = new Date(); 
      const durations = today - createdDate
      const dayDifference = Math.ceil(durations/(1000*60*60*24))
      return dayDifference; 
      };



    return (
      <>
      <div className = 'mypageContent'>
      <FlexStyle className = 'userInformation'>
        <Avatar />
        <UserInfomationConnected>
          <div style={{fontSize:"34px", margin: "4px"}}> {userName} </div>
          <UserdetailsStyle>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🎂 Members for {duration(signupDate)}days </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🕓 Last seen this week </li>
             <li style={{listStyle:'none', margin:'0px 2px'}}>🗒️ Visited {visit}days, {visit}consecutive </li>
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
      {selectedContent === 'Profile' && <Profile answerCount={answerCount} questionCount={questionCount} userName={userName}
      />}
      {selectedContent === 'Activity' && <Activities userQuestions={userQuestions} userAnswers={userAnswers}
      />}

      </div>
      </>
    )
  }