import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
    },
    corpo: {
        flex: 2,
        flexDirection: 'row',
        padding: 30,
        
    },
    stretch: {      
        width: 300,
        borderRadius: 50,
    },
    entradas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
    },
    login: {
        height: 40, 
        width: 250, 
        fontSize: 24
    },
    icon: {
        paddingTop: 3,
    },
    senhaInvalida: {
        paddingTop: 10,
        color: 'red',
        fontSize: 16,
    },
    topo: {
        paddingBottom: 100,
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