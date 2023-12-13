// ** Material UI Components ** //
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import '../Dashboard/LeftSide.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import '../views/Dashboard/dashboard.css'
// ** Custom Components ** //
import Item from './Item';
import List from './List';
import SearchBar from './SearchBar';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

const ListData = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/vwmc2x1sGXL6a2j4p3wu1g9C93rukPadaR9P0NWxKH0qQKeIkdn4Yw2w3WyogGPDAGmUjLMJf5hwA_cFpcwjuES4w4FZ8ES3_QfnQA',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'PUNK',
        by: 'CryptoPunks',
        price: 65.38,
        count: 141
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/e5dgPM5g-z3S4_D5-z_dnywf-liGr0etr2YrX-F8_5p_2pk9LPwxh6qzA2buHNgk9A6iwHrnYA-wmAmybY1ug_cMqLlKXg0r5trOKg',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'SQGL',
        by: 'Chromie Squiggle',
        price: 11.08,
        count: 80
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/fLMRz3fcoXxNMsAaITygzEdp7o23kWeDpTfKDZjuF9hAlTbZT6rx1mhKFqwYBgIDX1PIGJpE9CaylS-P2NosfGk3wQK09WuR9UYpvhk',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'MILADY',
        by: 'Milady Maker',
        price: 0.3651,
        count: 1694
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/v1obecpaXXt-7rTGHAuZAefoLmZHa3TFm_4nYen-LkOGpEGEb-TdtvC_WNLY9zjAn5aMXQpDrb6PjXOCAXuqpqJSk1-WZSRR904L9Q',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',
        name: 'DOODLE',
        by: 'Doodles',
        price: 7.612,
        count: 63
    },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/hT4qwKYigq4ZGf0kt7qvbwDfzKux9oEQhlj8t9o-Wq2ly5Z3Uqgxv6ZJTRyKrvjWCEd7PlCf8psr-uw8_75cbIGqhZWWVY7Yh5_b',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'WIZARD',
        by: 'Forgotten Runes Wizards Cult',
        price: 1.11,
        count: 320
    },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/vwmc2x1sGXL6a2j4p3wu1g9C93rukPadaR9P0NWxKH0qQKeIkdn4Yw2w3WyogGPDAGmUjLMJf5hwA_cFpcwjuES4w4FZ8ES3_QfnQA',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'PUNK',
        by: 'CryptoPunks',
        price: 65.38,
        count: 141
    },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/e5dgPM5g-z3S4_D5-z_dnywf-liGr0etr2YrX-F8_5p_2pk9LPwxh6qzA2buHNgk9A6iwHrnYA-wmAmybY1ug_cMqLlKXg0r5trOKg',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'SQGL',
        by: 'Chromie Squiggle',
        price: 11.08,
        count: 80
    },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/fLMRz3fcoXxNMsAaITygzEdp7o23kWeDpTfKDZjuF9hAlTbZT6rx1mhKFqwYBgIDX1PIGJpE9CaylS-P2NosfGk3wQK09WuR9UYpvhk',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'MILADY',
        by: 'Milady Maker',
        price: 0.3651,
        count: 1694
    },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/v1obecpaXXt-7rTGHAuZAefoLmZHa3TFm_4nYen-LkOGpEGEb-TdtvC_WNLY9zjAn5aMXQpDrb6PjXOCAXuqpqJSk1-WZSRR904L9Q',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',

        name: 'DOODLE',
        by: 'Doodles',
        price: 7.612,
        count: 63
    },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/hT4qwKYigq4ZGf0kt7qvbwDfzKux9oEQhlj8t9o-Wq2ly5Z3Uqgxv6ZJTRyKrvjWCEd7PlCf8psr-uw8_75cbIGqhZWWVY7Yh5_b',
        avatar: 'https://6ztkp25f.tinifycdn.com/wp-content/uploads/2022/03/nftx-placeholder.png.webp',
        name: 'WIZARD',
        by: 'Forgotten Runes Wizards Cult',
        price: 1.11,
        count: 320
    }
];

