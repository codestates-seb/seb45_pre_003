import { HeaderStyle, HeaderContainerStyle , HeaderLogoStyle, HeaderElementStyle,SearchElementStyle } from "../style";
import { Link } from 'react-router-dom';

function Header () {
    return (
        <HeaderStyle>
            <HeaderContainerStyle>
                <HeaderLogoStyle>
                 <img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196" 
                 style={{height:"30px", width:"30px"}}alt="logo"/>
                 <span>Stack <strong>Overflow</strong></span>
                 </HeaderLogoStyle>
            <HeaderElementStyle><span style={{height:"30px", width:"78px", borderRadius: "10px"}}>
                Products</span></HeaderElementStyle>
            <SearchElementStyle type={'text'} placeholder='Search'/>
            <HeaderElementStyle>
            <Link to="login">로그인</Link>
            </HeaderElementStyle>
            <HeaderElementStyle>
            <Link to="signup">회원가입</Link>
            </HeaderElementStyle>
            <HeaderElementStyle>
            <Link to="mypage">마이페이지</Link>
            </HeaderElementStyle>
            </HeaderContainerStyle>
        </HeaderStyle>
    )
}

export default Header;