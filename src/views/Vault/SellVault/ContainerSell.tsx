import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Content from '../Content';
import ContolSide from '../ControlSide';
import ContentSell from './ContentSell';
import '../Vault.css';
import ControlSideSell from './ControlSideSell';
const ContainerSell = () => {
    return (
        <Stack flexGrow={1} direction="row" sx={{ height: 'calc(100VH - 70px)' }}>
            <ContentSell />
            <Divider orientation="vertical" flexItem />
            <ControlSideSell />
        </Stack>
    );
};

export default ContainerSell;
