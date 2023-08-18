import React, {useState} from 'react'; 
import ActivityCard from './AcitivityCard';
import { 
  MyPageCardStyle,
  MypageNavStyle,
  ActivityCardContainer, 
  MypageNavitemStyle
} from '../mypageComponents/MyPage.styled';
import {v4 as uuidv4 } from 'uuid'; 

export default function Activities({userQuestions}) {

  const optionItems = ["Answers", "Questions", "Tags","Votes"]
  const [mypageOptions, setMypageOptions] = useState('Questions');

  return (
    <>
    <MyPageCardStyle>
      <MypageNavStyle>
        <ul>
         {optionItems.map((el) => (
           <MypageNavitemStyle
             key={uuidv4()} 
             onClick = {() => setMypageOptions(el)} 
            active = {mypageOptions === el}
           >{el}
          </MypageNavitemStyle>
         ))}
        </ul>
      </MypageNavStyle>
      <ActivityCardContainer>
        <ActivityCard mypageOptions={mypageOptions} userQuestions={userQuestions}/>
      </ActivityCardContainer>
    </MyPageCardStyle>

    <div>

     </div>
      </>

  )
}
