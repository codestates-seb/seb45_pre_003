import customAxios from "./customaxios";
import { useEffect, useState } from "react";

function PathProtection ({component,fallback}) {
    const [isAllow,setIsAllow] = useState(false);
    useEffect(()=>{
        customAxios.get('https://8821-211-58-167-65.ngrok-free.app/questions',{
            headers:{'ngrok-skip-browser-warning': '69420'},
        })
        .then((res)=>{
            if(res.headers.authorization) {
                setIsAllow(true);
            } else {
                setIsAllow(false);
            }
        })
        .catch(()=>{
            setIsAllow(false);
        })
    },[])
    return isAllow ? component : fallback ; 
}

export default PathProtection;