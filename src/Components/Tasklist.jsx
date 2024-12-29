import PropTypes, {object} from 'prop-types';
import {List, ListItem, Typography} from '@mui/material';
import Task from './Task.jsx';

const Tasklist = ({tasks, loading, updateDone, updateTask, handleDeleteTask}) => {
    return (
        <>
            <List sx={{width: '100%'}}>
                {tasks.length && tasks.map((task) => {
                    if (task.text !== ''){ return (<Task task={task} loading={loading} updateDone={updateDone} updateTask={updateTask} handleDeleteTask={handleDeleteTask} key={task.id}/>) }
                })|| (<ListItem key='1'>
                        <Typography variant='h6' color={'textDisabled'}>
                            No Tasks available
                        </Typography>
                    </ListItem>
                )}
            </List>
        </>
    )
}

Tasklist.propTypes = {
    tasks: PropTypes.arrayOf(object).isRequired,
    loading: PropTypes.bool.isRequired,
    updateDone: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,

}

export default Tasklist