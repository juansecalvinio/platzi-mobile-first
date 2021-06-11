import React from 'react'
import { MainContainer } from './styled';
import Exchange from './Exchange';
import Benefits from './Benefits';

const Main = () => {
    return (
        <MainContainer>
            <Exchange />
            <Benefits />
        </MainContainer>
    )
}

export default Main;
