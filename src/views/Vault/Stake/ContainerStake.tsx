import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Content from '../Content';
import ContolSide from '../ControlSide';

import '../Vault.css';
import ContentStake from './ContentStake';
import ControlSideStake from './ControlSideStake';
const ContainerStake = () => {
    return (
        <Stack flexGrow={1} direction="row" sx={{ height: 'calc(100VH - 70px)' }}>
            <ContentStake />
            <Divider orientation="vertical" flexItem />
            <ControlSideStake />
        </Stack>
    );
};

export default ContainerStake;
