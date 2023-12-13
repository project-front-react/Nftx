import Stack from '@mui/material/Stack';


import ContainerRedeem from './ContainerRedeem';
import FilterRedeem from './FilterRedeem';
import Wrapper from '../Wrapper';

const RedeemVault = () => {
    return (
        <Stack flexGrow={1}>
            <Wrapper>
                <FilterRedeem>
                    <ContainerRedeem />
                </FilterRedeem>
            </Wrapper>
        </Stack>
    );
};

export default RedeemVault;
