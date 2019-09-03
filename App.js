import React, { Component } from 'react';
import {Text, View , ScrollView } from 'react-native';

import  Header  from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import lodash from 'lodash';
import { TASK  } from './models';




const taskList = [
  {
    id:1,
    title: 'Faire le mengage',
    status: 'En cours'
  },
  {
    id:2,
    title: 'Faire la vaiselle',
    status: 'En cours'
  },
  {
    id:3,
    title: 'Promener le chien',
    status: 'Terminé'
  },
  {
    id:4,
    title: 'Faire le mengage',
    status: 'En cours'
  },
  {
    id:5,
    title: 'Faire la vaiselle',
    status: 'En cours'
  },
  {
    id:6,
    title: 'Promener le chien',
    status: 'Terminé'
  },
  {
    id:7,
    title: 'Faire le mengage',
    status: 'En cours'
  },
  {
    id:8,
    title: 'Faire la vaiselle',
    status: 'En cours'
  },
  {
    id:9,
    title: 'Promener le chien',
    status: 'Terminé'
  },
  {
    id:10,
    title: 'Faire le mengage',
    status: 'En cours'
  },
  {
    id:11,
    title: 'Faire la vaiselle',
    status: 'En cours'
  },
  {
    id:12,
    title: 'Promener le chien',
    status: 'Terminé'
  },

];
export default class App extends Component {
  state = {
    myText: 'Robert',
    taskList,
    isVisible:false,
    currentTask:{}
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
        currentTask:{}
      })

  }


   render() {

    return (
      <View style ={{flex:1}}>
    
            <Header  />
            <ScrollView>
              <TaskList 
              taskList={this.state.taskList}
              onDisapearCallBack={this.onDisapearCallBack}
              />
            </ScrollView>
            <MenuTask 
            isVisible={this.state.isVisible}
            onDisapearCallBack={this.onDisapearCallBack}
            onDeleteCallBack ={this.deleteCurrentTask}
            onChangeStatusCallBack = { this.toggletaskStatus }
            />
            <ButtonAddTask />
      </View>
  
    );
  }
}


