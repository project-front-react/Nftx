import Box from '@mui/material/Box';
import AppBg from 'components/AppBg';

import { Outlet } from 'react-router-dom';

const Wrapper = () => (
    <Box
        sx={{
            minHeight: 'calc(100vh - 70px)',
            mt: '70px'
        }}
    >
        <Outlet />
        <AppBg />
    </Box>
);

export default Wrapper;
