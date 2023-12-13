// ** Material UI Components ** //
import Stack from '@mui/material/Stack';
import Collections from 'views/Collections';
import Trending from 'views/Trending';
import TopCards from './TopCards';

const Content = () => {
    return (
        <Stack>
            <TopCards />
            <Trending />
            <Collections />
        </Stack>
    );
};

export default Content;
