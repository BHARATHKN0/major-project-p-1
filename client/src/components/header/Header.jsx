import React, { useContext } from 'react';
import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: #000;
    background-color:rgba(225, 225, 225, 1);
    * :hover{
        // color: black;
        transform: scale(1.1);
    }
`;

const Container = styled(Toolbar)`
    justify-content: center;
    gap: 15px;
    
    & > a {
        
        color: white;
        text-decoration: none;
        padding: 10px 10px;
        background: orange;
        border-radius: 20px; 
        justify-content: space-around;
        
    }

`


const Username = styled(Typography)`
    color: orange;
    font-size: 23px;
    display: flex;
    padding: 10px 5px;
    justify-content: flex-end; /* Align content to the right */
    flex-grow: 1;
    margin-left: 69%;
    border: none;
    transform: scale(1.1);
    margin-right: 30px; /* Add right margin to separate from other elements */
`;

const Image = styled('img')({
    width: 50,
    height: 40,
    borderRadius: '50%',
    marginBottom: '-10px',
    marginTop: '-4px',
    marginRight: '5px'
});


const Header = () => {

    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const { account } = useContext(DataContext);

    return (
        <Component>
            <Container className="botton-color">
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
                

            </Container>
            <div style={{ marginTop: '-60px', marginBottom: '2px' }}>
            <Username sx={{ display: { xs: 'none', sm: 'flex' } }} > <Image src={url} alt='dp' />{account.username}</Username>

            </div>

        </Component>
    )
}

export default Header;