import styled from 'styled-components';
import gasleryBackground from '../../images/outside-area-16.jpg';

export const GalerySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100vw;
    margin-top: 40px;
    position: relative;
    background-image: url(${gasleryBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

    h1 {
        padding-top: 80px;
        margin-bottom: 40px;
        font-size: 50px;
        color: white;
    }


    &::before {
        content: "";
        background: #00A699;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: .7;
    }
`;

export const GaleryCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;
    max-width: 1360px;
    max-height: 80%;
`;

export const CardImage = styled.img`
    width: 280px;
    margin: 20px;
    object-fit: contain;
    box-shadow: 1px 1px 10px black;
    transition: all .4s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;