import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { FaEthereum } from 'react-icons/fa';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Vault.css';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
const ContentHeader = () => {
    const { type } = useParams();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [pageType, setPageType] = useState(type);

    const handleType = (_type) => {
        setPageType(_type);
        navigate(`../vault/0x227c7df69d3ed1ae7574a1a7685fded90292eb48/${_type}`);
    };

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <Stack
            className={light_mode? "ContentHeader Light" : 'ContentHeader'}
            sx={{
                height: 64,
                // pl: '80px !important',
                // border: '1px solid white',
                py: 3,
                px: 3,
                background: 'rgb(25 26 27)'
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Stack spacing={2} alignItems="center" direction="row" className="contentHeadLogoBtns">
                <Stack alignItems="center" direction="row" spacing={1}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfndDSzmRqlrq7v3MVjPIzRa_H-fPcQg2JesiM0AlS&s"
                        alt="avatar"
                        width="40"
                    />
                    <Stack>
                        <Typography fontSize={18} fontWeight={700} lineHeight="22px">
                            MILADY
                        </Typography>
                        <Typography fontSize={14}>Milady Makers</Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={0.25}
                        p={1}
                        sx={{
                            // background: 'rgb(19 18 20)',
                            borderRadius: '6px'
                        }}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                        <FaEthereum color="rgb(251, 59, 112)" fontSize={20} />
                        <Typography fontSize={16} fontFamily="DM mono">
                            0.3807
                        </Typography>
                    </Stack>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                            '& .MuiPaper-root': {
                                background: 'black',
                                backgroundImage: 'none',
                                // ml: 1,
                                borderRadius: 0.5,
                                boxShadow:
                                    '0px 1px 2px -3px rgb(0 0 0 / 20%), 0px 2px 4px 1px rgb(0 0 0 / 14%), 0px 3px 3px 2px rgb(0 0 0 / 12%)'
                            }
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{ pt: 1.25, pb: 1.5, px: 2 }} fontSize={12}>
                            All items share the same Buy Now price.
                        </Typography>
                    </Popover>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={1} className="btnsContenthead">
                <Button
                    className="btnMUI5"
                    variant="outlined"
                    sx={{
                        fontSize: 14,

                        px: 1.5,
                        minWidth: 0,
                        '&:hover': {
                            background: 'rgb(251, 59, 112, 0.1)',
                            borderColor: 'rgb(251, 59, 112)'
                        }
                    }}
                >
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/vault/:addr/:type">
                        {' '}
                        Buy
                    </Link>
                </Button>

                <Button
                    className="btnMUI5"
                    variant="outlined"
                    sx={{
                        fontSize: 14,

                        px: 1.5,
                        minWidth: 0,
                        '&:hover': {
                            background: 'rgb(251, 59, 112, 0.1)',
                            borderColor: 'rgb(251, 59, 112)'
                        }
                    }}
                >
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/vault/:addr/:type/sell">
                        {' '}
                        Sell
                    </Link>
                </Button>
                <Button
                    className="btnMUI5"
                    variant="outlined"
                    sx={{
                        fontSize: 14,

                        px: 1.5,
                        minWidth: 0,
                        '&:hover': {
                            background: 'rgb(251, 59, 112, 0.1)',
                            borderColor: 'rgb(251, 59, 112)'
                        }
                    }}
                >
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/vault/:addr/:type/swap">
                        {' '}
                        Swap
                    </Link>
                </Button>
                <Button
                    className="btnMUI5"
                    variant="outlined"
                    sx={{
                        fontSize: 14,

                        px: 1.5,
                        minWidth: 0,
                        '&:hover': {
                            background: 'rgb(251, 59, 112, 0.1)',
                            borderColor: 'rgb(251, 59, 112)'
                        }
                    }}
                >
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/vault/:addr/:type/stake">
                        Stake
                    </Link>
                </Button>
                <Button
                    className="btnMUI5"
                    variant="outlined"
                    sx={{
                        fontSize: 14,
                        // borderColor:  'rgb(251, 59, 112)'  ,
                        // background: 'rgb(251, 59, 112, 0.1)' ,
                        px: 1.5,
                        minWidth: 0,
                        '&:hover': {
                            background: 'rgb(251, 59, 112, 0.1)',
                            borderColor: 'rgb(251, 59, 112)'
                        }
                    }}
                >
                                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/vault/:addr/:type/info">
                        Info
                    </Link>
                </Button>
            </Stack>
        </Stack>
    );
};

export default ContentHeader;
