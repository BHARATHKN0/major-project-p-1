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
    color: #878787
    font-size:16px
`

const Heading = styled(Typography)`
    font-size: 20px;
    font-wright:600;
`

const Details = styled(Typography)`
    font-size:14px;
    word-break:break-word;
`
const  Post =({post}) =>{

    const url = post.picture ? post.picture :'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/album/1637408966_a9bc5a21bde717eed89a.jpg'

    return (
        <Container>
            <Image src={url} alt="blog"/>
            <Text>{post.categories}</Text>
            <Heading>{addElipsis(post.title, 25)}</Heading>
            <Text>{post.username}</Text>
            <Details>{addElipsis(post.description,100)}</Details>

        </Container>
    )
}

export default Post;