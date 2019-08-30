import React from 'react';
import {Text , View } from 'react-native';
import { style } from './style'


const Header = ( ) => {
    return(
        <View >
            <View style={style.subHeader}/>
            <View style= {style.header}> 
                 <Text style={style.text}> Hello erickson</Text>
            </View>

        </View>
    )
}

export default Header