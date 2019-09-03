import React from 'react';
import Prompt from 'rn-prompt';
 
const TextPrompt =({onCancelCallBack , onSubmitCallBack, isVisible , title , placeholder,defaultValue})=>{
return (
    <Prompt
    title={title}
    placeholder={placeholder}
    defaultValue={defaultValue}
    visible={ isVisible }
    onCancel={ () =>  onCancelCallBack() }
    onSubmit={ value => onSubmitCallBack(value) }/>
)
}

export default TextPrompt