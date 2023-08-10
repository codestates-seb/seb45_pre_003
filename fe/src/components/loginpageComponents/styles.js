import {styled} from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const Card = styled.div`
  background-color: #f2f2f2;
  padding: 30px;
  width: 340px;
  min-height: 55vh;
`;

export const ButtonForm = styled.form`
  margin: -4px 0px 16px;
`;

export const IconButton = styled.button`
  background: ${({ color }) => (color ? color : 'white')};
  width: 278px;
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

export const MyPageLink = styled.a`
  display: block;
  text-align: center;
  margin-bottom: 10px;
`;

export const MyPageImage = styled.img`
  width: 32px;
  height: 37px;
  cursor: pointer;
  margin: 16px;
`;

export const Form = styled.form`
  width: 278px;
  height: 234.19px;
  display: flex;
  flex-direction: column;
  margin: 8px 0px 24px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Loginform = styled.div`
width: 230px;
height: 198.19px;
margin: -6px 0px;
display: flex;
flex-direction: column;
gap: 8px;

`

export const Input = styled.input`
  padding: 7.8px 9.1px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 13px;
  margin-bottom: 5px;
  width: 230px;
  height: 32.59px;
  position: relative;
  top: 4px;

  &:focus {
    box-shadow: 0 0 6px 0px skyblue;
    outline: none;
  }
`;

export const LoginButton = styled.button`
  color: white;
  background-color: #0a95ff;
  margin: 2px 0px;
  padding: 10.4px;
  border: none;
  border-radius: 4px;
  font-size: 13px;

  &:hover {
    background-color: #0072E3;
  }
`;

export const SignupAll = styled.div`
  width: 278px;
  height: 78px;
  margin: 0px 0px 24px;
  padding: 16px;
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

export const SignupLink2 = styled.a`
  font-size: 12px;
  color: #0074cc;
  margin: 6px 0px;
  text-decoration: none;
  position: relative;
  top: 6px;
  

  &:hover {
  color: skyblue;
}
`;

export const Label = styled.label`
  font-size: 15px;
  color: #0C0D0E;
  padding: 0px 2px;
  font-weight: 600;
  position: relative;
  top: 10px;

`;

export const ForgotPasswordLink = styled.span`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 3px;
`;




