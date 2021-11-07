import styled from "styled-components";
import { NavButton } from "../Navbar/Navbar.elements";
import { color } from "../Data";

export const Main = styled.header`
display: flex;
height: auto;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
`

export const MainInfo = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
padding: 12rem 0;
`

export const MainInfoText = styled.div`
text-align: center;
padding: 0 3rem;

/* @media screen and (max-width: 50rem) {
    width: 70%;
} */

h2 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
}

p {
    font-size: 1.3rem;
    letter-spacing: 1px;
    line-height: 1.5;
    width: 50%;
    margin: auto;
    padding: 1.8rem 0;

    @media screen and (max-width: 50rem) {
    width: 70%;
}
}
`

export const MainInfoButton = styled(NavButton)`
background-color: ${color.pink};
color: #fff;
font-size: 1.4rem;
margin-top: 2rem;

&:hover {
    color: #fff;
    background-color: ${color.lightPink};
}

@media screen and (max-width:390px) {
    display: initial;
}
`

export const MainImg = styled.img`
width: 80%;
margin: auto;
`

export const MainStats = styled.div`
display: flex;
padding: 5rem 0;
justify-content: space-between;
width: 40%;

@media screen and (max-width: 60rem ) {
    width: 60% ;
}

@media screen and (max-width: 35rem ) {
    flex-flow: column nowrap;
}
`

export const Stats = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width: 35rem) {
    margin-bottom: 3.5rem;
}

h1 {
    font-weight: 700;
    font-size: 5.8rem;
    margin: 1rem 0;
}

p {
    font-size: 1.3rem;
    letter-spacing: 1px;

}
`

export const StatLogo = styled.img`
height: 3rem;
align-self: flex-start;

@media screen and (max-width: 35rem ) {
    align-self: center;
    margin-bottom: -1rem;
}
`