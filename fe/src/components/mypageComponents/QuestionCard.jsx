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
    
  function createdDate(el) {
    const newDate = new Date(el) ; 
    const dateMypage = newDate.toLocaleString('en-Us', { month: "short", day: "numeric"})
    const timeMypage = newDate.toLocaleString ('en-Us', {hour:'numeric', minute: 'numeric', hour12: false})
    return `${dateMypage} at ${timeMypage}`
    };

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
                                             {el.answerCount === 0 ? 
                                                 <MypageQuestionSummary key={uuidv4()}>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>0</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()} >answers</MypageQuestionUpperTextStyle>
                                                 </MypageQuestionSummary>
                                               :
                                                 <MypageQuestionSummary key={uuidv4()} className="answersGreenBox">
                                                     <MypageQuestionUpperTextStyle key={uuidv4()} className='mypageItems_1'>{el.answerCount}</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()} className='mypageItems_1'>answer</  MypageQuestionUpperTextStyle>
                                                 </MypageQuestionSummary>
                                             }
                                                 <MypageQuestionSummary>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>{el.visitCount}</MypageQuestionUpperTextStyle>
                                                     <MypageQuestionUpperTextStyle key={uuidv4()}>views</MypageQuestionUpperTextStyle>
                                                </MypageQuestionSummary>
                                             </QuestionUpperText>
                                           <MypageQuestionTitleStyle className='mypageAnwerTitle' key={uuidv4()}>
                                           {el.title}
                                           </MypageQuestionTitleStyle >
                                           <MypageQuestionUpperTextStyle className='mypageItemCreatedAt' key={uuidv4()} style={{ alignSelf: 'flex-end' }}>
                                           asked {createdDate(el.createdAt)}
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