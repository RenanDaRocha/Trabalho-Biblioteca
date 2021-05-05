import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import api from '../servico/api'

const Valores = (props) => {
    const clientes = []
    if (props.dados) {
        for (let i = 0; i < props.dados.length; i++){
            
            clientes.push(
                <View>
                    <View style={styles.caixa}>
                        <Text>
                            Nome: {props.dados[i].firstname + ' ' + props.dados[i].lastname} 
                        </Text>  
                        <Text>
                            Email: {props.dados[i].email} 
                        </Text>  
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
            const response1 = await api.get("/customer/");

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
                            Clientes
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
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: 'white'
        
    }
})