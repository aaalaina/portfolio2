import React from 'react';
import { Typography, Card, CardContent, TextField } from '@mui/material';
import Button from "@mui/material/Button";
import {Grid} from '@mui/material';

const Contact = () => {
  return (
    <>
    <Card style={{maxWidth: 450, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
            <Typography gutterBottom variant="h5">
                Feel free to reach out!
            </Typography>
            <form>
            <Grid container spacing={1}> 
                <Grid sx={12} sm={6} item>
                    <TextField label="First Name" placeholder="Hi! What's your name?" variant="outlined" fullWidth/>
                </Grid>
                <Grid sx={12} sm={6} item>
                    <TextField label="Last Name" placeholder="What's your last name?" variant="outlined" fullWidth/>
                </Grid>
                <Grid sx={12} item>
                    <TextField type="email" label="Email" placeholder="Type in your e-mail!" variant="outlined" fullWidth/>
                </Grid>
                <Grid sx={12} item>
                    <TextField type="number" label="Phone" placeholder="What's your phone number?" variant="outlined" fullWidth/>
                </Grid>
                <Grid sx={12} item>
                    <TextField label="Message" multiline rows={4} placeholder="Write a brief message!" variant="outlined" fullWidth/>
                </Grid>
                <Grid sx={12} item>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
    </Card>
    </>
  )
}

export default Contact