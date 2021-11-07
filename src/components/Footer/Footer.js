import React from 'react'
import { About, Data, Footer, FooterContainer, Newsletter, NewsletterInput, Social, SquareBtn } from './Footer.elements'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterSection = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="hsl(192, 100%, 9%)" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,234.7C480,267,600,277,720,256C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" data-darkreader-inline-fill=""></path></svg>

            <Footer>
                <FooterContainer>
                    <About>
                        <Data>
                            <h3>Huddle</h3>
                            <p>lorem ipsum sit amert, consthgttf, adipcisicng, elit. mauris quam , hendreit lacinia vestbulum and, iltrices.</p>
                            <p>Phone: +1-543-123-4567</p>
                            <p>something@gmail.com</p>
                        </Data>
                        <Social>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                        </Social>

                    </About>
                    <Newsletter>
                        <h3>NEWSLETTER</h3>
                        <p>To receive tips on how to grow your community. sign up to our weekly newletter. we'll never send you spam or pass on your email address.</p>
                        <NewsletterInput>
                            <input type='email' placeholder='Type your email' />
                            <SquareBtn>Subscribe</SquareBtn>
                        </NewsletterInput>
                    </Newsletter>
                </FooterContainer>
            </Footer>
        </>
    )
}

export default FooterSection