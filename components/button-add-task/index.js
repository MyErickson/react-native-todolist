import React from 'react'
import { Icon } from 'react-native-elements'
import ActionButton from 'react-native-action-button';

const ButtonAddTask = (props) => {
    handleOnPress=()=>{
        console.log('add')
    }
    return(
        <ActionButton 
        buttonColor='#24E0E9'
        icon={<Icon color='white' name='add'/>}
        onPress={handleOnPress}
        />
      
    )
}

export default ButtonAddTask