import { useEffect, useRef } from "react";
import { LeftBarStyle, NavBarLi, NavBarUl, PublicNavBarLi, PublicNavBarUl, StyledLink } from "../style";
import { Link } from "react-router-dom";


function LeftBar () {
    const LeftBarEl = useRef(null);
    useEffect(()=>{
        const handleScroll = () => {
            LeftBarEl.current.style.top = `${window.scrollY}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <LeftBarStyle
        ref={LeftBarEl}>
            <NavBarUl>
                <NavBarLi className="focus">
                    <StyledLink to={'/'}>Home</StyledLink>
                </NavBarLi>
                <NavBarLi>
                    PUBLIC
                </NavBarLi>
                <NavBarLi>
                    <PublicNavBarUl>
                        <PublicNavBarLi>
                            <StyledLink to={'/question'}>
                                <svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path></svg>
                                Questions
                            </StyledLink>
                        </PublicNavBarLi>
                        <PublicNavBarLi>
                            Tags
                        </PublicNavBarLi>
                        <PublicNavBarLi>
                            Users
                        </PublicNavBarLi>
                    </PublicNavBarUl>
                </NavBarLi>
            </NavBarUl>
        </LeftBarStyle>
    )
}

export default LeftBar;
