import React from 'react';
import FormBase from '../../components/FormBase';
import styles from '../../components/FormBase/style';
import { TextInput, View} from 'react-native'

export default class ClienteForm extends FormBase {
    constructor(props){
        super(props);
        this.title     = 'Clientes';
        this.resourse  = '/customer/';
    }

    handleForm(){
        return <>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Nome"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({firstname: text})}
                    value={this.state && this.state.firstname}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Sobrenome"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({lastname: text})}
                    value={this.state && this.state && this.state.lastname}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Matrícula"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({number: text})}
                    value={this.state && this.state.number}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="E-mail"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({email: text})}
                    value={this.state && this.state.email}
                />    
            </View>
        </>
    }
}