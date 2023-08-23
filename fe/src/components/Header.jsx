import picture2 from '../assets/stackover.png';
import picture3 from '../assets/hamicon.png';
import searchIcon from '../assets/conicon.png';
import earth from '../assets/earth.png';
import stack from '../assets/stack-overflow.png';
import { useAsyncError, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect} from 'react';
import {  iconInbox, iconAchievements, iconHelp } from '../components/mypageComponents/icons'
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
  DropdownItem,
  DropdownItem2,
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
  HeaderIconStyle3,
  LogoutButton,
  HeaderElementStyle2,

} from "../style";
import { Avatar } from './mypageComponents/MyPage.styled'


function Header ({setisLogout = () => {}, setKeyWord = ()=>{}}) {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchDropOpen, setSearchDropOpen] = useState(false);
  const navigate = useNavigate();
  const dropRef = useRef(null); // 드롭다운을 위한 ref 정의
  const hamImageRef = useRef(null);
  const [key,setKey] = useState('');

  useEffect(() => {
    const closeDropdown = () => {
      setDropdownOpen(false);
    };

    const handleOutsideClick = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)&& event.target !== hamImageRef.current) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  const goToHome = () => {
    navigate("/");
  };

  const goToQuestion = () => {
    navigate("/question");
  };

  const goToMypage = () => {
    navigate("/mypage")
  }

    const seacchDrop = () => {
    setSearchDropOpen(!isSearchDropOpen);
  }


  const handleHamImageClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handlelogout = () => {
    localStorage.removeItem('usertoken');
    setisLogout(true);
    window.location.reload();
  }

  const handleChangeKeyWord = (e) => {
    setKey(e.target.value);
  }

  const handleSearchKeyWord = () => {
    setKeyWord(key);
  }

  return ( 
    <HeaderStyle >
    <HeaderContainerStyle>
    <HamImage src={picture3} alt="ham" onClick={handleHamImageClick} ref={hamImageRef } />
    {isDropdownOpen && (
  <Dropdown ref={dropRef}>
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
              </DropOl>
            </Dropdown>
                )}
        <LogoImage src={picture2} alt="Stack Overflow" onClick={goToHome}></LogoImage>
        <LogoImage2 src={stack} alt="stackover" onClick={goToHome}/>  
         <Navbar>
      <NavLink1 >Products</NavLink1>
      </Navbar>
      <SearchElementStyle> 
      <SearchIcon
        src={searchIcon}
        alt="Search"
        onClick={handleSearchKeyWord}
      />
      <InputStyle
        type={'text'}
        placeholder='Search'
        maxLength={240}
        onChange={(e)=>handleChangeKeyWord(e)}
      />
     </SearchElementStyle>
     <SearchIcondiv>
     <SearchIcon2 src={searchIcon} alt="Search"  onClick={seacchDrop}/>
     </SearchIcondiv>
     {isSearchDropOpen && ( 
      <InputSearchdiv>
        <SearchIcon3
          src={searchIcon}
          alt="Search"
          onClick={handleSearchKeyWord}
          />
        <InputStyle2
          type={'text'}
          placeholder='Search'
          maxLength={240}
          onChange={(e)=>handleChangeKeyWord(e)}
        />
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
            </HeaderIconStyle2>
            <HeaderIconStyle3>
              <LogoutButton onClick={handlelogout}>Log out</LogoutButton>
            </HeaderIconStyle3>
            </HeaderContainerStyle>    
        </HeaderStyle>
    )
}

export default Header;