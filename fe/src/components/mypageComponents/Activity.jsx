import React, {useState} from 'react'; 
import Questions from './QuestionCard';
import Answers from './AnswerCard'
import { 
  MyPageCardStyle,
  MypageNavStyle,
  ActivityCardContainer, 
  MypageNavitemStyle
} from '../mypageComponents/MyPage.styled';




export default function Activities({userQuestions}) {

  const [ mypageOptions, setMypageOptions] = useState('Questions');
 
  const handleOption = (el) => {
    setMypageOptions(el)
  }
  console.log(mypageOptions)
  return (
    <>
    <MyPageCardStyle>
      <MypageNavStyle>
      { mypageOptions === "Questions" ?
        <div>
            <MypageNavitemStyle onClick={() => handleOption("Answers")}>Answers</MypageNavitemStyle>
            <MypageNavitemStyle style={{backgroundColor: '#F1F2F3'}} onClick = {()=>handleOption("Questions")}>Questions</MypageNavitemStyle>
        </div>
      : 
        <div>
          <MypageNavitemStyle  style={{backgroundColor: '#F1F2F3'}} onClick={() => handleOption("Answers")}>Answers</MypageNavitemStyle>
          <MypageNavitemStyle  onClick = {()=>handleOption("Questions")}>Questions</MypageNavitemStyle>
        </div>
      }    
      </MypageNavStyle>
      <ActivityCardContainer>
      {mypageOptions === 'Questions' && <Questions userQuestions={userQuestions} />}
      {mypageOptions === 'Answers' && <Answers userQuestions={userQuestions} />}
      </ActivityCardContainer>
    </MyPageCardStyle>

    <div>

     </div>
      </>

  )
}
