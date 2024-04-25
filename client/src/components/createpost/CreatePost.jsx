import React, { useState, useEffect, useContext } from 'react';
import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import { AddCircle as Add } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import Toast from '../Toast/Toast';

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
    const [file, setFile] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { account } = useContext(DataContext);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        setPost(prevPost => ({
            ...prevPost,
            categories: location.search?.split("=")[1] || 'All',
            username: account.username
        }));
    }, [location.search, account.username]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

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
                setSuccessMessage('Signup successful! Please log in.');
                navigate('/');

            }
        }
    };


    // Function to replace URLs with clickable links
    // const renderTextWithLinks = (text) => {
    //     const urlRegex = /(https?:\/\/[^\s]+)/g;
    //     return text.split(urlRegex).map((part, index) => {
    //         if (part.match(urlRegex)) {
    //             return (
    //                 <a key={index} href={part} target="_blank" rel="noopener noreferrer">
    //                     {part}
    //                 </a>
    //             );
    //         }
    //         return part;
    //     });
    // };

    return (
        <>
        <Container>
            <Image src={post.picture || 'https://www.iesonline.co.in/colleges-image/reva-university.webp'} alt="banner" />
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
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
            {/* Render text content with embedded links */}
            {/* <div style={{ marginTop: '10px', color: 'white' }}>{renderTextWithLinks(post.description)}</div> */}
            {descriptionError && <div style={{ color: 'red' }}>{descriptionError}</div>}



        </Container>
        {successMessage && <Toast message={successMessage} onClose={() => setSuccessMessage('')} />}
        </>
    );
};

export default CreatePost;
