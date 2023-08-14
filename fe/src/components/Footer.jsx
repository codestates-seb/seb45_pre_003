import React from 'react'
import { FooterStyle, FooterContainerStyle,
         FooterItemContainer, 
         FooterCopyrightStyle, FooterTitleStyle,
         FooterLogoContainer, FooterItemStyle,
         FooterNavContainer, FooterCategoryContainerStyle,
         FooterCopyrightItems,FooterCopyRightTextStyle } from '../style'

function Footer () {
 
  return (
    <>  
    <FooterStyle>
        <FooterContainerStyle>
        <FooterLogoContainer>
           <img style={{ width: "32px", height: "37px"}} src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196" 
                   alt="logo"/>
          </FooterLogoContainer>
          <FooterNavContainer>
          <FooterCategoryContainerStyle>
          <FooterTitleStyle>STACK OVERFLOW</FooterTitleStyle>
          <FooterItemContainer>
            <FooterItemStyle>Question</FooterItemStyle>
            <FooterItemStyle>Help</FooterItemStyle>
          </FooterItemContainer>
          </FooterCategoryContainerStyle>
          <FooterCategoryContainerStyle>
          <FooterTitleStyle>PRODUCTS</FooterTitleStyle>
          <FooterItemContainer>
          <FooterItemStyle>Teams</FooterItemStyle>
          <FooterItemStyle>Advertising</FooterItemStyle>
          <FooterItemStyle>Collectives</FooterItemStyle>
          <FooterItemStyle>Talent</FooterItemStyle>
          </FooterItemContainer>
          </FooterCategoryContainerStyle>
          <FooterCategoryContainerStyle>
          <FooterTitleStyle>COMPANY</FooterTitleStyle>
          <FooterItemContainer>
            <FooterItemStyle>About</FooterItemStyle>
            <FooterItemStyle>Press</FooterItemStyle>
            <FooterItemStyle>Work Here</FooterItemStyle>
            <FooterItemStyle>Legal</FooterItemStyle>
            <FooterItemStyle>Privacy Policy</FooterItemStyle>
            <FooterItemStyle>Terms of Service</FooterItemStyle>
            <FooterItemStyle>Contact Us</FooterItemStyle>
            <FooterItemStyle>Cookie Settings</FooterItemStyle>
            <FooterItemStyle>Cookie Policy</FooterItemStyle>
            </FooterItemContainer>
            </FooterCategoryContainerStyle>
            <FooterCategoryContainerStyle>
            <FooterTitleStyle>STACK EXCHANGE NETWORK</FooterTitleStyle>
          <FooterItemContainer>
            <FooterItemStyle>Technology</FooterItemStyle>
            <FooterItemStyle>Culture & recreation</FooterItemStyle>
            <FooterItemStyle>Life & arts</FooterItemStyle>
            <FooterItemStyle>Science</FooterItemStyle>
            <FooterItemStyle>Professional</FooterItemStyle>
            <FooterItemStyle>Business</FooterItemStyle>
            <FooterItemStyle>API</FooterItemStyle>
            <FooterItemStyle>Data</FooterItemStyle>
          </FooterItemContainer>
          </FooterCategoryContainerStyle>
          </FooterNavContainer>
          <FooterCopyrightStyle>
            <FooterCopyrightItems>     
                <FooterItemStyle>Blog</FooterItemStyle>
                <FooterItemStyle>Facebook</FooterItemStyle>
                <FooterItemStyle>Twitter</FooterItemStyle>
                <FooterItemStyle>LinkedIn</FooterItemStyle>
                <FooterItemStyle>Instagram</FooterItemStyle>
            </FooterCopyrightItems>  
               <FooterCopyRightTextStyle>Site Design/logo @ 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA.rev 202.8.10.43574</FooterCopyRightTextStyle> 
           </FooterCopyrightStyle>
       </FooterContainerStyle>
    </FooterStyle>
    </  >
  ) 
} 

export default Footer;