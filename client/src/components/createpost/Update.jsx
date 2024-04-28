import { useState, useEffect, useContext} from 'react';

import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
// import reva from '../../Assets/REVA_UNIVERSITY.jpg'
import { AddCircle as Add } from '@mui/icons-material';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import {DataContext } from '../../context/DataProvider';

import {API } from '../../service/api';

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
    border: 3px solid rgba(225, 225, 225, 1);
    border-radius: 10px;
`;


const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 20px;
    border: none;
    border: 3px solid rgba(225, 225, 225, 1);
    border-radius: 10px
    // &:focus-visible {
    //     outline: none;
    // }
`

const initialPost ={
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}
const Update = () => {

    // const url = '../../Assets/reva.jpg';
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const {account } = useContext(DataContext);

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    
    const url = post.picture ? post.picture : 'https://www.iesonline.co.in/colleges-image/reva-university.webp'


    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, [id])


    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
    
                //API call
                const response = await API.uploadFile(data);
                setPost(prevPost => ({...prevPost, picture: response.data})); // Update the post state          
            }
        };
        getImage();
    setPost(prevPost => ({
        ...prevPost,
        categories: location.search?.split("=")[1] || 'All',
        username: account.username
    }));
}, [file, location.search, account.username]);


    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value })
    }


    const updateBlogPost = async () => {
        let response = await API.updatePost(post);
        if(response.isSuccess) {
            navigate(`/details/${id}`);
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

            <InputTextField placeholder="Title" value={post.title} onChange={(e) => handleChange(e)} name="title"/>
        <Button variant="contained" style={{ background: 'orange', borderRadius: '15px', color: '#fff' }} onClick={() => updateBlogPost()}>Update</Button>
        </StyledFormControl>

        <Textarea
            minRows={5}
            placeholder="Tell your story....."
            onChange={(e) => handleChange(e)}
            name="description"
            value={post.description}
        />
        </Container>
        
    )
}


export default Update;