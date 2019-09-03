import React, { Component } from 'react';
import {Text, View , ScrollView } from 'react-native';

import  Header  from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import lodash from 'lodash';
import { TASK  } from './models';
import TextPrompt from './components/text-prompt';



export default class App extends Component {
  state = {
    myText: 'Robert',
    taskList:[],
    isVisible:false,
    currentTask:{},
    isAddPromptVisible:false,
    isRenamePromptVisible:false,
    generator:0,
  }

  handleOnPress = () =>{
    this.setState({myText: 'erickson'})
  }

  onDisapearCallBack=(task)=>{
    let currentTask = task;
    if(this.state.isVisible){
      currentTask={}
    }

      this.setState({
        isVisible:!this.state.isVisible,
        currentTask
      })
  }

  deleteCurrentTask = () =>{
    const { currentTask, taskList} = this.state
    //lodash permet de rechercher un objeet
    const index = lodash.findIndex(taskList,{
      id: currentTask.id
    })

    const list = taskList;
    list.splice(index,1);

    this.setState({taskList: list, currentTask:{}});

    this.onDisapearCallBack()
  } 

  toggletaskStatus= () =>{
      const { taskList , currentTask } = this.state
      const updatedTask = currentTask
   
      updatedTask.status = currentTask.status === TASK.doneStatus ? TASK.todoStatus : TASK.doneStatus
      const index = lodash.findIndex(taskList, {
        id: currentTask.id
      })
      const updatedTaskList = taskList;
      updatedTaskList[index] = updatedTask;
      this.setState({
        taskList:updatedTaskList,
        isVisible:false,
        currentTask:{},
    
      })

  }
  hideAddPrompt = ()=>{
    this.setState({isAddPromptVisible:false})
  }
  hideRenamePrompt = ()=>{
    this.setState({isRenamePromptVisible:false, currentTask:{}})
  }

  onAddTask = value =>{
    console.log(value)
      const newTask = {
        id:this.state.generator,
        content: value,
        status: TASK.todoStatus
      }

      this.setState({
         taskList:[...this.state.taskList, newTask],
         isAddPromptVisible:false,
         generator: this.state.generator + 1
        })
  }


  onRenameTask=(value)=>{
    console.log(value)
    const {currentTask, taskList } = this.state
    const updatedTask = currentTask;

    updatedTask.content = value;

    const index = lodash.findIndex(taskList, {
      id: currentTask.id
    })
    const updatedTaskList = taskList;
    updatedTaskList[index] = updatedTask;

    this.setState({
      taskList:updatedTaskList}, ( )=>{
        this.hideRenamePrompt()
      })
    
  }

  displayAddPrompt=()=>{
    this.setState({isAddPromptVisible:true})
  }

  displayRenameTask =(task)=>{
    this.setState({currentTask:task , isRenamePromptVisible:true})
  }


   render() {

    return (
      <View style ={{flex:1}}>
    
            <Header  />
            <ScrollView>
              <TaskList 
              taskList={this.state.taskList}
              onDisapearCallBack={this.onDisapearCallBack}
              onLongPressCallBack={this.displayRenameTask}
              />
            </ScrollView>
            <MenuTask 
              isVisible={this.state.isVisible}
              onDisapearCallBack={this.onDisapearCallBack}
              onDeleteCallBack ={this.deleteCurrentTask}
              onChangeStatusCallBack = { this.toggletaskStatus }
              
            />
            <TextPrompt 
              isVisible={this.state.isAddPromptVisible}
              onCancelCallBack={ this.hideAddPrompt}
              onSubmitCallBack={this.onAddTask }
              title= 'ajouter une nouvelle tache'
              placeholder =' ex: faire le menage'
              defaultValue=''
              
              />
            

            <TextPrompt 
              isVisible={this.state.isRenamePromptVisible}
              onCancelCallBack={ this.hideRenamePrompt}
              onSubmitCallBack={this.onRenameTask }
              title='renommer la tache'
              placeholder=''
              defaultValue={this.state.currentTask.content}
              />
            <ButtonAddTask onPresCallBack ={this.displayAddPrompt} />
      </View>
  
    );
  }
}


