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

  export default function Questions({userQuestions}) {
     const numberofQuestions = userQuestions.length
    
     return (
          <div className = "QustionCard">
              <ActivityCardContainer>
                { numberofQuestions === 0 ? 
                   <>
                    <CardTitleStyle className = "mypageNoAnswer">
                      0 Questions
                    </CardTitleStyle>
                    <ActivityCardAnswerNoneStyle >
                        <NothingToshow>
                            You have not <span>asked</span> any question.
                        </NothingToshow>
                    </ActivityCardAnswerNoneStyle>     
                   </>
                : <>
                   <CardTitleStyle >
                           Recently asked {numberofQuestions} Questions
                   </CardTitleStyle>
                   <ActivityCardItemContainer>
                           { userQuestions.map(el => (     //불러온 Question을 Map으로 전개 
                                <div key={uuidv4()}>
                                   <ActivityQuestionBoxInnerStyle key={uuidv4()} >     
                                           <QuestionUpperText>
                                               <MypageQuestionSummary key={uuidv4()}>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>0</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>votes</MypageQuestionUpperTextStyle>
                                                </MypageQuestionSummary>
                                             {el.answers === 0 ? 
                                                 <MypageQuestionSummary key={uuidv4()}>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>{el.answers}</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()} >answers</MypageQuestionUpperTextStyle>
                                                 </MypageQuestionSummary>
                                               :
                                                 <MypageQuestionSummary key={uuidv4()} className="answersGreenBox">
                                                     <MypageQuestionUpperTextStyle key={uuidv4()} className='mypageItems_1'>{el.answers}</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()} className='mypageItems_1'>answer</  MypageQuestionUpperTextStyle>
                                                 </MypageQuestionSummary>
                                             }
                                                 <MypageQuestionSummary>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>{el.views}</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>views</MypageQuestionUpperTextStyle>
                                                </MypageQuestionSummary>
                                             </QuestionUpperText>
                                           <MypageQuestionTitleStyle className='mypageAnwerTitle' key={uuidv4()}>
                                           {el.title}
                                           </MypageQuestionTitleStyle >
                                           <MypageQuestionUpperTextStyle className='mypageItemCreatedAt' key={uuidv4()} style={{ alignSelf: 'flex-end' }}>
                                           {el.createdAt.toLocaleString()}
                                           </MypageQuestionUpperTextStyle >
                                    </ActivityQuestionBoxInnerStyle>
                                </div > ))}                                               
                   </ActivityCardItemContainer>
                   </>
                   }
             </ActivityCardContainer>
          </div>
     ); 
     }