import React from 'react';
import ListBase from '../../components/ListBase';
import styles from '../../components/ListBase/style';
import { Text, View, TouchableOpacity} from 'react-native'

export default class Livro extends ListBase {
    constructor(props){
        super(props);
        this.title     = 'Acervo de Livros';
        this.resourse  = '/book/';
        this.form_name = 'LivroForm';
    }

    handleView(data){
        return <>
            <TouchableOpacity key={data} onPress={e => this.props.navigation.navigate("LivroForm", {data: data, handleView: _ => super.buscaDados()})}>
                <View style={styles.caixa}>
                    <View>
                        <View>
                            <Text style={styles.tituloLivro}>
                                {`${data.id} - ${data.title}`} 
                            </Text>    
                        </View>

                        <View>
                            <Text style={styles.subTituloLivro}>
                                {data.subtitle} 
                                {'\n'}
                            </Text>
                        </View>  
                        
                        <Text>
                            Autor: {data.author} 
                        </Text>   
                        <Text>
                            Editora: {data.publisher} 
                        </Text>   
                        <Text style={data.status == 1 ? {fontWeight: 'bold', color: 'green'} : {fontWeight: 'bold', color: 'red'}}>
                            Status: {data.status == 1 ? 'Disponível' : 'Não disponível'} 
                        </Text>    
                    </View>
                
                </View>   
                <View style={{paddingTop: 10}}/>   
            </TouchableOpacity> 
        </>
    }
}