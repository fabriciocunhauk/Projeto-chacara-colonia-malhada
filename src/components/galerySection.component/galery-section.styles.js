import styled from 'styled-components';

export const GalerySectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #00A699;
`;

export const GaleryCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    max-width: 1360px;
    max-height: 80%;
`;

export const CardImage = styled.img`
    width: 280px;
    margin: 20px;
    object-fit: contain;
`;