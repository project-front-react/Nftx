import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Content from '../Content';
import ContolSide from '../ControlSide';
import ContentMint from './ContentMint';
import '../Vault.css';
import ControlSideMint from './ControlSideMint';
const ContainerSell = () => {
    return (
        <Stack flexGrow={1} direction="row" sx={{ height: 'calc(100VH - 70px)' }}>
            <ContentMint />
            <Divider orientation="vertical" flexItem />
            <ControlSideMint />
        </Stack>
    );
};

export default ContainerSell;
