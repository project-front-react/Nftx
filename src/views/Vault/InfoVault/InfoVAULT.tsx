import Stack from '@mui/material/Stack';

import Container from '../Container';
import Filter from '../Filter';
import Wrapper from '../Wrapper';
import ContainerInfo from './ContainerInfo';


const InfoVAULT = () => {
    return (
        <Stack flexGrow={1}>
            <Wrapper>
            
                    <ContainerInfo />
            
            </Wrapper>
        </Stack>
    );
};

export default InfoVAULT;
