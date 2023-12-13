import React, { useState } from 'react';
// ** Material UI Components ** //
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SET_LIGHT_MODE } from '../redux/actions/types';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import './HeaderNew.scss';
import './HeaderNew.css'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FaEthereum } from 'react-icons/fa';
import { StarIcon } from './Svg';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import { RootState } from 'redux/store';
const Header = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [Menucontent, setMenucontent] = useState(false);

    const [isDark, setIsDark] = useState(true);
    // console.log(isDark, "helllooo")
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickRewards = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        BackgroundColor: 'black',
        transform: 'translate(-50%, -50%)',
        width: 450,
        borderRadius: '4px',
        bgcolor: 'background.paper',
        border: '0.5px solid rgba(75,76,77,0.5)',
        boxShadow: 24,
        p: 1
    };

    const handleDark = () => {
        setIsDark(!isDark);

        dispatch({
            type: SET_LIGHT_MODE,
            payload: isDark
        });
    };
    const light_mode = useSelector<RootState, boolean>((state) => state.changeTheme.payload);

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openModal}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={openModal}>
                        <Box sx={style} className="connectModal">
                            <Box
                                className="close-modal-btn"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-start',
                                    m: '0',
                                    p: '0'
                                }}
                            >
                                <CloseIcon onClick={() => setOpenModal(false)} />
                            </Box>
                            <Box className="Select-wallet">
                                <Typography variant="h6" sx={{ fontWeight: '750', px: 1, pb: 1 }}>
                                    Select Wallet
                                </Typography>
                            </Box>
                            <Box className="ContainerWallet" sx={{ px: 2, py: 2 }}>
                                <Box
                                    className={light_mode ? 'MetaMask modalLIGHT' : 'MetaMask'}
                                    sx={{
                                        border: '1px solid rgba(75,76,77)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        // transition: '0.01s',
                                        px: 1,
                                        py: 2,
                                        backgroundColor: 'rgba(75, 76, 77,0.35)',
                                        borderRadius: '6px',
                                        my: '8px',
                                        '&:hover': {
                                            backgroundColor: '#320C16',
                                            border: '1px solid rgba(207,0,0,0.2)'
                                            // transition: 'ease-in-out 3s'
                                        }
                                    }}
                                >
                                    <img
                                        src="https://nftx.io/images/metamask-fox.svg"
                                        alt="MetaMask_Logo"
                                        height="32px"
                                        width="32px"
                                    />
                                    <Typography>MetaMask</Typography>
                                </Box>
                                <Box
                                    className={light_mode ? 'MetaMask modalLIGHT' : 'MetaMask'}
                                    sx={{
                                        border: '1px solid rgba(75,76,77)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 1,
                                        py: 2,
                                        backgroundColor: 'rgba(75, 76, 77,0.35)',

                                        borderRadius: '6px',
                                        my: '8px',
                                        '&:hover': {
                                            backgroundColor: '#320C16',
                                            border: '1px solid rgba(207,0,0,0.2)'
                                        }
                                    }}
                                >
                                    <img
                                        src="https://nftx.io/images/walletconnect.svg"
                                        alt="Wallet_Logo"
                                        height="32px"
                                        width="32px"
                                    />
                                    <Typography>WalletConnect</Typography>
                                </Box>
                                <Box
                                    className={light_mode ? 'MetaMask modalLIGHT' : 'MetaMask'}
                                    sx={{
                                        border: '1px solid rgba(75,76,77)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 1,
                                        py: 2,
                                        backgroundColor: 'rgba(75, 76, 77,0.35)',

                                        borderRadius: '6px',
                                        my: '8px',
                                        '&:hover': {
                                            backgroundColor: '#320C16',
                                            border: '1px solid rgba(207,0,0,0.2)'
                                            // transition: 'ease-in-out 3s'
                                        }
                                    }}
                                >
                                    <img
                                        src="https://nftx.io/images/coinbase-wallet.svg"
                                        alt="CoinBase_Logo"
                                        height="32px"
                                        width="32px"
                                    />
                                    <Typography>Coinbase Wallet</Typography>
                                </Box>
                                <Box
                                    className={light_mode ? 'MetaMask modalLIGHT' : 'MetaMask'}
                                    sx={{
                                        border: '1px solid rgba(75,76,77)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 1,
                                        py: 2,
                                        backgroundColor: 'rgba(75, 76, 77,0.35)',

                                        borderRadius: '6px',
                                        my: '8px',
                                        '&:hover': {
                                            backgroundColor: '#320C16',
                                            border: '1px solid rgba(207,0,0,0.2)'
                                            // transition: 'ease-in-out 3s'
                                        }
                                    }}
                                >
                                    <img
                                        src="https://nftx.io/images/portis.svg"
                                        alt="portis_Logo"
                                        height="32px"
                                        width="32px"
                                    />
                                    <Typography>Portis</Typography>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex' }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => setOpenModal(false)}
                                        sx={{
                                            fontSize: 16,
                                            lineHeight: '24px',
                                            // width: '380px',
                                            // height: '68px',

                                            color: 'white',
                                            m: '10px auto',
                                            py: 1.25,
                                            px: 2,
                                            borderColor: 'rgb(251, 59, 112)',
                                            backgroundColor: 'rgba(0, 0, 0, 0)',
                                            backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                                        }}
                                    >
                                        Close
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </div>

            <AppBar
                sx={{
                    transition: '0s',
                    backgroundColor: 'black',
                    width: '100%',
                    height: 70,
                    borderBottom: 2,

                    boxShadow: 'none'
                }}
                className={light_mode ? 'AppbarBorderLight' : 'AppbarBorder'}
            >
                <Stack justifyContent="space-between" direction="row" px={2} py={1.5} sx={{ height: '100%' }}>
                    <Stack alignItems="center" direction="row" spacing={2}>
                        <Link to="/" style={{ marginTop: 4 }}>
                            <img
                                width={32}
                                height={32}
                                src={
                                    light_mode
                                        ? 'https://nftx.io/images/logo_on_white.svg'
                                        : 'https://nftx.io/images/logo_on_black.svg'
                                }
                                alt="icon"
                            />
                        </Link>
                        <InputBase
                            className="searchField"
                            placeholder="Search for vaults"
                            sx={{
                                width: 345,
                                display: 'flex',
                                '& input': {
                                    height: '100%',
                                    border: '1px solid rgb(75, 85, 99)',
                                    borderRadius: '6px',
                                    p: 1.25,
                                    transition: '.3s',
                                    '&:hover': {
                                        borderColor: 'rgb(251, 59, 112)'
                                    },
                                    '&:focus': {
                                        borderColor: 'rgb(251, 59, 112)',
                                        background: 'rgb(50, 12, 22)',
                                        boxShadow: '0px 0px 5px 0px rgb(251 59 112)'
                                    }
                                }
                            }}
                        />
                    </Stack>

                    <Box sx={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                        <Box
                            className="header-btns"
                            sx={{ mr: '10px', display: 'flex', gap: 0.75, flexDirection: 'row' }}
                        >
                            <div className="dropdown">
                                <Button
                                    className="dropbtn"
                                    sx={{
                                        height: '100%',
                                        fontSize: 16,
                                        px: 2,
                                        '&:hover': {
                                            background: 'transparent'
                                        }
                                    }}
                                    endIcon={<HiOutlineChevronDown />}
                                >
                                    Shop
                                </Button>
                                <div className="dropdown-content">
                                    <Link to="/buy">Buy</Link>
                                    <Link to="/sell">Sell</Link>
                                    <Link to="/swap">Swap</Link>
                                </div>
                            </div>
                            <div className="dropdown">
                                <Button
                                    className="dropbtn"
                                    sx={{
                                        height: '100%',
                                        fontSize: 16,
                                        px: 2,
                                        '&:hover': {
                                            background: 'transparent'
                                        }
                                    }}
                                    endIcon={<HiOutlineChevronDown />}
                                >
                                    Shop
                                </Button>
                                <div className="dropdown-content">
                                    <Link to="/rewards">Dashboard</Link>
                                    <Link to="/rewards/pool">Pool</Link>
                                    {/* <Link to="/swap">Swap</Link> */}
                                </div>
                            </div>
                            {['Create', 'Coins', 'Activity'].map((item, index) => (
                                <Link key={index} to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            height: '100%',
                                            fontSize: 16,
                                            borderColor: 'transparent',
                                            px: 2,
                                            '&:hover': {
                                                background: 'transparent',
                                                borderColor: 'rgb(251, 59, 112)'
                                            }
                                        }}
                                    >
                                        {item}
                                    </Button>
                                </Link>
                            ))}
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    fontSize: 16,
                                    borderColor: 'transparent',
                                    px: 2,
                                    color: 'rgb(45, 212, 191)',
                                    '&:hover': {
                                        background: 'transparent',
                                        borderColor: 'rgb(45, 212, 191)'
                                    }
                                }}
                                endIcon={<StarIcon />}
                            >
                                Yield
                            </Button>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <IconButton
                                aria-label="fingerprint"
                                id="theme"
                                // data-theme={`${!isDark ? 'light' : 'dark'}`}
                                // onClick={()=>setIsDark(!isDark)}
                                onClick={() => handleDark()}
                            >
                                {isDark ? <LightModeOutlinedIcon /> : <BedtimeOutlinedIcon />}
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <IconButton
                                sx={{ display: 'none' }}
                                className="day-icon"
                                aria-label="fingerprint"
                                //   sx={{}}
                            >
                                {isDark ? <LightModeOutlinedIcon /> : <BedtimeOutlinedIcon />}
                            </IconButton>

                            <Button
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    fontSize: 16,
                                    marginRight: '10px',
                                    borderColor: 'rgb(251, 59, 112)',
                                    px: 1,
                                    color: 'rgb(251, 59, 112)',
                                    minWidth: 44
                                    // '&:hover': {
                                    //     background: 'rgb(50, 12, 22)',
                                    //     borderColor: 'rgb(251, 59, 112)'
                                    // }
                                }}
                            >
                                <FaEthereum fontSize={32} />
                            </Button>
                            <Button
                                onClick={handleOpen}
                                variant="contained"
                                sx={{
                                    px: 1.5,
                                    color: 'white',
                                    height: '45px',

                                    borderColor: 'rgb(251, 59, 112)',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                                }}
                            >
                                Connect
                            </Button>
                            <MenuIcon
                                onClick={() => setMenucontent(!Menucontent)}
                                className={light_mode ? 'menu-btn Light' : 'menu-btn'}
                                sx={{ height: '45px', width: '45px', display: 'none', borderRadius: '6px' }}
                            />
                        </Box>
                    </Box>
                </Stack>
                {Menucontent ? (
                    <Stack>
                        <InputBase
                            className={light_mode ? 'toggle-search light' : 'toggle-search'}
                            placeholder="Search for vaults"
                            sx={{
                                // width: 385,
                                // backgroundColor: 'red !important'
                                // marginRight: '30px',
                                display: 'flex',
                                '& input': {
                                    height: '100%',
                                    border: '1px solid rgb(75, 85, 99)',
                                    borderRadius: '6px',
                                    p: 1.25,
                                    transition: '.3s',
                                    '&:hover': {
                                        borderColor: 'rgb(251, 59, 112)'
                                    },
                                    '&:focus': {
                                        borderColor: 'rgb(251, 59, 112)',
                                        background: 'rgb(50, 12, 22)',
                                        boxShadow: '0px 0px 5px 0px rgb(251 59 112)'
                                    }
                                }
                            }}
                        />
                        <Stack
                            direction="row"
                            spacing={0.75}
                            sx={{ mr: '0px' }}
                            className={light_mode ? 'toggle-content light' : 'toggle-content'}
                        >
                            <Menu
                                id="shop-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'shop-button'
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        border: '1px solid rgb(75, 85, 99)',
                                        borderRadius: '8px',
                                        background: '#131214'
                                    },
                                    '& .MuiList-root': {
                                        p: 1
                                    },
                                    '& a': {
                                        color: 'white',
                                        textDecoration: 'none'
                                    },
                                    '& .MuiMenuItem-root': {
                                        p: 1.5,
                                        width: 100,
                                        fontSize: 14,
                                        lineHeight: '14px',
                                        borderRadius: '6px',
                                        fontFamily: 'Segoe UI'
                                    }
                                }}
                            ></Menu>

                            <Menu
                                id="rewards-menu"
                                anchorEl={anchorEl2}
                                open={open2}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'rewards-button'
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        border: '1px solid rgb(75, 85, 99)',
                                        borderRadius: '8px',
                                        background: '#131214'
                                    },
                                    '& .MuiList-root': {
                                        p: 1
                                    },
                                    '& .MuiMenuItem-root': {
                                        p: 1.5,
                                        width: 100,
                                        fontSize: 14,
                                        lineHeight: '14px',
                                        borderRadius: '6px',
                                        fontFamily: 'Segoe UI'
                                    }
                                }}
                            >
                                <Stack onMouseLeave={handleClose}>
                                    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                                    <MenuItem onClick={handleClose}>Pools</MenuItem>
                                </Stack>
                            </Menu>
                            {['Buy', 'Sell', 'Swap', 'Rewards', 'Create', 'Coins', 'Activity'].map((item, index) => (
                                <Link key={index} to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            height: '100%',
                                            fontSize: 16,
                                            borderColor: 'transparent',
                                            px: 2,
                                            '&:hover': {
                                                background: 'transparent',
                                                borderColor: 'rgb(251, 59, 112)'
                                            }
                                        }}
                                    >
                                        {item}
                                    </Button>
                                </Link>
                            ))}
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    fontSize: 16,
                                    borderColor: 'transparent',
                                    px: 2,
                                    color: 'rgb(45, 212, 191)',
                                    '&:hover': {
                                        background: 'transparent',
                                        borderColor: 'rgb(45, 212, 191)'
                                    }
                                }}
                                endIcon={<StarIcon />}
                            >
                                Yield
                            </Button>
                        </Stack>
                    </Stack>
                ) : null}
            </AppBar>
        </>
    );
};

export default Header;
