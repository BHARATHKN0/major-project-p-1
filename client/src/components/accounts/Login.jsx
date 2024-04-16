import { useState, useContext } from 'react'

import {Box, TextField, Button, styled, Typography } from '@mui/material';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom';

import './Login.css'


const  Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.2s);
    background-color:rgba(217,219,225,0.6);
    border-radius:10px;
    display: flex;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
`;

const Image = styled('img')({
    width:'100%',
    margin:'auto',
    display:'flex',
});

const  Wrapper = styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.5);
    flex-direction:column;
    & >div, & > button, & > p{
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color:#fff;
    height:48px;
    border-radius:8px;
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: black;
    height: 48px;
    border-radius: 8px;
`;
const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight: 600;
`;
const Text = styled(Typography)`
    color:black;
    font-size:16px;
`;

const loginInitialValues = {
    username: '',
    password: ''
}

const signupInitialValues = {
    username: '',
    password: '',
    reva_srn: '',
    reva_mail: ''
}
const Login =({ isUserAuthenticated }) =>{
  
    const imageURL = 'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/images/1636545030_eb8e424b8c32ef9fc017.png';
  
    const [account, toggleAccount ] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(' ');

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();


    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange =(e) => {
        setSignup(prevState => ({ ...prevState, [e.target.name]: e.target.value }))    }

    const signupUser = async () => {
         let response = await API.userSignup(signup);

         if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login')
         } else {
            setError('Something went wrong! Please try again later');
         }
    } 

    const onvaluechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value})

    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({ username: response.data.username, reva_srn: response.data.reva_srn })

            isUserAuthenticated(true);

            navigate('/');

        } else {
            setError('Something went wrong! Please try again later');
        }
    }

    return (
        <div className="back">
        <Component >
            
        <Box>
            <Image src={imageURL} alt="log"/>
            {
                account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" value={login.username} onChange={(e) => onvaluechange(e)} name='username' label ="Enter username"/>
                        <TextField variant="standard" value={login.password} onChange={(e) => onvaluechange(e)} name='password' label="Enter password"/>

                        {error && <Error>{error}</Error>}
                        
                        <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                        <Text style={{ textAlign:'center'}}>OR</Text>
                        <SignupButton variant="contained" onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper> 
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label ="Enter username"/>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter password"/>  
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='reva_srn' label ="Enter srn"/> 
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='reva_mail' label="Enter reva mail id "/>
                    
                    {error && <Error>{error}</Error>}
                    <SignupButton variant="contained" onClick={() => signupUser()}>SignUp</SignupButton>
                    <Text style={{ textAlign:'center'}}>OR</Text>
                    <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                </Wrapper>
            }
        </Box>
        </Component>
        </div>

    )
}
export default Login;
