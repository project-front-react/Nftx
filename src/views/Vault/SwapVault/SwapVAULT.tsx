import Stack from '@mui/material/Stack';
import { type } from 'os';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Filter from '../Filter';
import Wrapper from '../Wrapper';
import ContainerSwap from './ContainerSwap';
import FilterSwap from './FilterSwap';
const SwapVAULT = () => {
    const SwappingComponents = useSelector<RootState, string>((state) => state.swapreducer.payload);
    const light_mode = useSelector<RootState, string>((state) => state.changeTheme.payload);

    console.log(SwappingComponents, 'swapppppppppp');
    // function timepass () {
    //     if(SwappingComponents === 'swapFrom'){
    //         return console.log('huiellif swap')
    //     }
    //     else{
    //         return console.log('swapp')
    //     }
    // }
    return (
        <Stack flexGrow={1} sx={{ml:"50px"}}>
            <Wrapper>
                {/* <Filter> */}
                <ContainerSwap />
                {/* </Filter> */}
                {SwappingComponents == 'swapFrom' ? <FilterSwap /> : <Filter />}
            </Wrapper>
        </Stack>
    );
};

export default SwapVAULT;
