import CkEditor from "../components/askquestionComponents/CkEditor";
import { Container, ContentBox, QuestionNoticeBox, H5, P, QuestionNotice, UserInputBox, QuestionNoticeTitleBox, QuestionTitleInputBox, SupportCardBox, SupportCard, SupportCardTitle, SupportCardContentBox, SupportCardContent } from "../components/askquestionComponents/AskQuestionPageStyle";

function AskQuestionPage () {
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
            type:"text",
            placeholder:"e.g ls there an R function for finding the index of an element in a vector",
            side:true,
            sideData:{
                title:"Writing a good title",
                imgUrl:"/images/pencil.png",
                text:["Your title should summarize the problem.", "You might find that you have a better idea of your title after writing out the rest of the question."],
            }
        },
        {
            title:"What are the details of your problem?",
            secondTitle:"Introduce the problem and expand on what you put in the title. Minimum 20 characters.",
            type:"editor",
            side:false,
            sideData:[],
        },
        {
            title:"What did you try and what were you expecting?",
            secondTitle:"Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.",
            type:"editor",
            side:false,
            sideData:[],
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
                                    {el.type==='text'?
                                    <>
                                        <input type="text" placeholder="e.g ls there an R function for finding the index of an element in a vector"/>
                                        <button>Next</button>
                                    </>:
                                    <CkEditor>
                                    </CkEditor>}
                                </QuestionTitleInputBox>
                                {el.side?
                                <SupportCardBox key={el.sideData.imgUrl}>
                                    <SupportCard>
                                        <SupportCardTitle>
                                            <H5>{el.sideData.title}</H5>
                                        </SupportCardTitle>
                                        <SupportCardContentBox>
                                            <img src={el.sideData.imgUrl} alt=""/>
                                            <SupportCardContent>
                                                {el.sideData.text.map((text,id)=><P key={id}>{text}</P>)}
                                            </SupportCardContent>
                                        </SupportCardContentBox>
                                    </SupportCard>
                                </SupportCardBox>:
                                undefined}
                            </UserInputBox>
                    )
                })}
            </ContentBox>
        </Container>
    )
}

export default AskQuestionPage;
