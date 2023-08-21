import React from 'react'
import { 
  ActivityCardContainer,
  ActivityCardItemContainer,
  CardTitleStyle, 
  QuestionUpperText,
  MypageQuestionTitleStyle,
  MypageQuestionUpperTextStyle, 
  ActivityQuestionBoxInnerStyle,
  ActivityCardAnswerNoneStyle,
  NothingToshow, 
  MypageQuestionSummary
  } from './MyPage.styled'
  import {v4 as uuidv4 } from 'uuid'; 

  export default function Answers({userQuestions}) {
     const numberofAnswers = userQuestions.length
    
     return (
          <div className = "QustionCard">
              <ActivityCardContainer>
                { numberofAnswers === 0 ? 
                   <>
                    <CardTitleStyle className = "mypageNoAnswer">
                      0 Answers
                    </CardTitleStyle>
                    <ActivityCardAnswerNoneStyle >
                        <NothingToshow>
                            You have not <span>answered</span> any question.
                        </NothingToshow>
                    </ActivityCardAnswerNoneStyle>     
                   </>
                : <>
                   <CardTitleStyle >
                           Recently {numberofAnswers} Answered 
                   </CardTitleStyle>
                   <ActivityCardItemContainer>
                           { userQuestions.map(el => (     //불러온 Question을 Map으로 전개 
                                <div key={uuidv4()}>
                                   <ActivityQuestionBoxInnerStyle key={uuidv4()} >     
                                           <QuestionUpperText key={uuidv4()}>
                                                 <MypageQuestionSummary key={uuidv4()}>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>0</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>votes</MypageQuestionUpperTextStyle>
                                                </MypageQuestionSummary>
                                             </QuestionUpperText>
                                           <MypageQuestionTitleStyle className='mypageAnwerTitle' key={uuidv4()}>
                                           {el.title}
                                           </MypageQuestionTitleStyle >
                                           <MypageQuestionUpperTextStyle className='mypageItemCreatedAt' key={uuidv4()} style={{ alignSelf: 'flex-end' }}>
                                           {el.createdAt.toLocaleString()}
                                           </MypageQuestionUpperTextStyle >
                                    </ActivityQuestionBoxInnerStyle>
                                </div> ))}                                               
                   </ActivityCardItemContainer>
                   </>
                   }
             </ActivityCardContainer>
          </div>
     ); 
     }