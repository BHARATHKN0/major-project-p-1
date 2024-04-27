import React, { useState, useEffect, useContext } from 'react';
import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import { AddCircle as Add } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import Toast from '../Toast/Toast';
import './CreatePost.css'

const Container = styled(Box)(({ theme }) => ({
    margin: '65px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 10
    }
}));

const Image = styled('img')({
    marginTop: '65px',
    width: '100%',
    height: '50vh',
    objectFit: 'contain',
    borderRadius: '15px',
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
    border: 2px solid orange;
    border-radius: 10px
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 20px;

    border: 2px solid orange;
    border-radius: 10px
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreatePost = () => {


    const [post, setPost] = useState(initialPost);
    const url = post.picture ? post.picture : 'https://www.iesonline.co.in/colleges-image/reva-university.webp';

    const [file, setFile] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { account } = useContext(DataContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getImage = async () => {
            if (file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //API call
                try {
                    const response = await API.uploadFile(data);
                    setPost(prevPost => ({
                        ...prevPost,
                        picture: response.data
                    }));
                } catch (error) {
                    setErrorMessage('File upload failed. Please try again.');
                }
                   
            }
        }
        getImage();
        setPost(prevPost => ({
            ...prevPost,
            categories: location.search?.split("=")[1] || 'All',
            username: account.username
        }));
    },[file, location.search, account.username])



    const savePost = async () => {
        // Validation
        let isValid = true;
        if (post.title.trim() === '') {
            setTitleError('Please fill the Title.');
            isValid = false;
        } else {
            setTitleError('');
        }
        if (post.description.trim() === '') {
            setDescriptionError('Please fill the Description.');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        if (isValid) {
            const response = await API.createPost(post);
            if (response.isSuccess) {
                console.log("Post published successfully"); // Check if this log appears
                setSuccessMessage('Post published successfully');
                navigate('/');

            }
        }
    };


    return (
        <>
        <Container>
            <Image src={url} alt="banner" />
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <div className="addIcon">
                    <Add cursor='pointer' fontSize="large" color="action" />

                    </div>
                </label>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                <InputTextField placeholder=" Title" onChange={(e) => handleChange(e)} name="title" />
                <Button variant="contained" style={{ background: 'orange', borderRadius: '15px', color: '#fff' }} onClick={() => savePost()}>Publish</Button>
            </StyledFormControl> <br />
            {titleError && <div style={{ color: 'red' }}>{titleError}</div>}
            <Textarea
                minRows={5}
                placeholder=" Tell your story....."
                onChange={(e) => handleChange(e)}
                name="description"
                value={post.description}
            />
            {descriptionError && <div style={{ color: 'red' }}>{descriptionError}</div>}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </Container>
        {successMessage && <Toast message={successMessage} onClose={() => setSuccessMessage('')} />}
        </>
    );
};

export default CreatePost;
