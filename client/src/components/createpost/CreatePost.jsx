import { useState, useEffect, useContext} from 'react';

import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
// import reva from '../../Assets/REVA_UNIVERSITY.jpg'
import { AddCircle as Add } from '@mui/icons-material';

import { useLocation, useNavigate } from 'react-router-dom';

import {DataContext } from '../../context/DataProvider';

import {API } from '../../service/api';

const Container = styled(Box)`
    margin: 65px 100px
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
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
`;


const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 20px;
    border: none;
    &:focus-visible {
        outline: none;
    }
`

const initialPost ={
    title:'',
    description:'',
    picture:'',
    username:'',
    categories:'',
    createdDate:new Date()
}
const CreatePost = () => {

    // const url = '../../Assets/reva.jpg';
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const {account } = useContext(DataContext);

    const location = useLocation();
    const navigate = useNavigate();

    
    const url = post.picture ? post.picture : 'https://www.iesonline.co.in/colleges-image/reva-university.webp'



    useEffect(() => {
        const getImage = async () => {
            if (file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //API call
                const response = await API.uploadFile(data);
                post.picture = response.data;         
            }
        }
        getImage();
        post.categories= location.search?.split("=")[1] || 'All';
        post.username= account.username;
    },[file])


    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value })
    }


    const savePost = async () => {
        let response = await API.createPost(post);
        if(response.isSuccess) {
            navigate('/');
        }
    }

    return (
        <Container>
            
        <Image src={url} alt= 'banner' />

        <StyledFormControl>
            <label htmlFor="fileInput">
                <Add fontSize="large" color="action" />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])}/>

            <InputTextField placeholder="Title" onChange={(e) => handleChange(e)} name="title"/>
        <Button variant="contained" onClick={() => savePost()}>Publish</Button>
        </StyledFormControl>

        <Textarea
            minRows={5}
            placeholder="Tell your story....."
            onChange={(e) => handleChange(e)}
            name="description"
        />
            
        <div>Hello from CreatePost</div>
        </Container>
        
    )
}


export default CreatePost;