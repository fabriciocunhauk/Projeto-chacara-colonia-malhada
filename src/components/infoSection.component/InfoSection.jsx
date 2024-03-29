import React from 'react';

import { Container, Section, ColumnLeft, ColumnRight } from './info-section.styles';

function InfoSection({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) {
    return (
        <Section id="about-section">
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
};

export default InfoSection;
