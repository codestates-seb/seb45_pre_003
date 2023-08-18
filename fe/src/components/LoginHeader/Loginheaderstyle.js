import {styled} from 'styled-components'

export const HeaderStyle = styled.header`
position:fixed !important;
left:0 !important;
top:0 !important;
min-width:483px;
width:100%;
height:56px;
background-color:white;
z-index:5050;
border-bottom: 1px solid lightgray;
border-top: 3px solid #FF8C0A;
@media (max-width: 640px) {

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
  margin: 0px 16px;
  cursor: pointer;
  display: none;

  @media (max-width: 640px) {
  display: block;
  }
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
  position: relative;
  display: none;
  padding: 0px 8px;
  @media (max-width: 640px) {
  display: block;
  cursor: pointer;
  right: 40px;
  bottom: 2px;
  margin: 0px 3px;
  }
`
export const NavLink1 = styled.li`

text-decoration: none;
font-size: 13px;
color: #525960;
padding: 6px 12px;
height: 29px;
width: 68.36px;
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
  right: 90px;
}
`;


export const SearchElementStyle = styled.form`
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
`;

export const SearchIcondiv = styled.div`
display: none;

@media screen and (max-width:640px){
  display: grid;
    place-items: center; /* 가운데 정렬 */
    width: 35px;
    height: 38px;
    position: relative;
    left: 25px;
  }

&:hover {
  background-color: #dee2e6;
}
`

export const SearchIcon2 = styled.img`
width: 21px;
height: 21px; 
display: none;
cursor: pointer;

@media screen and (max-width:640px){
   display:block;
   } 
`;

export const SearchIcon3 = styled.img`
position: relative;
width: 21px;
height: 21px; 
left: 5px;
top: 6px;
z-index: 5;
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

export const HeaderIconStyle = styled.ul`
 display:flex; 
 justify-content: flex-end;
 align-items:center; 

 @media screen and (max-width:500px){
  margin-left: 5px;
} 
`

export const LoginButton = styled.li`
background-color: #E1ECF4;
color: #39739D;
border: none;
border-radius: 4px;
width: 60.25px;
height: 33px;
padding: 8px 10.4px;
align-self: center;
cursor: pointer;
font-size: 13px;
list-style-type: none;

&:hover {
background-color: #c3cacf;
}
`;

export const SignupButton = styled.li`
background-color: #0a95ff;
color: #FFFFFF;
font-size: 13px;
width: 68.42px;
height: 33px;
border-radius: 4px;
margin: 0px 0px 0px 4px;
padding: 8px 10.4px;
cursor: pointer;
list-style-type: none;

&:hover {
background-color: #0072E3;
}
`;

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