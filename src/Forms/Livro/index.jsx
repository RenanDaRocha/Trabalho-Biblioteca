import React from 'react';
import FormBase from '../../components/FormBase';
import styles from '../../components/FormBase/style';
import { TextInput, View} from 'react-native'

export default class LivroForm extends FormBase {
    constructor(props){
        super(props);
        this.title     = 'Livros';
        this.resourse  = '/book/';
    }

    handleForm(){
        return <>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Título"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({title: text})}
                    value={this.state && this.state.title}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Subtítulo"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({subtitle: text})}
                    value={this.state && this.state.subtitle}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Autor"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({author: text})}
                    value={this.state && this.state.author}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="Editora"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({publisher: text})}
                    value={this.state && this.state.publisher}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    placeholder="ISBN"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({isbn: text})}
                    value={this.state && this.state.isbn}
                />    
            </View>
            <View style={styles.EstiloViewImput}>
                <TextInput 
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Descrição"
                    style={styles.EstiloImput}
                    onChangeText={text => this.setState({description: text})}
                    value={this.state && this.state.description}
                />    
            </View>
        </>
    }
}