import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HeaderPirateById from './HeaderPirateById'

export default props => {
    const [pirate, setPirate] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + props.id)
            .then(res => setPirate(res.data))
    }, [props.id])

    return (
        <div  >
            <HeaderPirateById/>

            <div  style={{ display: "flex" , marginLeft:"400px"}} >
                <div style={{border: '1px solid black' , backgroundColor:"white"  }} >
            <h1>Name : {pirate.name}</h1>
            <img style={{height: "250px", width: "250px"}} src={pirate.image_url} alt={pirate.name}/>
            </div>
            <div style={{display:"list" ,marginLeft:"300px" , border: '1px solid black' , backgroundColor:"white" , padding:"40px" }} >
            <h2>About</h2>
            <p>Catch Phrase: {pirate.catch_phrase}</p>
            <p>Crew Position: {pirate.crew_position}</p>
            <p>Treasures: {pirate.num_of_treasures}</p>
            <p>Peg leg: {pirate.peg_leg ? "Yes" : "No"}</p>
            <p>Eye Patch: {pirate.eye_patch ? "Yes" : "No"}</p>
            <p>Hook Hand: {pirate.hook_hand ? "Yes" : "No"}</p>
            </div>
            </div>
        </div>
    )
}
