import styled, { css } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    z-index: 0;
`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

export const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const HeroSlider = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   &::before {
       content: '';
       position: absolute;
       z-index: 2;
       width: 100%;
       height: 100vh;
       bottom: 0vh;
       left: 0;
       overflow: hidden;
       opacity: 0.4;
       background: linear-gradient(0deg, 
       rgba(0,0,0,0.2) 0%, 
       rgba(0,0,0,0.2) 50%, 
       rgba(0,0,0,0.6) 100%);
   }
`;

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;
    top: 40%;
    left: 5%;

    h1 {
        /* Responsive fonts */
        font-size: clamp(1rem, 8vw, 2.5rem);  
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 10px black;
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        font-weight: bold;
        margin-bottom: 1.2rem;
        text-shadow: 2px 2px 10px black;
    }

    .airbnb-logo {
        width: 25px;
        margin-right: 20px;
    }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;  
`;

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #00A699;
        color: black;
        transform: scale(1.05)
    }
`;

export const SliderButtons = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
    display: flex;
    z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`
    ${ArrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
    ${ArrowButtons}
`;