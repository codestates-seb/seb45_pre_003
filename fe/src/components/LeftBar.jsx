import { useEffect, useRef } from "react";
import { LeftBarStyle, NavBarLi, NavBarUl } from "../style";
import { Link } from "react-router-dom";


function LeftBar () {
    const LeftBarEl = useRef(null);

    const pathToLocate = {
        question:'Questions',
        "":"Home",
        mypage:"Users"
    }
    const pathArr = document.location.pathname.split('/')[1];

    const where = pathToLocate[pathArr];

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY+window.innerHeight <= document.body.clientHeight && LeftBarEl.current!==null) {
                LeftBarEl.current.style.top = `${window.scrollY}px`;
            }
        });
    }, []);

    
    const navData = [
        {
            text:'Home',
            icon:true,
            link:'/',
            child:[],
        },
        {
            text:'PUBLIC',
            icon:true,
            link:'',
            child:[
                {
                    text:"Questions",
                    icon:<svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"/></svg>,
                    link:'/question',
                    child:[]
                },
                {
                    text:"Tags",
                    icon:false,
                    link:'',
                    child:[]
                },
                {
                    text:"Users",
                    icon:false,
                    link:'/mypage',
                    child:[]
                }
            ],
        },
    ]

    function returnNav (data) {
        return (
            <NavBarUl>
                {data.map((li1,idx)=>{
                    return (
                        <NavBarLi key={idx}>
                            <Link 
                            to={li1.link}
                            className={li1.text === where ? 'focus' : ''}
                            style={{
                                paddingLeft : li1.icon===false ? '23px' : li1.icon!==true ? '0px' : undefined,
                                display : (li1.icon!==false&&li1.icon!==true)||li1.text==='Home' ? 'flex' : undefined,
                                alignItems : li1.icon!==false&&li1.icon!==true ? 'center' : undefined,
                                gap : li1.icon!==false&&li1.icon!==true ? '4px' : undefined,
                            }}
                            >
                                {li1.icon}
                                {li1.text}
                            </Link>
                            {li1.child.length !== 0 ? returnNav(li1.child) : undefined}
                        </NavBarLi>
                    )
                })}
            </NavBarUl>
        )
    }

    return (
        <LeftBarStyle
            ref={LeftBarEl}>
            {returnNav(navData)}
        </LeftBarStyle>
    )
}

export default LeftBar;
