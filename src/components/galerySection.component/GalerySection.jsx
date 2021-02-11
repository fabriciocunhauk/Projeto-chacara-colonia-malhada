import React from 'react';
import { galeryPhotos } from '../../data/galeryData';
import { GalerySectionContainer, GaleryCardContainer, CardImage } from './galery-section.styles';

const GalerySection = () => {
    return (
        <GalerySectionContainer id="galery-section">
            <GaleryCardContainer>
                {galeryPhotos.map(image => {
                    return <CardImage src={image.photo} key={image.id} />
                })}
            </GaleryCardContainer>
        </GalerySectionContainer>
    )
}

export default GalerySection;
