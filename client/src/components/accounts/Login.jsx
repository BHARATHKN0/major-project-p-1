import { useState } from 'react'

import {Box, TextField, Button, styled, Typography } from '@mui/material';

import { API } from '../../service/api';

const  Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.2s);
    background-color:rgba(217,219,225,0.6);
    border-radius:10px;
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
    text-transform:none;
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

const signupInitialValues = {
    name:'',
    password:'',
    reva_srn:'',
    reva_mail:'',
}
const Login =() =>{
  
    const imageURL = 'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/images/1636545030_eb8e424b8c32ef9fc017.png';
  
    const [account, toggleAccount ] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues)
    const [error, setError] = useState(' ');


    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange =(e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
    }

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

    return (
        <Component>
        <Box>
            <Image src={imageURL} alt="login"/>
            {
                account ==='login' ?
                    <Wrapper>
                        <TextField variant="standard" name='name' label ="Enter username"/>
                        <TextField variant="standard" name='password' label="Enter password"/>

                        {error && <Error>{error}</Error>}
                        
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{ textAlign:'center'}}>OR</Text>
                        <SignupButton variant="contained" onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper> 
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label ="Enter username"/>
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

    )
}
export default Login;
