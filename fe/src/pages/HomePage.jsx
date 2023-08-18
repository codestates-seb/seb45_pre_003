import { Link } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import { HomePageContentStyle, HomePageMainBarStyle, HomePageRightBarStyle, TopBox, Title, AskQuestionBtn, SecondBox, QuestionsNum, FilterBox, Ul, Li, LiStatusBox, StatsItem, StatsItemNumber, StatsItemUnit, LiContentBox, LiTitle, LiTag, LiTagAuthorBox, MetaData, Filter } from "../components/homepage/HomePage.style";
import { ContainerStyle } from "../style";
import { useEffect, useState } from "react";
import { whenCorM, changeTap } from "./QuestionPage";
import Loading from "../components/Loading";

const DummyData = {
    "data" : [ {
      "questionId" : 2,
      "title" : "1踰� 吏덈Ц �젣紐�",
      "member" : {
        "id" : 1,
        "name" : "�솉湲몃룞",
        "email" : "hgd@gmail.com"
      },
      "answerCount" : 0,
      "visitCount" : 17,
      "answered" : false,
      "createdAt" : "2023-08-18T08:34:16.3319161",
      "modifiedAt" : "2023-08-18T08:34:16.3319161"
    }, {
      "questionId" : 1,
      "title" : "2踰� 吏덈Ц �젣紐�",
      "member" : {
        "id" : 2,
        "name" : "�엫爰쎌젙",
        "email" : "lgj@gmail.com"
      },
      "answerCount" : 0,
      "visitCount" : 10,
      "answered" : false,
      "createdAt" : "2023-08-11T08:34:16.3319161",
      "modifiedAt" : "2023-08-18T08:34:16.3319161"
    }, {
        "questionId" : 3,
        "title" : "21231ㅌ[스트",
        "member" : {
          "id" : 2,
          "name" : "�엫爰쎌젙",
          "email" : "lgj@gmail.com"
        },
        "answerCount" : 0,
        "visitCount" : 10,
        "answered" : false,
        "createdAt" : "2023-08-11T08:34:16.3319161",
        "modifiedAt" : "2023-06-18T08:34:16.3319161"
    },],
    "pageInfo" : {
      "page" : 1,
      "size" : 30,
      "totalElements" : 2,
      "totalPages" : 10
    }
}



function HomePage () {
    const filters = ['Week','Month','Interesting'];
    const [isLoading,setIsloading] = useState(true);
    const [apiData,setApiData] = useState({});
    const [tap,setTap] = useState('week');
    let testURL = `http://localhost:8080/questions?searchWord=&tab=${tap}&page=1&size=30/`

    //tap이 변경될때 새로운 testURL로 api요청을 보냄
    useEffect(()=>{
        setIsloading(true);
        console.log(testURL);
        setTimeout(()=>{
            setIsloading(false);
            setApiData({...DummyData});
        },1000)
        console.log(testURL);
    },[tap])
    
    return (
        <ContainerStyle>
            <LeftBar/>
            <HomePageContentStyle>
                <HomePageMainBarStyle>
                    {isLoading
                    ?<Loading/>
                    :<><TopBox>
                        <Title>Top Questions</Title>
                        <Link to={'/askquestion'}>
                            <AskQuestionBtn>Ask Question</AskQuestionBtn>
                        </Link>
                    </TopBox>
                    <SecondBox>
                        <QuestionsNum></QuestionsNum>
                        <FilterBox>
                            {filters.map((el,idx)=>
                            <Filter
                            key={idx}
                            className={`
                                ${idx===0?'first':idx===filters.length-1?'last':undefined}
                                ${tap===el.toLowerCase()?'focus':''}
                                `}
                            onClick={e=>changeTap(e,setTap)}
                            >{el}</Filter>)}
                        </FilterBox>
                    </SecondBox>
                    <Ul>
                        {apiData.data.map((el)=>{
                            return (
                                <Li key={el.questionId}>
                                    <LiStatusBox>
                                        {/* <StatsItem>
                                            <StatsItemNumber>{el.votes}</StatsItemNumber>
                                            <StatsItemUnit>votes</StatsItemUnit>
                                        </StatsItem> */}
                                        <StatsItem>
                                            <StatsItemNumber>{el.answerCount}</StatsItemNumber>
                                            <StatsItemUnit>answers</StatsItemUnit>
                                        </StatsItem>
                                        <StatsItem>
                                            <StatsItemNumber>{el.visitCount}</StatsItemNumber>
                                            <StatsItemUnit>views</StatsItemUnit>
                                        </StatsItem>
                                    </LiStatusBox>
                                    <LiContentBox>
                                        <LiTitle>{el.title}</LiTitle>
                                        <LiTagAuthorBox>
                                            {/* {el.tag.map((_,idx)=>{
                                                return (
                                                    <LiTag key={idx}>{el.tag[idx]}</LiTag>
                                                )
                                            })} */}
                                            <MetaData>
                                                {/* <img src="" alt="img"/> */}
                                                <span href="/" >{el.member.name}</span>
                                                <span href="/" style={{color:el.createdAt !== el.modifiedAt ? 'gray' : 'black'}} >{whenCorM(el.createdAt, el.modifiedAt)}</span>
                                            </MetaData>
                                        </LiTagAuthorBox>
                                    </LiContentBox>
                                </Li>
                            )
                        })}
                    </Ul>
                    </>}
                </HomePageMainBarStyle>
                
                <HomePageRightBarStyle href="https://github.com/codestates-seb/seb45_pre_003"/>

            </HomePageContentStyle>
        </ContainerStyle>
    )
}

export default HomePage;