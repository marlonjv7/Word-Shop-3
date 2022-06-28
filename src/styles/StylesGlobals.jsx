import styled from "styled-components";

export const H1 = styled.h1`
color: blue;
`

export const DIVCards = styled.div`
    h2 {
        color: #FFFFFF;
    }

    p {
        color: #FFFFFF;
    }

.descript {
    font-size: 10px;
}
`

export const BTNLOGOUT = styled.button`
    width: 100%;
    border: none;
    background-color: #B4FFD8;
    border-radius: 12px;
    color: #FFFFFF;
    padding: 5px;

    &:hover {
        background-color: #2BE7E8;
    }
    &:focus {
        background-color: #2BE7E8;
    }
`

export const DIVCarrusel = styled.div`

    display: flex;
    flex-direction: column;

    .Carru {
        background-color: #B4FFD8;
    }

    h3 {
        font-size: 15px !important;
        width: 200px;
    }

    @media (min-width: 700px){
        height: 400px;
        
        .DIVCARRU1 {
            height: 80%;
            width: 80%;
        }

        .Carru {
            width: 100%;

            img {
                height: 250px;
                width: 150px;
            }
        }
        .DIVCARRU1 {
            text-align: center;
        }
    }
`

export const IntroDiv = styled.div`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  }

`

export const LogoImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 80%;
    display: flex;
    margin:0 auto 
  }
`


/* CHOOSE */

export const  ChooseImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width:70%;
    display: flex;
    margin: 0 auto;
    margin-top: 50%;
  }
`;

export const  ChooseTitle = styled.p`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 18px;
    color:#474747;
    text-align: center;
    font-weight: 600;
    margin-top: 15%;
  }
`;

export const ChoosePrg = styled.p`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 16px;
    color: #797979;
    font-weight: 200;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
  }
`;

export const UlSlide = styled.ul`
@media screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 60%;
}
`

export const FirstLi = styled.li`
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 50px;
    height: 12px;
    background-color: #B4FFD8;
    border-radius: 50px;
    color:#2BE7E8;
    font-size: 0px;
  }
`;

export const OthersLi = styled.li` 
@media screen and (min-width: 320px) and (max-width: 600px) {
    width: 15px;
    height: 12px;
    border-radius: 50px;
    background-color: #B4FFD8;
    color:#2BE7E8;
    font-size: 0px;
}
`

export const SecondLi = styled.li` 
    @media screen and (min-width:320px) and (max-width:600px ){
        width: 30%;
    background-color: #B4FFD8;
    color:#33ccff;
    font-size: 0px;
    }
`

export const ThirdLi = styled.li` 
@media screen and (min-width:320px) and (max-width:600px ){
    width: 30%;
    background-color: #2be7e8;
    color:#33ccff;
    font-size: 0px;
}
`

export const BtnNextOne = styled.button`
@media screen and (min-width:320px) and (max-width:600px ){
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
}
`
export const NavBarSup = styled.div`
max-width: 350px;
margin: 0 auto;
    @media (min-width: 700px){
        margin: 0 10vw;
        max-width: 878px;
    }
`
