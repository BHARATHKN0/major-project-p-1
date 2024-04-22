
import { Box, Typography, styled } from "@mui/material";
import './Banner.css'


const Image = styled(Box)`
    // background: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReva_Institute_of_Technology_and_Management&psig=AOvVaw0Bqws20-KWYPfvJ2R60Ey1&ust=1710597820398000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCa19G39oQDFQAAAAAdAAAAABAP);
    // width: 100%;
    // height: 50vh;
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    // justify-content: center;
`;
    
const Heading = styled(Typography)`
    font-size: 75px;
    color: white;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    padding: 10px 20px;         
    background-color:rgba(0,0,0,0.6);
    border-radius: 20px; 
    line-height: 1;    
    margin-top: 40px;
`;

const SubHeading = styled(Typography)`
    font-size: 22px;
    text-decoration: none;
    padding: 10px 20px;  
    margin-top: 5px;  
    color: white;     
    background-color:rgba(0,0,0,0.6);
    border-radius: 20px; 
    line-height: 1
    
`;

const Banner = () => {

    return (
        <div>
        <Image className="image">
            <Heading>CAMPUS CONNECT</Heading>
            <SubHeading>A PLATFORM FOR SHARING INTERVIEW EXPERIENCE & EVENT MANAGEMENT</SubHeading>
        </Image>
        </div>
    )
}

export default Banner;