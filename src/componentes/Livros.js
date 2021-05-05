import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import api from '../servico/api'

const Valores = (props) => {
    const clientes = []
    if (props.dados) {
        for (let i = 0; i < props.dados.length; i++){
            clientes.push(
                <View>
                    <View style={styles.caixa}>
                        <View>
                            {/*<Image
                                resizeMode='center'
                                source={require(props.dados[i].photo)}
                            /> */}
                        </View>
                        <View>
                        <View>
                            <Text style={styles.tituloLivro}>
                                {props.dados[i].title} 
                            </Text>    
                        </View>

                        <View>
                            <Text style={styles.subTituloLivro}>
                                {props.dados[i].subtitle} 
                                {'\n'}
                            </Text>
                        </View>  
                          
                        <Text>
                            Autor: {props.dados[i].author} 
                        </Text>   
                        <Text>
                            Editora: {props.dados[i].publisher} 
                        </Text>      
                        </View>
                        
                    </View>   
                    <View style={{paddingTop: 10}}/>   
                </View>
                    
            )
        }   
    }
    return (clientes)
}

export default class TelaPrincipal extends Component {

    constructor(props){
        super(props);

        this.state = {
            dados: null,
        }
    }

    componentDidMount(){
        this.buscaDados();
    }

    async buscaDados() {
        try {
            const response1 = await api.get("/book/");

            if (response1) {
                this.setState({ dados: response1.data });
            } 
            
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.blocoPrincipal}>
                    <View style={styles.caixaTitulo}>
                        <Text style={styles.titulo}>
                            Acervo de Livros
                        </Text>    
                    </View>
                    <View style={styles.caixaPessoas}>
                        <Valores dados={this.state.dados}/>
                    </View>
                        
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    blocoPrincipal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 10,
    },
    titulo: {
        color: 'white',
        fontSize: 32
    }, 
    caixaTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    caixaPessoas:{
        padding: 20,
    },
    caixa: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white'
        
    },
    tituloLivro: {
        fontSize: 18,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    subTituloLivro: {
        fontSize: 15,
    }
})