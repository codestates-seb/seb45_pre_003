import {styled,createGlobalStyle} from 'styled-components'
import { Link } from 'react-router-dom'
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
        vertical-align:baseline;
        font-family:'';
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
    background-color:white;
    z-index:5050;
    border-bottom: 1px solid lightgray;
    border-top: 3px solid #FF8C0A;
`

export const ContainerStyle = styled.div`
    position:relative;
    max-width:1264px;
    width:100%;
    display:flex;
    justify-content:space-between;
    margin: 0 auto;
`

export const LeftBarStyle = styled.div`
    width:164px;
    height:94vh;
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
    padding:8px 0 4px 0px;
    line-height:2;
    > a {
        text-decoration:none;
        color:hsl(210,8%,35%);
        padding:4px;
        display:flex;
        &.focus {
        font-weight:800;
        color:black;
        background-color:#eee;
        border-right:3px solid hsl(27,90%,55%);
        }
        &:hover {
        color:black;
        cursor: pointer;
    }
    }
`

export const ContentStyle = styled.main`
    max-width:1100px;
    width:calc(100% - 164px);
    @media screen and (max-width:640px){
        width: 100%;
    }
`

export const MainBarStyle = styled.div`
    float:left;
    width:calc(100% - 315px);
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
    padding:24px;
    @media screen and (max-width:980px) {
        display:none;
    }
`

export const FooterStyle = styled.footer`
    display:block;
    height:322px;
    background-color: #232629; 
    position:relative;
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
justify-content: space-between;
margin: 0 auto;
align-items: center;
vertical-align: baseline ;
`
export const HeaderWrapper = styled.div`

`

export const HamImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: none;

  @media (max-width: 640px) {
  display: block;
  margin: 0px 16px;
  }
`

export const MyPageLink = styled.a`
  display: none;
`;

export const Dropdown = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 180px;
height: 250.94px;
margin: 0px 0px 8px;
padding: 24px 0px 0px;
background-color: white;
border: 1px solid #ccc;
border-radius: 4px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropOl = styled.ol`
width: 180px;
display: flex;
flex-direction: column;
margin: 0px 0px 12px;
`
export const DropLi = styled.li`
vertical-align: baseline;
font: inherit;
font-size: 13px;
list-style-type: none;
position: relative !important;
`

export const DropLi2 = styled.li`
vertical-align: baseline;
font: inherit;
font-size: 11px;
list-style-type: none;
position: relative !important;
margin: 16px 0px 0px 0px;
position: relative;
`

export const DropLiQs = styled.li`
vertical-align: baseline;
font: inherit;
font-size: 13px;
list-style-type: none;
position: relative !important;
margin: 0px 0px 0px -8px;
padding: 0px 6px 0px 8px;
`

export const DropLi3 = styled.li`
vertical-align: baseline;
font: inherit;
font-size: 13px;
list-style-type: none;
position: relative !important;
margin: 0px 0px 4px 8px;
padding: 0px 6px 0px 8px;
`

export const DropdownItem = styled.a`
display: block;
padding: 8px 12px;
color: #333;
text-decoration: none;
cursor: pointer;
`;


export const Textimg = styled.img`
  position: relative;
  top: 3px;
  width: 15px;
  height: 15px;
  right: 3px;
  background-color: rgba(0,0,0,0);
`

export const DropdownItem2 = styled.a`
display: block;
padding: 8px 12px;
color: #333;
text-decoration: none;
cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 140px;
  height: 30px;
  position: relative;
  left: 10px;
  bottom: 3px;
  cursor: pointer;
  @media (max-width: 640px) {
  display: none;
  }
`;

export const LogoImage2 = styled.img`

  height: 30px;
  position: relative;
  display: none;
  padding: 0px 8px;
  @media (max-width: 640px) {
  display: block;
  cursor: pointer;
  bottom: 2px;
  margin: 0px 5px;
  right: 15px;
  width: 41px;
  }
`
export const NavLink1 = styled.li`

text-decoration: none;
font-size: 13px;
color: #525960;
padding: 6px 12px;
height: 29px;
width: 68.36px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&:hover {
background-color: #e9e9e9;
border-radius: 1000px;
}

@media (max-width: 640px) {
font-size: 11px;
}

`;

