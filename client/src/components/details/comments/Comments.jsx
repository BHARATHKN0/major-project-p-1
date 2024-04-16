
// import DP from '../../../Assets/dp.jpg'

import { useState, useContext, useEffect } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api'

import Comment from './Comment';

const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
    height: 100px;
    width: 100%;
    margin: 0 20px;
    border: 2px solid rgba(225, 225, 225, 1);
    border-radius: 10px
`

const initialValues = {
    name: '',
    postId: '',
    comments: '',
    date: new Date()
}


export const Comments = ({ post }) => {

    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [ comment, setComment ] = useState(initialValues);

    const [comments, setComments ] = useState([]);

    const [ toggle, setToggle ] = useState(false);

    const { account } = useContext(DataContext);

    useEffect (() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }

        }
        if(post._id){
            getData();
         }
    }, [post, toggle]) 

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments:e.target.value
        });
    }

    const addComment = async (e) => {
        let response = await API.newComment(comment);
        if (response.isSuccess) {
            setComment(initialValues);
            setToggle(prevState => !prevState);
        }
        // setToggle(prevState => !prevState);
    }


    return (
        <Box>
            <Container>
                <Image src={url} alt='dp' />
                <StyledTextArea 
                    minRows={5}
                    placeholder=' Share your experience'
                    value={comment.comments}
                    onChange={(e) => handleChange(e)}
                />
                <Button 
                    variant="contained" 
                    style={{ backgroundColor: 'orange', color: 'white', height: 40 }} 
                    size="medium" 
                    // style={{ height: 40 }} 
                    onClick={(e) => addComment(e)}>
                Post</Button>
            </Container>

            <Box>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
        // <div>This is comments</div>
    )
}


export default Comments;