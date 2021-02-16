import React, { useState } from 'react';
import { galeryPhotos } from '../../data/galeryData';
import xButton from '../../images/SVG/x-mark.svg';
import { GalerySectionContainer, GaleryCardContainer, CardImage, MyImageContainer, MyImage, CloseButton, Forward, Backward } from './galery-section.styles';

const GalerySection = () => {
    const [openImage, setOpenImage] = useState(false);
    const [myImage, setMyImage] = useState(null);
    const [currentId, setCurrentId] = useState(0);
    const length = galeryPhotos.length;

    const openPhoto = (openImage, imgId) => {
        setOpenImage(true);
        setMyImage(openImage);
        setCurrentId(imgId);
    };

    const closePhoto = () => {
        setOpenImage(false);
    };

    const moveForward = () => {
        if (currentId < length) setCurrentId(currentId + 1);

        galeryPhotos.map(imagem => {
            return imagem.id === currentId + 1 && setMyImage(imagem.photo);
        });
    };

    const moveBackward = () => {
        if (currentId > 1) setCurrentId(currentId - 1);

        galeryPhotos.map(imagem => {
            return imagem.id === currentId - 1 && setMyImage(imagem.photo);
        });
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
                !openImage ? null : (
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