const Collections = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)
    return (
        <>
            <Stack sx={{ overflow: 'hidden' }} className='abcc'>
                <SearchBar />
                <List spacing={2} >
                    {ListData.map((item: any) => (
                        <Item key={item.id} {...item} />
                    ))}
                </List>
                <Stack direction="row" spacing={2} margin="32px" justifyContent="center" className="buy_btn">
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
                        Show more
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
                        Show all
                    </Button>
                </Stack>
            </Stack>
            {/* <AppBar
                position="static"
                component="footer"
                sx={{ background: 'transparent', display: 'block', boxShadow: 'none', py: 6, mt: 'auto' }}
            >
                <Toolbar component={Stack} spacing={2} className="footerMain">
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        spacing={1}
                        className="footerLogo"
                    >
                      <Box
                        component="img"
                        src={light_mode? 'https://nftx.io/images/logo_on_white.svg' : 'https://nftx.io/images/logo_on_black.svg'}
                        alt="Logo"
                        sx={{ height: 40, display: 'flex', justifyContent: 'flex-start' }}
                    />
                    <Box
                        component="img"
                        src={light_mode? 'https://nftx.io/images/nftx_on_white.svg' : 'https://nftx.io/images/nftx_on_black.svg'}
                        alt="NFTX"
                        sx={{ height: 20 }}
                    />
                    </Stack>
                    <Stack
                        className="footerLinks"
                        direction="row"
                        spacing={2}
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <Link underline="none" color="inherit" href="https://nftx.io/migrate/" target="_blank">
                            Migrate
                        </Link>
                        <Link underline="none" color="inherit" href="https://nftx.io/snapshot/" target="_blank">
                            Sanpshot
                        </Link>
                        <Link underline="none" color="inherit" href="https://docs.nftx.io/" target="_blank">
                            Docs
                        </Link>
                        <Link underline="none" color="inherit" href="https://academy.nftx.io/" target="_blank">
                            Academy
                        </Link>
                        <Link underline="none" color="inherit" href="https://twitter.com/NFTX_" target="_blank">
                            Twitter
                        </Link>
                        <Link underline="none" color="inherit" href="https://github.com/NFTX-project" target="_blank">
                            Github
                        </Link>
                        <Link underline="none" color="inherit" href="https://blog.nftx.io/" target="_blank">
                            Blog
                        </Link>
                        <Link underline="none" color="inherit" href="https://discord.gg/nftx" target="_blank">
                            Discord
                        </Link>
                        <Link underline="none" color="inherit" href="https://forum.nftx.org/" target="_blank">
                            Forum
                        </Link>
                        <Link underline="none" color="inherit" href="https://client.aragon.org/#/nftx/" target="_blank">
                            Aragon
                        </Link>
                        <Link underline="none" color="inherit" href="https://status.nftx.io/" target="_blank">
                            Status
                        </Link>
                        <Link
                            underline="none"
                            color="inherit"
                            href="https://nftx.notion.site/NFTX-Partnerships-0e297cde3707444bbcab27073a2a2dcb"
                            target="_blank"
                        >
                            Partnerships
                        </Link>
                    </Stack>
                </Toolbar>
                <Stack direction="row" className="footer_last" spacing={0.5}>
                    <Typography fontSize={14} lineHeight="20px" color="rgba(154, 150, 163, 1)">
                        {'Data by '}
                    </Typography>
                    <Link
                        underline="none"
                        href="https://opensea.io/"
                        target="_blank"
                        sx={{
                            color: 'rgb(209 213 219)',
                            fontSize: 14,
                            lineHeight: '20px'
                        }}
                    >
                        OpenSea
                    </Link>
                    <Typography
                        fontSize={14}
                        lineHeight="20px"
                        color="rgba(154, 150, 163, 1)"
                        sx={{
                            marginLeft: '0px !important'
                        }}
                    >
                        {', '}
                    </Typography>
                    <Link
                        underline="none"
                        href="https://www.covalenthq.com/"
                        target="_blank"
                        sx={{
                            color: 'rgb(209 213 219)',
                            fontSize: 14,
                            lineHeight: '20px'
                        }}
                    >
                        Covalent
                    </Link>
                    <Typography fontSize={14} lineHeight="20px" color="rgba(154, 150, 163, 1)">
                        {' & '}
                    </Typography>
                    <Link
                        underline="none"
                        href="https://thegraph.com/"
                        target="_blank"
                        sx={{
                            color: 'rgb(209 213 219)',
                            fontSize: 14,
                            lineHeight: '20px'
                        }}
                    >
                        The Graph
                    </Link>
                </Stack>
            </AppBar> */}
        </>
    );
};

export default Collections;
