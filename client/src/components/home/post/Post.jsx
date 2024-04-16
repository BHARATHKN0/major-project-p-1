// import styled from '@emotion/styled';
import  {Box,  Typography, styled } from '@mui/material';

import { addElipsis } from '../../../utils/common-utils';

const Container = styled(Box)`
    border:1px solid #d3cede;
    border-radius:10px;
    margin: 10px;
    height:350px;
    display:flex;
    align-items: center;
    flex-direction:column;
    & > p {
        padding:0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width:'100%',
    borderRadius:'10px 10px 0 0',
    objectFit:'cover',
    height:200
})

const Text = styled(Typography)`
    color: #878787;
    border: 1px solid rgba(224, 165, 0, 0.2);
    // background-color: rgba(224, 165, 0, 0.1);
    border-radius: 10px;
    font-size:16px;
`
const Text1 = styled(Typography)`
    color: black;
    border: 1px solid rgba(224, 165, 0, 0.2);
    background-color: rgba(224, 165, 0, 0.15);
    border-radius: 10px;
    font-size:16px;
    
`


const Heading = styled(Typography)`
    font-size: 22px;
    font-weight:600;
`

const Details = styled(Typography)`
    font-size:14px;
    word-break:break-word;
    font-weight:600;

`
const  Post =({post}) =>{

    const url = post.picture ? post.picture :'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/album/1637408966_a9bc5a21bde717eed89a.jpg'

    return (
        <Container>
            <Image src={url} alt="post"/>
            <Text1>{post.categories}</Text1>
            <Heading>{addElipsis(post.title, 25)}</Heading>
            <Text>By: {post.username}</Text>
            <Details>Description: {addElipsis(post.description,100)}</Details>

        </Container>
    )
}

export default Post;