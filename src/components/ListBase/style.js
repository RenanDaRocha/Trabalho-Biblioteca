import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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