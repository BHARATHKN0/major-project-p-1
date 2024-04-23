import React, { useState, useContext } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.2s);
    background-color: rgba(217, 219, 225, 0.6);
    border-radius: 10px;
    display: flex;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
`;

const Image = styled('img')({
    width: '100%',
    margin: 'auto',
    display: 'flex',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.5);
    & > div,
    & > button,
    & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 8px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: black;
    height: 48px;
    border-radius: 8px;
`;

const Error = styled(Typography)`
    font-size: 12px;
    color: #ff0000;
    margin-top: 5px;
`;

const Text = styled(Typography)`
    color: black;
    font-size: 16px;
`;

const loginInitialValues = {
    username: '',
    password: '',
};

const signupInitialValues = {
    username: '',
    password: '',
    reva_srn: '',
    reva_mail: '',
};

const Login = ({ isUserAuthenticated }) => {
    const imageURL = 'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/images/1636545030_eb8e424b8c32ef9fc017.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [signupErrors, setSignupErrors] = useState({});
    const [loginErrors, setLoginErrors] = useState({});
    const [error, setError] = useState('')

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
        toggleAccount(account === 'signup' ? 'login' : 'signup');
    };

    const validateSignup = () => {
        const errors = {};
        let isValid = true;

        if (!signup.username) {
            errors.username = 'Please enter a username';
            isValid = false;
        }
        if (!signup.password) {
            errors.password = 'Please enter a password';
            isValid = false;
        }
        if (!signup.reva_srn) {
            errors.reva_srn = 'Please enter SRN';
            isValid = false;
        }
        if (!signup.reva_mail) {
            errors.reva_mail = 'Please enter Reva mail ID';
            isValid = false;
        }

        setSignupErrors(errors);
        return isValid;
    };

    const validateLogin = () => {
        const errors = {};
        let isValid = true;

        if (!login.username) {
            errors.username = 'Please enter a username';
            isValid = false;
        }
        if (!login.password) {
            errors.password = 'Please enter a password';
            isValid = false;
        }

        setLoginErrors(errors);
        return isValid;
    };

    const signupUser = async () => {
        if (!validateSignup()) {
            return;
        }

        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            setError('Something went wrong! Please try again later');
        }
    };

    const loginUser = async () => {
        if (!validateLogin()) {
            return;
        }

        let response = await API.userLogin(login);
        if (response.isSuccess) {
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ username: response.data.username, reva_srn: response.data.reva_srn });
            isUserAuthenticated(true);
            navigate('/');
        } else {
            setError('Something went wrong! Please try again later');
        }
    };

    return (
        <div className="back">
            <Component>
                <Box>
                    <Image src={imageURL} alt="logo" />
                    {account === 'login' ? (
                        <Wrapper>
                            <TextField
                                variant="standard"
                                value={login.username}
                                onChange={(e) => setLogin({ ...login, username: e.target.value })}
                                name="username"
                                label="Enter username"
                                error={!!loginErrors.username}
                                helperText={loginErrors.username}
                            />
                            <TextField
                                variant="standard"
                                value={login.password}
                                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                                name="password"
                                label="Enter password"
                                type="password"
                                error={!!loginErrors.password}
                                helperText={loginErrors.password}
                            />
                            {error && <Error>{error}</Error>}
                            <LoginButton variant="contained" onClick={loginUser}>
                                Login
                            </LoginButton>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>OR</Text>
                            <SignupButton variant="contained" onClick={toggleSignup}>
                                Create an account
                            </SignupButton>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField
                                variant="standard"
                                value={signup.username}
                                onChange={(e) => setSignup({ ...signup, username: e.target.value })}
                                name="username"
                                label="Enter username"
                                error={!!signupErrors.username}
                                helperText={signupErrors.username}
                            />
                            <TextField
                                variant="standard"
                                value={signup.password}
                                onChange={(e) => setSignup({ ...signup, password: e.target.value })}
                                name="password"
                                label="Enter password"
                                type="password"
                                error={!!signupErrors.password}
                                helperText={signupErrors.password}
                            />
                            <TextField
                                variant="standard"
                                value={signup.reva_srn}
                                onChange={(e) => setSignup({ ...signup, reva_srn: e.target.value })}
                                name="reva_srn"
                                label="Enter SRN"
                                error={!!signupErrors.reva_srn}
                                helperText={signupErrors.reva_srn}
                            />
                            <TextField
                                variant="standard"
                                value={signup.reva_mail}
                                onChange={(e) => setSignup({ ...signup, reva_mail: e.target.value })}
                                name="reva_mail"
                                label="Enter Reva mail ID"
                                error={!!signupErrors.reva_mail}
                                helperText={signupErrors.reva_mail}
                            />
                            {error && <Error>{error}</Error>}
                            <SignupButton variant="contained" onClick={signupUser}>
                                SignUp
                            </SignupButton>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>OR</Text>
                            <LoginButton variant="contained" onClick={toggleSignup}>
                                Already have an account
                            </LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </div>
    );
};

export default Login;
