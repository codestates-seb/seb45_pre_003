import { Link } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import Loading from "../components/Loading";
import { HomePageContentStyle, HomePageMainBarStyle, HomePageRightBarStyle, TopBox, Title, AskQuestionBtn, SecondBox, QuestionsNum, FilterBox, FirstFilter, SecondFilter, LastFilter, Ul, Li, LiStatusBox, StatsItem, StatsItemNumber, StatsItemUnit, LiContentBox, LiTitle, LiTag, LiTagAuthorBox, MetaData, PageBox, PageButtonBox, PageButton, PerPageText, Filter } from "../components/homepage/HomePage.style";
import { ContainerStyle } from "../style";
import { useEffect, useState } from "react";

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
        "questionId" : 4,
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
    },{
        "questionId" : 5,
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
        "questionId" : 6,
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
          "questionId" : 7,
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
      "size" : 15,
      "totalElements" : 205465460,
      "totalPages" : 10
    }
}

export const whenCorM = (createdAt, modifiedAt) => {
    
    const isCreate = createdAt === modifiedAt;
    const time = isCreate ? createdAt : modifiedAt;
    const nowDate = new Date();
    const newDate = new Date(time);
    const pullDate = (date) => {
        return [date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes()]
    };
    const nowDateInfo = pullDate(nowDate);
    const newDateInfo = pullDate(newDate);
    const dateText = ['years','month','days','hours','minutes']
    for(let i = 0; i < nowDateInfo.length; i++) {
        if(nowDateInfo[i] !== newDateInfo[i]) {
            return `${isCreate ? 'asked' : 'modified'} ${nowDateInfo[i] - newDateInfo[i]} ${dateText[i]} ago`;
        }
        if(i === nowDateInfo.length-1) {
            return `${isCreate ? 'asked' : 'modified'} 1 minutes ago`;
        }
    }
}

export const changeTap = (e,callback) => {
    callback(e.target.textContent.toLowerCase());
}

function QuestionPage () {
    const [isLoading,setIsloading] = useState(true);
    const [apiData,setApiData] = useState({});
    const [page,setPage] = useState(1);
    const [tap,setTap] = useState('newest');
    const [perPage,setPerPage] = useState('15');

    const perPageArr = [15,30,50];
    const filters = ['Newest','Active','Unanswered'];
    const testURL = `http://localhost:8080/questions?searchWord=&tab=newest&page=1&size=15/`

    //pageInfo, tap, perPage중 하나라도 값이 변경된다면 밑에 useEffect를 통해 api요청을 보내고 apidata를 갱신함
    useEffect(()=>{
        setIsloading(true);
        console.log(`http://localhost:8080/questions?searchWord=&tab=${tap}&page=${page}&size=${perPage}/`);
        setTimeout(()=>{
            setApiData({...DummyData});
            setIsloading(false);
        },1000)
    },[page,tap,perPage])

    const pageSizeRendering = (pageInfo) => {

        const changeSize = (size) => {
            setPerPage(size)
        }

        return (
            <>
                {perPageArr.map((item,idx)=>
                    <PageButton
                    key={idx}
                    className={item === pageInfo.size ? 'focus' : ''}
                    onClick={e=>changeSize(e.target.textContent)}
                    >
                        {item}
                    </PageButton>
                )}
            </>
        )
    }

    const pageNationRendering = (pageInfo) => {
        let LEFTNUM = pageInfo.page-3;
        let RIGHTNUM = pageInfo.page+2;
        const renderArr = [];
        if(pageInfo.page-3 <= 1) {   
            RIGHTNUM-=(pageInfo.page-3);
            LEFTNUM = 1;
        } else {
            LEFTNUM = pageInfo.page-2;
        }

        if(RIGHTNUM >= pageInfo.totalPages) {
            LEFTNUM -= ((RIGHTNUM) - pageInfo.totalPages);
            if(LEFTNUM < 1) LEFTNUM = 1;
            RIGHTNUM = pageInfo.totalPages;
        }

        for(let i = LEFTNUM; i <= RIGHTNUM; i++) {
            renderArr.push(i);
        }

        if(renderArr[0] !== 1) {
            renderArr.unshift('...');
            renderArr.unshift(1);
        }
        if (renderArr[renderArr.length-1] !== pageInfo.totalPages) {
            renderArr.push('...');
            renderArr.push(pageInfo.totalPages);
        }
        if(pageInfo.page !== 1) {
            renderArr.unshift('Prev');
        }
        if(pageInfo.page !== pageInfo.totalPages) {
            renderArr.push('Next')
        }
        
        const changePage = (e) => {
            if(e === 'Prev') {
                setPage(pageInfo.page-=1);
            } else if (e === 'Next') {
                setPage(pageInfo.page+=1);
            } else if (!isNaN(Number(e))) {
                setPage(e);
            }
        }

        return (
            <>
                {renderArr.map((item,idx)=><PageButton
                    key={idx}
                    className={pageInfo.page===item?'focus':item==='...'?'dot':''}
                    onClick={e=>changePage(e.target.textContent)}
                >{item}</PageButton>)}
            </>
        )
    }

    return (
        <ContainerStyle>
            <LeftBar/>
            <HomePageContentStyle>
                <HomePageMainBarStyle>
                    {isLoading
                    ?<Loading/>
                    :<><TopBox>
                        <Title>All Questions</Title>
                        <Link to={'/askquestion'}>
                            <AskQuestionBtn>Ask Question</AskQuestionBtn>
                        </Link>
                    </TopBox>
                    <SecondBox>
                        <QuestionsNum
                            style={{visibility:"visible"}}>
                            {`${apiData.pageInfo.totalElements.toLocaleString()} questions`}
                        </QuestionsNum>
                        <FilterBox>
                            {filters.map((el,idx)=>
                            <Filter
                            key={idx}
                            className={`
                                ${idx===0?'first':idx===filters.length-1?'last':''}
                                ${tap===el.toLowerCase()?'focus':''}
                                `}
                            onClick={e=>changeTap(e,setTap)}
                            >{el}
                            </Filter>)}
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
                                                <span >{el.member.name}</span>
                                                <span href="/" style={{color:el.createdAt !== el.modifiedAt ? 'gray' : 'black'}} >{whenCorM(el.createdAt, el.modifiedAt)}</span>
                                            </MetaData>
                                        </LiTagAuthorBox>
                                    </LiContentBox>
                                </Li>
                            )
                        })}
                    </Ul>
                    <PageBox>
                        <PageButtonBox>
                            {pageSizeRendering(apiData.pageInfo)}
                            <PerPageText>per page</PerPageText>
                        </PageButtonBox>
                        <PageButtonBox>
                            {pageNationRendering(apiData.pageInfo)}
                        </PageButtonBox>
                    </PageBox></>
                    }
                </HomePageMainBarStyle>
                <HomePageRightBarStyle href="https://github.com/codestates-seb/seb45_pre_003"/>
            </HomePageContentStyle>
        </ContainerStyle>
    )
}

export default QuestionPage;