import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Content from '../Content';


import '../Vault.css';

import ContentInfo from './ContentInfo'
import ControlSideInfo from './ControlSideInfo';
const ContainerInfo = () => {
    return (
        <Stack flexGrow={1} direction="row" sx={{ height: 'calc(100VH - 70px)' }}>
            <ContentInfo/>
            <Divider orientation="vertical" flexItem />
        <ControlSideInfo/>
        </Stack>
    );
};

export default ContainerInfo;
