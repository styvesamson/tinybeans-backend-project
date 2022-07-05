import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Item from "./Item";

export default function Product() {
    const [open, setOpen] = React.useState(false);
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[photoUrl,setPhoto]=useState('')
    const[items,setItens]=useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave=(e)=>{
        e.preventDefault()
        const product={name,description,price,photoUrl}
        console.log(product)
        fetch("http://localhost:8080/item/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)

        }).then(()=>{
            fetch("http://localhost:8080/item/getAll")
                .then(res=>res.json())
                .then((result)=>{
                        setItens(result);
                    }
                )
            setOpen(false);
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/item/getAll")
            .then(res=>res.json())
            .then((result)=>{
                    setItens(result);
                }
            )
    },[])

    return (
        <div>
            <Typography  component="div" align="right">
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add a new Product
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add a New Product</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin="dense" id="name" label="Product" type="text" fullWidth variant="outlined"
                                   value={name}
                                   onChange={(e)=>setName(e.target.value)}/>
                        <TextField  margin="dense" id="description" label="Description" type="text" fullWidth variant="outlined"
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}/>
                        <TextField  margin="dense" id="price" label="Price" type="number" fullWidth variant="outlined"
                                    value={price}
                                    onChange={(e)=>setPrice(e.target.value)}/>
                        <TextField  margin="dense" id="photoUrl" label="Photo" type="text" fullWidth variant="outlined"
                                    value={photoUrl}
                                    onChange={(e)=>setPhoto(e.target.value)}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Typography>

            <Typography variant="h2" component="h2" align="left">
                SELECT A PRODUCT
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {items.map(item=>(
                <Grid item xs={6} md={4} key={item.id}>
                    <Item
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        photoUrl={ item.photoUrl}
                        price={item.price}
                    />
                </Grid>
            ))
            }
        </Grid>
    </Box>
        </div>
    );

}
