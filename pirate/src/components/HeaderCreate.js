import React from 'react'
import { navigate } from '@reach/router';
import Button from '@material-ui/core/Button';

const HeaderCreate = () => {
    return (
        <h1 className="header">
            Add Pirate
            <div>
            <Button variant="contained" color="primary" onClick={() => navigate("/pirates")}>Crew Board</Button>
            </div>
        </h1>
        
    )
}
//
export default HeaderCreate