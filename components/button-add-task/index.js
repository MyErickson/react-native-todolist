import React from 'react'
import { Icon } from 'react-native-elements'
import ActionButton from 'react-native-action-button';

const ButtonAddTask = ({onPresCallBack}) => {
    handleOnPress=()=>{
        console.log('add')
    }
    return(
        <ActionButton 
        buttonColor='#24E0E9'
        renderIcon={(active) => active && (<Icon color='white' name='add'/>)}
        onPress={onPresCallBack}
        />
      
    )
}

export default ButtonAddTask