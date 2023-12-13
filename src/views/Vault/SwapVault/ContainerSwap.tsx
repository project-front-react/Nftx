import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Content from '../Content';
import ContolSide from '../ControlSide';
import ContentSwap from './ContentSwap';
import '../Vault.css';
import ControlSideSwap from './ControlSideSwap';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
const ContainerSwap = () => {
    const SwappingComponents = useSelector<RootState, string>(state=>state.swapreducer.payload)


    return (
        <Stack flexGrow={1} direction="row" sx={{ml:'40px'}}  className={SwappingComponents=='swapFrom'? 'heightstakevault': 'heightstakevaultdark' } >
            {/* <ContentSwap /> */}
            {SwappingComponents== 'swapFrom' ? <ContentSwap/>: <Content/>}
            <Divider orientation="vertical" flexItem />
            <ControlSideSwap />
        </Stack>
    );
};

export default ContainerSwap;
