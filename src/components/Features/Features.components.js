
import styled from "styled-components"

export const Features = styled.section`
padding: 4rem 0;
`
// f5faff
export const FeatureContainer = styled.div`
background-color: ${({ bluebg }) => !bluebg ? '#f5faff' : '#fff'};
`

export const Feature = styled.div`
display: flex;
flex-direction: ${({ imgStart }) => imgStart ? 'row-reverse' : 'row'};
justify-content: space-between;
align-items: center;
/* margin: 8rem 0; */

@media screen and (max-width: 45rem) {
    flex-direction: column;
    text-align: center;
}
`

export const FeatureText = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
width: 50%;

@media screen and (max-width: 45rem) {
    width: 70%;
    margin-bottom: 1.5rem;
}

h3 {
    font-size: 2.5rem;
}

p {
    width: 80%;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height: 1.5;
}
`

export const FeatureIllustration = styled.img`
width: 50%;
`

export const Question = styled.div`
text-align: center;
padding-top: 3rem;
margin-bottom: -10rem;

@media screen and (max-width:50rem) {
    margin-bottom: 0;
}

h2 {
    font-size: 2.7rem;
}
`