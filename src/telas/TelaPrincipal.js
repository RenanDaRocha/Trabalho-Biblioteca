import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import BotaoPadrao from '../componentes/BotaoPadrao'
const imgFundo='../imagens/fundo.jpg'

export default class TelaPrincipal extends Component {
    render(){
    return(
        <ImageBackground
            source={require(imgFundo)}
            style={styles.imagemFundo}
        >
            <View style={styles.telaTotal}>
                <View style={styles.informacoes}>
                    <Text style={styles.Titulo}>
                        Biblioteca Unifeso
                    </Text>
                </View>
                <View style={{paddingBottom: 50}}/>
                <View style={styles.botao}>
                    <BotaoPadrao 
                        titulo="Cadastrar Livro"
                        corFundo='#CCC'
                        onClick={() => this.props.navigation.navigate("TelaCadastro")}
                    />    
                </View>
                <View style={styles.botao}>
                    <BotaoPadrao 
                        titulo="Cadastrar Cliente"
                        corFundo='#CCC'
                        onClick={() => this.props.navigation.navigate("TelaCadastroCliente")}
                    />    
                </View>
                <View style={styles.botao}>
                    <BotaoPadrao 
                        titulo="Emprestimo"
                        corFundo='#CCC'
                        onClick={() => this.props.navigation.navigate("TelaEmprestimo")}
                    />    
                </View>
                <View style={styles.botao}>
                    <BotaoPadrao 
                        titulo="Devolução"
                        corFundo='#CCC'
                        onClick={() => this.props.navigation.navigate("TelaDevolucao")}
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    botao: {
        flexDirection: 'row', 
        padding: 20,
        paddingBottom: 0,
    },
    informacoes: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        borderColor: 'white',
        borderWidth: 1,
        
    },
    Titulo: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 42,
        color: 'white',
    },
})