import { Box, Button, Stack, Typography } from '@mui/material';
import './MainRewardDash.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import nftx from '../../assets/img/logo_mini_nftx.avif'
const Activity_Data = [
    {
        image: 'https://lh3.googleusercontent.com/uC2m7urkm810SoILBPncSmLOknxVu2mhFfx2lYGYOCCu8man-GPVZQHUFyzsoPTnsAQuLjg_wHcVq2ebmSQGbTST7H1DhkdrZ0jJSg',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Stake',
        tokenId: '#1320',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/7pYKsrJTr2cnCcMM_1JBI6d1A6LB4K7HupNHnhnWbu2wD0-srGY_DgG7bhsJt-6-op7RhNYyhe9xFR9VJYp74-sEmQtiDaOdBfEYEA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Sell',
        tokenId: '#6320',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/XhaqWiPAwrsGDE-WlpXq6WJQiLlHkimzEUonKFMY38UfCoUBspfd4JfBUmNYy7V7NEzjJg9sSrqzRcLdpj-UFd6LNcYFOqahZYm5',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Buy',
        tokenId: '#4780',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/uC2m7urkm810SoILBPncSmLOknxVu2mhFfx2lYGYOCCu8man-GPVZQHUFyzsoPTnsAQuLjg_wHcVq2ebmSQGbTST7H1DhkdrZ0jJSg',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Stake',
        tokenId: '#1320',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/7pYKsrJTr2cnCcMM_1JBI6d1A6LB4K7HupNHnhnWbu2wD0-srGY_DgG7bhsJt-6-op7RhNYyhe9xFR9VJYp74-sEmQtiDaOdBfEYEA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Sell',
        tokenId: '#6320',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/XhaqWiPAwrsGDE-WlpXq6WJQiLlHkimzEUonKFMY38UfCoUBspfd4JfBUmNYy7V7NEzjJg9sSrqzRcLdpj-UFd6LNcYFOqahZYm5',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Buy',
        tokenId: '#4780',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/uC2m7urkm810SoILBPncSmLOknxVu2mhFfx2lYGYOCCu8man-GPVZQHUFyzsoPTnsAQuLjg_wHcVq2ebmSQGbTST7H1DhkdrZ0jJSg',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Stake',
        tokenId: '#1320',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/7pYKsrJTr2cnCcMM_1JBI6d1A6LB4K7HupNHnhnWbu2wD0-srGY_DgG7bhsJt-6-op7RhNYyhe9xFR9VJYp74-sEmQtiDaOdBfEYEA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Sell',
        tokenId: '#6320',
        fee: '0.1'
    },
    {
        image: 'https://lh3.googleusercontent.com/XhaqWiPAwrsGDE-WlpXq6WJQiLlHkimzEUonKFMY38UfCoUBspfd4JfBUmNYy7V7NEzjJg9sSrqzRcLdpj-UFd6LNcYFOqahZYm5',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'YYC',
        nftName: 'Buy',
        tokenId: '#4780',
        fee: '0.1'
    }
];

