import React from 'react';
import ListBase from '../../components/ListBase';
import styles from '../../components/ListBase/style';
import { Text, View, TouchableOpacity} from 'react-native'

export default class Cliente extends ListBase {
    constructor(props){
        super(props);
        this.title     = 'Clientes';
        this.resourse  = '/customer/';
        this.form_name = 'ClienteForm';
    }

    handleView(data){
        return <>
            <TouchableOpacity key={data.id} onPress={e => this.props.navigation.navigate("ClienteForm", {data: data, onGoBack: _ => super.buscaDados()})}>
                <View style={styles.caixa}>
                    <View>
                        <View>
                            <Text style={styles.tituloLivro}>
                                {data.firstname} {data.lastname} 
                            </Text>    
                        </View>

                        <View>
                            <Text style={styles.subTituloLivro}>
                                {data.number} 
                                {'\n'}
                            </Text>
                        </View>    
                    </View>                
                </View>   
                <View style={{paddingTop: 10}}/>   
            </TouchableOpacity> 
        </>
    }
}