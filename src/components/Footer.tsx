import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import '../views/Dashboard/dashboard.css';
import { RootState } from 'redux/store';
// import '../views/Dashboard/dashboard.css';

import { useSelector } from 'react-redux';
const Footer = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)

    return (
        <AppBar
            position="static"
            component="footer"
            sx={{ background: 'transparent', display: 'none', boxShadow: 'none', py: 6, mt: 'auto' }}
        >
            <Toolbar component={Stack} spacing={2} className={light_mode? 'footerMainLight' : 'footerMain'}>
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
        </AppBar>
    );
};

export default Footer;
