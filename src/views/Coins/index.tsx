import Stack from '@mui/material/Stack';
import Wrapper from './Wrapper';
import Footer from 'components/Footer';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import { FaEthereum } from 'react-icons/fa';
import Sushi from '../../assets/img/sushi.png';
import './coin.css';
import Footer2 from 'components/Footer2';
import nftx from '../../assets/img/logo_mini_nftx.avif'

import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
const list_data = [
    {
        vaultName: '89SA',
        vaultDesc: '89 seconds Atomized',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/177/256x256.png',
        price: 0.452,
        totalItem: 30,
        tvl: '$21,456.77'
    },
    {
        vaultName: 'ADBCA',
        vaultDesc: 'Ask Doctor Bitcoin Cover Art',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/177/256x256.png',
        price: 0.04,
        totalItem: 10,
        tvl: '$625.74'
    },
    {
        vaultName: 'AIKO',
        vaultDesc: 'Aiko Virtual',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/554/256x256.png',
        price: 0.019,
        totalItem: 185,
        tvl: '$5,552.30'
    },
    {
        vaultName: 'APER',
        vaultDesc: 'Ape Reunion',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/499/256x256.png',
        price: 0.08,
        totalItem: 44,
        tvl: '$5,557.22'
    },
    {
        vaultName: 'AURA',
        vaultDesc: 'milady aura',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/527/256x256.png',
        price: 0.017,
        totalItem: 162,
        tvl: '$4,379.69'
    },
    {
        vaultName: 'AVASTR',
        vaultDesc: 'Avastars',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/1/256x256.png',
        price: 0.049,
        totalItem: 956,
        tvl: '$74,836.01'
    },
    {
        vaultName: 'AXO',
        vaultDesc: 'Axolittles',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/181/256x256.png',
        price: 0.023,
        totalItem: 246,
        tvl: '$9,120.10'
    },
    {
        vaultName: 'BABBY',
        vaultDesc: 'Babbys',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/602/256x256.png',
        price: 0.05,
        totalItem: 58,
        tvl: '$4,576.13'
    },
    {
        vaultName: 'BANNER',
        vaultDesc: 'Banners NFT',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/579/256x256.png',
        price: 0.026,
        totalItem: 114,
        tvl: '$4,695.29'
    },
    {
        vaultName: 'BARREN',
        vaultDesc: '89 seconds Atomized',
        vaultIcon:
            'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/626/256x256.png',
        price: 0.135,
        totalItem: 39,
        tvl: '$8,391.44'
    }
];

const Buy = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <Stack flexGrow={1} sx={{ height: '100%',  }} className={light_mode? "CoinPage light" : 'CoinPage'}>
            <Wrapper  >
                <Stack
                    px={4}
                    py={1}
                    sx={{
                        '& table, th, td': {
                            // border: '2px solid #131214',
                            // borderCollapse: 'collapse',
                            // background: 'rgb(25 26 27)'
                        },
                        '& th': {
                            color: 'rgb(154 150 163)',
                            py: 1.5,
                            px: 3,
                            fontSize: 12
                        },
                        '& td': {
                            py: 2,
                            px: 3,
                            fontSize: 18
                        }
                    }}
                    className={light_mode? "CoinPagewrap light" : 'CoinPagewrap'}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className={light_mode? 'coinLightData' : 'coinLight'}>
                            <TableRow>
                                <TableCell align="center" width={70}>
                                    RANK
                                </TableCell>
                                <TableCell align="left" width={340}>
                                    VAULT
                                </TableCell>
                                <TableCell align="left">MID PRICE</TableCell>
                                <TableCell align="left">TOTAL ITEMS</TableCell>
                                <TableCell align="left">TOTAL VALUE LOCKED</TableCell>
                                <TableCell align="left">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <img src={Sushi} alt="sushi" width={24} height={24} />
                                        <Typography>TRADE</Typography>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list_data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell scope="row" align="center">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <Stack spacing={0.5}>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <img width={24} height={24} src={nftx} alt={item.vaultName} />
                                                <Typography lineHeight="28px" fontSize={18} fontWeight={500}>
                                                    {item.vaultName}
                                                </Typography>
                                            </Stack>
                                            <Typography fontSize={14} color="rgb(209 213 219)" fontWeight={500}>
                                                {item.vaultDesc}
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" alignItems="center" spacing={0.25}>
                                            <FaEthereum fontSize={18} color="rgb(251, 59, 112)" />
                                            <Typography fontSize={18} fontFamily="DM Mono" fontWeight={500}>
                                                {item.price}
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell sx={{ fontFamily: 'DM Mono' }}>{item.totalItem}</TableCell>
                                    <TableCell sx={{ fontFamily: 'DM Mono' }}>{item.tvl}</TableCell>
                                    <TableCell sx={{ width: 320 }}>
                                        <Stack direction="row" alignItems="center" spacing={2} className="coin_btns">
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    py: 1,
                                                    px: 1.5,
                                                    // color: 'white',
                                                    height: '100%',
                                                    fontSize: 14,
                                                    minWidth: 160,
                                                    lineHeight: '20px',
                                                    borderColor: 'rgb(251, 59, 112)',
                                                    '&:hover': {
                                        
                                                        borderColor: 'rgb(251, 59, 112)'
                                                    }
                                                }}
                                            >
                                                Buy {item.vaultName}
                                            </Button>
                                            <Button
                                                className="coinSellBtn"
                                                variant="outlined"
                                                sx={{
                                                    py: 1,
                                                    px: 1.5,
                                                    // color: 'white',
                                                    height: '100%',
                                                    fontSize: 14,
                                                    minWidth: 160,
                                                    lineHeight: '20px',
                                                    borderColor: 'rgb(251, 59, 112)',
                                                    '&:hover': {
                                                       
                                                        borderColor: 'rgb(251, 59, 112)'
                                                    }
                                                }}
                                            >
                                                Sell {item.vaultName}
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Stack>
            </Wrapper>
            <Footer2 />
        </Stack>
    );
};

export default Buy;
