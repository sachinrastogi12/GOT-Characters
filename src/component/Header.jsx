import { AppBar, Toolbar, styled } from '@mui/material';
import Logo from "../images/logo.jpg";

const StyleHeader = styled(AppBar)`   //applying css to AppBar, initially it was blue
  background: #000`;

const Header =()=> {
    return(
        <StyleHeader position = "static">
            <Toolbar>
                <img src = {Logo} alt = "Logo" style = {{ width: 250}}/>
            </Toolbar>
        </StyleHeader>
        )
}

export default Header;