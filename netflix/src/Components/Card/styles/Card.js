import styled from 'styled-components/macro';

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;
    > ${Title} {
    @media (max-width: 1000px) {
        margin-left: 30px;
    }
    }
    &:last-of-type {
    margin-bottom: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
    ${Container}:first-of-type {

        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`;



export const SubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;

export const FeatureText = styled.p``;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
    }
`;

export const FeatureTitle = styled(Title)``;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const Meta = styled.div``;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Item = styled.div``;

export const Image = styled.img``;

export const Content = styled.div``;