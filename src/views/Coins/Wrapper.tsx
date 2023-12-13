// ** Material UI Components ** //
import Stack, { StackProps } from '@mui/material/Stack';

const Wrapper: React.FC<StackProps> = ({ children, ...rest }) => (
    <Stack {...rest} sx={{ p: 6 }}>
        {children}
    </Stack>
);

export default Wrapper;
