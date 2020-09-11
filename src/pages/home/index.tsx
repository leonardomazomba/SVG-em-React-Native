import React from 'react';
import { View, Text } from 'react-native';
import KingIcon from '../../Imagens/Icons/king';
import DwarfIcon from '../../Imagens/Icons/dwarf';

const Home = () => {
    return (
        <>
            <View >
                <Text>Olá Mundo</Text>        
            </View>
            <KingIcon />
            <DwarfIcon />
        </>
    )
};

export default Home;