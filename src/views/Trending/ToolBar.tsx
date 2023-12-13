import React, { useState } from 'react';
// ** Material UI Components ** //
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { HiOutlineChevronDown } from 'react-icons/hi';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

import Slider from 'react-slick';
import './Trending.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Item from './Item';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

const ListData = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/gC-Nj7kyQw7yUgKLzFB7JbGrVL37OCpwKgksuLmdePKrCxLLc7Xyq1KA6C5JAW2Rw-AJGtuMmDJJTO-3BDtFSH07lliwELvJ9mAnIQ',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/0/256x256.png',
        name: 'PUNK',
        by: 'CryptoPunks',
        price: 65.38,
        count: 141,
    
    },
    {
        id: 2,
        image: 'https://openseauserdata.com/files/701f245b4858601d2c6087f360f92a5a.svg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/27/256x256.png',
        name: 'SQGL',
        by: 'Chromie Squiggle',
        price: 11.08,
        count: 80
    },
    {
        id: 3,
        image: 'https://openseauserdata.com/files/6ec59aef4d257e53004b40da083676b1.svg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        name: 'MILADY',
        by: 'Milady Maker',
        price: 0.3651,
        count: 1694
    },
    {
        id: 4,
        image: 'https://openseauserdata.com/files/07f1c2d13aa6cc1198151b539a94a1a6.svg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/251/256x256.png',
        name: 'DOODLE',
        by: 'Doodles',
        price: 7.612,
        count: 63
    },
    {
        id: 5,
        image: 'https://openseauserdata.com/files/44b70b215e464e07b32be7252328b36b.svg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/24/256x256.png',
        name: 'WIZARD',
        by: 'Forgotten Runes Wizards Cult',
        price: 1.11,
        count: 320
    },
    {
        id: 6,
        image: 'https://openseauserdata.com/files/10c06cefc02f99da9df6ac3fa5a88f25.svg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/0/256x256.png',
        name: 'PUNK',
        by: 'CryptoPunks',
        price: 65.38,
        count: 141
    },
    {
        id: 7,
        image: 'https://openseauserdata.com/files/efeb1679baac96093399adf43bcab56f.svg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/27/256x256.png',
        name: 'SQGL',
        by: 'Chromie Squiggle',
        price: 11.08,
        count: 80
    },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/oD2P6vQQAHfHJSd0HYHOhbgYFt-cazjYibiHlf2-I7ZX-9Nm0C6wnwmyoJxArwo9sxeJTGXn56AsSy-FqcG0Oy6xr0nfwrAVoAmWnAM',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        name: 'MILADY',
        by: 'Milady Maker',
        price: 0.3651,
        count: 1694
    },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/0l0nO4Kn3M17DI2lIExkzGq9JjWR3ARuClxoTd1olRCCGa0GIb5w7nCVUmNBDeDRdDOTPn1jO83HGbYgX3XQCTRJ65M2yf0EsWaC1w',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/251/256x256.png',
        name: 'DOODLE',
        by: 'Doodles',
        price: 7.612,
        count: 63
    },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/F5OQkHBfL4oEusWCDyGdTypoUMJo-sUR_YH8E9_zIEIX46OAxORUtp7CUtraJ9is4k_fNxL0ieX5dkoC2Xh9kuUhX827lnclQZgtYg',
        avatar: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/24/256x256.png',
        name: 'WIZARD',
        by: 'Forgotten Runes Wizards Cult',
        price: 1.11,
        count: 320
    }
];

function Arrow() {
    return (
        <div
            style={{
                display: 'none'
            }}
        />
    );
}

const ToolBar = () => {
    let slider: any = React.useRef(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const next = () => {
        slider.slickNext();
    };

    const previous = () => {
        slider.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)


    return (
        <Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={4}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Stack>
                        <Button
                            id="trending-button"
                            onClick={handleClick}
                            aria-controls={open ? 'trending-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="text"
                            disableRipple
                            sx={{
                                fontSize: 20,
                                p: 0,
                                lineHeight: '28px',
                                '&:hover': {
                                    background: 'transparent'
                                }
                            }}
                            endIcon={<HiOutlineChevronDown fontSize={25} />}
                        >
                            NEW
                        </Button>
                        <Stack
                            sx={{
                                height: '1px',
                                width: '100%',
                                backgroundImage:
                                    'linear-gradient(to right, rgba(0, 0, 0, 0), rgb(251, 59, 112), rgb(255, 109, 65))'
                            }}
                        ></Stack>
                        <Menu
                            id="trending-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'trending-button'
                            }}
                            sx={{
                                '& .MuiPaper-root': {
                                    border: '1px solid rgb(75, 85, 99)',
                                    borderRadius: '8px',
                                    // background: '#131214',
                                    mt: 1
                                },
                                '& .MuiList-root': {
                                    width: 100,
                                    p: 1
                                },
                                '& .MuiMenuItem-root': {
                                    p: 1,
                                    width: 'fit-content',
                                    fontSize: 18,
                                    textAlign: 'center',
                                    lineHeight: '18px',
                                    borderRadius: '6px',
                                    fontFamily: 'Segoe UI',
                                    '&:hover': {
                                        color: 'rgb(251 59 112)',
                                        background: 'none'
                                    }
                                }
                            }}
                        >
                            <Stack alignItems="center">
                                <MenuItem onClick={handleClose}>Popular</MenuItem>
                                <MenuItem onClick={handleClose}>New</MenuItem>
                            </Stack>
                        </Menu>
                    </Stack>
                    <Typography fontSize={20} fontWeight={700} lineHeight="28px" textTransform="uppercase" my={2}>
                        Collections
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                        sx={{
                            width: 40,
                            height: 40,
                            // bgcolor: '#000',
                            border: '2px solid rgb(36 37 38)'
                        }}
                        onClick={previous}
                    >
                        <KeyboardArrowLeftRoundedIcon />
                    </IconButton>
                    <IconButton
                        sx={{
                            width: 40,
                            height: 40,
                            // bgcolor: 'red',
                            marginLeft: '0 !important',
                            border: '2px solid rgb(36 37 38)'
                        }}
                        onClick={next}
                    >
                        <KeyboardArrowRightRoundedIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack sx={{ width: '100%', my: 3 }} className={light_mode? "faded-bg-light" : 'faded-bg'}>
                <Slider {...settings} ref={(c) => (slider = c)}>
                    {ListData.map((item: any) => (
                        <Item key={item.id} {...item} data={true} />
                    ))}
                </Slider>
            </Stack>
        </Stack>
    );
};

export default ToolBar;
