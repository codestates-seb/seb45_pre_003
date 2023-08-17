import React, {useState, useEffect} from 'react'
import { ActivityStyleCardTitleStyle } from './MyPage.styled'
import { ActivityCardTextStyle } from './MyPage.styled'
import axios from 'axios'

export default function Answers({mypageOptions}) {

  const [ mypageQuestions, setMypageQuestions ] = useState({})
  
  useEffect(() => {
    axios.get('http://localhost:3001/questions')
      .then(res => {
        console.log("Response from server:", res.data);
      })
      .catch(error => {
        console.log("MyPage Question Mapping Error:", error);
      });
  }, []);


  const pageOptionLowerCase = mypageOptions.toLowerCase();


  return (
    <>
    { mypageQuestions === [] ? 
    <>
    <ActivityStyleCardTitleStyle >
     0 {mypageOptions}
    </ActivityStyleCardTitleStyle>
    <ActivityCardTextStyle>
      You have not participated in any <span>{pageOptionLowerCase}</span>
      </ActivityCardTextStyle>
      </>
      : 
      <>
      <ActivityStyleCardTitleStyle >
      0 {mypageOptions}
     </ActivityStyleCardTitleStyle>
     <ActivityCardTextStyle>
       data표시
       </ActivityCardTextStyle>    
    </>
    }
    </>
  )
}
