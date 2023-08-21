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
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: gray; 

  &:hover {
    background: #dad9d9;
    color: white;
  }
`;

export const MyPageCardStyle = styled.div`
  display:flex ; 
  justify-content: flex-start;
  position :relative;
  width: 100%;
  text-align: left; 
  vertical-align: baseline ;  
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
   color: #232629 ; 
   margin-bottom: 7px; 
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
    border: 1px solid rgb(204, 205, 206);
    border-radius: 5px; 
    position:relative !important;
    @media screen and (max-width:980px){
        display:none;
    }
`; 

export const CommunitySetItemStyle= styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left; 
    font-size: 13px;
    vertical-align: baseline;
    padding: 15px 15px 15px 15px; 
    width: 260px;
    height: 55px; 
    border: 1px solid rgb(204, 205, 206);
    border-radius: 5px; 
    position:relative !important;
    @media screen and (max-width:980px){
        display:none;
    }
`
    
export const ProfileBoxStyle = styled.div`
    width: 95px;
    height: 40px;
`

export const ProfileBoxTextStyle = styled.div`
 
 &.number { 
    font-size : 17px;
    font-weight: 700;
    color: #0C0D0E; 
}  
&.item{
    font-size : 13px;
    font-weight: 400;
    color: #6A737C; 
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

export const ProfileCardContainer = styled.div`
    display:flex;
    flex-direction: column;
    float:left;
    width: 100%;
    margin-top: 3px; 
    margin-left: 20px; 
`

export const EditProfileStyle=styled.div`
    display:flex;
    flex-direction: column;
`
export const EditProfileTitle = styled.div`
    color: #0C0D0E; 
    margin: 0 0 0 15px; 

&.profileTitle {
    font-size: 27px;
    padding-bottom: 10px; 
    margin: 5px 0 10px 15px; 
    border-bottom: 1px solid  rgb(190, 192, 194);
    font-weight: 600; 
}

 &.profileTitlePublic{
    font-size: 21px;
    font-weight: 500; 
    padding: 20px 0 13x 0; 
 }

 &.profileTitleImage{
    padding: 10px 0 0 15px; 
    font-size: 15px;
    font-weight: 500; 
 }
`
export const EditProfileCardContainer= styled.div`
    border:  1px solid  rgb(190, 192, 194);
    margin: 10px 0 0 15px; 
    border-radius: 5px; 
`
export const ProfileInputStyle = styled.input`
display:left; 
width: 90%; 
height: 15px;
margin: 5px 0 0 10px; 
border: none; 
outline: none; 
`

export const ProfileElementStyle = styled.form`
width: 421px;
height: 33px; 
flex-shrink:1;
margin: 5px 0 0 30px; 
vertical-align: middle;
position:relative !important;
border-radius: 5px; 
border: 1px solid lightgray; 

&:hover {
    box-shadow: 0 0 6px 0px skyblue;
}
`

export const CustomEditorStyle = styled.div`
    margin: 5px 30px 5px 30px; 
    
    & > * .ck-content {
        min-height:100px;
    }
`

export const ButtonStyle = styled.button`
    height: 37px; 
    color : #FFFFFF; 
    background-color: #0A95FF; 
    border : 1px solid #0A95FF; 
    margin : 5px 0px 5px 30px; 
    padding :  10.4px; 
    border-radius : 5px; 
`

export const MyPageQuestionStyle = styled.div`
  width: calc(100% - 164px); 
  @media screen and (max-width:980px){
    max-width: 750px; 
           } 
`; 

export const MypageNavitemStyle = styled.li`
    list-style: None;
    font-size: 13px; 
    height: 29px; 
    width: 126px; 
    color: #232629; 
    padding: 7px 48px 12px 16px; 
    cursor: pointer;
    border-radius: 15px; 

    &:hover {
       background: #d6d6d7;
       color: #6a6a6c; 
     }
    

`
export const ActivityCardContainer = styled.div`
    display:flex;
    flex-direction: column;
    float:left;
    width: 100%;
`

export const CardTitleStyle = styled.div`
    float:left;
    font-size: 21px;
    vertical-align: baseline; 
    margin-bottom : 10px;
`

export const ActivityCardItemContainer=styled.div`
    display:flex;
    flex-direction: column; 
    font-size: 13px; 
    line-height: 17px;
    border: 1px solid  rgb(190, 192, 194);
    border-radius: 10px; 
    color : rgb(106, 115, 124);
    
    span {
        color: hsl(206,100%,40%);
    }

`
export const ActivityCardAnswerNoneStyle=styled.div`
    float:letf; 
    display: flex;
    justify-content: center ;
    align-items: center;
    width: 100%; 
    height: 109px; 
    border: 1px solid  rgb(190, 192, 194);
    border-radius: 5px;  
`

export const ActivityQuestionBoxInnerStyle = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: left;
    width: 100%; 
    border-bottom: 1px solid  rgb(190, 192, 194);
    padding: 16px;
`

export const QuestionUpperText = styled.div`
   display: flex; 
   flex-direction: row; 
   align-items: center;
`

export const MypageQuestionSummary = styled.div`
    display: flex;  
    margin: 3px; 
    margin-bottom: 2px; 
    
&.answersGreenBox {
    border: 1px solid hsl(140,41%,31%);
    border-radius: 5px; 
}
`

export const MypageQuestionUpperTextStyle = styled.div`
    color: #6A737C; 
    font-size: 13px; 
    font-weight: 600; 
    padding: 2px; 

 &.mypageItems_1 {
    color: #2F6F44;  
    margin-right: 3px; 
 }

 &.mypageItemCreatedAt{
   font-size: 11px; 
 }
 `
export const NothingToshow = styled.div`
     font-size: 13px; 
     color: #6A737C;
     padding: 10px; 
     align-self: center;
     span {
        color: blue; 
     }
`

export const MypageQuestionTitleStyle = styled.div`
    color: #6A737C; 
    font-size: 13px; 
    padding: 2px 15px 0px 0px; 
    font-weight: 600; 


&.mypageAnwerTitle {
    color: #00457A;
    font-size: 18px;
    padding: 5px 0px 10px 0px; 
}
`