import React from 'react';
import  { View, Text} from 'react-native';
import { Button } from 'react-native-elements' ;
import Modal from 'react-native-modal';

import { style } from './style';

const MenuTask = ({isVisible,onDisapearCallBack}) => {

 

    return(
    
            <Modal
            isVisible={ isVisible }
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={1500}
            animationOutTiming={1500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onBackdropPress ={ () =>onDisapearCallBack() }
            
            >
                    
                        <View style={style.modal}>   
                            <View style={style.textView}>
                                    <Text>Que souhaitez vous faire sur la tache </Text>
                            </View>
                            <View style={style.buttonView}>
                                    <Button
                                    buttonStyle={style.buttonDelete}
                                    title="Supprimer"
                                    onPress={()=> onDisapearCallBack()}
                                    />
                                    <Button
                                    buttonStyle={style.buttonChangeStatus}
                                    title="Changer Status"
                                    onPress={()=> onDisapearCallBack()}
                                    />
                                    
                            </View>
                        </View>
                    
            </Modal>
 
    )
}

export default MenuTask