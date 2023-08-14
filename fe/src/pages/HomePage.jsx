import LeftBar from "../components/LeftBar";
import { HomePageContentStyle, HomePageMainBarStyle, HomePageRightBarStyle, TopBox, Title, AskQuestionBtn, SecondBox, QuestionsNum, FilterBox, FirstFilter, SecondFilter, ThirdFilter, ForthFilter, LastFilter, Ul, Li, LiStatusBox, StatsItem, StatsItemNumber, StatsItemUnit, LiContentBox, LiTitle, LiTag, LiTagAuthorBox, MetaData } from "../components/homepage/HomePage.style";
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
]


function HomePage () {
    
    return (
        <ContainerStyle>
            <LeftBar/>
            <HomePageContentStyle>
                <HomePageMainBarStyle>
                    <TopBox>
                        <Title>Top Questions</Title>
                        <AskQuestionBtn>Ask Question</AskQuestionBtn>
                    </TopBox>
                    <SecondBox>
                        <QuestionsNum></QuestionsNum>
                        <FilterBox>
                            <FirstFilter>interesting</FirstFilter>
                            <SecondFilter>Week</SecondFilter>
                            <LastFilter>Month</LastFilter>
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
                </HomePageMainBarStyle>
                
                <HomePageRightBarStyle href="https://github.com/codestates-seb/seb45_pre_003">
                </HomePageRightBarStyle>
            </HomePageContentStyle>
        </ContainerStyle>
    )
}

export default HomePage;