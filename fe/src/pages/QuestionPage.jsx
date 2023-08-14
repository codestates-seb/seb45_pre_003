import LeftBar from "../components/LeftBar";
import { HomePageContentStyle, HomePageMainBarStyle, HomePageRightBarStyle, TopBox, Title, AskQuestionBtn, SecondBox, QuestionsNum, FilterBox, FirstFilter, SecondFilter, LastFilter, Ul, Li, LiStatusBox, StatsItem, StatsItemNumber, StatsItemUnit, LiContentBox, LiTitle, LiTag, LiTagAuthorBox, MetaData, PageBox, PageButtonBox, PageButton, PerPageText } from "../components/homepage/HomePage.style";
import { ContainerStyle } from "../style";

const DummyData = [
    {
        title:'this is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test title',
        tag:[],
        author:'stefan',
        imageUrl : '',
        createdAt:'modified 59 secs ago',
        modified:true,
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'asked 9 secs ago',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'asked 59 min ago',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test title',
        tag:[],
        author:'stefan',
        imageUrl : '',
        createdAt:'modified 59 secs ago',
        modified:true,
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'asked 9 secs ago',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'asked 59 min ago',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test title',
        tag:[],
        author:'stefan',
        imageUrl : '',
        createdAt:'modified 59 secs ago',
        modified:true,
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'asked 9 secs ago',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'asked 59 min ago',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test title',
        tag:[],
        author:'stefan',
        imageUrl : '',
        createdAt:'modified 59 secs ago',
        modified:true,
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'asked 9 secs ago',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'asked 59 min ago',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test titlethis is test title',
        tag:[],
        author:'stefan',
        imageUrl : '',
        createdAt:'modified 59 secs ago',
        modified:true,
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'asked 9 secs ago',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'asked 59 min ago',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },
    {
        title:'this is test title',
        tag:['python','image','java'],
        author:'stefan',
        imageUrl : '',
        createdAt:'',
        votes:0,
        answers:0,
        views:2,
    },
    {
        title:'this is second test title',
        tag:['javascript','c++','c#'],
        author:'starball',
        imageUrl : '',
        createdAt:'',
        votes:5,
        answers:2,
        views:3,
    },

]


function QuestionPage () {
    
    return (
        <ContainerStyle>
            <LeftBar/>
            <HomePageContentStyle>
                <HomePageMainBarStyle>
                    <TopBox>
                        <Title>All Questions</Title>
                        <AskQuestionBtn>Ask Question</AskQuestionBtn>
                    </TopBox>
                    <SecondBox>
                        <QuestionsNum
                        style={{
                            visibility:"visible",
                        }}
                        >{`${DummyData.length} questions`}</QuestionsNum>
                        <FilterBox>
                            <FirstFilter>Newest</FirstFilter>
                            <SecondFilter>Active</SecondFilter>
                            <LastFilter>Unanswered</LastFilter>
                        </FilterBox>
                    </SecondBox>
                    <Ul>
                        {DummyData.map((el,idx)=>{
                            return (
                                <Li key={idx}>
                                    <LiStatusBox>
                                        <StatsItem>
                                            <StatsItemNumber>{el.votes}</StatsItemNumber>
                                            <StatsItemUnit>votes</StatsItemUnit>
                                        </StatsItem>
                                        <StatsItem>
                                            <StatsItemNumber>{el.answers}</StatsItemNumber>
                                            <StatsItemUnit>answers</StatsItemUnit>
                                        </StatsItem>
                                        <StatsItem>
                                            <StatsItemNumber>{el.views}</StatsItemNumber>
                                            <StatsItemUnit>views</StatsItemUnit>
                                        </StatsItem>
                                    </LiStatusBox>
                                    <LiContentBox>
                                        <LiTitle>{el.title}</LiTitle>
                                        <LiTagAuthorBox>
                                            {el.tag.map((_,idx)=>{
                                                return (
                                                    <LiTag key={idx}>{el.tag[idx]}</LiTag>
                                                )
                                            })}
                                            <MetaData>
                                                <img src="" alt="img"/>
                                                <a href="/" >{el.author}</a>
                                                <a href="/" style={{color:el.modified ? 'gray' : 'black'}} >{el.createdAt}</a>
                                            </MetaData>
                                        </LiTagAuthorBox>
                                    </LiContentBox>
                                </Li>
                            )
                        })}
                    </Ul>
                    <PageBox>
                        <PageButtonBox>
                            <PageButton>Prev</PageButton>

                            <PageButton>Next</PageButton>
                        </PageButtonBox>
                        <PageButtonBox>
                            <PageButton>15</PageButton>
                            <PageButton>30</PageButton>
                            <PageButton>50</PageButton>
                            <PerPageText>per page</PerPageText>
                        </PageButtonBox>

                    </PageBox>
                </HomePageMainBarStyle>
                <HomePageRightBarStyle href="https://github.com/codestates-seb/seb45_pre_003">
                </HomePageRightBarStyle>
            </HomePageContentStyle>
        </ContainerStyle>
    )
}

export default QuestionPage;