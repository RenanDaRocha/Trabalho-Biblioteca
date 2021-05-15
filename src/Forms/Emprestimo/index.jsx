import React from 'react';
import FormBase from '../../components/FormBase';
import styles from '../../components/FormBase/style';
import { TextInput, View} from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import api from '../../services/api';

export default class EmprestimoForm extends FormBase {
    constructor(props){
        super(props);
        this.title     = 'Empréstimo';
        this.resourse  = '/movement/';

        this.state['options_cliente'] = []
        this.state['options_book'] = []
        this.state['date'] = '2021-05-06';
    }

    componentDidMount(){
        this.buscaDados();
    }

    async buscaDados() {
        try {
            const response_cliente = await api.get("/customer/");
            const response_book = await api.get("/book/");

            if (response_cliente){
                const options_cliente = response_cliente.data.map( cliente => {
                    return {label: cliente.firstname, value: cliente.id}
                })

                this.setState({options_cliente: options_cliente});
            }

            if (response_book){
                const options_book = response_book.data.map( book => {
                    if (book.status == 1)
                        return {label: book.title, value: book.id}
                })

                this.setState({options_book: options_book});
            }
            /*
            if (response1 && response2) {
                for (let i = 0; i < response1.data.length; i++) {

                    this.state.livros.push(response1.data[i].title)

                }
                for (let i = 0; i < response2.data.length; i++) {
                    this.state.clientes.push(response2.data[i].firstname + ' ' + response2.data[i].lastname)
                }
                console.log(this.livros)
                this.setState({ 
                    dadosLivro: response1.data,
                    dadosCliente: response2.data,
                });
            } */
            
        } catch (error) {
            console.log(error)
        }
    }

    handleForm(){
        return <>
            <View style={styles.EstiloViewImput} style={{backgroundColor: '#ccc', height: 50, color: 'black', fontSize: 20}}>
                <RNPickerSelect
                    selectedValue={this.state.customer}
                    onValueChange={(value) => this.setState({customer: value})}
                    items={this.state.options_cliente}
                    style={{backgroundColor: '#ccc'}}
                />
            </View>
            <View style={styles.EstiloViewImput} style={{backgroundColor: '#ccc', height: 50, color: 'black', fontSize: 20}}>
                <RNPickerSelect
                    selectedValue={this.state.book}
                    onValueChange={(value) => this.setState({book: value})}
                    items={this.state.options_book}
                    style={{backgroundColor: '#ccc'}}
                />
            </View>
        </>
    }
}