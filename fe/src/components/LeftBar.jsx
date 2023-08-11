import { useEffect, useState, useRef } from "react";
import { LeftBarStyle } from "../style";


function LeftBar () {
    const LeftBarEl = useRef(null);
    useEffect(()=>{
        const handleScroll = () => {
            const maxScrollY = document.body.scrollHeight - window.innerHeight - 200;
            const currentScrollY = window.scrollY;
            console.log(maxScrollY)
            if (currentScrollY < maxScrollY) {
                LeftBarEl.current.style.top = `${currentScrollY}px`;
            } else {
                LeftBarEl.current.style.top = `${maxScrollY}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <LeftBarStyle
        ref={LeftBarEl}>
        </LeftBarStyle>
    )
}

export default LeftBar;
