import React, { useState, useEffect, useRef } from 'react';

import { Button } from '../button.component/Button';

import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow
} from './hero.styles';


const Hero = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // Timeout next slide effect
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        timeout.current = setTimeout(nextSlide, 3000);

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length]);

    // Slide Logic
    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);

    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            <HeroContent>
                <h1>Colonia Malhada</h1>
                <p>R$ 700 / noite</p>
                <Button href="https://www.airbnb.com.br/rooms/45446453?adults=1&federated_search_id=eee863d2-8ac6-4c83-82b3-5a34224fd5e4&source_impression_id=p3_1611960250_CXAxbCtuBl9YFzzn&guests=1"
                    primary='true'
                    rel="noopener noreferrer"
                    target="_blank"
                    css={`max-width: 160px;`}>
                    airbnb
                    <Arrow />
                </Button>
            </HeroContent>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;
