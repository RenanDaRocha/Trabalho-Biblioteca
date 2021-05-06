import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, RefreshControl, ImageBackground, TouchableOpacity} from 'react-native'
import Button from '../../components/Button';

import api from '../../services/api'
const imgFundo = '../../images/fundo.jpg'

export default class LivrosList extends Component {

    constructor(props){
        super(props);

        this.state = {
            content: null
        }
    }

    componentDidMount(){
        this.buscaDados();
    }

    async buscaDados() {
        try {
            const response1 = await api.get("/customer/");

            if (response1) {
                this.setState({ content: null });
                this.setState({ content: this.handleList(response1.data) });
            } 
            
        } catch (error) {
            console.log(error)
        }
    }

    handleList(dataset){
        return <SafeAreaView>
            <ScrollView refreshControl={<RefreshControl onRefresh={ _ => this.buscaDados()} />} >
                {dataset.map( item => {
                    return <>
                        <TouchableOpacity key={item} onPress={e => this.props.navigation.navigate("ClienteForm", {data: item})}>
                            <View style={styles.caixa}>
                                <View>
                                    <View>
                                        <Text style={styles.tituloLivro}>
                                            {item.firstname} {item.lastname} 
                                        </Text>    
                                    </View>

                                    <View>
                                        <Text style={styles.subTituloLivro}>
                                            {item.number} 
                                            {'\n'}
                                        </Text>
                                    </View>    
                                </View>
                            
                            </View>   
                            <View style={{paddingTop: 10}}/>   
                        </TouchableOpacity> 
                    </>
                })}
            </ScrollView>
        </SafeAreaView>
    }

    render(){
        return(
            <ImageBackground
                source={require(imgFundo)}
                style={styles.imagemFundo}
            >
                <View style={styles.topo}>
                    <View style={styles.informacoes}>
                        <Text style={styles.Titulo2}>
                            Biblioteca Unifeso
                        </Text>
                    </View>
                </View>   
                <View style={{flex: 1}}>

                    <View style={styles.container}>
                        <View style={styles.blocoPrincipal}>
                            <View style={styles.caixaTitulo}>
                                <Text style={styles.titulo}>
                                    Clientes
                                </Text>    
                            </View>
                            <View style={styles.caixaPessoas}>
                                {this.state.content}
                                <Button onPress={ _ => this.props.navigation.navigate("ClienteForm")}/>
                            </View> 
                        </View>
                    </View>    

                </View> 
            </ImageBackground>
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
        flex: 1,
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
    },
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    topo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        width: '100%'
    },
    informacoes: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        borderColor: 'white',
        borderWidth: 1,
        
    },
    Titulo2: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 42,
        color: 'white',
    },
})