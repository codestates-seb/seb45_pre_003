import { HeaderStyle } from "../style";
import { Link } from 'react-router-dom';


function Header () {
    return (
        <HeaderStyle>
            <Link to="login">로그인페이지</Link>
            <Link to="signup">회원가입페이지</Link>
        </HeaderStyle>
    )
}

export default Header;