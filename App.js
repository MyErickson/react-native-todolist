import React, { Component } from 'react';
import {Text, View , ScrollView } from 'react-native';

import  Header  from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task'

const list = [
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
    myText: 'Robert'
  }

  handleOnPress = () =>{
    this.setState({myText: 'erickson'})
  }
  render() {
    return (
      <View style ={{flex:1}}>
    
            <Header  />
            <ScrollView>
              <TaskList taskList={list}/>
            </ScrollView>
           
            <ButtonAddTask />
      </View>
  
    );
  }
}


