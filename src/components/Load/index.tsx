import React from 'react';

import loadAnimation from '../../assets/load.json';

import { Container, Animation } from './styles';

const Load: React.FC = () => {
    return (
        <Container>
            <Animation source={loadAnimation} autoPlay loop />
        </Container>
    );
};

export default Load;
