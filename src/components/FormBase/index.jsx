import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'

import Button from '../../components/Button';
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
                this.props.route.params.onGoBack();
                this.props.navigation.goBack();
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
                this.props.route.params.onGoBack();
                this.props.navigation.goBack()
            }

        } catch (error) {
            alert(error.message)
        }
    }

    handleButtons(){
        return <>
            <View style={styles.botoes}>
                <Button 
                    icon="content-save"
                    onPress={() => this.handleSave()}                            
                /> 
                                            
            </View>
            <View style={styles.botoes}>
                <Button 
                    icon="keyboard-backspace"
                    onPress={() => this.props.navigation.goBack()}                            
                />
            </View>
            {this.state && this.state.id && <View style={styles.botoes}>                         
                <Button 
                    icon="delete"
                    onPress={() => this.handleDelete()}                                           
                />   
            </View>}
        </>
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
                    <View style={{height: '70%'}}>
                        {this.handleForm()}
                    </View>
                    
                    {this.handleButtons()}                                     
                </View>   
            </ImageBackground>                    
        )
    }
}