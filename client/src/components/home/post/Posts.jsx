import { useEffect, useState } from "react";

import { Box } from '@mui/material';

import {API} from '../../../service/api';

import Post from './Post';


const Posts =()=>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts();
            if(response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData();
    },[])

    return (
        <>
            {
                posts && posts.length > 0 ? posts.map(post => (
                    <Post post ={post}/>
                )): <Box Styled={{ color: '#878787', margin:'30px 80px', fontSize:18}}>No data available to display</Box>
            }
        </>
        
    )

}

export default Posts;