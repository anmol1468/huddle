import React from 'react';
import Illustration from '../../images/screen-mockups.svg';
import Container from '../Container';
import { Main, MainImg, MainInfo, MainInfoButton, MainInfoText, MainStats } from './Header.components';
import Community from '../../images/icon-communities.svg';
import Messages from '../../images/icon-messages.svg';
import Stat from './Stat';


const Header = () => {
    return (
        <Container>
            <Main>
                <MainInfo>
                    <MainInfoText>
                        <h2>Build The Community Your Fans Will Love</h2>
                        <p>Huddle re-imagines the way we builde communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    </MainInfoText>
                    <MainInfoButton>Get Started for Free</MainInfoButton>
                </MainInfo>
                <MainImg src={Illustration}></MainImg>
                <MainStats>
                    <Stat Logo={Community} name='Communities Formed' number='1.4k+' />
                    <Stat Logo={Messages} name='Messages Sent' number='2.7m+' />
                </MainStats>
            </Main>
        </Container>
    )
}

export default Header
