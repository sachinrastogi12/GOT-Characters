import {Box, Grid} from '@mui/material';
import {data} from '../constants/data';  // double dot because dusre component se 

import Character from './Character';
const Characters = () => {
    return (
        <Box style = {{ margin: '10px 35px'}}>  
            <Grid container>                         
            {
                data.characters.map(value => (   // data ek object hai and map array ke sath chalta hai to character bich me
                        <Grid item>
                        <Character props = {value}/> 
                        </Grid>
                ))  
            }
            </Grid>  
        </Box>
    )
}
export default Characters;

// we use Grid to make it responsive
// take help of prop to display list of names