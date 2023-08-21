import { Container, ContentBox, QuestionNoticeBox, H5, P, QuestionNotice, UserInputBox, QuestionNoticeTitleBox, QuestionTitleInputBox, SupportCardBox, SupportCard, SupportCardTitle, SupportCardContentBox, SupportCardContent, PostingButton, PostingButtonBox} from "../components/askquestionComponents/AskQuestionPageStyle";
import CkEditor from "../components/askquestionComponents/CkEditor";
import { useState } from "react";
import Parser from 'html-react-parser';
import { EditorViewBox } from "../style";

function AskQuestionPage () {
    const [isPreView1, setIsPreView1] = useState(false);
    const [preView1Data, setPreView1Data] = useState('');
    const [isPossibleTitle,setIsPossibleTitle] = useState(true);
    const [titleLen,setTitleLen] = useState(0);
    const [isPossibleContent,setIsPossibleContent] = useState(true);
    const [contentLen,setDatalen] = useState(0);

    const togglePreView = (e,idx) => {
        e.target.textContent === 'PreView' ? e.target.textContent = 'Close' : e.target.textContent = 'PreView';
        setIsPreView1(!isPreView1);
        
    }

    const checkCondition = (dataLen,condition,callback) => {
        if(dataLen >= condition) {
            callback(true)
        } else if (dataLen < condition) {
            callback(false);
        }
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
                    }}
                    type="text"
                    placeholder="e.g ls there an R function for finding the index of an element in a vector"
                />
                {!isPossibleTitle
                ?<p className='warning'>{el.warning}</p>
                :undefined}
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
                <CkEditor setEditorData={setPreView1Data} setDatalen={setDatalen}></CkEditor>
                {!isPossibleContent ? <p className='warning'>{el.warning} 현재 {contentLen}글자 </p> : <p className="notice">{contentLen} 글자</p>}
                <button onClick={(e)=>togglePreView(e,idx)}>PreView</button>
                {isPreView1
                ?<EditorViewBox>{Parser(preView1Data)}</EditorViewBox>
                :undefined
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
                <button onClick={()=>{
                    checkCondition(titleLen,15,setIsPossibleTitle);
                    checkCondition(contentLen,100,setIsPossibleContent);
                    }}>Posting
                </button>
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
                            ?<SupportCardBox key={el.side.imgUrl}>
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
                            </SupportCardBox>
                            :undefined}
                        </UserInputBox>
                    )
                })}
            </ContentBox>
        </Container>
    )
}

export default AskQuestionPage;
