import PropTypes from "prop-types";
import {Fab, Paper, TextField} from "@mui/material";
import {AddTask} from "@mui/icons-material";

const Addtask = ({newTask, setNewTask, handleAddTask}) => {
    return (
        <>
            <Paper
                elevation={0}
                sx={{ p: '2px 4px',
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                    width: '100%',
                    position: 'fixed',
                    bottom: '5px',
                    left: 0,
                    right: 0,
                }}
            >
                <TextField
                    tabIndex={0}
                    id="outlined-basic"
                    variant="outlined"
                    placeholder='Add new task'
                    value={newTask}
                    sx={{ml: {
                            xs: '5px',
                            sm: '10px',
                            md: '15px',
                            lg: '20px',
                            xl: '20px',
                        }}}
                    onChange={(e) => {
                        // e.preventDefault()
                        setNewTask(e.target.value)
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault()
                            handleAddTask()
                        }
                    }}

                    fullWidth
                />
                <Fab onClick={(event) => {
                    event.preventDefault()
                    handleAddTask()
                }} color="primary" aria-label="add" sx={{mr: {
                        xs: '5px',
                        sm: '10px',
                        md: '15px',
                        lg: '20px',
                        xl: '20px',
                    }}}>
                    <AddTask/>
                </Fab>
            </Paper>
        </>
    )
}

Addtask.propTypes = {
    newTask: PropTypes.string.isRequired,
    setNewTask: PropTypes.func.isRequired,
    handleAddTask: PropTypes.func.isRequired,
}

export default Addtask