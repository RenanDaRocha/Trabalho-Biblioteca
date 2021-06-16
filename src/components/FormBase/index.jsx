import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'

import BotaoPadrao from '../../components/BotaoPadrao'
const imgFundo='../../images/fundo.jpg'
import api from '../../services/api';
import styles from './style';

export default class FormBase extends Component {

    constructor(props){
        super(props);
        this.title    = null
        this.resourse = null;

        this.state = {

        };

        try {
            this.data = props.route.params.data ? props.route.params.data : null;  
        } catch (error) {
            this.data = null
        }

        if (this.data){
            state = {}
            Object.keys(this.data).map(field => state[field] = this.getProp(this.data, field))
            this.state = state
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
            let response = null                    
            if (this.state.id)
                response = await api.put(`${this.resourse}${this.state.id}/`, this.state)
            else
                response = await api.post(this.resourse, this.state)                        

            if (response){
                alert('Dados salvos com sucesso...')
                this.props.navigation.goBack()
            }

        } catch (error) {            
            alert(error.message)
        }
    }

    handleForm(){
        // esta função deve ser sobrescrita
    }

    async handleDelete(){
        try {
            let response = null            
            if (this.state.id)
                response = await api.delete(`${this.resourse}${this.state.id}/`, this.state)                    

            if (response){
                alert('Dados salvos com sucesso...')
                this.props.navigation.goBack()
            }

        } catch (error) {
            alert(error.message)
        }
    }

    render(){
        return (
            <ImageBackground
                source={require(imgFundo)}
                style={styles.imagemFundo}
            >
                <View style={styles.telaTotal}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.titulo}>
                            {this.title}
                        </Text>
                    </View>
                    {this.handleForm()}
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
                    {this.state && this.state.id && <View style={styles.botoes}>
                        <BotaoPadrao 
                            titulo="Deletar"
                            corFundo='#CCC'
                            auturaCaixa={50}
                            larguraCaixa='45%'
                            TamFonte={24}
                            borderRadius={50}
                            onClick={() => this.handleDelete()}
                        />     
                    </View>}
                                     
                </View>   
            </ImageBackground>                    
        )
    }
}