import styled from 'styled-components';
import { Colors } from '../../res/colors';
import batata from './../../assets/img/logo-min.svg';
import bitcoins from './../../assets/img/bitcoins.svg';
import check from './../../assets/img/check.svg';
import clock from './../../assets/img/clock.svg';
import dollar from './../../assets/img/dollar.svg';
import eye from './../../assets/img/eye.svg';
import trendingDown from './../../assets/img/trending-down.svg';
import trendingUp from './../../assets/img/trending-up.svg';

export const MainContainer = styled.main`
    width: 100%;
    height: auto;
    background-color: ${Colors.off_white};

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
        background-image: url(${bitcoins});
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
        color: ${Colors.warm_black};
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
            color: ${Colors.bitcoin_orange};
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
                    color: ${Colors.grey};
                    background-color: ${Colors.just_white};
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
            background-color: ${Colors.soft_orange};
            border-radius: 8px;
            height: 30px;
            margin: 0 auto;
            margin-top: 15px;
            padding: 8px;
            width: 190px;
            
            p {
                color: ${Colors.warm_black_1};
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
                    color: ${Colors.grey};
                    background-color: ${Colors.just_white};
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
            background-color: ${Colors.soft_blue};
            border-radius: 8px;
            height: 30px;
            margin: 0 auto;
            margin-top: 15px;
            padding: 8px;
            width: 190px;
            
            p {
                color: ${Colors.warm_black_1};
                font-size: 1.2rem;
                font-weight: 300;
                line-height: 1.5rem;
            }
        }
    }

    .main-product-detail {
        position: relative;
        width: 100%;
        min-width: 320px;
        height: auto;
        padding: 20px 10px;
        background-color: ${Colors.warm_black};

        .product-detail--batata-logo {
            position: absolute;
            width: 40px;
            height: 25px;
            top: -10px;
            left: calc(50% - 20px);
            background-image: url(${batata});
        }
        .product-detail--title {
            width: 90%;
            min-width: 288px;
            height: auto;
            margin: 0 auto;
            margin-top: 50px;
            text-align: center;

            h2 {
                margin-bottom: 20px;
                font-size: 2.4rem;
                font-weight: bold;
                line-height: 2.6rem;
                color: ${Colors.just_white};
            }

            p {
                margin-bottom: 20px;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 1.8rem;
                color: #808080;
            }
        }
        .product-detail--card {
            width: 90%;
            min-width: 288px;
            max-width: 400px;
            height: 150px;
            margin: 15px auto;
            padding: 15px;
            background-color: ${Colors.black};
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);

            .check, .clock, .dollar, .eye {
                display: inline-block;
                width: 22px;
                height: 22px;
                margin-bottom: 10px;
            }
            .check {
                background: url(${check});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            .clock {
                background: url(${clock});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            .dollar {
                background: url(${dollar});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            .eye {
                background: url(${eye});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            .product--card-title {
                margin-bottom: 15px;
                font-size: 1.8rem;
                font-weight: bold;
                line-height: 1.8rem;
                color: ${Colors.just_white};
            }
            .product--card-body {
                margin-bottom: 15px;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 1.8rem;
                color: #808080;
            }
        }
    }
`;