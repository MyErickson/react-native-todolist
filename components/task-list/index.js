import React from 'react'
import { View }from 'react-native'
import { ListItem, Badge } from 'react-native-elements'
import { TASK } from '../../models'

const TaskList = ({taskList}) => {
    return (
        <View>
            {taskList.map( task => (
            <ListItem 
                key={task.id}
                title={task.title}
                badge={

                    {  value :task.status,
                }
                }
            />
            ) )}
            
        </View>
    )
}


export default TaskList
