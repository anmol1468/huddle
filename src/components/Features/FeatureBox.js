import React from 'react';
import Container from '../Container';
import { Feature, FeatureContainer, FeatureIllustration, FeatureText } from './Features.components'

const FeatureBox = ({ title, description, image, imgStart }) => {

    const blueCurve = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5faff" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,234.7C480,267,600,277,720,256C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" data-darkreader-inline-fill=""></path></svg>

    const whiteCurve = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,234.7C480,267,600,277,720,256C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" data-darkreader-inline-fill=""></path></svg>;

    return (
        <FeatureContainer bluebg={imgStart}>
            {imgStart ? blueCurve : whiteCurve}
            <Container>
                <Feature imgStart={imgStart}>
                    <FeatureText>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </FeatureText>
                    <FeatureIllustration src={image} />
                </Feature>
            </Container>
        </FeatureContainer>

    )
}

export default FeatureBox
