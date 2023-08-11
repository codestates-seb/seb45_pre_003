import {styled} from 'styled-components'

export const MyPageContainerStyle = styled.div`
    position:relative;
    max-width:1264px;
    width:100%;
    display:flex;
    justify-content:space-between;
    margin: 0 auto;
`

export const MypageContentStyle = styled.div`
    float:left;
    width: calc(100% - 164px); 
    height:800px;
    @media screen and (max-width:980px){
    max-width: 1100px; 
    }
    padding: 24px;
`

export const UserInformation = styled.div`
    display:flex; 

`; 


export const Avatar = styled.img.attrs({
    src: `${'/images/모네-수련.jpeg'}`
  })`
  width: 128px;
  height: 128px;
  border-radius: 10px; 
  margin: 8px; 
  `;

export const UserInfomationConnected = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: flex-start; 
`; 


export const Userdetails = styled.div`
    display:flex; 
    justify-content: flex-start;
    align-items: flex-end; 
    font-size: 13px; 
`; 

export const MypageFilter = styled.span`
    padding: 6px 12px;
    margin: 5px;
    font-size: 13px;
    color: ${props => props.active ? 'white' : 'gray'};
     background: ${props => props.active ? '#f48225' : 'none'};
     border: none;
     border-radius: 20px;
     cursor: pointer;
     &:hover {
       background: #d6d6d7;
       color: white;
     }
`;


export const MyPageCardStyle = styled.div`
  display:flex ; 
  justify-content: flex-start;
  position :relative;
  width: 100%;
  text-align: left; 
  vertical-align:baseline ; 
    
`; 

export const MypageNavStyle = styled.div`
    float: left; 
    width:164px;
    flex-shrink:0;
    position:relative !important;
    @media screen and (max-width:980px){
        display:none;
    }
`; 

export const MypageNavitemStyle = styled.li`
    list-style: None;
    font-size: 13px; 
    height: 29px; 
    width: 126px; 
    color: #6a6a6c; 
    padding: 6px 48px 12px 6px; 
    cursor: pointer;
    border-radius: 15px; 

    &:hover {
       background: #d6d6d7;
       color: #6a6a6c; 
     }
    

`
export const ActivityCardContainer = styled.div`
    float:left;
    width:calc(100% - 164px);
    @media screen and (max-width:980px){
    width: 100%;
    }
`

export const ActivityStyleCardTitleStyle = styled.div`
    font-size: 21px; 
    vertical-align: baseline; 

 &.profileDetails {
    margin-left: 20px; 
   }
`
export const ActivityCardTextStyle = styled.div`
    font-size: 13px; 
    padding: 48px; 
    line-height: 17px; 
    vertical-align: baseline; 
    color : rgb(106, 115, 124);
    border: 1px solid rgb(106, 115, 124);
    border-radius: 10px; 
    span {
        color: blue; 
    }

 &.profileDetails {
    margin-left: 20px; 
   }
`

export const ProfileLeftBarContainerStyle = styled.div`
   display:flex;
   flex-direction:column; 
   font-size: 21px; 
   margin: 5px 0; 
`; 

export const CommunitySetStyle = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: baseline;
   margin: 5px 0; 
`; 

export const ProfileLeftBarStyle = styled.div`
    display: flex;
    flex-wrap:wrap; 
    justify-content: space-between;
    float: left; 
    text-align: left; 
    width:176px;
    flex-shrink:0;
    margin-bottom: 10px; 
    color: 1px solid rgb(106, 115, 124);
    border: 1px solid rgb(106, 115, 124);
    border-radius: 5px; 
    position:relative !important;
    @media screen and (max-width:980px){
        display:none;
    }
`; 

