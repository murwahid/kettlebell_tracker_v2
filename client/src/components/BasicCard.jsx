import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

let kbSize = 55;
let sumReps = 60;

function calculateVolume(weight, totalReps) {
    console.log(`${weight * totalReps} lbs`);
    let n = weight*totalReps;
    let newWeight = n.toLocaleString("en-Us");
    return newWeight
}

let volLifted = calculateVolume(kbSize, sumReps);



export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }} variant="outlined" >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography variant="h5" component="div">
                    {volLifted} lbs lifted
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Total Volume
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
