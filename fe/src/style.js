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
    background-color: #232629; 

   @media screen and (max-width: 980px){
         background-color: #232629; 
         max-height: 1000px; 
         height: 100%
   }
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

export const HeaderLogoConatinerStyle = styled.div`
     display:flex;
     justify-content: baseline;
     align-items: flex-end;
     width: 166px;
     height: 52px;  
     padding: 0 8px;
     padding-bottom: 12px; 
     @media screen and (max-width:640px){
        width: 100%;
    }
`

export const HeaderTextStyle = styled.span`
    width: 125px;
    @media screen and (min-width:640px){
        width:100%;
    }
 
     @media screen and (max-width:640px){
        display: none ;
    }

`
export const HeaderProductContainerStyle = styled.div`
       width: 79px;
       height: 29px;
       padding: 6px 12px;  
       font-size: 13px;
       vertical-align: middle;
       border-radius : 15px; 
       &:hover {
            background: #d6d6d7;
            color: #6a6a6c; 
        }    

       @media screen and (max-width:640px){
        font-size: 11px; 
        width : 47px;
        height : 15px; 
    }
`

export const SearchElementStyle = styled.form`
    display: flex;
    justify-content : left;
    align-items: center;
    width: 773px;
    height: 32px; 
    flex-shrink:1;
    vertical-align: middle;
    position:relative !important;
    border-radius: 5px; 
    border: 1px solid lightgray; 

    &:hover {
        box-shadow: 0 0 6px 0px skyblue;
    }

    @media screen and (max-width:640px){
       display:none
    } 
`
export const SearchIconStyle = styled.span`
  margin : 10px 0px 10px 10px;
  @media screen and (min-width:640px){
       display:none
    } 
`

export const InputStyle = styled.input`
    display:left; 
    width: 90%; 
    height: 15px;
    padding: 8px 9px; 
    border: none; 
    outline: none; 
`
export const HeaderIconStyle = styled.ul`
   display:flex; 
   width: 218px;
   height: 100%; 
   padding: 0 12px 0 0 ; 
   justify-content: center;
   align-items:center; 
`
export const HeaderElementStyle = styled.li`
     padding: 0 10px;
     margin: 0px;
     list-style: none; 
     width: 52px; 
     cursor: pointer;
     
     &:hover {
        background: #d6d6d7;
        color: #6a6a6c; 
     }    
`

export const FooterContainerStyle = styled.div`
    display: flex; 
    flex-flow: row-wrap;
    max-width: 1240px; 
    width: 100%;
    height: 378px; 
    padding: 32px 12px ;
    font-size: 13px; 
    flex: 1 0 auto;

    @media screen and (max-width: 980px) {
        flex-direction: column;
        padding: 24px; 
        height: auto; 
       }
`
export const FooterLogoContainer = styled.div`
        flex: 0 0 64px;
        margin-bottom:32px; 

    @media screen and (max-width: 980px) {
        margin: -12px 0 0 0 ;
    }
     @media screen and (max-width:640px){
        display: none;
    }
`

export const FooterNavContainer = styled.div`
       display:flex; 
       flex: 2 1 auto;
       flex-wrap: wrap;
       @media screen and (max-width: 980px) {
        flex-direction:column
       }
`

export const FooterCategoryContainerStyle=styled.div`
        flex: 1 0 auto;    
        @media screen and (max-width: 980px) {
        flex-direction:row; 
        padding: 12px 24px;
       }  
`


export const FooterItemContainer = styled.ul`
     display: flex; 
     flex-direction : column;
     column-gap: 12px; 
     row-gap: 8px; 
     
     @media screen and (max-width: 980px){
        display: flex; 
        flex-direction: row; 
        flex: 2 1 auto; 
        flex-wrap: wrap;
        
    }
`

export const FooterTitleStyle = styled.div`
     color: #BABFC4;
     font-weight: bold; 
     padding: 4px 0; 
`

export const FooterItemStyle = styled.li`
     color:  #9199A1;
     list-style: none;
`

export const FooterCopyrightStyle = styled.div`
     display: flex; 
     flex-direction : column;
     justify-content: space-between;
     align-items: left; 
     height : 278px; 
     font-size: 11px;
     color:  #9199A1;

     @media screen and (max-width: 980px){
        justify-content: left;
        align-items: left; 
        height: 37px; 
    }
`

export const FooterCopyrightItems = styled.ul`
     display: flex; 
     flex-direction : row;
     flex-wrap: wrap;
     max-width: 304px; 
     width: 100%; 
     column-gap: 12px; 
     row-gap: 8px; 
     
     @media screen and (max-width: 980px){
        display: flex; 
        flex-direction: row; 
        column-gap: 12px; 
        row-gap: 8px; 
        margin:0;
        padding:0; 
    }
`
export const FooterCopyRightTextStyle = styled.div`
     vertical-align: baseline;
     margin-bottom: 24px;

     @media screen and (max-width: 980px) {
        margin-bottom: 0;
     }
`