export const Navbar = styled.ul`
display: flex;
justify-content: center;
align-items: center;
margin: 0px 16px;
list-style-type: none;

@media (max-width: 640px) {
  position: relative;
  right: 40px;
}
`;


export const SearchElementStyle = styled.div`
display: flex;
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
export const SearchIcon = styled.img`
    position: relative;
    left: 28px; // Adjust the position as needed
    width: 21px;
    height: 21px; 
    left: 5px;
    &:hover{
        cursor: pointer;
    }
`;

export const SearchIcondiv = styled.div`
display: none;

@media screen and (max-width:640px){
  display: grid;
    place-items: center; /* 가운데 정렬 */
    width: 35px;
    height: 45px;
    position: relative;
    left: 7px;
    bottom: 1px;
  }

&:hover {
  background-color: #dee2e6;
}
`

export const SearchIcon2 = styled.img`
width: 21px;
height: 21px; 
display: none;
&:hover{
    cursor: pointer
}

@media screen and (max-width:640px){
   display:block;
   position: relative;
   right: 4px;
   } 
`;

export const SearchIcon3 = styled.img`
    position: relative;
    width: 21px;
    height: 21px; 
    left: 5px;
    top: 6px;
    z-index: 5;
    &:hover{
            cursor: pointer;
    }
`;


export const InputStyle = styled.input`
display:left; 
width: 90%; 
height: 15px;
padding: 8px 9px; 
border: none; 
outline: none; 


`

export const InputSearchdiv =styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
height: 48.59px;
padding: 8px 12px;
background-color: #E3E6E8;
display: none;

@media screen and (max-width:640px){
   display:block
} 
`

export const InputStyle2 = styled.input`
width: 100%; 
height: 32.59px;
padding: 8px 28px; 
border: none; 
outline: none; 
display: none;
border-radius: 5px;
position: relative;
bottom: 25px;
box-shadow: 0 0 6px 0px skyblue;

@media screen and (max-width:640px){
   display:block
} 

`
export const HeaderIconStyle2 = styled.ul`
   display:flex; 
   width: 218px;
   height: 100%; 
   padding: 0 30px 0 0 ; 
   justify-content: center;
   align-items:center; 
`

export const HeaderIconStyle3 = styled.ul`
 display:flex; 
 justify-content: flex-end;
 align-items:center; 
`

export const LogoutButton = styled.li`
background-color: orangered;
color: #ffffff;
border: none;
border-radius: 4px;
width: 65.25px;
height: 33px;
padding: 8px 8.4px;
align-self: center;
position: relative;
right: 20px;
cursor: pointer;
font-size: 13px;
list-style-type: none;

@media screen and (max-width:640px){
        right: 30px;
    }

&:hover {
background-color: tomato;
}
`;


export const HeaderElementStyle = styled.li`
     padding: 0 10px;
     margin: 0px;
     list-style: none; 
     width: 60px; 
     height: 45px;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     
     &:hover {
        background: #d6d6d7;
        color: #6a6a6c;
        height:100%;
     }    
`

export const HeaderElementStyle2 = styled.li`
     padding: 0 8px;
     list-style: none; 
     margin-left: 5px;
     width: 45px; 
     height: 45px;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     
     &:hover {
        background: #d6d6d7;
        color: #6a6a6c; 
        height:100%;
     }    
`

export const FooterContainerStyle = styled.div`
    position:relative;
    margin: 0 auto; 
    display: flex; 
    max-width: 1240px; 
    width: 100%;
    height: 278px; 
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
     width: 313px; 
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

export const EditorViewBox = styled.div`
    width:100%;
    padding:9.6px;
    border:1px solid lightgray;
    border-radius:2px;
    font-size:20px;
    overflow-x:scroll;

    > * table {
        border-spacing:0;
        border-collapse:collapse;
        margin:8px 0 8px 0;
    }

    > * th {
        background-color: lightgray;
        border:1px solid gray;
        padding:6px;
    }

    > * td {
        padding:10px;
        border:1px solid gray;
    }
    
    > * li {
        margin-left:21px;
    }

    > blockquote {
        border-left:5px solid gray;
        padding-left:20px;
    }

    > * blockquote {
        border-left:5px solid gray;
        padding-left:20px;
    }

    > pre {
        padding:10px;
        background-color:#eee;
        border:1px solid lightgray;
        border-radius:3px;
    }
`