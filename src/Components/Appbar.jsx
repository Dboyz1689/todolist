import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {Delete} from "@mui/icons-material"
import {useState} from "react"
import PropTypes from "prop-types"

const Appbar = ({delDoneTasks, delAllTasks}) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const delATasks = () => {
        delAllTasks()
        handleClose()
    }

    const delDTasks = () => {
        delDoneTasks()
        handleClose()
    }


    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={delDTasks} sx={{color: 'red', mx: '10px', my: '5px', fontSize: '1.2rem'}}>
                            <IconButton color='error' aria-label="delete"><Delete /></IconButton>
                            Delete all done tasks
                        </MenuItem>
                        <MenuItem onClick={delATasks} sx={{color: 'red', mx: '10px', my: '5px', fontSize: '1.2rem'}}>
                            <IconButton color='error' aria-label="delete"><Delete /></IconButton>
                            Delete all tasks
                        </MenuItem>
                    </Menu>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        To-Do List
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

Appbar.propTypes = {
    delDoneTasks: PropTypes.func.isRequired,
    delAllTasks: PropTypes.func.isRequired,
}

export default Appbar