function MainRewardDash() {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)

    return (

        <>
            <Stack direction="row" className="MainRewardContainer" sx={{ height: '100%' }}>
                <Stack width="75%" className= {light_mode? 'MainRightCon Light' : 'MainRightCon'}>
                    <Stack
                        // className="sub-head-heroReward"
                        className={light_mode?  "sub-head-heroReward-light" : 'sub-head-heroReward'}
                        direction="row"
                        sx={{
                            justifyContent: 'space-between',
                            background: '#191A1B',
                            p: '15px 15px',
                            alignItems: 'center'
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALlJREFUWEdjPFgW+58BCWhcFEDmUp19Q/8DipmMow4YdCGQK8uPEkeTH39E4aPLoycSQurR5THSwKgD6B4CepNzUMoB9DiidkGA7kHGUQcMuhBAj/PdWxhRhFx9UJIMRhIhVT1GGhh1wICHwGg5MPJCAL1BQqgyItRmRG/zETKP5PbAqAOoHgLolRGh+p9QLiHUZkQ3n2BdQKjRiS4/6gCqhwB6/Y6ez9GjAD2REmo/EEwDow6gdQgAAKiH8nWiiXJZAAAAAElFTkSuQmCC"
                                alt=""
                                style={{ borderRadius: '50%', marginTop: '4px', height: '30px', width: '30px' }}
                            />
                            <Typography sx={{ p: '7px 10px' }}>0x44…35Ab</Typography>
                        </Box>
                        <Box className="sub-head-btns">
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/rewards/dashboard">
                                {' '}
                                <Button
                                    sx={{
                                        '&:hover': {
                                            background: 'transparent',
                                            border: '1px solid rgb(251, 59, 112)'
                                        }
                                    }}
                                >
                                    Dashboard
                                </Button>
                            </Link>
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/rewards/pool">
                                {' '}
                                <Button
                                    sx={{
                                        '&:hover': {
                                            background: 'transparent',

                                            border: '1px solid rgb(251, 59, 112)'
                                        }
                                    }}
                                >
                                    Pools
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                    <Stack className={light_mode? "MainHeroRewDashLight" :"MainHeroRewDash" } sx={{ p: '15px 0' }}>
                        <Box
                            sx={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                display: 'flex',
                                p: '0px 15px'
                            }}
                        >
                            <Typography variant="h6">Staked Pools</Typography>
                            <Typography sx={{ marginRight: '10px' }}>
                                {' '}
                                <img
                                    src="https://nftx.io/images/ethereum-nftx.svg"
                                    alt=""
                                    style={{
                                        height: '38px',
                                        width: '20px',
                                        marginTop: '-17px',
                                        paddingTop: '25px'
                                    }}
                                />
                                0.00 <span style={{ color: '#FB3B70' }}> / </span>$0.00
                            </Typography>
                        </Box>
                        <Box sx={{ p: '20px 15px' }}>
                            <Typography>You have no active staking positions or unstaked balances.</Typography>
                        </Box>
                        <Box className="btnExplPool" sx={{ display: 'flex', justifyContent: 'center', m: '40px 0' }}>
                            <Link to="/rewards/pool" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        width: '380px',
                                        height: '68px',

                                        color: 'white',
                                        py: 1.25,
                                        px: 2,
                                        borderColor: 'rgb(251, 59, 112)',
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                                    }}
                                >
                                    Explore Pools
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>

                {/* rightconetenttt */}

                <Stack width="25%" className={light_mode? "ActivityLeftConLight" : 'ActivityLeftCon'}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: '30px 16px 20px 15px'
                        }}
                    >
                        <Typography>
                            <b>Activity</b>{' '}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '6px', fontSize: '10px' }}>
                            <Typography fontSize={12.5}>All</Typography>
                            <Typography fontSize={12.5}>Buy</Typography>
                            <Typography fontSize={12.5}>Sell</Typography>
                            <Typography fontSize={12.5}>Swap</Typography>
                            <Typography fontSize={12.5}>Supply</Typography>
                        </Box>
                    </Box>
                    {Activity_Data.map((item: any) => (
                        <Box
                        className={light_mode? 'activtyRightDataLight' : 'activitRightData'}
                            sx={{
                             
                                height: '80px',

                                m: '5px 15px',
                                borderRadius: '7px',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Box className="logo">
                                <img
                                    src={item.image}
                                    alt=""
                                    style={{ height: '60px', width: '65px', borderRadius: '10px', margin: '12px' }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Box>
                                    <b style={{ fontSize: '13px' }}>{item.nftName}</b>
                                    <span style={{ fontSize: '13px', color: 'rgb(148,152,161)' }}> | 12 min. ago</span>
                                    <Stack direction="row">
                                        <img src={nftx} alt="" style={{ height: '20px', width: '20px' }} />
                                        <b style={{ fontSize: '13px', padding: '0 5px' }}>{item.logo_name}</b>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: '13px', color: 'rgb(148,152,161)' }}>
                                            Token ID
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>{item.tokenId}</Typography>
                                    </Box>
                                    <Box sx={{ pr: '5px' }}>
                                        <Typography sx={{ fontSize: '13px', color: 'rgb(148,152,161)', mr: '3px' }}>
                                            Fee
                                        </Typography>

                                        <Typography sx={{ color: '#69E35E' }}>{item.fee}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </>
    );
}

export default MainRewardDash;
