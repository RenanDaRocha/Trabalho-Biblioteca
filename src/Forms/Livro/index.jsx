import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'

import BotaoPadrao from '../../components/BotaoPadrao'
const imgFundo='../../images/fundo.jpg'
import api from '../../services/api';

export default class LivroForm extends Component {

    constructor(props){
        super(props);

        try {
            self.data = props.route.params.data ? props.route.params.data : null;  
        } catch (error) {
            self.data = null
        }

        this.state = {
            id: this.getProp(self.data, 'id'),
            title: this.getProp(self.data, 'title'),
            subtitle: this.getProp(self.data, 'subtitle'),
            author: this.getProp(self.data, 'author'),
            publisher: this.getProp(self.data, 'publisher'),
            isbn: this.getProp(self.data, 'isbn'),
            description: this.getProp(self.data, 'description')
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
                title: this.state.title,
                subtitle: this.state.subtitle,
                author: this.state.author,
                publisher: this.state.publisher,
                isbn: this.state.isbn,
                description: this.state.description
            }
            let response = null
            if (this.state.id)
                response = await api.put(`/book/${this.state.id}/`, data)
            else
                response = await api.post("/book/", data)

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
                            LIVRO
                        </Text>
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Título"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({title: text})}
                            value={this.state.title}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Subtítulo"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({subtitle: text})}
                            value={this.state.subtitle}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Autor"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({author: text})}
                            value={this.state.author}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="Editora"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({publisher: text})}
                            value={this.state.publisher}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            placeholder="ISBN"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({isbn: text})}
                            value={this.state.isbn}
                        />    
                    </View>
                    <View style={styles.EstiloViewImput}>
                        <TextInput 
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Descrição"
                            style={styles.EstiloImput}
                            onChangeText={text => this.setState({description: text})}
                            value={this.state.description}
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