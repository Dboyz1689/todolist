import {ListItem, Skeleton} from "@mui/material"
import PropTypes from "prop-types"

const CSkeleton = ({number}) => {
    return (<>
        <ListItem disablePadding sx={{my: '5px'}} key={number}><Skeleton animation='wave' variant="rounded" width='100%' height='40px'/></ListItem>
    </>)
}

CSkeleton.propTypes = {
    number: PropTypes.number.isRequired,
}

export default CSkeleton