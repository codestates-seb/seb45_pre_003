import { useEffect, useState } from "react";
import { AddCommentBtn, AskQuestionBtn, BodyBox, CommentLi, CommentUl, QDTitleBox, QDTitleStatsBox, Title, TopBox } from "./HomePage.style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { whenCorM } from "../../pages/QuestionPage";
import { EditorViewBox } from "../../style";
import Parser from 'html-react-parser';
import Loading from './../Loading';
import axios from "axios";

const dummyQuestionData = {
    "questionId" : 1,
    "title" : "질문의 제목",
    "body" : '',
    "member" : {
      "id" : 1,
      "name" : "홍길동",
      "email" : "hgd@gmail.com"
    },
    "answerCount" : 0,
    "visitCount" : 2,
    "answered" : false,
    "createdAt" : "2023-08-11T10:30:32.7516",
    "modifiedAt" : "2023-08-11T10:30:32.7516"
}

const dummyansweredData = {
    "data" : [ {
      "answerId" : 1,
      "body" : "첫번째 테스트용 답변",
      "member" : {
        "id" : 1,
        "name" : "홍길동",
        "email" : "hgd@gmail.com"
      },
      "questionId" : 1,
      "isBest" : false,
      "createdAt" : "2023-08-04T10:30:31.0686897",
      "modifiedAt" : "2023-08-18T10:30:31.0686897"
    }, {
      "answerId" : 2,
      "body" : "두번째adwdawdawdawdawdawdawdawdawdawdawdawdawd 테스트용 답변",
      "member" : {
        "id" : 2,
        "name" : "임꺽정",
        "email" : "lgj@gmail.com"
      },
      "questionId" : 1,
      "isBest" : false,
      "createdAt" : "2023-08-11T10:30:31.0686897",
      "modifiedAt" : "2023-08-18T10:30:31.0686897"
    } ]
}

function QuestionDetail () {
    const navigate = useNavigate();
    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [questionData,setQuestionData] = useState({});
    const [answeredData,setAnsweredData] = useState({});
    const [isAddActive,setIsAddActive] = useState(false);
    const [update,setUpdate] = useState(true);

    const questionIdURL = `http://localhost:3001/question2`
    const answersIdURL = `http://localhost:3001/answers`
    
    const CommentData = {
        "body" : "",
        "questionId" : questionData?.questionId,
        "memberId" : questionData.member?.id,
    }

    const changeComment = (e) => {
        CommentData.body = e.target.value;
    }

    const send = () => {
        if(CommentData.body.length < 20) {
            alert('20글자 입력해주세요')
        } else {
            console.log(CommentData.body);
            setUpdate(!update);
            setIsAddActive(false);
        }
    }

    useEffect(()=>{
        axios.get(questionIdURL)
        .then(Data=>{
            setQuestionData({...Data.data});
            axios.get(answersIdURL)
            .then(Data2=>{
                setAnsweredData({...Data2.data});
                setIsLoading(false);
            })
            .catch(err2=>{
                navigate('/404');
                console.log(err2);
            })
        })
        .catch(err=>{
            navigate('/404');
            console.log(err);
        })
    },[update])

    return (
        <>
            { isLoading
            ? <Loading/>
            :
            <>
            <TopBox style={{
                borderBottom : '1px solid hsl(210,8%,70%)'
            }}>
                <QDTitleBox>
                    <Title style={{marginBottom:'6px'}}>{questionData.title}</Title>
                    <QDTitleStatsBox>
                        <span>{whenCorM(questionData.createdAt,questionData.modifiedAt)}</span>
                        <span>viewed {questionData.visitCount}</span>
                    </QDTitleStatsBox>
                </QDTitleBox>
                
                <Link to={'/askquestion'}>
                    <AskQuestionBtn>Ask Question</AskQuestionBtn>
                </Link>
            </TopBox>
            <BodyBox>
                <EditorViewBox>
                    {Parser(questionData.body)}
                </EditorViewBox>
                <CommentUl>
                    {answeredData.data.map(item=>{
                        return (
                            <CommentLi key={item.answerId}>
                                <span className="body">{item.body}</span>
                                <span>-</span>
                                <span className="name">{item.member.name}</span>
                                <span className="time">{whenCorM(item.createdAt, item.modifiedAt)}</span>
                            </CommentLi>
                        )
                    })}
                    <AddCommentBtn
                    onClick={()=>setIsAddActive(!isAddActive)}
                    >Add a comment</AddCommentBtn>
                    {isAddActive
                        ?<>
                        <CommentLi>
                            <textarea
                            onChange={e=>changeComment(e)}
                            />
                            <button
                            className="cancle"
                            onClick={()=>setIsAddActive(!isAddActive)}
                            >Cancle</button>

                            <button
                            className="send"
                            onClick={send}
                            >Send</button>
                        </CommentLi>
                        </>
                        :undefined}
                </CommentUl>
                
            </BodyBox>
            </>
            }
        </>
    )
}

export default QuestionDetail;