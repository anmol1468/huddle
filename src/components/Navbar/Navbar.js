import React from 'react'
import { Nav, NavButton, NavLogo } from './Navbar.elements'
import Logo from '../../images/logo.svg';
import { color } from '../Data'
import Container from '../Container';

const Navbar = () => {
    return (
        <Container>
            <Nav>
                <NavLogo src={Logo}></NavLogo>
                <NavButton borderColor={color.pink}>Try it</NavButton>
            </Nav>
        </Container>
    )
}

export default Navbar
