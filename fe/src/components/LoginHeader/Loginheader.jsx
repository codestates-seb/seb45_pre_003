import React, { useState } from 'react';
import picture2 from '../../assets/stackover.png';
import picture3 from '../../assets/hamicon.png';
import searchIcon from '../../assets/conicon.png';
import stack from '../../assets/stack-overflow.png';
import {
  HeaderStyle,
  HeaderContainerStyle,
  HamImage,
  Dropdown,
  DropdownItem,
  LogoImage,
  LogoImage2,
  NavLink,
  NavLink1,
  NavLink2,
  Navbar,
  SearchElementStyle,
  SearchIcon,
  SearchIcon2,
  InputStyle,
  HeaderIconStyle,
  LoginButton,
  SignupButton,
} from './Loginheaderstyle';


export default function LoginHeader() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

return (
  <HeaderStyle>
      <HeaderContainerStyle>
      <HamImage src={picture3} alt="ham" onClick={toggleDropdown} />
      {isDropdownOpen && (
      <Dropdown>
                <DropdownItem>Home</DropdownItem>
                <DropdownItem>PUBLIC</DropdownItem>
                <DropdownItem>Questions</DropdownItem>
                <DropdownItem>Tags</DropdownItem>
                <DropdownItem>Users</DropdownItem>
                <DropdownItem>Companies</DropdownItem>
                <DropdownItem>COLLECTIVES</DropdownItem>
                <DropdownItem>Explore Collectives</DropdownItem>
                <DropdownItem>TEAMS</DropdownItem>
                <DropdownItem>Stack Overflow for Teams –</DropdownItem>
                <DropdownItem>Start collaborating and sharing</DropdownItem>
                <DropdownItem>organizational knowledge.</DropdownItem>
                <DropdownItem>organizational knowledge.</DropdownItem>
                <DropdownItem>organizational knowledge.</DropdownItem>
              </Dropdown>
                  )}
          <LogoImage src={picture2} alt="Stack Overflow" />
          <LogoImage2 src={stack} alt="stackover" />  
           <Navbar>
        <NavLink >About</NavLink>
        <NavLink1 >Products</NavLink1>
        <NavLink2>For Teams</NavLink2>
        </Navbar>
        <SearchElementStyle> 
        <SearchIcon src={searchIcon} alt="Search" />
          <InputStyle type={'text'} placeholder='Search' maxLength={240}/>
       </SearchElementStyle>
       <SearchIcon2 src={searchIcon} alt="Search" />
       <HeaderIconStyle>
      <LoginButton>Log in</LoginButton>
      <SignupButton>Sign up</SignupButton>
      </HeaderIconStyle>
      </HeaderContainerStyle>    
  </HeaderStyle>
)
}