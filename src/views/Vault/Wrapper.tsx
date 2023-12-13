// ** Material UI Components ** //
import Stack, { StackProps } from '@mui/material/Stack';

const Wrapper: React.FC<StackProps> = ({ children, ...rest }) => <Stack {...rest}>{children}</Stack>;

export default Wrapper;
