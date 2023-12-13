import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Content from './Content';
import ContolSide from './ControlSide';

const Container = () => {
    return (
        <Stack flexGrow={1} direction="row" >
            <Content />
            <Divider orientation="vertical" flexItem />
            <ContolSide />
        </Stack>
    );
};

export default Container;
