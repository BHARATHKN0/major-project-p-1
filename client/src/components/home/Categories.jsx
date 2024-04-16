


import { categories } from "../../constants/data";
import { Button, Table, TableBody, TableHead, TableRow, TableCell, styled } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";


const StyledButton = styled(Button)`
    margin: 20px;
    width: 92%;
    background: orange;
    border-radius: 15px;
    color: #fff;
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    border-radius: 15px;
`;

const StyledTable = styled(Table)`
    // border: 1px solid black;
    border-radius: 15px;
    border-collapse: collapse;
    width: 100%;
    background-color: rgba(225, 225, 225, 1);
    margin-left: 10px;
    

    & th,
    & td {
        padding: 19px;
        
        border-radius: 15px;
        text-align: center;
        transition: background-color 0.5s ease; /* Smooth transition for hover effect */
        cursor: pointer; 
        

        &:hover {
            border-radius: 15px;
            background-color: orange;
            transform: scale(1.01);
            
        }
    }
`;


const Categories = () => {

    const [searchParams] = useSearchParams();
    const category= searchParams.get('category');
    return (
        <>
            <Link to={`/createpost?category=${category || ''}`}  >
            <StyledButton variant="contained" >Create Post</StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to='/'>
                            All Categories
                            </StyledLink>
                           
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id} >
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                    { category.type }
                                    </StyledLink>
                                    
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;