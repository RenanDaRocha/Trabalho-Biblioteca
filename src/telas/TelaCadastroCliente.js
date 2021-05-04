import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'

import BotaoPadrao from '../componentes/BotaoPadrao'
const imgFundo='../imagens/fundo.jpg'

export default class TelaCadastro extends Component {

    constructor(props){
        super(props);

        this.state = {
            dados: null,
            valNome: '',
            valMatricula: '',
        }
    }

    gravarCliente(){
        console.log('Entrou!')

        this.setState({
            valNome: '',
            valMatricula: '',
        })
    }

    render(){
        return(
            <ImageBackground
                source={require(imgFundo)}
                style={styles.imagemFundo}
            >
                <View style={styles.telaTotal}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.titulo}>
                            CLIENTE
                        </Text>
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Nome"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({valNome: text})}
                            value={this.state.valNome}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Matrícula"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({valMatricula: text})}
                            value={this.state.valMatricula}
                        />    
                    </View>
                    <View style={styles.botoes}>
                        <BotaoPadrao 
                            titulo="Cancelar"
                            corFundo='#CCC'
                            auturaCaixa={50}
                            larguraCaixa='45%'
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => this.props.navigation.goBack()}
                        />   
                        <BotaoPadrao 
                            titulo="Cadastrar"
                            corFundo='#CCC'
                            auturaCaixa={50}
                            larguraCaixa='45%'
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => this.gravarCliente()}
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
        padding: 10,
        paddingTop: 30,
    },
    titulo: {
        color: 'white',
        fontSize: 40,
        paddingBottom: 20,
    },
    EstiloViewImput: {
        padding: 20,

    }, 
    EstiloImput: {
        backgroundColor: 'white',
        height: 35,
        width: '100%'
    },
    botoes: {
        paddingTop: 50,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})