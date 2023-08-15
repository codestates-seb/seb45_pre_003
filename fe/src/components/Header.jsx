import { HeaderStyle, HeaderContainerStyle ,HeaderLogoConatinerStyle, HeaderTextStyle,
         HeaderProductContainerStyle,SearchElementStyle,SearchIconStyle, InputStyle,
         HeaderIconStyle, HeaderElementStyle } from "../style";
import { iconSearch, iconInbox, iconAchievements, iconHelp, iconStackExchange } from '../components/mypageComponents/icons'
import { Avatar } from './mypageComponents/MyPage.styled'
function Header () {
  
  return (
        <HeaderStyle>
            <HeaderContainerStyle>
                <HeaderLogoConatinerStyle>
                 <img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196" 
                 alt="logo"/>
                 <HeaderTextStyle >Stack <strong>Overflow</strong></HeaderTextStyle>
                 </HeaderLogoConatinerStyle>
              <HeaderProductContainerStyle >
                Products</HeaderProductContainerStyle>
              <SearchElementStyle> 
                <span style={{margin:"10px 0px 10px 10px"}}>{iconSearch}</span>
                <InputStyle type={'text'} placeholder='Search' maxLength={240}/>
             </SearchElementStyle>
             <SearchIconStyle >{iconSearch}</SearchIconStyle>
             <HeaderIconStyle>
                <HeaderElementStyle>
                <a href="mypage">
                <Avatar style={{height:"24px", width:"24px"}} alt="logo"/>
                </a>
                </HeaderElementStyle>
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
            </HeaderIconStyle>
            </HeaderContainerStyle>    
        </HeaderStyle>
    )
}

export default Header;