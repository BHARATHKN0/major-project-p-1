
import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import reva from '../../Assets/REVA_UNIVERSITY.jpg'
import { AddCircle as Add } from '@mui/icons-material';


const Container = styled(Box)`
    margin: 65px 100px
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;


const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 20px;
    border: none;
    &:focus-visible {
        outline: none;
    }
`

const CreatePost = () => {

    // const url = '../../Assets/reva.jpg';

    return (
        <Container>
            
        <Image src={reva} alt= 'banner' />

        <StyledFormControl>
            <label htmlFor="fileinput">
                <Add fontSize="large" color="action" />
            </label>
            <input type="file" id="fileinput" style={{ display: 'none' }}/>

            <InputTextField placeholder="Title" />
            <Button variant="contained" style={{ background: "orange"}}>Publish</Button>
        </StyledFormControl>

        <Textarea 
            minRows={5}
            placeholder="Tell your story..."
        />
            
        <div>Hello from CreatePost</div>
        </Container>
        
    )
}


export default CreatePost;