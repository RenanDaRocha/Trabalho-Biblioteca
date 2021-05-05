import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'

import BotaoPadrao from '../componentes/BotaoPadrao'
import Livros from '../componentes/Livros'
const imgFundo='../imagens/fundo.jpg'

export default props => {
    return(
        <ImageBackground
            source={require(imgFundo)}
            style={styles.imagemFundo}
        >
            <View style={styles.telaTotal}>
                <View style={{flex: 1}}>
                    <Livros />                  
                </View>             
                <View style={styles.botao}>
                    <BotaoPadrao 
                            titulo="Cadastrar"
                            corFundo='#CCC'
                            auturaCaixa={50}
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => props.navigation.navigate("TelaCadastro")}
                        /> 
                </View>
            </View>   
        </ImageBackground>
                   
    )
}

const styles = StyleSheet.create({
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    telaTotal: {
        flex: 1,
        paddingTop: 20,
    },
    botao: {
        padding: 20,
    },  
})