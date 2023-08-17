import React from 'react'
import { 
  ActivityStyleCardTitleStyle, 
  ActivityCardTextStyle,
  MypageAnswersTitleStyle, 
  FlexStyle
  } from './MyPage.styled'

  export default function Answers({mypageOptions, userQuestions}) {
  const pageOptionLowerCase = mypageOptions.toLowerCase();
  console.log(userQuestions)

  return (
  <>
    { userQuestions.length === 0 ? 
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
      {userQuestions.length} {mypageOptions}
    </ActivityStyleCardTitleStyle>
      <ActivityCardTextStyle >
      { userQuestions
      .map(el => (
        <>
        <FlexStyle className="mypageAnswer">
        <MypageAnswersTitleStyle className='mypageItems_1'> {el.votes}votes </MypageAnswersTitleStyle>
        <MypageAnswersTitleStyle className='mypageItems_2'> {el.answers}answers </MypageAnswersTitleStyle>
        <MypageAnswersTitleStyle className='mypageItems_3'> {el.views}views </MypageAnswersTitleStyle>
        </FlexStyle>
        <MypageAnswersTitleStyle className='mypageAnwerTitle' key={el.id} title={el.title}>
        {el.title}
       </ MypageAnswersTitleStyle >
       </>))}
      </ActivityCardTextStyle>    
      </>
    }
  </>  
  )
}
