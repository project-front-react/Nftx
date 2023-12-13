import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ContentRedeem from './ContentRedeem';
import ContolSideRedeem from './ControlSideRedeem';

const ContainerRedeem = () => {
    return (
        <Stack flexGrow={1} direction="row" sx={{ height: 'calc(100VH - 70px)' }}>
            <ContentRedeem />
            <Divider orientation="vertical" flexItem />
            <ContolSideRedeem />
        </Stack>
    );
};

export default ContainerRedeem;
