import React, { useState } from 'react';
import { galeryPhotos } from '../../data/galeryData';
import xButton from '../../images/SVG/x-mark.svg';
import { GalerySectionContainer, GaleryCardContainer, CardImage, MyImageContainer, MyImage, CloseButton } from './galery-section.styles';

const GalerySection = () => {
    const [photo, setPhoto] = useState(false)
    const [myImage, setMyImage] = useState(null)

    const openPhoto = (imageId) => {
        setPhoto(true)
        setMyImage(imageId)
    }

    const closePhoto = () => {
        setPhoto(false)
    }

    return (
        <GalerySectionContainer id="galery-section">
            <h1>Galeria</h1>
            <GaleryCardContainer>
                {galeryPhotos.map(image => {
                    return <CardImage src={image.photo} key={image.id} onClick={() => openPhoto(image.photo)} />
                })}
            </GaleryCardContainer>
            {
                !photo ? '' : (
                    <MyImageContainer>
                        <CloseButton onClick={closePhoto}>
                            <img src={xButton} alt="close" />
                        </CloseButton>
                        <MyImage src={myImage} />
                    </MyImageContainer>
                )
            }
        </GalerySectionContainer>
    )
}

export default GalerySection;
