import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Menu, Paper, TextField,
    Tooltip,
    Typography
} from "@mui/material"
import {Delete, Edit} from "@mui/icons-material"
import {useEffect, useState} from "react"
import PropTypes from "prop-types"
import CSkeleton from "./CSkeleton.jsx"
import Actionsnackbar from "./Actionsnackbar.jsx";

const Task = ({task, loading, updateDone, updateTask, handleDeleteTask}) => {
    const [defChecked, setDefChecked] = useState(task.done)
    const [anchorEl, setAnchorEl] = useState(null)
    const [barOpen, setOpen] = useState(false);

    useEffect(() => {
        const fetchTask = async() => {
            setDefChecked(await task.done)
        }
        fetchTask().then()
    }, [task.done])
    
    const labelID = `task ${task.id}`
    const open = Boolean(anchorEl)
    const skeletonArray = [1, 2, 3, 4, 5]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const setChecked = (event) => {
        let checked
        if (event.target.type === 'checkbox') {
            checked = event.target.checked
        } else {
            checked = !defChecked
        }
        updateDone(task.id, checked)
        setDefChecked(checked)
    }

    const deleteTask = () => {
        handleDeleteTask(task.id)
        handleSnackbarClick()
    }

    const handleSnackbarClick = () => {
        setOpen(true);
    };

    return (
        <>
        {loading ? (skeletonArray.map((number) => ((<CSkeleton key={number} number={number}/>))))
                :(<ListItem
                        id={task.id}
                        secondaryAction={[
                            <Tooltip key='1' title='Edit' placement='left' arrow>
                                <IconButton
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(event) => handleClick(event)}
                                >
                                    <Edit />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}

                                >
                                    <Paper
                                        elevation={0}
                                        sx={{mx: '10px', my: '5px'}}
                                    >
                                        <TextField
                                            id="standard-basic"
                                            label="Task Name"
                                             
                                            defaultValue={task.text}
                                            variant="standard"
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    event.preventDefault()
                                                    updateTask(task.id, event.target.value)
                                                    handleClose()
                                                }
                                            }}
                                        />
                                    </Paper>
                                    {/*<Paper*/}
                                    {/*    elevation={0}*/}
                                    {/*    sx={{mx: '10px', mt: '15px', mb: '5px'}}*/}
                                    {/*>*/}
                                    {/*    /!* eslint-disable-next-line react/prop-types *!/*/}
                                    {/*    <TextField id="standard-basic" label="Task Name" defaultValue={task.text} variant="standard" />*/}
                                    {/*</Paper>*/}
                                </Menu>
                            </Tooltip>,
                            <Tooltip key='2' title='Delete' placement='right' arrow>
                                <IconButton onClick={deleteTask} aria-label="comments">
                                    <Delete />
                                    <Actionsnackbar open={barOpen} setOpen={setOpen} type='delete'/>
                                </IconButton>
                            </Tooltip>]
                        }
                        disablePadding
                    >
                        <ListItemButton onClick={setChecked} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={Boolean(defChecked)}
                                    onChange={setChecked}
                                    disableRipple
                                />
                            </ListItemIcon>
                            { }
                            <ListItemText id={labelID} primary={<Typography variant="subtitle1" color={defChecked ? 'textDisabled' : 'default'} fontSize={18} sx={defChecked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{task.text}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                )}
        </>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    updateDone: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
}


export default Task