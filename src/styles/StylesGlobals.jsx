import styled from "styled-components";
import {Field, Form} from "formik";
import { Button } from "react-bootstrap";

export const H1 = styled.h1`
color: blue;
`

export const IntroDiv = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  

`

export const LogoImg = styled.img`
 
    width: 80%;
    display: flex;
    margin:0 auto 
  
`


/* CHOOSE */

export const  ChooseImg = styled.img`

    width:70%;
    display: flex;
    margin: 0 auto;
    margin-top: 50%;
 
`;

export const  ChooseTitle = styled.p`
 
    font-size: 18px;
    color:#474747;
    text-align: center;
    font-weight: 600;
    margin-top: 15%;
  
`;

export const ChoosePrg = styled.p`

    font-size: 16px;
    color: #797979;
    font-weight: 200;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
 
`;

export const UlSlide = styled.ul`

    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 60%;

`

export const FirstLi = styled.li`
 
    width: 50px;
    height: 12px;
    background-color: #B4FFD8;
    border-radius: 50px;
    color:#2BE7E8;
    font-size: 0px;
 
`;

export const OthersLi = styled.li` 

    width: 15px;
    height: 12px;
    border-radius: 50px;
    background-color: #B4FFD8;
    color:#2BE7E8;
    font-size: 0px;

`

export const SecondLi = styled.li` 
  
        width: 30%;
    background-color: #B4FFD8;
    color:#33ccff;
    font-size: 0px;
   
`

export const ThirdLi = styled.li` 

    width: 30%;
    background-color: #2be7e8;
    color:#33ccff;
    font-size: 0px;

`

export const BtnNextOne = styled.button`

    width: 80%;
    border:none;
    background-color: #B4FFD8;
    color:#474747;
    border-radius: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: 8px;
    margin-top: 8%;
    text-shadow: 3px 2px 4px rgba(0,0,0,0.5);
    font-size: 16px;
    cursor: pointer;

`
export const NavBarSup = styled.div`
max-width: 350px;
margin: 0 auto;
    @media (min-width: 700px){
        margin: 0 10vw;
        max-width: 878px;
    }
`
// LOGIN

export const ImgLogin = styled.img` 
  width: 30%;
  display: flex;
  margin: 0 auto;
  margin-top: 25%;
`

export const SiTitle = styled.h2` 
  font-weight: 400;
  text-align: center;
  font-size: 18px;
  margin-top:10%
`

export const FormSignIn = styled(Form)`
  margin-top: 20%;

`

export const InputEmail = styled(Field)` 
    border: none;
    border-radius: 50px;
    background-color:#DEDEDE;
`

export const InputPassword = styled(Field)`
border: none;
    border-radius: 50px;
    background-color:#DEDEDE ;

`

export const LoginBtn = styled(Button)`
    border: none;
    width: 30%;
    background-color: #98FFC9;
    color:#474747;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    margin:0 auto;
    font-weight: 400;
    box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.19);
    margin-top:10%;
    &:hover{
      background-color: #439068;
    }
`

export const SignInWith = styled.p`
    font-size: 16px;
    color: #797979;
    text-align: center;
    margin-top:20%
`

export const DivSocial = styled.div` 
    display: flex;
    gap:20px;
    margin:0 auto;
    width: 80%;
  justify-content: center;
`

export const GoogleSignIn = styled.img`
    cursor: pointer;
    width: 8%;
`

export const FacebookSignIn = styled.img` 
    cursor: pointer;
    width:8%;
`
export const SignUpWith = styled.div`
  position: relative;
  top:60px;
`


/* SIGN UP */

export const InputEmail2 = styled(Field)` 
    border: none;
    border-radius: 50px;
    background-color:#DEDEDE;
`

export const InputPassword2 = styled(Field)`
border: none;
    border-radius: 50px;
    background-color:#DEDEDE ;

`
export const InputPhone = styled(Field)` 
    border: none;
    border-radius: 50px;
    background-color:#DEDEDE;
`

export const InputName = styled(Field)`
border: none;
    border-radius: 50px;
    background-color:#DEDEDE ;

`
export const InputConfirm = styled(Field)`
border: none;
    border-radius: 50px;
    background-color:#DEDEDE ;

`

export const SignUpBtn = styled(Button)`
    border: none;
    width: 30%;
    background-color: #98FFC9;
    color:#474747;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    margin:0 auto;
    font-weight: 400;
    box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.19);
    margin-top:10%;
    &:hover{
      background-color: #439068;
    }
`

export const DivSocial2 = styled.div` 
    display: flex;
    gap:20px;
    margin:0 auto;
    width: 80%;
  justify-content: center;
`

export const GoogleSignUp = styled.img`
    cursor: pointer;
    width: 8%;
`

export const FacebookSignUp = styled.img` 
    cursor: pointer;
    width:8%;
`