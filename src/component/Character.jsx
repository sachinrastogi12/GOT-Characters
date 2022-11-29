import { Card , styled, Typography, Box} from "@mui/material";
import { useState } from "react";


const Image = styled('img')({
    width: '100%',
    height: 300
});    //agar html tag me style lagani ho to use  '' 

const Component = styled(Card)`
    width: 200px;
    margin: 10px;
    position: relative;
    `
const Container = styled(Box)`
    position: absolute;
    top: 0;
    color: #fff;
    height: 300px;
    width: 100%;
    background: #000;
    opacity: 0.5;
`

const Character = ({props}) =>{

    const [toggle, setToggle] = useState(false)    
    const toggleHover = () => {
          setToggle(!toggle);
    }
    return (
    
   
       // <p>{props.characterName}</p>

       props.characterImageFull ?  // condition for jo image available hai wahi dikha do

       <Component onMouseEnter={toggleHover} onMouseLeave={toggleHover} > 
        <Image src = {props.characterImageFull} alt = "picture"/>
            {
                toggle ? 
              <Container>
                  <Typography>Name: {props.characterName}</Typography>
                  <Typography>Real Name: {props.actorName}</Typography>
                  <Typography>House: {props.houseName}</Typography>
                  <Typography>NickName: {props.nickname}</Typography>
              </Container>
              : ''
            }
       </Component>
       : ''

    )


}
export default Character;