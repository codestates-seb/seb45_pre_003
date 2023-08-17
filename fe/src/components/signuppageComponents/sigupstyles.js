import {styled} from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  max-width:100%;
  min-height: 100vh;
  background-color: #F1F2F3;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 785.33px;
  height: 950.92px;
  margin-top: 15px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const TextContent = styled.div`
  margin-right: 48px;

  @media screen and (max-width:840px){
    display: none;
}
`;

export const Hypertext = styled.p`
  width: 445.33px;
  font-size: 27px;
  margin-bottom: 32px;
`;

export const Textimg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: rgba(0,0,0,0);
`

export const Text = styled.p`
  font-size: 15px;
  margin-bottom: 24px;
`;

export const Stext = styled.p`
  font-size: 13px;
  color: #6A737C;
  margin-bottom: 16px;
`;

export const Atext = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: #0074cc;
  position: relative;
  bottom: 18px;

  &:hover {
    color: skyblue;
  }
`;

export const ButtonForm = styled.form`
  margin: -4px 0px 16px;
`;

export const IconButton = styled.button`
  background: ${({ color }) => (color ? color : 'white')};
  width: 316px;
  height: 37.78px;
  padding: 10px;
  margin: 8px 0px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: inherit;
  cursor: pointer;
  color: ${({ colors }) => (colors ? 'white' : colors)};
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ hoverColor }) => (hoverColor ? hoverColor : 'lightgray')};
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: rgba(0,0,0,0);
`;

export const SignupColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  text-align: left;

  @media screen and (max-width:840px){
    align-items: center;
}
`;

export const Inputform = styled.form`
background-color: white;
width: 316px;
height: 675.58px;
margin: 0px 0px 24px;
padding: 24px;
color: #232629;
border-radius: 6px;
`

export const InputLabel = styled.label`
  display: block;
  font-size: 15px;
  margin-top: 8px;
  font-weight: 600;
  margin: 2px 0px;
  padding: 0px 2px;
  
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 6px 0px skyblue;
    outline: none;
  }
`;

export const PasswordRequirements = styled.p`
  font-size: 11px;
  color: #6A737C;
  margin-top: 4px;
  padding: 2px 0px 0px;
`;

export const RobotCheckContainer = styled.div`
  background-color: #F1F2F3;
  margin: 6px 0px;
  padding: 8px 0px 0px;
  width: 268px;
  height: 156px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RobotCheckWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  width: 156px;
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon2 = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  left: 5px;
  background-color: rgba(0,0,0,0);
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;

export const Checkboxlabel = styled.label`
  width: 100px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  display: table-cell;
  vertical-align: middle;
  position: relative;
  top: 5px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  background-color: F1F2F3;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
  width: 30px;
  height: 30px;
`;

export const SignUpButton = styled.button`
  background: #0074cc;
  width: 100%;
  height: 40px;
  margin-top: 16px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: inherit;
  color: white;
  padding: 10.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa1;
  }
`;

export const Textminl = styled.p`
  font-size: 12px;
  color: #6A737C;
  margin: 32px 0px 0px;
`;

export const SignupAll = styled.div`
  width: 316px;
  height: 38px;
  margin: 0px 0px 30px;
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 12px 0px 0px;
`;

export const SignupLink = styled.a`
  font-size: 12px;
  color: #0074cc;
  margin: 6px 0px;
  text-decoration: none;
  

  &:hover {
  color: skyblue;
}
`;