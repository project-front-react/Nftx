import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContentHeader from '../ContentHeader';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './InfoVault.css';
import { Box } from '@mui/material';
import Lists from '../Lists';
import { Link } from 'react-router-dom';
import ContolSide from '../ControlSide';
import '../Vault.css';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import nftx from '../../../assets/img/logo_mini_nftx.avif'
const ListData = [
    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/jeXl3wXGW2GO0p6mZfxUS0Em7CAxIfn--ejJHDk8vmFFFl6Dv0PG-k14i0EluEqFfGoZy2d0JNYPAvgTJjP7nkGpNoAbbhC7lQzG69g',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/c-oJCeJ80CkjrgDHcGsP5F77vyfQAZoLAHRgLAPx1LwaOp8whJw_MA5YWuDUnLzkDHFNacUYR-2ymvvnlMo0fsxuzgnLV9rD6mK4WbU',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/212/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/IZyBQNJbXVoen1pzpaBTNkBUxq9WfcYQXoGMhaNRk7_LJcyCpzdRMKRAuGht7l1r_4nEwD5B5RlluVrevY3I9dcycEUTdUq2qFbHxA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#434',
        fee: 0.1
    }
];

const ContentInfo = () => {
    const light_mode = useSelector<RootState, boolean>((state) => state.changeTheme.payload);

    return (
        <Stack
            className={light_mode ? 'contentVault Light' : ''}
            flexGrow={1}
            sx={{ height: '100%', background: 'rgb(35,36,37)', overflow: 'auto' }}
        >
            <ContentHeader />

            <Stack
                className="priceDiv-main"
                sx={{ height: '6%', alignItems: 'flex-start', justifyContent: 'center', px: '20px', py: '20px' }}
            >
                Price
            </Stack>

            <Stack
                className={light_mode ? 'InfoPricesLayout priceMain Light' : 'InfoPricesLayout priceMain'}
                direction="row"
                sx={{
                    // height: '150px',
                    background: '#191A1A',
                    width: '100%',
                    border: '1px solid rgb(35,36,37)',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    py: '20px'
                }}
            >
                <Stack className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'} sx={{ width: '23%' }}>
                    <Stack
                        sx={{ width: '100%', borderRadius: '5px' }}
                        className={light_mode ? 'InfoPricesContenttt light' : 'InfoPricesContenttt'}
                    >
                        <Typography
                            variant="h5"
                            width="100% !important"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Buy Price
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <img
                                src="https://nftx.io/images/ethereum-nftx.svg"
                                alt=""
                                style={{ height: '16px', width: '16px' }}
                            />
                            <Typography variant="h5" fontSize={20} sx={{ color: 'green !important' }}>
                                0.0001
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'} sx={{ width: '23%' }}>
                    <Stack
                        sx={{ width: '100%', borderRadius: '5px' }}
                        className={light_mode ? 'InfoPricesContentttt light' : 'InfoPricesContenttt'}
                    >
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Sell Price
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <img
                                src="https://nftx.io/images/ethereum-nftx.svg"
                                alt=""
                                style={{ height: '16px', width: '16px' }}
                            />
                            <Typography variant="h5" fontSize={20} sx={{ color: '#EF4444 !important' }}>
                                0.0018
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'} sx={{ width: '23%' }}>
                    <Stack
                        sx={{ width: '100%', borderRadius: '5px' }}
                        className={light_mode ? 'InfoPricesContentttt light' : 'InfoPricesContenttt'}
                    >
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Swap Price
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <img
                                src="https://nftx.io/images/ethereum-nftx.svg"
                                alt=""
                                style={{ height: '16px', width: '16px' }}
                            />
                            <Typography variant="h5" fontSize={20} sx={{ color: '#14B8A6 !important' }}>
                                0.0002
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'} sx={{ width: '23%' }}>
                    <Stack
                        sx={{ width: '100%', borderRadius: '5px' }}
                        className={light_mode ? 'InfoPricesContenttt light' : 'InfoPricesContenttt'}
                    >
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Spot Price
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <img
                                src="https://nftx.io/images/ethereum-nftx.svg"
                                alt=""
                                style={{ height: '16px', width: '16px' }}
                            />
                            <Typography variant="h5" fontSize={20} sx={{ color: 'white ' }}>
                                0.002
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Stack>
                <Typography sx={{ py: '30px', px: '15px' }}>Recent Activity</Typography>
                <Stack>
                    <Box className="container vaultAct" sx={{ display: 'flex' }}>
                        {ListData.map((item: any) => (
                            <Box
                                className={light_mode ? 'ActivityMain main light' : 'ActivityMain main'}
                                sx={{
                                    marginLeft: '1%',
                                    marginRight: '%'

                                    // backgroundColor: 'red !Important'
                                }}
                            >
                                <Box className="Main_img">
                                    <img src={item.image} alt="" />
                                </Box>
                                <h5 style={{ marginTop: '5px', fontSize: '17px', fontWeight: '600' }}>Swap</h5>
                                <Link to="/">
                                    <p
                                        className={light_mode ? 'activityTimelight' : 'activityTime'}
                                        style={{
                                            marginTop: '-30px',
                                            fontSize: '12px',
                                            paddingTop: '6px'
                                            // color: 'whitesmoke'
                                        }}
                                    >
                                        12 minutes ago <i className="fa fa-external-link" aria-hidden="true"></i>
                                    </p>
                                </Link>
                                <Box className="logo_img">
                                    <img src={nftx} alt="" />
                                    <h6>{item.logo_name}</h6>
                                </Box>
                                <Box className="activity_details">
                                    <Box className="tokenfeeTit">
                                        <p className="tokenId">Token ID</p>
                                        <p className="milfee">MILDAY Fee</p>
                                    </Box>
                                    <Box className="tokenfeeDetail">
                                        <p className="id">{item.tokeId}</p>
                                        <p className="feeee">{item.fee}</p>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Stack>
            </Stack>
            <Stack
                className="priceDiv"
                sx={{ alignItems: 'flex-start', justifyContent: 'center', px: '20px', m: '30px 0px' }}
            >
                Fees Generated
            </Stack>
            <Stack
                // className="InfoPricesLayout"
                className={light_mode ? 'InfoPricesLayout priceMain Light' : 'InfoPricesLayout priceMain'}
                direction="row"
                sx={{
                    // height: '380px !important',
                    background: '#191A1A',
                    width: '100%',
                    border: '1px solid rgb(35,36,37)',
                    flexWrap: 'wrap',
                    mb: '20px',
                    p: '1px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '32.00%', mb: '20px', mt: '20px' }}
                >
                    <Stack sx={{ borderRadius: '5px', width: '100%' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            24 Hours
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            {/* <img src="https://nftx.io/images/ethereum-nftx.svg" alt="" style={{height: '16px', width: '16px'}} /> */}
                            <Typography
                                variant="h5"
                                fontSize={20}
                                // sx={{ color: '#69E35E !important' }}
                            >
                                0
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '32.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            1 Week
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            {/* <img src="https://nftx.io/images/ethereum-nftx.svg" alt="" style={{height: '16px', width: '16px'}} /> */}
                            <Typography
                                variant="h5"
                                fontSize={20}
                                // sx={{ color: '#EF4444 !important' }}
                            >
                                4.06
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '32.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            30 Days
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                16.72
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '32.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Lifetime Fees:
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                1.84
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '32.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Inventory APR:
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                847.66%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '32.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Liquidity APR:
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                50.21%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                className="priceDiv"
                sx={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    p: '60px 15px 20px 20px'
                    // backgroundColor: 'rgb(35,36,37)'
                }}
            >
                7 Day Activity
            </Stack>
            <Stack
                className={light_mode ? 'InfoPricesLayout Light DayActivity lighttt ' : 'InfoPricesLayout DayActivity'}
                // className="InfoPricesLayout DayActivity "
                direction="row"
                sx={{
                    // height: '380px !important',
                    background: '#191A1A',
                    width: '100%',
                    // border: '1px solid rgb(35,36,37)',
                    flexWrap: 'nowrap',
                    p: '1px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <Stack
                    className={
                        light_mode ? 'InfoPricesContent light DayActivityCon' : 'InfoPricesContent DayActivityCon'
                    }
                    sx={{ width: '19.00%', mb: '20px', mt: '20px' }}
                >
                    <Stack sx={{ borderRadius: '5px', width: '100%' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Mints
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                4
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Random Redeems
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography
                                variant="h5"
                                fontSize={20}
                                // sx={{ color: '#EF4444 !important' }}
                            >
                                3
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Targeted Redeems
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                4
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Random Swaps
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                0
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Targeted Swaps
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                4
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                className="priceDiv"
                sx={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    p: '60px 15px 20px 20px'
                    // backgroundColor: 'rgb(35,36,37)'
                }}
            >
                Fee Settings
            </Stack>
            <Stack
                // className="InfoPricesLayout DayActivity"
                className={light_mode ? 'InfoPricesLayout Light DayActivity lighttt ' : 'InfoPricesLayout DayActivity'}
                direction="row"
                sx={{
                    // height: '380px !important',
                    background: '#191A1A',
                    width: '100%',
                    // border: '1px solid rgb(35,36,37)',
                    flexWrap: 'nowrap',
                    p: '1px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <Stack
                    className={
                        light_mode ? 'InfoPricesContent light DayActivityCon' : 'InfoPricesContent DayActivityCon'
                    }
                    sx={{ width: '19.00%', mb: '20px', mt: '20px' }}
                >
                    <Stack sx={{ borderRadius: '5px', width: '100%' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Mints
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                10%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Random Redeems
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography
                                variant="h5"
                                fontSize={20}
                                // sx={{ color: '#EF4444 !important' }}
                            >
                                4%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Targeted Redeems
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                6%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Random Swaps
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                4%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '19.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Targeted Swaps
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                10%
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                className="priceDiv"
                sx={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    p: '60px 15px 20px 20px'
                    // backgroundColor: 'rgb(35,36,37)'
                }}
            >
                Vault Details
            </Stack>
            <Stack
                // className="InfoPricesLayout VaulDetails"
                className={light_mode ? 'InfoPricesLayout Light VaulDetails lighttt ' : 'InfoPricesLayout VaulDetails'}
                sx={{
                    background: '#191A1A',
                    width: '100%',
                    // border: '1px solid rgb(35,36,37)',
                    flexWrap: 'nowrap',
                    p: '20px',

                    alignItems: 'flex-start'
                }}
            >
                <Typography variant="h6" fontSize={17} sx={{ width: '100%' }}>
                    Vault ID
                </Typography>

                <Typography variant="subtitle1" fontSize={16} sx={{ marginLeft: '10px !Important', width: '100%' }}>
                    672
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    Milady Address
                </Typography>

                <Typography variant="subtitle1" fontSize={17} sx={{ marginLeft: '10px !Important', width: '100%' }}>
                    0x5af0d9827e0c53e4799bb22665 5a1de152a 425a5
                    <i className="fa fa-clone" aria-hidden="true" style={{ padding: '0 7px' }}></i>
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    MILADY Address
                </Typography>

                <Typography variant="subtitle1" fontSize={17} sx={{ marginLeft: '10px !Important', width: '100%' }}>
                    0x227c7df69d3ed1ae7574a1a76 85fded9029 2eb48
                    <i className="fa fa-clone" aria-hidden="true" style={{ padding: '0 7px' }}></i>
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    xMILADYWETH Address
                </Typography>

                <Typography variant="subtitle1" fontSize={17} sx={{ marginLeft: '10px !Important', width: '100%' }}>
                    0x6c6bce43323f6941fd6febe8 ff3208436e 8e0dc7
                    <i className="fa fa-clone" aria-hidden="true" style={{ padding: '0 7px' }}></i>
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    xMILADY Address
                </Typography>

                <Typography variant="subtitle1" fontSize={17} sx={{ marginLeft: '10px !Important', width: '100%' }}>
                    0x5d1c5dee420004767d3e2fb7aa 7c75aa92c 33117
                    <i className="fa fa-clone" aria-hidden="true" style={{ padding: '0 7px' }}></i>
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    Sushi Pool URL
                </Typography>

                <Typography
                    variant="subtitle1"
                    fontSize={17}
                    sx={{ marginLeft: '10px !Important', width: '100%', maxWidth: '300px' }}
                >
                    <a
                        target="blank"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        href="https://app.sushi.com/swap?outputCurrency=ETH&inputCurrency=0x227c7df69d3ed1ae7574a1a7685fded90292eb48"
                    >
                        https://app.sushi.com/swap?outputCurrency=ETH&input
                    </a>
                    <i className="fa fa-clone" aria-hidden="true" style={{ padding: '0 7px' }}></i>
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    Sushi Analytics URL
                </Typography>

                <Typography variant="subtitle1" fontSize={17} sx={{ marginLeft: '10px !Important', width: '100%' }}>
                    <a
                        target="blank"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        href="https://analytics.sushi.com/pairs/0x15a8e38942f9e353bec8812763fb3c104c89ecf4"
                    >
                        https://analytics.sushi.com/pairs/0x 15a
                    </a>
                    <i className="fa fa-clone" aria-hidden="true" style={{ padding: '0 7px' }}></i>
                </Typography>
                <Typography variant="h6" fontSize={17} sx={{ width: '100%', paddingTop: '10px' }}>
                    Items (1687)
                </Typography>

                <Typography
                    variant="subtitle1"
                    fontSize={17}
                    sx={{ marginLeft: '10px !Important', width: '100%', textAlign: 'justify' }}
                >
                    4695, 7167, 7404, 5057, 6740, 416, 7799, 4112, 8797, 3883, 8413, 8537, 2214, 4166, 4005, 2831, 816,
                    7155, 2691, 4082, 8162, 289, 297, 1488, 2287, 8410, 6199, 4129, 4130, 4156, 4158, 4169, 4208, 4537,
                    9817, 1013, 7314, 712, 2236, 2862, 3233, 373, 375, 346, 4128, 8944, 5144, 5147, 5148, 5151, 5152,
                    5153, 5154, 5162, 5163, 5170, 5173, 4969, 4980, 5613, 6691, 6714, 8152, 8746, 6813, 9747, 4168,
                    4527, 4539, 3876, 4053, 7387, 175, 3070, 1898, 2181, 2687, 3784, 2605, 5780, 1674, 1941, 2633, 7401,
                    7930, 8467, 9447, 9545, 7976, 8058, 400, 2413, 4627, 6738, 8044, 5387, 5458, 5472, 5489, 6245, 6563,
                    6567, 6668, 6786, 7053, 7084, 3802, 4195, 4269, 4394, 4509, 4525, 4809, 5084, 5247, 7515, 7519,
                    8276, 2956, 3756, 8430, 8670, 8744, 8947, 9111, 9153, 195, 510, 1271, 1322, 1655, 2363, 3751, 3928,
                    9241, 8999, 451, 7858, 531, 463, 3942, 8765, 4154, 4165, 4534, 4020, 9120, 9204, 3190, 9687, 8126,
                    6888, 1535, 2955, 8748, 6704, 8936, 509, 5951, 5954, 8661, 8577, 6336, 802, 6128, 6811, 7231, 9909,
                    5865, 5875, 7711, 5389, 6015, 6855, 7014, 8833, 9846, 9996, 1996, 1260, 5024, 4184, 5071, 9477,
                    4499, 8774, 6457, 3078, 7134, 7729, 9597, 8124, 4083, 2845, 3830, 4613, 5030, 5235, 5251, 5718,
                    6780, 7422, 7894, 7952, 8698, 8850, 8916, 8541, 7108, 2568, 2320, 1420, 4597, 2055, 6043, 9890,
                    7112, 3993, 2663, 8100, 9685, 4709, 4071, 4135, 4860, 4869, 4872, 4878, 5380, 1707, 6042, 5528,
                    6758, 1429, 4200, 4364, 4315, 578, 6649, 6707, 8435, 70, 4705, 5377, 5752, 7462, 4217, 4889, 1122,
                    6831, 9568, 8801, 1678, 5747, 8067, 585, 801, 1681, 2896, 5540, 7743, 8214, 8224, 8427, 8738, 8498,
                    8759, 6578, 7157, 8814, 900, 8567, 9046, 4891, 5548, 6023, 7941, 4276, 1557, 2191, 4468, 7280, 5087,
                    8971, 3234, 3237, 3244, 3258, 3261, 2843, 2849, 2850, 2851, 2854, 2857, 2863, 2866, 642, 2203, 2277,
                    4279, 1576, 3792, 5104, 7075, 7733, 8587, 9805, 9892, 7240, 7984, 8794, 8914, 9868, 6053, 1389,
                    4215, 5459, 5224, 8701, 479, 6554, 4407, 5840, 5835, 8965, 3983, 1266, 9400, 6925, 6944, 6946, 6933,
                    6934, 6935, 6938, 6920, 6921, 6927, 6928, 6930, 6931, 985, 1030, 3661, 4065, 4526, 4786, 5685, 5729,
                    5873, 6422, 6749, 8070, 8542, 9138, 9463, 8149, 3767, 994, 4365, 6384, 1835, 3745, 9376, 7953, 4449,
                    6976, 7956, 9642, 8013, 3808, 7837, 1642, 6039, 7188, 9719, 1823, 9389, 203, 1375, 1596, 979, 7407,
                    8979, 4000, 3732, 6338, 7701, 7398, 1108, 1700, 6685, 2709, 7688, 1502, 2732, 4821, 1113, 1581,
                    2269, 636, 2569, 7106, 6224, 2583, 3079, 5860, 9290, 4590, 8169, 8707, 9299, 1367, 2710, 3682, 3726,
                    5751, 6020, 7610, 8917, 1780, 2284, 6736, 8837, 3762, 2723, 3932, 6485, 3200, 3206, 3209, 8559,
                    9591, 8812, 5202, 4690, 9493, 8519, 2397, 7784, 1533, 1617, 1799, 2947, 2308, 2379, 5558, 6366,
                    6404, 7315, 6332, 8490, 8255, 4681, 1476, 6466, 8092, 5501, 5885, 3994, 9905, 2564, 7470, 8755,
                    4659, 1073, 2242, 2323, 2538, 3854, 4599, 4942, 5605, 6633, 7256, 7405, 8059, 9255, 2755, 6708,
                    6709, 6865, 6953, 7065, 7080, 7090, 7099, 7101, 7119, 7127, 7131, 7138, 7147, 7189, 7228, 7232,
                    7239, 7302, 7311, 7312, 7313, 7316, 7418, 7425, 7437, 7605, 7608, 7611, 7631, 7647, 7650, 7662,
                    7664, 7686, 7705, 7706, 7715, 7723, 7724, 7750, 7809, 7818, 7820, 7821, 7829, 7832, 7841, 7889,
                    7912, 7913, 7920, 7943, 7944, 7946, 8094, 8095, 8097, 8115, 8123, 8157, 8177, 8216, 8237, 8238,
                    8246, 8247, 8251, 8254, 8258, 9643, 8294, 8362, 8367, 8466, 8468, 8469, 8470, 8477, 8484, 8528,
                    8561, 8571, 8573, 8583, 8584, 8585, 8597, 8599, 8602, 8603, 8607, 8620, 8624, 8627, 8640, 8644,
                    8650, 8656, 8658, 8671, 8677, 8683, 8710, 8724, 8789, 8830, 8891, 8892, 8894, 8907, 8986, 8988,
                    8989, 8990, 8992, 9147, 9179, 9183, 9197, 9217, 9270, 9303, 9311, 9314, 9316, 9317, 9322, 9328,
                    9341, 9383, 9395, 9404, 9409, 9578, 3949, 4545, 4547, 4563, 4985, 4986, 5112, 5125, 5128, 5129,
                    5130, 5179, 5299, 5317, 5476, 5532, 5546, 5563, 5577, 5758, 5831, 5952, 5985, 6009, 6213, 6257,
                    6299, 6317, 6428, 6431, 6482, 6489, 6509, 6557, 6580, 6588, 6593, 6595, 6609, 6671, 6679, 6680,
                    1312, 1361, 1588, 2478, 2719, 2778, 2779, 2780, 2795, 2823, 2826, 2839, 2892, 2969, 2976, 2978,
                    2996, 2997, 3062, 3080, 3149, 3170, 3646, 3723, 3737, 3782, 3785, 3856, 3897, 3935, 3938, 3939,
                    3940, 3946, 3950, 3968, 3972, 4054, 849, 1071, 1081, 1162, 1216, 1373, 1380, 1391, 1409, 1412, 1421,
                    1431, 1442, 1473, 1493, 1501, 1609, 1666, 1756, 1757, 1864, 1869, 1922, 1938, 2047, 2094, 2099,
                    2100, 2103, 2120, 2166, 2171, 2228, 2265, 2351, 2370, 2382, 2399, 2479, 2533, 2582, 2600, 2711,
                    2716, 164, 198, 596, 641, 717, 899, 908, 925, 957, 969, 996, 1012, 1084, 1129, 1132, 7416, 6385,
                    8997, 1837, 5796, 9927, 7456, 8786, 1901, 4719, 4951, 7779, 2734, 5630, 6724, 4641, 5641, 8296, 958,
                    4639, 4645, 4651, 2226, 4995, 5391, 6186, 7173, 7340, 9595, 2548, 2488, 2758, 3056, 5002, 5031,
                    5628, 6512, 6907, 7466, 7660, 8778, 8781, 9127, 9209, 6592, 2361, 1537, 5568, 7592, 7725, 5305,
                    7778, 7772, 1847, 1849, 1854, 1855, 1857, 5269, 5841, 9495, 6184, 3054, 3231, 6026, 6377, 6391,
                    6731, 6784, 7200, 41, 8384, 1604, 4924, 9830, 729, 735, 739, 748, 3132, 6456, 6415, 2575, 2576,
                    2817, 8302, 7468, 7442, 7445, 7446, 7447, 7450, 7452, 7457, 7464, 7590, 1124, 6803, 8604, 3793,
                    3986, 8035, 96, 9728, 7320, 1568, 5354, 8998, 1353, 7295, 7018, 1561, 3761, 9429, 995, 7024, 8319,
                    6771, 1257, 123, 140, 1149, 1193, 1298, 1299, 1303, 1349, 6553, 8924, 5745, 5768, 3834, 4081, 2088,
                    1285, 6768, 2717, 5114, 1471, 9695, 1230, 2537, 1645, 1701, 1709, 2180, 2193, 3651, 3735, 5357,
                    8331, 8974, 9081, 9443, 3077, 7897, 3074, 1347, 2194, 5475, 667, 2635, 8374, 1005, 8423, 3917, 9554,
                    6359, 2695, 2367, 1331, 6057, 2609, 7348, 9177, 646, 3724, 3943, 5177, 4706, 5530, 6637, 7139, 7146,
                    3904, 4895, 4937, 5063, 5487, 5505, 9629, 9801, 6518, 2646, 2736, 8505, 1544, 2522, 2553, 2644,
                    2658, 2713, 2787, 4902, 5075, 5634, 6126, 6733, 8074, 8171, 9019, 9882, 9947, 9986, 672, 1050, 1762,
                    2375, 3708, 3952, 4009, 4010, 9000, 1483, 1918, 2518, 2985, 4961, 5190, 7323, 7659, 911, 1747, 1830,
                    2006, 2485, 2950, 7676, 7718, 6703, 8167, 8173, 9412, 8594, 6755, 6988, 9543, 5949, 5587, 5593,
                    5631, 5934, 4669, 6747, 4363, 5083, 5311, 5434, 5940, 6401, 6847, 7137, 7248, 7275, 7564, 8271,
                    8330, 9133, 9195, 9729, 9849, 6161, 1394, 4080, 5042, 7074, 7585, 7869, 9541, 2126, 9512, 2759,
                    9086, 2499, 9099, 9102, 2369, 7963, 7964, 7969, 7972, 7973, 7975, 7977, 7980, 7983, 1207, 1494, 831,
                    846, 1611, 2106, 6582, 3820, 1198, 1210, 1323, 1509, 2380, 2961, 3790, 4632, 6123, 6861, 7443, 8218,
                    8228, 9263, 9245, 754, 767, 3111, 2853, 8980, 9703, 9705, 9713, 9725, 9734, 9750, 9754, 9785, 9799,
                    9806, 9807, 9816, 9819, 9823, 9827, 9831, 9835, 9842, 9855, 9857, 9861, 9862, 9863, 9867, 9869,
                    9872, 9874, 9881, 9883, 9884, 9885, 9886, 9887, 9891, 9893, 9894, 9897, 9898, 9899, 9901, 9902,
                    9911, 9913, 9921, 9922, 9924, 9926, 9930, 9931, 9935, 9937, 9938, 9939, 9942, 9948, 9951, 9959,
                    9963, 9984, 9992, 9995, 1280, 3104, 5120, 9049, 9056, 9063, 9067, 9071, 9072, 9073, 9075, 1015, 630,
                    3102, 3103, 4090, 7593, 8399, 2138, 2846, 7737, 1177, 7102, 3958, 98, 628, 960, 2872, 5420, 5755,
                    7622, 9388, 2130, 8769, 657, 9045, 3709, 4704, 6859, 8601, 5046, 5039, 6745, 4629, 8207, 8212, 9768,
                    5626, 5639, 7083, 7133, 7136, 5588, 6537, 7061, 7068, 7073, 7088, 7132, 7145, 7158, 7161, 3882,
                    5853, 6546, 7744, 8368, 8378, 9749, 5291, 5292, 5295, 5296, 5306, 5312, 5314, 5320, 7093, 7094,
                    7095, 7096, 7117, 7121, 7122, 7906, 7924, 7927, 5047, 5050, 5051, 5055, 5059, 5064, 5067, 5072,
                    5325, 5326, 5332, 5341, 5343, 5346, 5347, 5495, 5496, 5507, 5515, 5516, 5522, 6828, 6832, 6834,
                    6835, 6838, 6840, 6846, 6848, 6850, 6851, 6955, 6956, 6958, 6966, 6967, 6977, 6981, 8730, 8735,
                    8736, 8741, 8745, 8749, 8750, 8754, 5619, 7005, 4834, 5781, 9150, 7695, 5414, 5417, 5426, 5431,
                    5432, 7848, 6282, 9385, 9789, 9479, 7579, 7205, 8543, 8386, 8023, 7947, 4831, 8081, 9320, 8055,
                    4031, 4072, 4514, 5106, 6131, 7986, 6659, 5019, 5021, 5029, 5950, 7571, 5201, 6538, 4498, 6295,
                    7735, 7346, 5266, 5196, 6455, 8230, 8818, 9416, 4720, 8959, 4442, 5566, 5910, 9042, 4557, 9589,
                    6322, 6871, 4974, 9600, 9772, 4380, 5405, 4694, 5657, 6090, 6300, 6858, 8713, 5681, 5947, 6819,
                    7508, 7666, 7872, 8233, 8530, 8682, 9243, 4025, 5663, 9510, 5748, 6133, 9114, 4733, 4737, 5842,
                    6389, 6992, 9476, 9346, 8810, 3999, 4665, 7887, 4732, 5138, 4841, 7860, 5436, 8098, 5603, 6727,
                    4553, 8803, 6894, 8154, 8179, 8395, 9251, 7191, 7151, 9466, 7825, 8121, 8127, 8360, 5437, 7880,
                    9828, 9833, 9837, 9838, 9845, 9723, 9730, 9753, 9758, 9775, 9786, 9797, 9798, 9800, 9808, 8486,
                    4855, 8265, 8279, 8085, 4916, 8196, 5194, 9101, 8021, 8825, 5746, 7882, 9132, 9198, 6682, 7350,
                    8339, 7708, 9453, 6406, 9201, 5697, 8451, 9588, 8148, 4853, 7208, 7210, 8307, 9112, 9250, 5919,
                    9504, 5584, 9296, 8933, 9356, 5570, 8994, 7123, 7337, 8688, 7745, 5679, 8902, 5733, 8144, 9547,
                    8445, 9312, 9137, 5175, 6866, 6898, 7091, 5713, 4778, 7634, 5435, 7397, 9614, 4921, 8643, 5643,
                    6686, 8213, 8198, 8209, 6699, 4993, 8219, 4729, 9342, 8088, 9121, 6618, 7749, 7477, 9500, 7572,
                    8501, 8929, 9455, 4959, 7285, 4633, 9292, 8964, 8481, 4603, 6450, 8615, 5400, 8856, 4038, 5956,
                    9168, 9169, 9491, 6797, 7343, 8802, 9146, 9626, 4710, 6202, 6815, 5782, 5793, 5794, 5795, 5800,
                    5918, 5920, 5921, 5926, 5928, 5929, 5932, 5935, 6056, 6067, 6111, 6113, 6116, 6122, 6130, 6136,
                    6179, 6181, 6187, 6191, 6197, 6208, 6734, 6741, 6743, 6744, 6748, 6767, 6777, 6781, 6782, 6800,
                    4358, 4448, 4502, 5957, 6041, 6244, 7034, 7272, 7534, 7674, 8147, 8534, 8930, 5097, 9421, 8862,
                    8283, 8306, 6255, 7653, 6375, 8036, 6346, 6356, 6367, 4552, 8857, 5535, 9249, 6408, 7624, 9452,
                    4837, 9535, 9560, 4609, 7696, 7330, 3927, 4826, 6010, 6024, 6323, 7247, 8544, 8569, 9044, 6535,
                    7864, 5027, 5038, 5043, 6814, 8010, 4686, 4396, 9115, 9301, 4962, 6215, 6689, 8714, 9285, 8322,
                    9563, 8840, 6306, 8518, 8673, 8235, 6240, 4437, 4443, 4445, 5086, 5102, 7617, 7620, 3998, 6872,
                    6895, 7831, 9090, 9095, 6243, 5863, 5866, 5195, 5879, 5887, 7269, 9465, 5854, 5871, 5838, 5844,
                    6887, 7693, 8876, 9284, 9304, 9569, 6175, 6326, 6443, 6697, 6722, 9119, 4904, 4920, 7607, 6351,
                    8047, 9023, 9347, 8060, 4416, 4486, 9439, 9473, 9287, 6410, 8105, 8612, 8634, 9330, 7548, 9038,
                    5397, 6318, 7615, 6149, 9207
                </Typography>
            </Stack>
            <Stack
                className="priceDiv"
                sx={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    p: '60px 15px 20px 20px'
                    // backgroundColor: 'rgb(35,36,37)'
                }}
            >
                Features enabled
            </Stack>
            <Stack
                // className="InfoPricesLayout FeaturesLayout"
                className={
                    light_mode ? 'InfoPricesLayout Light FeaturesLayout lighttt ' : 'InfoPricesLayout FeaturesLayout'
                }
                direction="row"
                sx={{
                    // height: '380px !important',
                    background: '#191A1A',
                    width: '100%',
                    // border: '1px solid rgb(35,36,37)',
                    flexWrap: 'nowrap',
                    gap: '16px',
                    p: '1px',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '7.00%', mb: '20px', mt: '20px' }}
                >
                    <Stack sx={{ borderRadius: '5px', width: '100%' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Mints
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ color: 'green' }}></i>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '15.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Random Redeems
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ color: 'green' }}></i>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '15.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Targeted Redeems
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ color: 'green' }}></i>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '13.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Random Swaps
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ color: 'green' }}></i>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    className={light_mode ? 'InfoPricesContent light' : 'InfoPricesContent'}
                    sx={{ width: '13.00%' }}
                >
                    <Stack sx={{ width: '100%', borderRadius: '5px' }}>
                        <Typography
                            variant="h5"
                            fontSize={20}
                            sx={{ color: '#9CA3AF !important', fontWeight: 'bold !important', p: '20px' }}
                        >
                            Targeted Swaps
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{ px: '20px', mt: '-10px', mb: '30px' }}
                        >
                            <Typography variant="h5" fontSize={20}>
                                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ color: 'green' }}></i>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Accordion sx={{ marginBottom: '200px', p: '20px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{ color: 'white' }}
                    id="panel2a-header"
                >
                    <Typography>Allowed token IDs</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pb: '145px', px: '10px' }}>
                    <Typography sx={{ color: 'green' }}>No eligibilities set. All token IDs are eligible.</Typography>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
};

export default ContentInfo;
