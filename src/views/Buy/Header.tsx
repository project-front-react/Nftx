// ** Material UI Components ** //
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Stack>
            <Stack spacing={1}>
                <Typography fontSize={28} fontWeight={700} lineHeight="36px">
                    Buy NFTs
                </Typography>
                <Typography>Browse the decentralized NFT marketplace.</Typography>
            </Stack>
            <Box
                sx={{
                    my: 2,
                    height: '1px',
                    width: '100%',
                    backgroundImage: 'linear-gradient(to right,transparent,#fb3b70,#ff6d41)'
                }}
            />
        </Stack>
    );
};

export default Header;
