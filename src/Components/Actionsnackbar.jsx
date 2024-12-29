import {Button, IconButton, Snackbar} from "@mui/material";
import {Close} from "@mui/icons-material";
import PropTypes from "prop-types";

const Actionsnackbar = ({open, setOpen, type}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </>
    )

    return (
        <>
            {type === 'delete' && (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            )}
            {type === 'update' && (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note updated"
                    action={action}
                />
            )}
            {type === 'create' && (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note created"
                    action={action}
                />
            )}
        </>
    )
}

Actionsnackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
}

export default Actionsnackbar