import { Link, Route, Routes, useNavigate } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import Loading from "../components/Loading";
import { HomePageContentStyle, HomePageMainBarStyle, HomePageRightBarStyle, TopBox, Title, AskQuestionBtn, SecondBox, QuestionsNum, FilterBox, Ul, Li, LiStatusBox, StatsItem, StatsItemNumber, StatsItemUnit, LiContentBox, LiTitle, LiTag, LiTagAuthorBox, MetaData, PageBox, PageButtonBox, PageButton, PerPageText, Filter } from "../components/homepage/HomePage.style";
import { ContainerStyle } from "../style";
import { useEffect, useState } from "react";
import QuestionDetail from "../components/homepage/QuestionDetail";
import customAxios from "../customaxios";


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
    const [apiData,setApiData] = useState({
        "pageInfo" : {
            "page" : 1,
            "size" : 0,
            "totalElements" : 0,
            "totalPages" : 1
        }
    });
    const [page,setPage] = useState(1);
    const [tap,setTap] = useState('month');
    const [perPage,setPerPage] = useState(15);
    const perPageArr = [15,30,50];
    const filters = ['Newest','Unanswered'];
    let URL = `http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/questions?searchWord=&tab=${tap}&page=${page}&size=${perPage}`
    useEffect(()=>{
        setIsloading(true);
        window.scrollTo(0, 0);
        customAxios.get(URL)
        .then((res)=>{
            setApiData({...res.data});
            setIsloading(false);
        })
        .catch(err=>{
            setIsloading(false);
            console.log(err);
        })
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
        
        if(pageInfo.totalPages === 0) {
            renderArr.push(1);
        } else {
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
                    <Routes>
                        <Route path="/:id" element={<QuestionDetail/>}/>
                        <Route path="" element={<>
                        {isLoading
                        ?<Loading/>
                        :<>
                            <TopBox>
                                <Title>All Questions</Title>
                                <Link to={'/askquestion'}>
                                    <AskQuestionBtn>Ask Question</AskQuestionBtn>
                                </Link>
                            </TopBox>
                            <SecondBox>
                                <QuestionsNum
                                    style={{visibility:"visible"}}>
                                    {`${apiData.pageInfo?.totalElements.toLocaleString()} questions`}
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
                                {apiData.data?.map((el)=>{
                                return (
                                    <Li key={el.questionId}>
                                        <LiStatusBox>
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
                                            <LiTitle>
                                                <Link to={`${el.questionId}`}>{el.title}</Link>
                                            </LiTitle>
                                            <LiTagAuthorBox>
                                                <MetaData>
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
                    }</>}/>
                    </Routes>
                </HomePageMainBarStyle>
                <HomePageRightBarStyle href="https://github.com/codestates-seb/seb45_pre_003"/>
            </HomePageContentStyle>
        </ContainerStyle>
    )
}

export default QuestionPage;