import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'

import BotaoPadrao from '../../components/BotaoPadrao'
const imgFundo='../../images/fundo.jpg'
import api from '../../services/api';

export default class ClienteForm extends Component {

    constructor(props){
        super(props);

        try {
            self.data = props.route.params.data ? props.route.params.data : null;  
        } catch (error) {
            self.data = null
        }

        this.state = {
            id: this.getProp(self.data, 'id'),
            firstname: this.getProp(self.data, 'firstname'),
            lastname: this.getProp(self.data, 'lastname'),
            number: this.getProp(self.data, 'number'),
            email: this.getProp(self.data, 'email')
        }
    }

    getProp(data, field){
        if (data === undefined)
            return null

        if (data === null)
            return null

        return data[field]
    }

    async handleSave(){
        try {
            data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                number: this.state.number,
                email: this.state.email
            }
            let response = null
            if (this.state.id)
                response = await api.put(`/customer/${this.state.id}/`, data)
            else
                response = await api.post("/customer/", data)

            if (response){
                alert('Dados salvos com sucesso...')
                this.props.navigation.goBack()
            }

        } catch (error) {
            console.log(error)
        }
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
                            onChangeText={text => this.setState({firstname: text})}
                            value={this.state.firstname}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Sobrenome"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({lastname: text})}
                            value={this.state.lastname}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Matrícula"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({number: text})}
                            value={this.state.number}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="E-mail"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({email: text})}
                            value={this.state.email}
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
                            onClick={() => this.handleSave()}
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
        paddingTop: 30
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