import {Box} from '@mui/material';
import {data} from '../constants/data';  // double dot because dusre component se 

import Character from './Character';
const Characters = () => {
    return (
        <Box>
            {
                data.characters.map(value => (   // data ek object hai and map array ke sath chalta hai to character bich me
                   <Character props = {value}/> // take help of prop to display list of names
                ))  
            }
        </Box>
    )
}
export default Characters;