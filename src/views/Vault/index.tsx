import Stack from '@mui/material/Stack';

import Container from './Container';
import Filter from './Filter';
import Wrapper from './Wrapper';
import './Vault.css'
const Buy = () => {
    return (
        <Stack flexGrow={1} sx={{ml:"46px"}} className= 'mar-manage'>

            <Wrapper>
                    <Container />
                <Filter />
                
            </Wrapper>
        </Stack>
    );
};

export default Buy;
