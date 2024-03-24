import { useEffect, useState, useContext } from "react";

import {Box, Typography, styled } from '@mui/material'

import {useParams} from 'react-router-dom';

import {Edit, Delete }  from '@mui/icons-material'


import { API } from '../../service/api';

import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
    margin:0px 100px 0px 100px
`;


const Image = styled('img')({
    marginTop: '65px',
    width: '100%',
    height: '60vh',
    borderRadius: '10px',
    objectFit:'cover'
});

const Heading = styled(Typography)`
    font-size:30px
    font-weight:600;
    text-align:center;
    margin:30px 0 10px 0;
    word-break:break-word;
`;

const EditIcon = styled(Edit)`
    margin:5px;
    padding:5px;
    border: 1px solid #878787;
    border-radius:10px;

`;

const DeleteIcon = styled(Delete)`
    margin:5px;
    padding:5px;
    border: 1px solid #878787;
    border-radius:10px;

`;

const Author = styled(Box)`
    color:#878787;
    margin:20px 0;
    display:flex;
`;

const Description = styled(Typography)`
    word-break: break-word
`

const DetailView = () => {

    const [post, setPost] = useState({});

    const {id} = useParams();
    const {account} = useContext(DataContext);

    const url =post.picture ? post.picture :'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/album/1637408976_9ec6b1909248fd1bd7fa.jpg'

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Image src={url} alt="blog"   />

            <Box style={{ float: 'right' }}>
                    
                   

                    {   
                    account.username === post.username && 
                    <>  
                        <EditIcon color="primary" />
                        <DeleteIcon  color="error" />
                    </>
                }
                
            </Box>
            <Heading>{post.title}</Heading>
            
            
            <Author>

                <Typography >Author : <Box component="span" style={{fontWeight:600}}>{post.username}</Box></Typography>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Description>{post.description}</Description>
        </Container>

    )
        
    
}

export default DetailView;