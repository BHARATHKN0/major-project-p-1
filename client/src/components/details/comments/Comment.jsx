import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';

const Component = styled(Box)`
    margin-top: 20px;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid rgba(224, 224, 224, 0.7);
    border-radius: 15px;
`;

const Container = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600;
    margin-right: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
    cursor: pointer;
`;

const Comment = ({ comment, setToggle }) => {
    const { account } = useContext(DataContext);

    const removeComment = async () => {
       let response = await API.deleteComment(comment._id);
        if (response.isSuccess) {
            setToggle(prevState => !prevState );
        }

    }

    // Helper function to render comment text with clickable links
    const renderCommentWithLinks = (commentText) => {
        if (!commentText || typeof commentText !== 'string') {
            return null;
        }

        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return commentText.split(urlRegex).map((part, index) => {
            if (part.match(urlRegex)) {
                return (
                    <a key={index} href={part} target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <Component>
            <Container>
                <Name>By: {comment.name}</Name>
                <Typography variant="body2" color="textSecondary">
                    {new Date(comment.date).toDateString()}
                </Typography>
                {comment.name === account.username && (
                    <DeleteIcon onClick={() => removeComment()} />
                )}
            </Container>
            {/* Render comment text with clickable links */}
            <Typography>
                {renderCommentWithLinks(comment.comments)}
            </Typography>
        </Component>
    );
};

export default Comment;
