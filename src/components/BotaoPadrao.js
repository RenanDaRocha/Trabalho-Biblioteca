import React from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'

export default props => {

    return (
        <TouchableWithoutFeedback onPress={() => props.onClick()}>
            <Text 
                style={{
                    height: props.auturaCaixa || 70, 
                    width: props.larguraCaixa || '100%',  
                    backgroundColor: props.corFundo || 'white',
                    color: props.corFonte || 'black',
                    fontSize: props.TamFonte || 32,
                    borderRadius: props.borderRadius || 10,
                    textAlign: props.textAlign || 'center',
                    textAlignVertical: 'center',
                }
                }
            >
                {props.titulo}    
            </Text>   
        </TouchableWithoutFeedback>
    )    
}