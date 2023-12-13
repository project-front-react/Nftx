import Stack from '@mui/material/Stack';
import ContentHeader from './ContentHeader';
import Lists from './Lists';
import ContolSide from './ControlSide';
const Content = () => {
    return (
        <Stack flexGrow={1} sx={{ height: '100%' }}>
            <ContentHeader  />
            <Lists />
            {/* <ControlSide/> */}
        </Stack>
    );
};

export default Content;
