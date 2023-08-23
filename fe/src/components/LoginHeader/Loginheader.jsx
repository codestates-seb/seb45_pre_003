import React, { useState,useRef, useEffect} from 'react';
import picture2 from '../../assets/stackover.png';
import picture3 from '../../assets/hamicon.png';
import searchIcon from '../../assets/conicon.png';
import earth from '../../assets/earth.png';
import stack from '../../assets/stack-overflow.png';
import { useNavigate } from "react-router-dom";
import {
  HeaderStyle,HeaderContainerStyle,HamImage,Dropdown,DropOl,DropLi,
  DropLi2,DropLiQs,DropLi3,DropdownItem,DropdownItem2,Textimg,LogoImage,LogoImage2,
  NavLink1,Navbar,InputSearchdiv,SearchElementStyle,SearchIcon,SearchIcon2,
  SearchIcon3,InputStyle,InputStyle2,HeaderIconStyle,LoginButton,SignupButton,SearchIcondiv,
} from './Loginheaderstyle';


function LoginHeader({setKeyWord = ()=>{}}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchDropOpen, setSearchDropOpen] = useState(false);
  const [word,setWord] = useState('');
  const navigate = useNavigate();


  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToQuestion = () => {
    navigate("/question");
  };

  const goToSignup = () => {
    navigate("/signup");
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

  const handleChangeKeyWord = (e) => {
    setWord(e.target.value);
  }

  const handleSearchKeyWord = () => {
    setKeyWord(word);
  }

return (
  <HeaderStyle >
      <HeaderContainerStyle onBlur={() => setDropdownOpen(false)}>  
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
            onChange={e=>handleChangeKeyWord(e)}
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
            onClick={handleSearchKeyWord()}
          />
          <InputStyle2
            type={'text'}
            placeholder='Search'
            maxLength={240}
            onChange={e=>handleChangeKeyWord(e)}
          />
            </InputSearchdiv>
       )}
       <HeaderIconStyle>
      <LoginButton onClick={goToLogin}>Log in</LoginButton>
      <SignupButton onClick={goToSignup}>Sign up</SignupButton>
      </HeaderIconStyle>
      </HeaderContainerStyle>    
  </HeaderStyle>
  
)
}

export default LoginHeader