import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { addElipsis } from '../../../utils/common-utils';

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 10px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled('img')`
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const Text = styled(Typography)`
  color: #878787;
  border: 0.1px solid rgba(224, 165, 0, 0.2);
  border-radius: 10px;
  font-size: 14px;
  padding: 2px;
`;

const Heading = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  
`;

const Details = styled(Typography)`
  font-size: 13px;
  word-break: break-word;
  font-weight: 550;
  padding: 3px;
`;

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : 'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/album/1637408966_a9bc5a21bde717eed89a.jpg';

  // Determine the maximum characters based on screen width
  const maxCharacters = window.innerWidth >= 768 ? 25 : 20;

  return (
    <Container>
      <Image src={url} alt="post" />
      <Text>{post.categories}</Text>
      <Heading> {addElipsis(post.title, maxCharacters)}</Heading>
      <Text>By: {post.username}</Text>
      <Details>Description: {addElipsis(post.description, 100)}</Details>
    </Container>
  );
};

export default Post;
