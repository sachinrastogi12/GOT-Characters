import { Card } from "@mui/material";

const Character = ({props}) =>{
    return (
       // <p>{props.characterName}</p>
       <Card>
        <img src = {props.characterImageFull} alt = "picture">
       </Card>
    )
}
export default Character;