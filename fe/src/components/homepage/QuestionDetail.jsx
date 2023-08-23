import { useEffect, useState } from "react";
import { AddCommentBtn, AskQuestionBtn, BodyBox, CommentLi, CommentUl, QDTitleBox, QDTitleStatsBox, Title, TopBox } from "./HomePage.style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { whenCorM } from "../../pages/QuestionPage";
import { EditorViewBox } from "../../style";
import Parser from 'html-react-parser';
import Loading from './../Loading';
import customAxios from "../../customaxios";
import { checkAuth } from "../../PathProtection";

function QuestionDetail () {
    const navigate = useNavigate();
    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [questionData,setQuestionData] = useState({});
    const [answeredData,setAnsweredData] = useState({});
    const [isAddActive,setIsAddActive] = useState(false);
    const [update,setUpdate] = useState(true);

    const answersURL = `http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/answers`;
    const questionIdURL = `http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}` //`http://localhost:8080/questions/${id}`
    const answersIdURL = `http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/answers/question/${id}`    //`http://localhost:8080/answers/question/${id}`
    
    
    const CommentData = {
        "body" : "",
        "questionId" : Number(id),
        "memberId" : null
    }

    const changeComment = (e) => {
        CommentData.body = e.target.value;
    }

    const handleSendAnswer = () => {
        if(CommentData.body.length < 20) {
            alert('20글자 입력해주세요')
        } else {
            const memberId = checkAuth();
            if(memberId) {
                CommentData["memberId"] = memberId;
                customAxios.post(answersURL,CommentData)
                .then((res)=>{
                    setUpdate(!update);
                })
                .catch(()=>{
                    alert('다시 시도해 주세요.');
                })
            } else {
                alert('로그인이 필요한 기능입니다.')
            }
        }
    }

    const handleDeletePost = (url) => {
        const memberId = checkAuth();
        if(memberId) {
            customAxios.delete(url)
            .then(()=>{
                alert('삭제성공')
                navigate(-1);
            })
            .catch(()=>alert('유효한 로그인 상태가 아닙니다.'))
        } else {
            alert('로그인이 필요한 기능입니다.')
        }
    }
    

    useEffect(()=>{
        window.scrollTo(0,0)
        setIsLoading(true)
        customAxios.get(questionIdURL)
        .then(Data=>{
            customAxios.get(answersIdURL)
            .then(Data2=>{
                setQuestionData({...Data.data});
                setAnsweredData({...Data2.data});
                setIsLoading(false);
                //멤버의 아이디를 받기위해서 API요청을 할지 상태로 관리할지 정해야할듯
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
            :<>
            <TopBox style={{
                borderBottom : '1px solid hsl(210,8%,70%)'
            }}>
                <QDTitleBox>
                    <Title style={{marginBottom:'6px'}}>{questionData.title}</Title>
                    <QDTitleStatsBox>
                        <span>{questionData.member.name}</span>
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
                <QDTitleStatsBox>
                        <button onClick={()=>handleDeletePost(questionIdURL)}>Delete</button>
                </QDTitleStatsBox>
                <CommentUl>
                    {answeredData.data?.map(item=>{
                        return (
                            <CommentLi key={item.answerId}>
                                <span className="body">{item.body}</span>
                                <span>-</span>
                                <span className="name">{item.member.name}</span>
                                <span className="time">{whenCorM(item.createdAt, item.modifiedAt)}</span>
                                <span className="delete" onClick={()=>handleDeletePost(`${answersURL}/${item.answerId}`)}>Delete</span>
                            </CommentLi>
                        )
                    })}
                    <AddCommentBtn
                    onClick={()=>setIsAddActive(!isAddActive)}
                    >Add a comment</AddCommentBtn>
                    {isAddActive &&
                        <CommentLi>
                            <textarea
                            onChange={e=>changeComment(e)}
                            />

                            <button
                            className="cancle"
                            onClick={()=>setIsAddActive(!isAddActive)}
                            >Cancle
                            </button>

                            <button
                            className="send"
                            onClick={handleSendAnswer}
                            >Send
                            </button>
                        </CommentLi>
                    }
                </CommentUl>
                
            </BodyBox>
            </>
            }
        </>
    )
}

export default QuestionDetail;