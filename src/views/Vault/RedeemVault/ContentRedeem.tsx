import Stack from '@mui/material/Stack';
import ContentHeader from '../ContentHeader';
import Lists from '../Lists';

const ContentRedeem = () => {
    return (
        <Stack flexGrow={1} sx={{ height: '100%' }}>
            <ContentHeader />
            <Lists />
            {/* <ControlSide/> */}
        </Stack>
    );
};

export default ContentRedeem;
