import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { PlusCircle, Clipboard } from 'react-native-feather';

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Task } from "../../components/Task";

interface Props{
    task : string
    isChecked : boolean
}

export function Home(){
    const [task, setTask] = useState('')
    const [focus, setFocus] = useState(false)
    const [tasks, setTasks] = useState<Props[]>([])

    function handleCheck(item : string){
        setTasks(prevState => prevState.filter(el => {
            if(el.task === item){
                el.isChecked ? el.isChecked = false : el.isChecked = true
            }
            return el
        })
    )}

    function handleAddItem(){
        if(!task.trim()){
            setTask('')
            return Alert.alert('Item inválido', 'O item precisa de no mínimo 1 carácter')
        }
        // if(tasks.){
        //     return Alert.alert('Tarefa existente', 'Essa tarefa já foi cadastrada')
        // }

        setTasks(prevState => [...prevState, {task: task, isChecked: false}])
        setTask('')
    }

    function handleRemoveItem(description:string){
        setTasks(prevState => prevState.filter(el => el.task !== description))
    }


    // useEffect(()=> {}, [check])
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/img/Logo.png')}/>
            </View>

            <View style={styles.mainContent}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={!focus ? styles.inputDefault : styles.inputActive}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={THEME.COLORS.Base.grey[300]}
                        onChangeText={setTask}
                        value={task}
                        onFocus={()=> setFocus(true)}
                        onBlur={()=> setFocus(false)}
                    />
                    <TouchableOpacity
                        style={styles.inputButton}
                        onPress={handleAddItem}
                    >
                        <PlusCircle color={'white'} height={16} width={16}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textView}>
                        <Text style={styles.createdTasks}>Criadas</Text>
                        <Text style={styles.textValue}>{tasks.length}</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.completedTasks}>Concluídas</Text>
                        <Text style={styles.textValue}>{tasks.filter(el => el.isChecked === true).length}</Text>
                    </View>
                </View>
                <View style={styles.itemsContainer}>
                    <FlatList
                        data={tasks}
                        keyExtractor={tasks => tasks.task}
                        renderItem= {({item})=> (
                            <Task 
                                key={item.task}
                                isChecked={item.isChecked}
                                description={item.task}
                                onCheck={() => handleCheck(item.task)}
                                onRemove={() => handleRemoveItem(item.task)
                                }
                            />
                        )}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <Clipboard width={56} height={56} color={THEME.COLORS.Base.grey[300]} />
                                <View style={styles.emptyTextContainer}>
                                    <Text style={styles.emptyText}>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={styles.subEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        </View>
    )
}