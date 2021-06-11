import styled from 'styled-components';
import arrowDown from '../../assets/img/arrow-down.svg';

export const HeaderContainer = styled.header`
    background: linear-gradient(207.8deg, #201E1C 16.69%, #F7931A 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 320px;
    height: 334px;
    text-align: center;

    img {
        width: 150px;
        height: 24px;
        margin-top: 60px;
        align-self: center;
    }

    .header--title-container {
        width: 90%;
        min-width: 288px;
        max-width: 900px;
        height: 218px;
        margin-top: 40px;
        text-align: center;
        align-self: center;
    }

    .header--title-container h1 {
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 2.6rem;
        color: #FFFFFF;
    }

    .header--title-container p {
        margin-top: 25px;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.8rem;
        color: #FFE9D5;
    }

    .header--button {
        background: #FAF8F7;
        box-shadow: 0px 4px 8px rgba(89, 73, 30, 0.16);
        border-radius: 4px;
        border: none;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 1.8rem;
        color: #201E1C;
        position: absolute;
        top: 270px;
        left: calc(50% - 118px);
        margin-top: 35px;
        width: 229px;
        height: 48px;
        display: block;
        padding: 15px;
        text-align: center;
        transition: all .5s ease;
    }

    .header--button:hover {
        transform: scale(0.99);
    }

    .header--button span {
        display: inline-block;
        width: 13px;
        height: 8px;
        margin-left: 10px;
        background-image: url(${arrowDown});
    }
`;