import Stack from '@mui/material/Stack';

import Container from '../Container';
import Filter from '../Filter';
import Wrapper from '../Wrapper';
import ContainerMint from './ContainerMint';
import FilterMint from './FilterMint';
const MintVAULT = () => {
    return (
        <Stack flexGrow={1}>
            <Wrapper>
                <FilterMint>
                    <ContainerMint />
                </FilterMint>
            </Wrapper>
        </Stack>
    );
};

export default MintVAULT;
