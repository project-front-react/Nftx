import Stack from '@mui/material/Stack';

import Container from '../Container';
import Filter from '../Filter';
import Wrapper from '../Wrapper';
import ContainerSell from './ContainerSell';
import './FilterSell';
import FilterSell from './FilterSell';
const SellVault = () => {
    return (
        <Stack flexGrow={1} >
            <Wrapper>
                <FilterSell>
                    <ContainerSell />
                </FilterSell>
            </Wrapper>
        </Stack>
    );
};

export default SellVault;
