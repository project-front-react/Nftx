// ** Material UI Components ** //
import Grid, { GridProps } from '@mui/material/Grid';

const List: React.FC<GridProps> = ({ children, ...rest }) => (
    <Grid container {...rest}>
        {children}
    </Grid>
);

export default List;
