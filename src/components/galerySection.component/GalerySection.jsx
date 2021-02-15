import React, { useState } from 'react';
import { galeryPhotos } from '../../data/galeryData';
import xButton from '../../images/SVG/x-mark.svg';
import { GalerySectionContainer, GaleryCardContainer, CardImage, MyImageContainer, MyImage, CloseButton, Forward, Backward } from './galery-section.styles';

const GalerySection = () => {
    const [photo, setPhoto] = useState(false);
    const [myImage, setMyImage] = useState(null);
    const [myImageId, setMyImageId] = useState(0);

    const openPhoto = (openImage, imgId) => {
        setPhoto(true);
        setMyImage(openImage);
        setMyImageId(imgId);
    };

    const closePhoto = () => {
        setPhoto(false);
    };

    const moveForward = () => {
        galeryPhotos.forEach(imagem => {
            imagem.id = myImageId + 1
            setMyImage(imagem.photo)
        })

    };

    const moveBackward = () => {

    };

    return (
        <GalerySectionContainer id="galery-section">
            <h1>Galeria</h1>
            <GaleryCardContainer>
                {galeryPhotos.map(image => {
                    return <CardImage src={image.photo} key={image.id} onClick={() => openPhoto(image.photo, image.id)} />
                })}
            </GaleryCardContainer>
            {
                !photo ? '' : (
                    <MyImageContainer>
                        <Backward onClick={moveBackward} />
                        <CloseButton onClick={closePhoto}>
                            <img src={xButton} alt="close" />
                        </CloseButton>
                        <MyImage src={myImage} />
                        <Forward onClick={moveForward} />
                    </MyImageContainer>
                )
            }
        </GalerySectionContainer>
    )
}

export default GalerySection;
