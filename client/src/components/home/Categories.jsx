


import { categories } from "../../constants/data";
import { Button, Table, TableBody, TableHead, TableRow, TableCell, styled } from "@mui/material";
import { Link } from "react-router-dom";


const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: orange;
    border-radius: 15px;
    color: #fff;
`

const Categories = () => {
    return (
        <>
            <Link to='/createpost' style={{ textDecoration: 'none' }} >
            <StyledButton variant="contained" >Create Post</StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id} >
                                <TableCell>
                                    { category.type }
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