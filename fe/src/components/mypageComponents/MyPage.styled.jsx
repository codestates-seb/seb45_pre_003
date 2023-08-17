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

export const FlexStyle = styled.div`
    display:flex; 
    flex-wrap: wrap; 
`; 


export const Avatar = styled.img.attrs({
    src: `${'/images/모네-수련.jpeg'}`
  })`
  width: 128px;
  height: 128px;
  border-radius: 10px; 
  margin: 8px; 
  position: relative;
  `;

export const UserdetailsStyle = styled.div`
    display:flex; 
    justify-content: flex-start;
    align-items: flex-end; 
    font-size: 13px; 
`; 

export const UserInfomationConnected = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: flex-start; 
`; 



export const MypageFilterStyle = styled.span`
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

export const ProfileLeftBarContainerStyle = styled.div`
   display:flex;
   flex-direction:column; 
   margin: 5px 0; 
   @media screen and (max-width:980px){
        flex-direction:column; 
    }
`; 

export const ProfileLeftBarContainerTitlelStyle = styled.div`
   font-size: 21px; 
   @media screen and (max-width:980px){
        display:none
    }
`

export const ProfileLeftBarContainerSubStyle = styled.div`
   font-size: 13px; 
   @media screen and (max-width:980px){
        display:none
    }
`
export const ProfileLeftBarStyle = styled.div`
    display: flex;
    flex-wrap:wrap; 
    float: left; 
    justify-content: space-between;
    text-align: left; 
    font-size: 13px;
    padding: 20px 15px 20px 15px; 
    vertical-align: middle;
    max-width: 260px;
    max-height: 128px; 
    flex-shrink:0;
    margin-bottom: 10px; 
    border: 1px solid rgb(106, 115, 124);
    border-radius: 5px; 
    position:relative !important;
    @media screen and (max-width:980px){
        display:none;
    }
`; 

export const ProfileBoxStyle = styled.div`
    width: 95px;
    height: 40px;
`

export const ProfileBoxTextStyle = styled.div`
 &.number { 
    font-size : 17px;
    font-weight: 700;
}  
&.item{
    font-size : 13px;
    font-weight: 400;
}
`


export const CommunitySetStyle = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: baseline;
   margin: 5px 0; 
   @media screen and (max-width:980px){
       dispaly: none
    }

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
    padding: 16px; 
    line-height: 17px; 
    vertical-align: baseline; 
    color : rgb(106, 115, 124);
    border: 1px solid  rgb(190, 192, 194); 
    border-radius: 10px; 
    span {
        color: hsl(206,100%,40%);
    }

 &.profileDetails {
    margin-left: 20px; 
   }
`
export const MypageAnswersTitleStyle = styled.div`
    color: #6A737C; 
    font-size: 13px; 
    padding: 2px 15px 0px 0px; 

&.mypageItems_1 {
    color: #0C0D0E;  
}

&.mypageAnwerTitle {
    color: #00457A;
    font-size: 18px;
    padding: 5px 0px 10px 0px; 
}
`
