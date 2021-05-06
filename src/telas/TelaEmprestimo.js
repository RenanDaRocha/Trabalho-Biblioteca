import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import {Picker} from '@react-native-picker/picker'

import BotaoPadrao from '../componentes/BotaoPadrao'
import api from '../servico/api'
const imgFundo='../imagens/fundo.jpg'


export default class TelaCadastro extends Component {

    constructor(props){
        super(props);


        this.state = {
            livros: [],
            clientes: [],
            dadosLivro: null,
            dadosCliente: null,
            selectedBook: '',
            selectedCustomer: '',
        }
    }

    componentDidMount(){
        this.buscaDados();
    }

    async buscaDados() {
        try {
            console.log('response1.dados')
            const response1 = await api.get("/book/");
            const response2 = await api.get("/customer/");

            if (response1 && response2) {
                for (let i = 0; i < response1.data.length; i++) {
                    this.state.livros.push(response1.data[i].title)
                }
                for (let i = 0; i < response2.data.length; i++) {
                    this.state.clientes.push(response2.data[i].firstname + ' ' + response2.data[i].lastname)
                }
                console.log(this.livros)
                this.setState({ 
                    dadosLivro: response1.data,
                    dadosCliente: response2.data,
                });
            } 
            
        } catch (error) {
            console.log(error)
        }
    }

    EmprestarLivro(){
        
        console.log('Entrou!')

    }

    ListaLivros = () =>{
        return( this.state.livros.map( (x,i) => { 
            return( <Picker.Item label={x} key={i} value={x}  />)} ));
    }

    ListaCliente = () =>{
        return( this.state.clientes.map( (x,i) => { 
            return( <Picker.Item label={x} key={i} value={x}  />)} ));
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
                            Emprestimo
                        </Text>
                    </View>
                    <View style={styles.EstiloViewImput}>
                        
                        <View style={{backgroundColor: 'white', borderRadius: 5}}>
                            <Picker
                                selectedValue={this.state.selectedBook}
                                style={{ height: 40}}
                                onValueChange={(itemValue, itemIndex) => this.setState({ selectedBook: itemValue})}
                            >
                                {this.ListaLivros()}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.EstiloViewImput}>
                        
                    <View style={{backgroundColor: 'white', borderRadius: 5}}>
                            <Picker
                                selectedValue={this.state.selectedCustomer}
                                style={{ height: 40}}
                                onValueChange={(itemValue, itemIndex) => this.setState({ selectedCustomer: itemValue})}
                            >
                                {this.ListaCliente()}
                            </Picker>
                        </View>   
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
                            titulo="Confirmar"
                            corFundo='#CCC'
                            auturaCaixa={50}
                            larguraCaixa='45%'
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => console.log(this.state.selectedValue)}
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