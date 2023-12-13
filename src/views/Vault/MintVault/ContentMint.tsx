import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContentHeader from '../ContentHeader';
import Lists from '../Lists';
import ContolSide from '../ControlSide';
import '../Vault.css';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

const ContentMint = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <Stack className={light_mode ? 'contentVault Light' : ''} flexGrow={1} sx={{ height: '100%', background: 'rgb(35,36,37)' }} >

            <ContentHeader />
            <p className="contentText" style={{ textAlign: 'center', padding: '20px' }}>
                You have no NFTs eligible to mint.
            </p>
            <Stack direction="row" spacing={2} className="swap_btns" justifyContent="center">
                <Button
                    variant="contained"
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        color: 'white',
                        py: 1.25,
                        px: 2,
                        borderColor: 'rgb(251, 59, 112)',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                    }}
                >
                    Explore Vaults
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        color: 'black',
                        py: 1.25,
                        px: 2,
                        borderColor: 'rgb(251, 59, 112)',
                        backgroundColor: 'white'
                    }}
                >
                    Change Wallet
                </Button>
            </Stack>
            {/* <Lists /> */}
            {/* <ControlSide/> */}
        </Stack>
    );
};

export default ContentMint;
