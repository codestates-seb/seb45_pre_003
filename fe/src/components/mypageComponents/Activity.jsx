import { React, useState } from 'react';
import ActivityCard from './AcitivityCard';
import { MyPageCardStyle } from '../mypageComponents/MyPage.styled';
import { MypageNavStyle } from '../mypageComponents/MyPage.styled';
import { ActivityCardContainer } from '../mypageComponents/MyPage.styled';
import { MypageNavitemStyle } from '../mypageComponents/MyPage.styled';



export default function Activities() {

  const [mypageOptions, setMypageOptions] = useState('Questions');
  const optionItems = ["Answers", "Questions", "Tags","Votes"]
  
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
        <ActivityCard mypageOptions={mypageOptions}/>
      </ActivityCardContainer>
    </MyPageCardStyle>

    <div>

     </div>
      </>

  )
}
