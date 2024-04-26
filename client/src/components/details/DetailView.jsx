import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Edit, Delete } from "@mui/icons-material";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 10,
  },
}));

const Image = styled("img")({
  marginTop: "65px",
  width: "100%",
  height: "60vh",
  borderRadius: "40px",
  objectFit: "contain",
});

const Heading = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 30px 0 10px 0;
  word-break: break-word;

`;

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #FFA500;
  border-radius: 10px;
  cursor: pointer;
  
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #FFA500;
  border-radius: 10px;
  cursor: pointer;
`;

const Author = styled(Box)`
  color: black;
  margin: 20px 0;
  display: flex;
`;

const Description = styled(Typography)`
  word-break: break-word;
  white-space: pre-line;

`;


const DetailView = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { account } = useContext(DataContext);
  const navigate = useNavigate();

  const url =
    post.picture ||
    "https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/album/1637408976_9ec6b1909248fd1bd7fa.jpg";

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  // Function to render text content with clickable links
  const renderDescriptionWithLinks = (text) => {
    if (!text) {
      return null; // Return null or placeholder if text is undefined or empty
    }
  
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
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
    <Container>
      {Object.keys(post).length === 0 ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Image src={url} alt="blog" />
  
          <Box style={{ float: "right" }}>
            {account.username === post.username && (
              <>
                <Link to={`/update/${post._id}`}>
                  {" "}
                  <EditIcon color="primary" />{" "}
                </Link>
                <DeleteIcon onClick={() => deleteBlog()} color="error" />
              </>
            )}
          </Box>
          <Heading>{post.title}</Heading>
  
          <Author>
            <Typography>
              <strong>Author : {" "}</strong>
            <Box
          component="span"
          style={{
            fontWeight: 600,
            backgroundColor: 'orange',
            color: 'black',
            borderRadius: '10px',
            padding: '4px 8px',
          }}
        >
                {post.username}
              </Box>
            </Typography>
            <Typography style={{ marginLeft: "auto" }}>
              <strong>Posted on: </strong>{new Date(post.createdDate).toDateString()}
            </Typography>
          </Author>
  
          {/* Render description with embedded clickable links */}

          <Description>
          <strong>Description:</strong> {renderDescriptionWithLinks(post.description)}
          </Description>
  
          <Comments post={post} />
        </>
      )}
    </Container>
  );

}
export default DetailView;
