import Stack from '@mui/material/Stack';

import Container from '../Container';
import Filter from '../Filter';
import Wrapper from '../Wrapper';

import ContainerStake from './ContainerStake';

import FilterStake from './FilterStake';

const StakeVault = () => {
    return (
        <Stack flexGrow={1} sx={{ height: 'calc(100VH - 70px)' }}>
            <Wrapper>
                <FilterStake>
                    <ContainerStake />
                </FilterStake>
            </Wrapper>
        </Stack>
    );
};

export default StakeVault;
