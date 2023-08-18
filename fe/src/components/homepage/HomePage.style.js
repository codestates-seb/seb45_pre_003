import styled from 'styled-components'

export const HomePageContentStyle = styled.main`
    max-width:1100px;
    width:calc(100% - 164px);
    padding:24px;
    @media screen and (max-width:640px){
        width: 100%;
    }
`

export const HomePageMainBarStyle = styled.div`
    float:left;
    width:calc(100% - 315px);
    min-height:800px;
    @media screen and (max-width:980px){
        width: 100%;
    }
`

export const HomePageRightBarStyle = styled.a`
    float:right;
    width:300px;
    margin: 0 0 15px;
    height:100%;
    background-image:url("/images/깃허브이미지.png");
    background-size:contain;
    background-repeat:no-repeat;

    &:hover {
        cursor:pointer;
    }

    @media screen and (max-width:980px) {
        display:none;
    }
`

export const TopBox = styled.div`
    display:flex;
    text-align:left;
`

export const Title = styled.h1`
    font-size:1.7rem;
    font-weight:500;
    flex:1 auto !important;
    line-height:1.3;
    margin:0 0 27px;
`

export const AskQuestionBtn = styled.button`
    margin-left:12px;
    border-radius:6px;
    border:0;
    height:40px;
    font-size:13px;
    padding:0.8rem;
    display:inline-block;
    position:relative;
    outline:none;
    text-align:center;
    text-decoration:none;
    white-space:nowrap;
    background-color: #0A95FF;
    color:white;
    &:hover{
        cursor: pointer;
        background-color: hsl(206,100%,40%);
    }
`

export const SecondBox = styled.div`
    display:flex;
    margin-bottom:16px;
    align-items:center;
    justify-content:space-between;
`

export const QuestionsNum = styled.div`
    visibility:hidden;
    font-size:1.1rem;
    font-weight:300;
    margin-right:12px;
    flex:1 auto;
`

export const FilterBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-bottom:1px;
    > button {
        margin-right:-1px;
        border:1px solid hsl(210,8%,75%);
        background-color:white;
        color: #3b4045;
        &:hover{
            background-color:#E3E6E8;
        }
        padding:10px;
    }
`

export const Filter = styled.button`
    &.first{
        border-top-left-radius:6px;
        border-bottom-left-radius:6px;
    }

    &.last{
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
    }

    &.focus{
        background-color:#E3E6E8;
    }

    &:hover{
        cursor: pointer;
    }
` 

export const Ul = styled.ul`
    margin-bottom:30px;
`

export const Li = styled.li`
    display:flex;
    padding:16px;
    position:relative;
    ::before {
        content:'';
        position:absolute;
        bottom:0;
        left:-24px;
        width:calc(100% + 24px);
        border-bottom:1px solid hsl(210,8%,90%);
    }
    @media screen and (max-width:980px) {
        flex-direction:column;
    }

    @media screen and (max-width:640px) {
        ::before {
            position:absolute;
            left:0;
            bottom:0;
            width:100%;
            border-bottom:1px solid hsl(210,8%,90%);
        }
    }

`

export const LiStatusBox = styled.div`
    display:flex;
    align-items:flex-end;
    color:hsl(210,8%,45%);
    flex-direction:column;
    width:84px;
    flex-shrink:0;
    flex-wrap:wrap;
    font-size:13px;
    gap:6px;
    margin-bottom:4px;
    margin-right:16px;
    @media screen and (max-width:980px) {
        flex-direction:row;
        width:100%;
    }    
`

export const StatsItem = styled.div`
    display:flex;
    align-items:center;
    gap:0.3em;
    justify-content:center;
    white-space:nowrap;
`

export const StatsItemNumber = styled.span`
    font-weight:500;
`

export const StatsItemUnit = styled.span`
    font-weight:500;
`

export const LiContentBox = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    max-width:100%;
`

export const LiTitle = styled.h3`
    color:hsl(206,100%,40%);
    font-weight:400;
    hyphens:auto;
    display:block;
    font-size:1.1rem;
    line-height:1.2;
    margin-bottom:0.38rem;
    margin-top:-0.15rem;
    padding-right:24px;
    &:hover{
        cursor: pointer;
    }
`

export const LiTagAuthorBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:4px;
`

export const LiTag = styled.button`
    color:hsl(205,47%,42%);
    background-color:hsl(205,46%,92%);
    border-color:transparent;
    display:inline-block;
    padding:0.4em 0.5em;
    margin:2px 2px 2px 0;
    line-height:1;
    white-space:nowrap;
    text-decoration:none;
    text-align:center;
    border-width:1px;
    border-style:solid;
    border-radius:4px;
`

export const MetaData = styled.div`
    margin-left:auto;
    font-size:12px;
    > a {
        margin:2px;
        text-decoration:none;
        overflow-wrap:break-word;
        &:hover{
            cursor:pointer;
        }
    }

    > a:nth-child(2) {
        color:hsl(206,100%,52%);
    }

    > span {
        margin:2px;
        text-decoration:none;
        overflow-wrap:break-word;
    }
`

export const PageBox = styled.div`
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`

export const PageButtonBox = styled.div`
    display:flex;
    margin:16px 0 16px 0;
`

export const PageButton = styled.div`
    font-size:0.9rem;
    padding:2px 8px 4px 8px;
    margin-left:3px;
    border:1px solid hsl(210,8%,85%);
    border-radius:4px;
    color:hsl(210,8%,25%);
    &:hover {
        background-color:hsl(210,8%,75%);
        cursor: pointer;
    }
    &.focus {
        color:white;
        background-color:#FF8C0A;
    }
    &.dot   {
        border:0;
        &:hover{
            background-color:white;
        }
    }
`

export const PerPageText = styled.span`
    font-size:0.9rem;
    margin-left:10px;
`