import { Card } from "@mui/material";

const Character = ({props}) =>{
    return (
       // <p>{props.characterName}</p>
       props.characterImageFull ?  // condition for jo image available hai wahi dikha do
       <Card>
        <img src = {props.characterImageFull} alt = "picture"/>
       </Card>
       : ''
    )
}
export default Character;