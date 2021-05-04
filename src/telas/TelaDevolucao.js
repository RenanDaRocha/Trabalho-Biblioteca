import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'

import BotaoPadrao from '../componentes/BotaoPadrao'
const imgFundo='../imagens/fundo.jpg'

export default class TelaDevolucao extends Component {
    render(){
        return(
            <ImageBackground
                source={require(imgFundo)}
                style={styles.imagemFundo}
            >
                <View style={styles.telaTotal}>
                    <View style={{flex: 1}}>
                        <View>
                                    
                        </View>                          
                    </View>             
                    <View style={styles.botao}>
                        <BotaoPadrao 
                            titulo="Cancelar"
                            corFundo='#CCC'
                            larguraCaixa='45%'
                            auturaCaixa={50}
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => this.props.navigation.goBack()}
                        /> 
                        <BotaoPadrao 
                            titulo="Confirmar"
                            corFundo='#CCC'
                            larguraCaixa='45%'
                            auturaCaixa={50}
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => this.props.navigation.navigate("TelaCadastro")}
                        /> 
                    </View>
                </View>   
            </ImageBackground>
                    
        )
    }
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
        flexDirection: 'row',
        justifyContent: 'space-around',
    },  
})