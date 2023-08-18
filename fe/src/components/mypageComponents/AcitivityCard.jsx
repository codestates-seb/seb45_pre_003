import React from 'react'
import { 
  ActivityStyleCardTitleStyle, 
  ActivityCardTextStyle,
  MypageAnswersTitleStyle, 
  FlexStyle
  } from './MyPage.styled'
  import {v4 as uuidv4 } from 'uuid'; 

  export default function Answers({mypageOptions, userQuestions}) {
  console.log(userQuestions)

  return (
  <>
    { userQuestions.length === 0 ? 
    <>
    <ActivityStyleCardTitleStyle >
       0 {mypageOptions}
    </ActivityStyleCardTitleStyle>
     <ActivityCardTextStyle>
       You have not participated in any <span>{mypageOptions}</span>
     </ActivityCardTextStyle>
    </>
      : 
    <>
    <ActivityStyleCardTitleStyle >
      {userQuestions.length} {mypageOptions}
    </ActivityStyleCardTitleStyle>
      <ActivityCardTextStyle >
      { userQuestions
      .map(el => (
        <>
        <FlexStyle key={uuidv4()} className="mypageAnswer">
        <MypageAnswersTitleStyle key={uuidv4()} className='mypageItems_1'> {el.votes}votes </MypageAnswersTitleStyle>
        <MypageAnswersTitleStyle key={uuidv4()} className='mypageItems_2'> {el.answers}answers </MypageAnswersTitleStyle>
        <MypageAnswersTitleStyle key={uuidv4()} className='mypageItems_3'> {el.views}views </MypageAnswersTitleStyle>
        </FlexStyle>
        <MypageAnswersTitleStyle className='mypageAnwerTitle' key={uuidv4()} title={el.title}>
        {el.title}
       </ MypageAnswersTitleStyle >
       </>))}
      </ActivityCardTextStyle>    
      </>
    }
  </>  
  )
}