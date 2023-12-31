// ** Material UI Components ** //
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <>
            <Stack>
                <Stack spacing={2} sx={{ mb: 5 }}>
                    <Typography fontSize={28} fontWeight={700} lineHeight="36px">
                        Create Vault
                    </Typography>
                    <Typography>Please connect your wallet to create an NFTX vault.</Typography>
                </Stack>
                <Box
                    sx={{
                        mb: 2,
                        height: '1px',
                        width: '100%',
                        backgroundImage: 'linear-gradient(to right,transparent,#fb3b70,#ff6d41)'
                    }}
                />
            </Stack>
            {/* <Footer2/> */}
        </>
    );
};

export default Header;
