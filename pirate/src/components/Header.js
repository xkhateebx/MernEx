import React from 'react'
import { navigate } from '@reach/router';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <h1 className="header">
            Pirate Crew
            <div>
            <Button variant="contained" color="primary" onClick={() => navigate("/pirate/create")}>Add Pirate</Button>
            </div>
        </h1>
        
    )
}
//
export default Header