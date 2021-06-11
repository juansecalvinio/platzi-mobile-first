import styled from 'styled-components';
import bitcoinsSvg from './../../assets/img/bitcoins.svg';
import trendingDown from './../../assets/img/trending-down.svg';
import trendingUp from './../../assets/img/trending-up.svg';
import { Colors } from '../../res/colors';

export const MainContainer = styled.main`
    width: 100%;
    height: auto;
    background-color: #FAF8F7;

    .main-exchange-container {
        width: 100%;
        height: auto;
        padding-top: 80px;
        padding-bottom: 30px;
        text-align: center;
    }
    .main-exchange-container--title {
        width: 90%;
        min-width: 288px;
        max-width: 900px;
        margin: 0 auto;
    }
    .main-exchange-container .background_img {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-bottom: 50px;
        background-image: url(${bitcoinsSvg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .main-exchange-container h2 {
        margin-bottom: 30px;
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 2.6rem;
        text-align: center;
        color: #201E1C;
    }
    .main-exchange-container p {
        margin-bottom: 30px;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.6rem;
        color: #757575
    }

    .main-currency-table {
        width: 70%;
        min-width: 235px;
        max-width: 500px;
        height: 360px;
        margin: 0 auto;
        font-family: 'Inter', sans-serif;

        .currency-table--title {
            color: #F7931A;
            margin-bottom: 15px;
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 2.5rem;
        }
        .currency-table--container {
            width: 90%;
            min-width: 200px;
            max-width: 270px;
            height: 200px;
            margin: 0 auto;

            table {
                width: 100%;
                height: 100%;

                td {
                    color: #BABABA;
                    background-color: #FFFFFF;
                    font-size: 1.6rem;
                    font-weight: 500;
                    line-height: 1.9rem;
                    text-align: left;
                    width: 50%;
                    padding: 1rem 1.5rem;
                    padding-right: 0;
                }
            }

            .table__top-left {
                border-radius: 15px 0 0 0;
            }
            .table__top-right {
                border-radius: 0 15px 0 0;
            }
            .table__bottom-left {
                border-radius: 0 0 0 15px;
            }
            .table__bottom-right {
                border-radius: 0 0 15px 0;
            }

            .table__right {
                font-size: 1.4rem;
                font-weight: normal;
                line-height: 1.7rem;
                color: #757575;
                text-align: right;
                padding-right: 1.5rem;
                padding-left: 0;

                .down, .up {
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    margin-left: 10px;
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .down {
                    background-image: url(${trendingDown});
                }

                .up {
                    background-image: url(${trendingUp});
                }
            }
        }
        .currency-table--date {
            background-color: #FFE9D5;
            border-radius: 8px;
            height: 30px;
            margin: 0 auto;
            margin-top: 15px;
            padding: 8px;
            width: 190px;
            
            p {
                color: #282623;
                font-size: 1.2rem;
                font-weight: 300;
                line-height: 1.5rem;
            }
        }
    }

    .main-commissions-table {
        width: 70%;
        min-width: 235px;
        max-width: 500px;
        height: 360px;
        margin: 0 auto;
        font-family: 'Inter', sans-serif;

        .commissions-table--title {
            color: #1A9AF7;
            margin-bottom: 15px;
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 2.5rem;
        }
        .commissions-table--container {
            width: 90%;
            min-width: 200px;
            max-width: 270px;
            height: 200px;
            margin: 0 auto;

            table {
                width: 100%;
                height: 100%;

                td {
                    color: #BABABA;
                    background-color: #FFFFFF;
                    font-size: 1.6rem;
                    font-weight: 500;
                    line-height: 1.9rem;
                    text-align: left;
                    width: 50%;
                    padding: 1rem 1.5rem;
                    padding-right: 0;
                }
            }

            .table__top-left {
                border-radius: 15px 0 0 0;
            }
            .table__top-right {
                border-radius: 0 15px 0 0;
            }
            .table__bottom-left {
                border-radius: 0 0 0 15px;
            }
            .table__bottom-right {
                border-radius: 0 0 15px 0;
            }

            .table__right {
                font-size: 1.4rem;
                font-weight: normal;
                line-height: 1.7rem;
                color: #757575;
                text-align: center;
                padding-right: 1rem;
                padding-left: 0;

                .down, .up {
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    margin-left: 10px;
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .down {
                    background-image: url(${trendingDown});
                }

                .up {
                    background-image: url(${trendingUp});
                }
            }
        }
        .commissions-table--date {
            background-color: #E7F5FF;
            border-radius: 8px;
            height: 30px;
            margin: 0 auto;
            margin-top: 15px;
            padding: 8px;
            width: 190px;
            
            p {
                color: #282623;
                font-size: 1.2rem;
                font-weight: 300;
                line-height: 1.5rem;
            }
        }
    }
    
`;