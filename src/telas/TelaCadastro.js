import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'

import BotaoPadrao from '../componentes/BotaoPadrao'
const imgFundo='../imagens/fundo.jpg'

export default class TelaCadastro extends Component {

    constructor(props){
        super(props);

        this.state = {
            dados: null,
            valTitulo: '',
            valSubTitulo: '',
            valAutor: '',
            valISBN: '',
        }
    }

    gravarLivro(){
        console.log('Entrou!')

        this.setState({
            valTitulo: '',
            valSubTitulo: '',
            valAutor: '',
            valISBN: '',
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
                            LIVRO
                        </Text>
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Título"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({valTitulo: text})}
                            value={this.state.valTitulo}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="SubTítulo"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({valSubTitulo: text})}
                            value={this.state.valSubTitulo}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Autor"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({valAutor: text})}
                            value={this.state.valAutor}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="ISBN"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({valISBN: text})}
                            value={this.state.valISBN}
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
                            onClick={() => this.gravarLivro()}
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