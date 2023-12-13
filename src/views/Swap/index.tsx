import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Swap.css';
import Header from './Header';
import Wrapper from './Wrapper';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';
import Footer2 from 'components/Footer2';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
const Buy = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <Stack flexGrow={1} sx={{ height: '100%' }}>
            <Wrapper className={light_mode? 'greybgWrap' : ''} >
            
                <Header />
                <Stack sx={{height: '52vh'}}>
                    <Stack
                        sx={{
                            my: 10,
                            mx: 'auto'
                        }}
                        spacing={4}
                    >
                        <Typography>You have no eligible NFTs to swap on NFTX.</Typography>
                        <Stack direction="row" spacing={2} className="swap_btns">
                            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
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
                            </Link>
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
                    </Stack>
                </Stack>
            </Wrapper>
            {/* <Footer2 /> */}
            <Footer2 />
        </Stack>
    );
};

export default Buy;
