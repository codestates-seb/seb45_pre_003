import React, {useState} from 'react'; 
import ActivityCard from './AcitivityCard';
import { 
  MyPageCardStyle,
  MypageNavStyle,
  ActivityCardContainer, 
  MypageNavitemStyle
} from '../mypageComponents/MyPage.styled';


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
             key={el} 
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
