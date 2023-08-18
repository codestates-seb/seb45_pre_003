import styled from 'styled-components'


export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color:hsl(210,8%,97.5%);
`

export const ContentBox = styled.div`
    max-width:1264px;
    width:100%;
    padding:24px;
    padding-top:0px;
`

export const QuestionNoticeTitleBox = styled.div`
    width:100%;
    height:130px;
    display:flex;
    align-items:center;
    background-image:url('/images/background.png');
    background-size:auto;
    background-repeat:no-repeat;
    background-position:right bottom;
    >h1{
        display:block;
        margin:1em 0 1em 0;
        font-weight:600;
        font-size:2rem;
        line-height:1.3;
    }
    @media screen and (max-width:1050px) {
        background-image:url('');
        height:97px;
    }
`

export const QuestionNoticeBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

export const H5 = styled.h5`
    font-size:15px;
    font-weight:600;
    margin-bottom:8px;
`

export const P = styled.p`
    margin:4px 0 4px 0;
    font-size:13px;
`

export const QuestionNotice = styled.div`
    margin:35px 0 16px 0;
    width:70%;
    padding:24px;
    background-color:hsl(206,100%,95%);
    border:1px solid hsl(206,85%,75%);
    border-radius:6px;
    > h2 {
        font-weight:400;
        margin-bottom:1em;
    }

    > ul {
        list-style-type:disc;
        margin-left:30px;
        font-size:13px;
    }

    @media screen and (max-width:1050px) {
        width:100%;
    }
`


export const UserInputBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    @media screen and (max-width:1050px) {
        flex-direction:column-reverse;
    }
`

export const QuestionTitleInputBox = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    padding:24px;
    background-color:white;
    border:1px solid hsl(210,8%,90%);
    border-radius:4px;
    margin-bottom:16px;

    > input {
        margin:4px 0 4px 0;
        background-image:url();
        background-repeat:no-repeat;
        background-position-x:99%;
        background-position-y:45%;
        font-size:13px;
        padding:5px;
        border-radius:6px;
        border:1px solid hsl(210,8%,70%);
        &:focus {
            outline:none;
            border:1px solid hsl(206,85%,60%);
            box-shadow:0px 0px 1px 5px hsl(206,100%,95%);
        }        
    }

    > button {
        margin:6px 0 6px 0;
        background-color:hsl(206,100%,50%);
        border:0;
        border-radius:6px;
        color:white;
        padding:8px;
        font-size:13px;
        width:9%;
        &:hover{
            cursor: pointer;
            background-color:hsl(209,100%,37%)
        }
    }

    > .warning {
        margin:4px 0 4px 0;
        color:red;
    }

    > .notice {
        padding-left:8px;
    }

    > .App {
        margin:6px 0 6px 0;
    }

    @media screen and (max-width:1050px) {
        width:100%;
    }
`

export const SupportCardBox = styled.div`
    width:30%;
    padding-left:16px;
    margin-bottom:16px;
    @media screen and (max-width:1050px) {
        width:100%;
        padding-left:0px;
    }
`

export const SupportCard = styled.div`
    width:100%;
    background-color:white;
    border:1px solid hsl(210,8%,90%);
`

export const SupportCardTitle = styled.div`
    width:100%;
    padding:12px;
    font-size:15px;
    background-color:#F8F9F9;
    border-bottom:1px solid hsl(210,8%,85%);
`

export const SupportCardContentBox = styled.div`
    width:100%;
    display:flex;
    padding:16px;
    > img {
        width:70px;
        padding:0 10px 0 10px;
        object-fit:contain;
    }
`

export const SupportCardContent = styled.div`
    display:flex;
    flex-direction:column;
`

export const PostingButtonBox = styled.div`
    width:70%;
    padding:24px;
    font-size:1rem;
    background-color:white;
    border:1px solid hsl(210,8%,90%);
    border-radius:3px;
`