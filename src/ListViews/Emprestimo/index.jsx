import React from 'react';
import ListBase from '../../components/ListBase';
import styles from '../../components/ListBase/style';
import { Text, View, TouchableOpacity} from 'react-native'

export default class EmprestimoList extends ListBase {
    constructor(props){
        super(props);
        this.title     = 'Empréstimos';
        this.resourse  = '/movement/?status=1';
        this.form_name = 'EmprestimoForm';
    }

    handleView(data){
        return <>
            <TouchableOpacity key={data} onPress={e => this.props.navigation.navigate("EmprestimoForm", {data: data, onGoBack: _ => super.buscaDados()})}>
                <View style={styles.caixa}>
                    <View>
                        <View>
                            <Text style={styles.tituloLivro}>
                                Nº: {data.id}
                            </Text>    
                        </View>
                        <View>
                            <Text style={styles.tituloLivro}>
                                {data.customer_name}
                            </Text>    
                        </View>
                        <View>
                            <Text>
                                {data.date} 
                            </Text>
                        </View>    
                        <View>
                            <Text style={data.closed == true ? {color: 'red', fontWeight: 'bold'} : {color: 'blue', fontWeight: 'bold'}}>
                                {data.closed == true ? 'Fechado' : 'Ativo'} 
                            </Text>
                        </View>  
                    </View>                
                </View>   
                <View style={{paddingTop: 10}}/>   
            </TouchableOpacity> 
        </>
    }
}