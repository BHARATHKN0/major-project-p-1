import { useEffect, useState } from "react";
import { Box, Grid } from '@mui/material';
import { useSearchParams, Link } from "react-router-dom";
import { API } from '../../../service/api';
import Post from './Post';
import "./Posts.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getAllPosts({ category: category || '' });
                if (response.isSuccess) {
                    // Sort posts by createdDate in descending order (most recent first)
                    const sortedPosts = response.data.sort((a, b) => {
                        return new Date(b.createdDate) - new Date(a.createdDate);
                    });
                    setPosts(sortedPosts);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchData();
    }, [category]);

    return (
        <>
            {posts && posts.length > 0 ? (
                <Grid container spacing={1}>
                {posts.map((post) => (
                    <Grid item key={post._id} lg={3} sm={4} xs={12}>
                        <Link to={`details/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="post-container">
                                <Post post={post} />
                            </div>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            ) : (
                <Box style={{ color: '#878787', margin: '40px 80px', fontSize: 20 }}>
                    No data available to display on this category
                </Box>
            )}
        </>
    );
};

export default Posts;