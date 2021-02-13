import styled from 'styled-components';

export const Section = styled.div`
    width: 100vw;
    height: 100%;
`;

export const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1000px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 1400px) {
        padding: 1rem;
        grid-template-rows: 750px;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

export const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 60%;
        height: 60%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;
