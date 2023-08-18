import picture2 from '../assets/stackover.png';
import picture3 from '../assets/hamicon.png';
import searchIcon from '../assets/conicon.png';
import star from '../assets/star.png';
import earth from '../assets/earth.png';
import calendar from '../assets/calendar.png';
import stack from '../assets/stack-overflow.png';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {  iconInbox, iconAchievements, iconHelp, iconStackExchange } from '../components/mypageComponents/icons'
import {
  HeaderStyle,
  HeaderContainerStyle,
  HamImage,
  Dropdown,
  DropOl,
  DropLi,
  DropLi2,
  DropLiQs,
  DropLi3,
  DropLi4,
  Droptext,
  DropdownItem,
  DropdownItem2,
  DropdownItem5,
  DropdownItem6,
  DropButton,
  Goimg,
  Textimg,
  LogoImage,
  LogoImage2,
  NavLink1,
  Navbar,
  SearchElementStyle,
  SearchIcon,
  SearchIcon2,
  InputStyle,
  HeaderIconStyle2,
  HeaderElementStyle,
  SearchIcondiv,
  InputSearchdiv,
  SearchIcon3,
  InputStyle2,
  HeaderElementStyle2,

} from "../style";
import { Avatar } from './mypageComponents/MyPage.styled'


function Header () {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchDropOpen, setSearchDropOpen] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToQuestion = () => {
    navigate("/question");
  };

  const goToMypage = () => {
    navigate("/mypage")
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

    const seacchDrop = () => {
    setSearchDropOpen(!isSearchDropOpen);
  }

  return (
    <HeaderStyle>
    <HeaderContainerStyle>
    <HamImage src={picture3} alt="ham" onClick={toggleDropdown} />
    {isDropdownOpen && (
    <Dropdown>
      <DropOl>
        <DropLi>
              <DropdownItem onClick={goToHome}>Home</DropdownItem>
              </DropLi>
              <DropLi2>
              <DropdownItem2>PUBLIC</DropdownItem2>
              </DropLi2>
              <DropLiQs>
              <DropdownItem onClick={goToQuestion}><Textimg src={earth}/>Questions</DropdownItem>
              </DropLiQs>
              <DropLi3>
              <DropdownItem>Tags</DropdownItem>
              <DropdownItem onClick={goToMypage}>Users</DropdownItem>
              <DropdownItem>Companies</DropdownItem>
              </DropLi3>
              <DropLi4>
              <DropdownItem>COLLECTIVES</DropdownItem>
              <DropLiQs>
              <DropdownItem><Textimg src={star}/>Explore Collectives</DropdownItem>
              </DropLiQs>
              </DropLi4>
              <DropLi4>
              <DropdownItem>TEAMS</DropdownItem>
              <DropLi3>
              <DropdownItem5>Stack Overflow for Teams –</DropdownItem5>
              <DropdownItem6>Start collaborating and sharing organizational knowledge.</DropdownItem6>
              <Goimg src={calendar}/>
              <DropButton>Create a free Team</DropButton>
              <Droptext>Why Teams?</Droptext>
              </DropLi3>
              </DropLi4>
              </DropOl>
            </Dropdown>
                )}
        <LogoImage src={picture2} alt="Stack Overflow" onClick={goToHome}></LogoImage>
        <LogoImage2 src={stack} alt="stackover" onClick={goToHome}/>  
         <Navbar>
      <NavLink1 >Products</NavLink1>
      </Navbar>
      <SearchElementStyle> 
      <SearchIcon src={searchIcon} alt="Search" />
        <InputStyle type={'text'} placeholder='Search' maxLength={240}/>
     </SearchElementStyle>
     <SearchIcondiv>
     <SearchIcon2 src={searchIcon} alt="Search"  onClick={seacchDrop}/>
     </SearchIcondiv>
     {isSearchDropOpen && ( 
      <InputSearchdiv>
        <SearchIcon3 src={searchIcon} alt="Search" />
        <InputStyle2 type={'text'} placeholder='Search' maxLength={240}/>
          </InputSearchdiv>
     )}
             <HeaderIconStyle2>
                <HeaderElementStyle2>
                <a href="mypage">
                <Avatar style={{height:"24px", width:"24px"}} alt="logo"/>
                </a>
                </HeaderElementStyle2>
                <HeaderElementStyle>
                 <div>{iconInbox}</div>
                </HeaderElementStyle>
                <HeaderElementStyle>
                  <div>{iconAchievements}</div>
                </HeaderElementStyle>
                <HeaderElementStyle>
                  <div>{iconHelp}</div>
                </HeaderElementStyle>
                <HeaderElementStyle>
                  <div>{iconStackExchange}</div>
                </HeaderElementStyle>
            </HeaderIconStyle2>
            </HeaderContainerStyle>    
        </HeaderStyle>
    )
}

export default Header;