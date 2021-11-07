import styled from 'styled-components';

import { color } from '../Data'

export const Nav = styled.nav`
display: flex;
flex-flow: row nowrap;
padding: 2.5rem 1rem;
justify-content: space-between;
align-items: center;
margin: 0 auto;
height: 5%;
width: auto;
`

export const NavLogo = styled.img`
height: 100%;
`

export const NavButton = styled.button`
padding: .7rem 1.8rem;
background-color: transparent;
border-radius: 50rem;
border: 2px solid ${color.pink};
color: ${color.pink};
transition: 0.2s all;
font-size: 1.3rem;

:hover {
    border: 2px solid ${color.lightPink};
    color: ${color.lightPink};
}

:active {
    transform: translateY(1px) scale(.98);
}

@media screen and (max-width:390px) {
    display: none;
}
`