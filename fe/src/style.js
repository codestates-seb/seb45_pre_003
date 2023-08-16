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

export const HeaderStyle = styled.header`
    position:fixed !important;
    left:0 !important;
    top:0 !important;
    min-width:auto;
    width:100%;
    height:56px;
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
`

export const LeftBarStyle = styled.div`
    width:164px;
    height:90vh;
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
align-items: middle; 
margin: 0 auto;
align-items: center;   
`
export const HamImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 16px;
  cursor: pointer;
`

export const MyPageLink = styled.a`
  display: none;
`;

export const Dropdown = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 240px;
height: 590.94px;
margin: 0px 0px 8px;
padding: 24px 0px 0px;
background-color: white;
border: 1px solid #ccc;
border-radius: 4px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropOl = styled.ol`
width: 240px;
height: 554.94px;
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
export const DropLi4 = styled.li`
vertical-align: baseline;
font: inherit;
font-size: 11px;
list-style-type: none;
position: relative !important;
margin: 16px 0px 0px 0px;
position: relative;
bottom: 7px;
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

export const DropdownItem5= styled.strong`
display: block;
padding: 8px 12px;
color: #333;
font-size: 12px;
text-decoration: none;
cursor: pointer;
`;

export const DropdownItem6= styled.p`
display: block;
padding: 0px 12px;
color: #333;
font-size: 11px;
width: 180px;
position: relative;
bottom: 5px;

`;

export const Textimg = styled.img`
  position: relative;
  top: 3px;
  width: 15px;
  height: 15px;
  right: 3px;
  background-color: rgba(0,0,0,0);
`
export const Goimg = styled.img`
display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 90px;
  position: relative;
  right: 5px;
`

export const DropdownItem2 = styled.a`
display: block;
padding: 8px 12px;
color: #333;
text-decoration: none;
cursor: pointer;
`;

export const DropdownItem3 = styled.a`
display: block;
padding: 8px 12px;
color: #333;
text-decoration: none;
cursor: pointer;
`;

export const DropButton = styled.button`
background-color: #F48225;
color: #ffffff;
border: none;
border-radius: 4px;
position: relative;
left: 5px;
width: 176px;
height: 27.88px;
cursor: pointer;
font-size: 11px;
display: flex;
align-items: center;
justify-content: center;
`

export const Droptext = styled.p`
cursor: pointer;
width: 176px;
height: 27.88px;
font-size: 11px;
padding: 6.6px;
background-color: transparent;
align-items: center;
justify-content: center;
display: flex;
position: relative;
left: 5px;

&:hover{
  background-color: #dcdcdc;
  border-radius: 5px;
}
`

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
  margin-left: 20px; 
  position: relative;
  display: none;
  @media (max-width: 640px) {
  display: block;
  width: 25px;
  margin-right: 5px;
  cursor: pointer;
  }
`

export const NavLink = styled.li`
text-decoration: none;
margin-left: 15px;
font-size: 12px;
color: #525960;
padding: 6px 12px;
height: 29px;
width: 59.42px;
cursor: pointer;

&:hover {
border: 1px solid gray; // Add border when hovered
background-color: #e9e9e9;
border-radius: 1000px;
}
@media (max-width: 812px) {
display: none;
}

`;
export const NavLink1 = styled.li`

text-decoration: none;
font-size: 12px;
color: #525960;
padding: 6px 12px;
height: 29px;
width: 74.36px;
cursor: pointer;

&:hover {
border: 1px solid gray; // Add border when hovered
background-color: #e9e9e9;
border-radius: 1000px;
}

@media (max-width: 640px) {
font-size: 11px;
position: relative;
right: 70px;
}

`;
export const NavLink2 = styled.li`
text-decoration: none;
font-size: 12px;
color: #525960;
padding: 6px 12px;
height: 29px;
width: 81.72px;
cursor: pointer;

&:hover {
border: 1px solid gray; // Add border when hovered
background-color: #e9e9e9;
border-radius: 1000px;
}

@media (max-width: 812px) {
display: none;
}

`;

export const Navbar = styled.ul`
margin-left: auto;
display: flex;
flex-direction: row;
list-style-type: none;
`;


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
export const SearchIcon = styled.img`
position: relative;
left: 28px; // Adjust the position as needed
width: 21px;
height: 21px; 
left: 5px;
`;

export const SearchIcon2 = styled.img`
position: relative;
left: 28px; // Adjust the position as needed
width: 21px;
height: 21px; 
display: none;

@media screen and (max-width:640px){
   display:block;
   position: relative;
   left: 8px;
   bottom: 2px;
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
export const HeaderIconStyle = styled.ul`
 display:flex; 
 width: 218px;
 height: 100%; 
 padding: 0 12px 0 0 ; 
 justify-content: center;
 align-items:center; 
`

export const HeaderIconStyle2 = styled.ul`
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