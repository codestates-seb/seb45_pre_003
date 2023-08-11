import {styled,createGlobalStyle} from 'styled-components'
import { Link } from 'react-router-dom'
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
        vertical-align:baseline;
    }

    body {
        padding: 56px 0 0
    }
`

export const StyledLink = styled(Link)`
    text-decoration:none;
    font-size:13px;
    color:hsl(210,8%,35%);
    display:flex;
    align-items:center;
    > svg {
        margin-right:4px;
        color:hsl(210,8%,35%);
    }
    &.focus {
        margin:0px;
        padding:4px;
        font-weight:700;
        color:black;
        background-color:#eee;
        border-right:3px solid hsl(27,90%,55%);
    }
`

export const HeaderStyle = styled.header`
    position:fixed !important;
    left:0 !important;
    top:0 !important;
    min-width:auto;
    width:100%;
    height:56px;
    border:1px solid black;
    background-color:white;
    z-index:5050;
`

export const ContainerStyle = styled.div`
    position:relative;
    max-width:1264px;
    width:100%;
    display:flex;
    justify-content:space-between;
    margin: 0 auto;
    border:1px solid red;
`

export const LeftBarStyle = styled.div`
    width:164px;
    flex-shrink:0;
    position:relative !important;
    border-right:1px solid hsl(210,8%,75%);
    padding-top:8px;
    @media screen and (max-width:640px){
        display:none;
    }
`

export const NavBarUl = styled.ul`
    list-style:none;
`

export const NavBarLi = styled.li`
    font-size:13px;
    color:hsl(210,8%,35%);
    margin:16px 0 4px 8px;
    line-height:2;
    &.focus {
        margin:0px;
        padding:8px;
        font-weight:800;
        color:black;
        background-color:#eee;
        border-right:3px solid hsl(27,90%,55%);
    }

    &:hover {
        color:black;
        cursor: pointer;
    }

    &:nth-child(3) {
        margin:0;
    }
`

export const PublicNavBarUl = styled.ul`
    list-style:none;
`

export const PublicNavBarLi = styled.li`
    display:flex;
    align-items:center;
    font-size:13px;
    color:hsl(210,8%,35%);
    margin:4px 0 4px 8px;
    line-height:2;
    

    &:hover {
        color:black;
        cursor: pointer;
    }

    > svg {
        margin-right:4px;
        color:hsl(210,8%,35%);
    }

    &:nth-child(2) {
        padding-left:22px;
    }
    &:nth-child(3) {
        padding-left:22px;
    }

`

export const ContentStyle = styled.main`
    max-width:1100px;
    width:calc(100% - 164px);
    border:1px solid blue;
    @media screen and (max-width:640px){
        width: 100%;
    }
`

export const MainBarStyle = styled.div`
    float:left;
    width:calc(100% - 315px);
    border:1px solid yellowgreen;
    height:800px;
    @media screen and (max-width:980px){
        width: 100%;
    }
`

export const RightBarStyle = styled.div`
    float:right;
    width:300px;
    margin: 0 0 15px;
    height:100%;
    border:1px solid gray;
    @media screen and (max-width:980px) {
        display:none;
    }
`
export const FooterStyle = styled.footer`
    display:block;
    height:322px;
    border:1px solid purple;
    background-color:white;
`

export const HeaderContainerStyle =styled.div`
    position:relative;
    max-width: 1264px;
    height: 100%;
    display: flex;
    align-items: middle; 
    margin: 0 auto;
    align-items: center;     
`

export const HeaderLogoStyle = styled.div`
     display:flex;
     justify-content: baseline;
     align-items: flex-end;
     width: 166px;
     height: 52px;  
     font-size: 20px;
     padding-bottom: 12px; 
     @media screen and (max-width:640px){
        width: 100%;
    }
`

export const HeaderElementStyle = styled.div`
     padding: 5px;
     margin: 5px;
     vertical-align: middle;

     &:hover {
       background: #d6d6d7;
       color: #6a6a6c; 
     }    
`

export const SearchElementStyle = styled.input`
    width: 773px;
    height: 32px; 
    flex-shrink:1;
    position:relative !important;
    border-radius: 5px; 
    border: 1px solid lightgray; 
    @media screen and (max-width:640px){
        width: 100%
    }   
`

