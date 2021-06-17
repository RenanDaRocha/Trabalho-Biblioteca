import React from 'react';
import FormBase from '../../components/FormBase';
import styles from '../../components/FormBase/style';
import { View, Text} from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import api from '../../services/api';
import Button from '../../components/Button';

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
            const response_book    = await api.get("/book/");
            
            if (this.state.books){
                this.state['books'] = this.state.books[0];
            }    
            
            aux_books    = this.state['books'];
            aux_customer = this.state['customer'];

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
                    
                    return {}
                })
                
                this.setState({options_book: options_book});
            }      
            
            this.setState({books: aux_books, customer: aux_customer});
        } catch (error) {
            console.log(error)
        }
    }

    async handleSave(){
        this.state['books'] = [this.state['books']]
        super.handleSave()
    }

    async handleReturnBook(){
        try {
            const dados    = {loan: this.state.id, books: [this.state['books']]}            
            const response = await api.post('/movement/make_return/', dados);

            if (response){                
                this.props.route.params.onGoBack();
                this.props.navigation.goBack();
            }

        } catch (error) {                      
            alert(error.message)
        }
    }

    handleButtons(){
        return <>
            {this.state.id && this.state.closed == false && <View>
                <Button icon="book-lock-open" onPress={ _ => this.handleReturnBook()} />
            </View>}
            {super.handleButtons()}
        </>
    }

    handleForm(){
        return <>        
            <View style={styles.EstiloViewImput} style={{height: 50, color: 'black', margin: 20}}>                
                <RNPickerSelect
                    selectedValue={this.state.customer}
                    onValueChange={(value) => this.setState({customer: value})}
                    items={this.state.options_cliente}                       
                >
                    <Text style={{fontSize: 20, color: 'white', marginBottom: 20}}>Click aqui e selecione o cliente</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>{this.state.customer}</Text>
                </RNPickerSelect>    
            </View>
            <View style={styles.EstiloViewImput} style={{height: 50, color: 'black', fontSize: 20, margin: 20}}>                
                <RNPickerSelect
                    selectedValue={this.state.books}
                    onValueChange={(value) => this.setState({books: value})}
                    items={this.state.options_book}                                                      
                >
                    <Text style={{fontSize: 20, color: 'white', marginBottom: 20}}>Click aqui e selecione o livro</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>{this.state.books}</Text>
                </RNPickerSelect>  
            </View>        
        </>
    }
}