import styled from "styled-components"
import Container from "../Container"
import { MainInfoButton } from "../header/Header.components"
import { color } from '../Data'

export const FooterContainer = styled(Container)`
display: flex;
flex-flow: row;
justify-content: space-between;
padding: 0 3rem 2.5rem 3rem;

@media screen and (max-width:50rem) {
    flex-direction: column;
    align-items: center;
    text-align: center;
}
`

export const Footer = styled.footer`
background-color: hsl(192, 100%, 9%);
color: white;
margin-top: -1rem;


h1 {
    margin: 0;
padding: 0;}
`

export const About = styled.div`
height: auto;
display: flex;
flex-flow: column nowrap;

@media screen and (max-width:50rem) {
    flex-direction: column;
    align-items: center;
    text-align: center;
}

`

export const Data = styled.div`
display: flex;
flex-flow: column nowrap;

@media screen and (max-width:50rem) {
    flex-direction: column;
    align-items: center;
    text-align: center;
}

h3 {
    font-size: 3rem;
    letter-spacing: 1px;
}

p {
    width: 70%;
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: 1.1rem;
    margin: .5rem 0;
}
`

export const Social = styled.div`
margin-top: 1.5rem;

svg {
    font-size: 2.5rem;
    margin-right: 1rem;
    transition: 0.2s all ease-in;
    
    :hover {
        color: ${color.lightPink};
    }
}
`

export const Newsletter = styled.div`
display: flex;
flex-flow: column nowrap;
width: 45%;

@media screen and (max-width:50rem) {
        margin-top: 3rem;
    }

h3 {
    font-size: 2rem;
    letter-spacing: 1px;
}

p {
    font-size: 1.1rem;
    margin: 1rem 0;
    letter-spacing: 1px;
    width: 70%;

    @media screen and (max-width:50rem) {
        width:100%;
    }
}
`

export const NewsletterInput = styled.form`
display: flex;
flex-flow: row nowrap;
align-items: flex-end;


@media screen and (max-width:50rem) {
    flex-flow: column nowrap;
    align-items: center;
}

input { 
    height: 3.5rem;
    width: 55%;
    padding-left: 0.5rem;
}
`

export const SquareBtn = styled(MainInfoButton)`
margin-left: 1rem;
border-radius: .5rem;
width: auto;
height: 3.5rem;

@media screen and (max-width:390px) {
    display: initial;
}
`