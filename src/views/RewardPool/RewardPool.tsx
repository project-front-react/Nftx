import { Box, Button, Stack, Typography } from '@mui/material';
import '../RewardDashboard/MainRewardDash.css';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './RewardPool.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Logo from 'components/Logo/Logo';
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

// POOL JSON DATA

const Pool_Data = [
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/31/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/31/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/31/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    },
    {
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/694/256x256.png',
        logo_name: 'MEEB',
        logo_descri: 'Meebits',
        APRFirst: '110%',
        APRSecond: '89.90%',
        Liquidity: 'Ξ2879.9',
        Dfees: '0.74 MEEB'
    }
];

function RewardPool() {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)

    return (
        <>
            <Stack direction="row" className="MainPoolContainer" sx={{ height: '100%' }}>
                <Stack width="75%" sx={{ background: '#242526' }} className="MainRightCon">
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
                    <Stack className={light_mode? "MainPoolReward Light" : 'MainPoolReward' } sx={{ overflow: 'auto' }}>
                        <Stack
                            direction="row"
                            className="searchAndDropDown"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ zIndex: 999, p: '20px' }}
                        >
                            <TextField
                                variant="standard"
                                className="searchPool"
                                inputProps={{
                                    placeholder: 'Search pools'
                                }}
                                InputProps={{
                                    sx: {
                                        padding: (theme) => theme.spacing(1, 1.5),
                                        paddingLeft: 0,
                                        '& input': {
                                            background: 'none',
                                            py: 0
                                        }
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchRoundedIcon
                                                sx={{
                                                    color: 'rgb(154 150 163)'
                                                }}
                                            />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormControl className="dropDownPool">
                                <NativeSelect
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native'
                                    }}

                                >
                                    <option>Highest TVL</option>
                                    <option>Highest APR</option>
                                    <option>Alphabetical</option>
                                </NativeSelect>
                            </FormControl>
                        </Stack>
                        <Stack className="container_Pools">
                            {Pool_Data.map((item: any) => (
                                <Stack className="poolProduct" sx={{ px: '10px', width: '25%', mt: '15px' }}>
                                    <Box className={light_mode? 'poolProductDataLight' : 'poolProductData'}
                                        sx={{
                                            backgroundColor: 'rgb(25,26,27)',
                                            borderRadius: '5px',
                                            p: '9px 9px 18px 9px'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', pb: '15px' }}>
                                            <img src={nftx} alt="" style={{ height: '34px', width: '34px' }} />
                                            <Box sx={{ px: '7px' }}>
                                                <Typography>
                                                    <b style={{ fontSize: '17px' }}>{item.logo_name}</b>{' '}
                                                </Typography>
                                                <Typography fontSize={13} sx={{ color: 'rgb(210,212,213)' }}>
                                                    {item.logo_descri}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Typography className="fontSmallgrey">APRs</Typography>
                                            <Typography>
                                                {' '}
                                                <span className="aprFirst">{item.APRFirst}</span> /{' '}
                                                <span className="aprSecond">{item.APRSecond}</span>
                                            </Typography>
                                        </Box>
                                        <hr className="hrGrey" />
                                        <Box sx={{ alignItems: 'center' }}>
                                            <Typography className="fontSmallgrey">STAKERS</Typography>
                                            <Box className="stakers"> </Box>
                                        </Box>

                                        <hr className="hrGrey" />

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Typography className="fontSmallgrey">LIQUIDITY</Typography>
                                            <Typography className="boldText">{item.Liquidity}</Typography>
                                        </Box>
                                        <hr className="hrGrey" />

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Typography className="fontSmallgrey">30D FEES</Typography>
                                            <Typography className="boldText">{item.Dfees}</Typography>
                                        </Box>
                                        <hr className="hrGrey" />

                                        <Box sx={{ alignItems: 'center' }}>
                                            <Typography className="fontSmallgrey">30D ACTIVITY</Typography>
                                            <Box className="dActivity"> </Box>
                                        </Box>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
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

export default RewardPool;
