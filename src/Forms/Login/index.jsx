import React, { Component } from 'react';
import styles from './style';
import { View, Text, TextInput, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

import api from '../../services/api';
const imgFundo= '../../images/fundo.jpg'

export default class TelaLogin extends Component {

    constructor(props){
        super(props);

        this.state = {
            dados: null,
            valueLogin: '',
            valueSenha: '',
            peopleIcon: "people",
            eyeIcon: "visibility",
            Esenha: true,
            SenhaInvalida: false,
        }
    }

    componentDidMount(){
        this.buscaDados();
    }

    async buscaDados() {
        try {
            // Comentado pois ainda não sei a rota
            //const response = await api.get("");
            //this.setState({dados: response.data}) 
        } catch (error) {
            console.log(error)
        }
    }

    render(){

        const changePwdType = () => {
            this.setState({eyeIcon: this.state.eyeIcon === "visibility" ? "visibility-off": "visibility"}) 
            this.setState({Esenha: !this.state.Esenha}) 
        };  

        const ExecutarLogin = () => {
            // Retirar a linha abaixo depois
            this.props.navigation.navigate("TabNavigator")

            /*if (this.state.dados) {
                try {
                    let retorno = false
                    for (let i = 0; i < this.state.dados.length; i++) {
                        if ((this.state.valueLogin.toUpperCase() == this.state.dados.login) && 
                            (this.state.valueSenha.toUpperCase() == this.state.dados.senha))
                        {
                            retorno = true 
                        }
                    }
                    this.setState({SenhaInvalida: !retorno})
                    if (retorno) {
                        this.props.navigation.navigate("TabNavigator")    
                    }                 
                } catch (error) {
                    console.log(error)
                }
            }   */    
        }

        return <>
            <ImageBackground
                source={require(imgFundo)}
                style={styles.imagemFundo}
            >
                <View style={styles.container}>
                    <View style={styles.topo}>
                        <View style={styles.informacoes}>
                            <Text style={styles.Titulo2}>
                                Biblioteca Unifeso
                            </Text>
                        </View>
                    </View> 

                    <View>
                        <View style={styles.entradas}>
                            <TextInput 
                                style={styles.login}
                                placeholder="Usuário"
                                onChangeText={text => this.setState({valueLogin: text})}
                                value={this.state.valueLogin}
                                color='white'
                                placeholderTextColor='#cccccc'
                            /> 
                            <Icon
                                style={styles.icon}
                                name={this.state.peopleIcon}
                                size={33}
                                color="white"
                            />       
                        </View>  
                        <View style={{paddingBottom: 20}}/>
                        <View style={styles.entradas}>
                            <TextInput 
                                style={styles.login}
                                placeholder="Senha"
                                secureTextEntry={this.state.Esenha}
                                onChangeText={text => this.setState({valueSenha: text})}
                                value={this.state.valueSenha}
                                color='white'
                                placeholderTextColor='#cccccc'
                            /> 
                            <Icon
                                style={styles.icon}
                                name={this.state.eyeIcon}
                                size={33}
                                color="white"
                                onPress={changePwdType}
                            /> 
                        </View> 
                        <View>
                            {this.state.SenhaInvalida ? (
                                <Text style={styles.senhaInvalida}>
                                    Usuário ou senha inválido
                                </Text>    
                            ) : null}   
                        </View>
                        <View style={{paddingTop: 40}}> 
                        <TouchableWithoutFeedback onPress={() => ExecutarLogin()}>
                            <Text 
                                style={{
                                    height: 70,    
                                    fontSize: 32,
                                    borderRadius: 5,
                                    backgroundColor: '#FFF',
                                    color: 'black',
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                }}
                            >
                                Entrar  
                            </Text>   
                        </TouchableWithoutFeedback>    

                        </View>                                 
                    </View>        
                </View>
            </ImageBackground>
        </>
    }
}