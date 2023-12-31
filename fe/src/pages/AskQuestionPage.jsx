import { Container, ContentBox, QuestionNoticeBox, H5, P, QuestionNotice, UserInputBox, QuestionNoticeTitleBox, QuestionTitleInputBox, SupportCardBox, SupportCard, SupportCardTitle, SupportCardContentBox, SupportCardContent, PostingButton, PostingButtonBox} from "../components/askquestionComponents/AskQuestionPageStyle";
import CkEditor from "../components/askquestionComponents/CkEditor";
import { useState } from "react";
import Parser from 'html-react-parser';
import { EditorViewBox } from "../style";
import customAxios from "../customaxios";
import base64 from 'base-64'
import { useNavigate } from "react-router-dom";

function AskQuestionPage () {
    const navigate = useNavigate();
    const [isPreView1, setIsPreView1] = useState(false);
    const [titleData,setTitleData] = useState('');
    const [preViewData, setPreViewData] = useState('');
    const [isPossibleTitle,setIsPossibleTitle] = useState(true);
    const [titleLen,setTitleLen] = useState(0);
    const [isPossibleContent,setIsPossibleContent] = useState(true);
    const [contentLen,setDatalen] = useState(0);

    const togglePreView = (e) => {
        e.target.textContent === 'PreView' ? e.target.textContent = 'Close' : e.target.textContent = 'PreView';
        setIsPreView1(!isPreView1);
    }

    const checkCondition = (dataLen,condition,callback) => {
        if(dataLen >= condition) {
            callback(true)
            return true;
        } else if (dataLen < condition) {
            callback(false);
            return false;
        }
    }

    

    const sendPosting = (title,body) => {
        const token = localStorage.getItem('usertoken');
        const payload = token?.substring(token.indexOf('.')+1,token.lastIndexOf('.'));
        const rqData = {
            "title" : title,
            "body" : body,
            "memberId" : null,
        }

        try {
            const decode = JSON.parse(base64.decode(payload));
            rqData["memberId"] = decode.id;
        } catch {
            localStorage.removeItem('usertoken');
            window.location.reload();
        }

        customAxios.post('http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/questions',JSON.stringify(rqData),{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            navigate(-1);
        })
        .catch(err=>{
            if(err.response.status === 500) {
                alert('본문의 길이가 너무 깁니다.');
            }
        })
    }

    const noticeData = [
        "Summarize your problem in a one-line title.",
        "Describe your problem in more detail.",
        "Describe what you tried and what you expected to happen.",
        "Add “tags” which help surface your question to members of the community.",
        "Review your question and post it to the site.",
    ]

    const inputData = [
        {
            title:"Title",
            secondTitle:"Be specific and imagine you're asking a question to another person",
            type: (el) => {return (<>
                <input
                    onChange={(e)=>{
                    checkCondition(e.target.value.length,15,setIsPossibleTitle);
                    setTitleLen(e.target.value.length);
                    setTitleData(e.target.value);
                    }}
                    type="text"
                    placeholder="e.g ls there an R function for finding the index of an element in a vector"
                />
                {!isPossibleTitle &&
                <p className='warning'>{el.warning}</p>
                }
            </>)},
            placeholder:"e.g ls there an R function for finding the index of an element in a vector",
            warning:'15글자 이상 입력해주세요.',
            side:{
                title:"Writing a good title",
                imgUrl:"/images/pencil.png",
                text:["Your title should summarize the problem.", "You might find that you have a better idea of your title after writing out the rest of the question."],
            }
        },
        {
            title:"What are the details of your problem?",
            secondTitle:"Introduce the problem and expand on what you put in the title. Minimum 20 characters.",
            type:(el, idx)=>{return <>
                <CkEditor setEditorData={setPreViewData} setDatalen={setDatalen}></CkEditor>
                {!isPossibleContent ? <p className='warning'>{el.warning} 현재 {contentLen}글자 </p> : <p className="notice">{contentLen} 글자</p>}
                <button onClick={(e)=>togglePreView(e,idx)}>PreView</button>
                {isPreView1 &&
                <EditorViewBox>{Parser(preViewData)}</EditorViewBox>
                }
            </>},
            warning:'100글자 이상 입력해주세요.',
            side:false,
        },
        {
            title:"Did you check the conditions?",
            secondTitle:"The title needs 15 characters and the body needs at least 100 characters.",
            type:(el)=>{return <>
                {!isPossibleTitle || !isPossibleContent ? <p className='warning'>{el.warning}</p> : undefined}
                <button onClick={()=>
                    checkCondition(titleLen,15,setIsPossibleTitle) && checkCondition(contentLen,100,setIsPossibleContent) &&
                    sendPosting(titleData,preViewData,2)
                }>Posting</button>
                </>},
            warning:'Check Conditions.',
            side:false,
        },
    ]

    return (
        <Container>
            <ContentBox>
                <QuestionNoticeBox>
                    <QuestionNoticeTitleBox>
                        <h1>Ask a public question</h1>
                    </QuestionNoticeTitleBox>
                    <QuestionNotice>
                        <h2>Writing a good question</h2>
                        <H5>Steps</H5>
                        <ul>
                            {noticeData.map((text,idx)=><li key={idx}>{text}</li>)}
                        </ul>
                    </QuestionNotice>
                </QuestionNoticeBox>
                {inputData.map((el,idx)=>{
                    return (
                        <UserInputBox key={idx}>
                            <QuestionTitleInputBox>
                                <H5>{el.title}</H5>
                                <P>{el.secondTitle}</P>
                                {el.type(el,idx)}
                            </QuestionTitleInputBox>
                            {el.side 
                            &&<SupportCardBox key={el.side.imgUrl}>
                                <SupportCard>
                                    <SupportCardTitle>
                                        <H5>{el.side.title}</H5>
                                    </SupportCardTitle>
                                    <SupportCardContentBox>
                                        <img src={el.side.imgUrl} alt=""/>
                                        <SupportCardContent>
                                            {el.side.text.map((text,id)=><P key={id}>{text}</P>)}
                                        </SupportCardContent>
                                    </SupportCardContentBox>
                                </SupportCard>
                            </SupportCardBox>}
                        </UserInputBox>
                    )
                })}
            </ContentBox>
        </Container>
    )
}

export default AskQuestionPage;
