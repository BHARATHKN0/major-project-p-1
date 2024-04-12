
import { AppBar, Toolbar, styled } from "@mui/material";

import { Link } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: #000;
    background-color:rgba(217,219,225,0.9;
    * :hover{
        color: black;
        border: 1px solid #000;
    }
`;

const Container = styled(Toolbar)`
    justify-content: center;
    gap: 20px;
    
    & > a {
        padding: 20px;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
         
        background: orange;
        border-radius: 20px; 
        justify-content: space-around;
        
    }

`



const Header = () => {

    return (
        <Component>
            <Container className="botton-color">
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;