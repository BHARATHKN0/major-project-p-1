import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';

const Component = styled(Box)`
    margin-top: 20px;
    padding: 10px;
    background-color: #f5f5f5;
    border: 0.01px solid orange;
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
    // Helper function to render comment text with clickable links and line breaks
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
        // Replace '\n' with <br> to render line breaks
        return (
            <span key={index}>
                {part.split('\n').map((line, i) => (
                    <span key={`${index}-${i}`}>
                        {line}
                        {i < part.split('\n').length - 1 && <br />} {/* Add <br> except for the last line */}
                    </span>
                ))}
            </span>
        );
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
            <Typography style={{ textDecoration: 'none' }} >
                {renderCommentWithLinks(comment.comments)}
            </Typography>
        </Component>
    );
};

export default Comment;
