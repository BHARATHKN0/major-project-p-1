
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
    display: block;
    width: 100%;
    height: 100%;
    color: black;
    text-decoration: none;
    border-radius: 15px;
`;

const StyledTableCell = styled(TableCell)`
    padding: 19px;
    border-radius: 15px;
    text-align: center;
    transition: background-color 0.9s ease;
    cursor: pointer;

    &:hover {
        background-color: orange;
        transform: scale(1.04);
    }
`;


const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <Link to={`/createpost?category=${category || ''}`}>
                <StyledButton variant="contained">Create Post</StyledButton>
            </Link>

            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <StyledLink to='/'>All Categories</StyledLink>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {categories.map(category => (
                        <TableRow key={category.id}>
                            <StyledTableCell>
                                <StyledLink to={`/?category=${category.type}`}>
                                    {category.type}
                                </StyledLink>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;