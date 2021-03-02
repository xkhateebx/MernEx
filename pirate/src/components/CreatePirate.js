import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import HeaderCreate from './HeaderCreate';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';



export default () => {
    const [name, setName] = useState(""); 
    const [image_url, setImageURL] = useState("");
    const [num_of_treasures, setNumOfTreasures] = useState("");
    const [catch_phrase, setCatchPhrase] = useState("");
    const [crew_position, setCrewPosition] = useState("");
    const [peg_leg, setPegLeg] = useState(true);
    const [eye_patch, setEyePatch] = useState(true);
    const [hook_hand, setHookHand] = useState(true);

    const [errors, setErrors] = useState([]);
  
    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);
        axios.post('http://localhost:8000/api/pirate', {
            name,
            image_url,
            num_of_treasures,
            catch_phrase,
            crew_position,
            peg_leg,
            eye_patch,
            hook_hand
        })
            .then(() => navigate("/pirates"))
            .catch(err => {
                const errs = [];
                const innerErrors = err.response.data.errors;

                for (const key in innerErrors){
                    errs.push(innerErrors[key].message);
                }
                setErrors(errs);
            })
    }

    return (
        <>
        <HeaderCreate/>

        <form onSubmit={onSubmitHandler}>

                <div style={{marginLeft:"300px" , display: "flex"}} >
                    <div style={{border: '1px solid black' , backgroundColor:"white" , padding:"50px"}} >
            <p>
                <TextField id="outlined-basic" variant="outlined" label="Pirate Name" value={name} onChange = {(e)=>setName(e.target.value)} />
            </p>
            <p>
                
                <TextField id="outlined-basic" label="Image Url" variant="outlined" value={image_url} onChange = {(e)=>setImageURL(e.target.value)}/>
            </p>
            <p>
                <TextField id="outlined-basic" label="# Of Treasure Chests" variant="outlined" value={num_of_treasures} onChange = {(e)=>setNumOfTreasures(e.target.value)}/>
            </p>
            <p>
                <TextField id="outlined-basic" label="Pirate Catch Phrase" variant="outlined" value={catch_phrase} onChange = {(e)=>setCatchPhrase(e.target.value)}/>
            </p>
            </div>
            <div style={{marginLeft:"500px",border: '1px solid black' , backgroundColor:"white" , padding:"50px"}}>
            <p>
            <InputLabel id="demo-simple-select-label">Crew Position: </InputLabel>
                <Select  onChange = {(e)=>setCrewPosition(e.target.value)} name="crew_position" value={crew_position}>
                    <MenuItem value="Captain">Captain</MenuItem>
                    <MenuItem value="First Mate">First Mate</MenuItem>
                    <MenuItem value="Quarter Master">Quarter Master</MenuItem>
                    <MenuItem value="Boatswain">Boatswain</MenuItem>
                    <MenuItem value="Powder Monkey">Powder Monkey</MenuItem>
                </Select><br></br>
            </p>
            <p>
                <label>Peg Leg: </label><br/>
                <Checkbox type="checkbox" value={peg_leg} onChange = {()=>setPegLeg(!peg_leg)} checked={peg_leg}/>
            </p>
            <p>
                <label>Eye Patch: </label><br/>
                <Checkbox type="checkbox" value={eye_patch} onChange = {()=>setEyePatch(!eye_patch)} checked={eye_patch}/>
            </p>
            <p>
                <label>Hook Hand: </label><br/>
                <Checkbox type="checkbox" value={hook_hand} onChange = {()=>setHookHand(!hook_hand)} checked={hook_hand}/>
            </p>
            <button style={{backgroundColor: "#085394" , color:"white" }} variant="contained" color="primary">Add Pirate</button>
            </div>
            </div>
        </form>
        {errors.map((err, i) => (
            <Alert severity="error" key={i} style={{color: "red"}}>{err}</Alert>
        ))}
    </>
    )
}
