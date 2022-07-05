import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { loadStripe } from '@stripe/stripe-js';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const PUBLIC_KEY = "pk_live_51IZfP3HFHtGMFb7Yg77Lis9zvBcWEsXM2jH1EWhc6q9OyFYYXv4c7QxgfPeFN3R2LFpe5GoeJUqTXameYw21St9W00v9rZMuUq"
const stripe = loadStripe(PUBLIC_KEY)

const ariaLabel = { 'aria-label': 'description' };

export default function Checkout() {
    const { id } = useParams();
    const navigate = useNavigate();

    const productID =  id ;
    const[address,setAddress]=useState('')
    const[city,setCity]=useState('')
    const[ustate,setUstate]=useState('')
    const[zip,setZip]=useState('')
    const[ccnumber,setCcnumber]=useState('')
    const[ccexp,setCcexp]=useState('')
    const[cvc,setCvc]=useState('333')


    const handleSave=(e)=>{
        e.preventDefault()
        const path = `/success`;
        navigate(path);
        const checkout ={productID,address,city,ustate,zip, ccnumber, ccexp, cvc }
        console.log(checkout)
        fetch("http://localhost:8080/order/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(checkout)

        })  .then((result)=>{
            const path = `success`;
            navigate(path);

        })
    }


    return (

        <div>
            <Typography variant="h2" component="h2" align="left">
                MAKE A PAYMENT
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                    <TextField
                        label="Address"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '93ch' }}
                        inputProps={ariaLabel}
                        variant="standard"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                    />


                    <TextField
                        label="City"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '50ch' }}
                        inputProps={ariaLabel}
                        variant="standard"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />

                    <TextField
                        label="State"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '20ch' }}
                        inputProps={ariaLabel}
                        variant="standard"
                        value={ustate}
                        onChange={(e)=>setUstate(e.target.value)}

                    />
                    <TextField
                        label="Zip"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '20ch' }}
                        inputProps={ariaLabel}
                        variant="standard"
                        type="number"
                        value={zip}
                        onChange={(e)=>setZip(e.target.value)}
                    />

                    <TextField
                        label="Card Number"
                        id="ccnumber"
                        sx={{ m: 1, width: '93ch' }}
                        inputProps={ariaLabel}
                        variant="standard"
                        type="number"
                        required
                        InputLabelProps={{ shrink: true }}
                        value={ccnumber}
                        onChange={(e)=>setCcnumber(e.target.value)}

                    />


                    <TextField
                        label="Expiration"
                        id="ccexp"
                        sx={{ m: 1, width: '50ch' }}
                        inputProps={ariaLabel}
                        variant="standard"
                        type="number"
                        value={ccexp}
                        onChange={(e)=>setCcexp(e.target.value)}
                    />

                    <TextField
                        label="CVC"
                        id="cvc"
                        sx={{ m: 1, width: '42ch'}}
                        inputProps={ariaLabel }
                        variant="standard"
                        type="number"
                        value={cvc}
                        onChange={(e)=>setCvc(e.target.value)}
                    />


                </div>
                <Container>
                    <Button onClick={handleSave}  sx={{ m: 1, width: '112ch' }} variant="contained" color="success" size="large">Pay  $15</Button>
                </Container>
            </Box>
        </div>
    );
}