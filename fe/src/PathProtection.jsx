import customAxios from "./customaxios";
import { useEffect, useState } from "react";
import base64 from 'base-64'


export const checkAuth = () => {
    const token = localStorage.getItem('usertoken');
    if(token) {
        const payload = token.substring(token.indexOf('.')+1,token.lastIndexOf('.'));    
        try {
            const decode = JSON.parse(base64.decode(payload));
            return decode.id;
        } catch {
            localStorage.removeItem('usertoken');
            return false;
        }
    } else {
        return false;
    }
}

export default function PathProtection ({component, fallback, props}) {
    const [isAllow,setIsAllow] = useState(true);
    const token = localStorage.getItem('usertoken');
    useEffect(()=>{
        if(token) {
            const memberId = checkAuth();
            if(memberId) {
                customAxios.get(`http://ec2-3-39-194-234.ap-northeast-2.compute.amazonaws.com:8080/members/${memberId}`)
                .then((res)=>{
                    setIsAllow(true);
                })
                .catch(()=>{
                    setIsAllow(false);
                })
            } else {
                setIsAllow(false);
            }
        } else {
            setIsAllow(false);
        }
    },[])
    return isAllow ? component : fallback ; 
}
