import {styled} from 'styled-components'

export const HeaderStyle = styled.header`
position:fixed !important;
left:0 !important;
top:0 !important;
min-width:auto;
width:100%;
height:56px;
background-color:white;
z-index:5050;
border-bottom: 1px solid gray;
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

export const DropdownItem = styled.a`
display: block;
padding: 8px 12px;
color: #333;
text-decoration: none;

&:hover {
background-color: #f0f0f0;
}
`;

export const LogoImage = styled.img`
  width: 140px;
  height: 30px;
  position: relative;
  left: 10px;
  bottom: 3px;
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
   display:block
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
list-style-type: none;

&:hover {
background-color: #0072E3;
}
`;
