import {styled,createGlobalStyle} from 'styled-components'

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
    border:1px solid skyblue;
    background-color:skyblue;
    @media screen and (max-width:640px){
        display:none;
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

