import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
import Header from './Header'
import Button from '@material-ui/core/Button';

export default () => {
    const [pirates, setPirates] = useState(null); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(response=>setPirates(response.data))
            .catch((err)=>console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/pirate/' + id)
        .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
        .catch((err)=>console.log(err))  
    }

    if (pirates === null) return "Loading...";

    return (
        <>
        <Header/>
            {pirates.map((pirate, index)=>{
                    return (
                        
                        <div style={{display: 'flex', marginLeft:"500px" , backgroundColor: '#white', border: '1px solid black'}} className="article" key={index}>
                      <div>
                         <h2>  {pirate.name} { }</h2>
                           
                            <img style={{height: "200px", width: "200px"}} src={pirate.image_url} alt={pirate.name}/>
                            </div>
                            <p>
                            <div style={{marginTop:"150px" , marginLeft:"10px"}} >
                            <Button variant="contained" color="primary" onClick={()=>navigate("/pirate/" + pirate._id)}>View Pirate</Button> { } | { }
                            <Button variant="contained" color="secondary" onClick={()=>deleteHandler(pirate._id)}>Delete</Button> { }
                            </div>
                            </p>
                            
                        </div>
                    )
            })}
        </>
    )
}

