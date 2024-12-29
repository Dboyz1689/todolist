import {useEffect, useState} from 'react'
import {
    Container,
    CssBaseline
} from '@mui/material'
import Appbar from "./Components/Appbar.jsx";
import Tasklist from "./Components/Tasklist.jsx";
import Addtask from "./Components/Addtask.jsx";

const App = () => {
    const [tasks, setTasks] = useState([{}])
    const [newTask, setNewTask] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchTasks = async() => {
            const storedTasks = await JSON.parse(localStorage.getItem('tasks'))
            setTasks(storedTasks)
            setLoading(false)
        }
        fetchTasks().then()
    }, [])

    const handleAddTask = () => {
        if (newTask !== '') {
            let i = 0
            let available = false
            while (!available) {
                available = !tasks.find((task) => (task.id) === i)
                i++
            }
            setTasks((prevTasks) => {
                const newTasks = [...prevTasks, { id: i - 1, text: newTask, done: false }]
                localStorage.setItem('tasks', JSON.stringify(newTasks))
                return newTasks
            })
            setNewTask('')
        }
    }
    const handleDeleteTask = (key) => {
        const updatedTasks = tasks.filter((task) => task.id !== key)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
    const updateDone = (key, done) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === key) {
                return {id: task.id ,text: task.text, done: done}
            }
            return task
        })
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)

    }
    const updateTask = (key, value) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === key) {
                return ({...tasks, text: value.trim()})
            }
            return task
        }).filter((task) => task.text !== '')
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
    const delDoneTasks = () => {
        const updatedTasks = tasks.filter((task) => task.done === false)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks)
    }
    const delAllTasks = () => {
        localStorage.setItem('tasks', JSON.stringify([]))
        setTasks([])
    }


    return (
        <>
            <CssBaseline />
            <Appbar delDoneTasks={delDoneTasks} delAllTasks={delAllTasks}/>
            <Container>
               <Tasklist tasks={tasks} loading={loading} updateDone={updateDone} updateTask={updateTask} handleDeleteTask={handleDeleteTask} />
                <Addtask newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask}/>
            </Container>
        </>
    )
}

export default App