import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, RefreshControl, ImageBackground} from 'react-native'
import Button from '../../components/Button';

import api from '../../services/api'
const imgFundo = '../../images/fundo.jpg'

import styles from './style';

export default class ListBase extends Component {

    constructor(props){
        super(props);
        this.title     = null;
        this.resourse  = null;
        this.form_name = null;

        this.state = {
            content: null
        }
    }

    componentDidMount(){
        this.buscaDados();
    }

    handleView(data){
        // esta função deve ser sobrescrita
    }

    async buscaDados() {
        try {
            const response1 = await api.get(this.resourse);

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
                {dataset.map( item => this.handleView(item))}
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
                                    {this.title}
                                </Text>    
                            </View>
                            <View style={styles.caixaPessoas}>
                                {this.state.content}
                                <Button icon="plus" onPress={ _ => this.props.navigation.navigate(this.form_name)}/>
                            </View> 
                        </View>
                    </View>    

                </View> 
            </ImageBackground>
        )
    }
}