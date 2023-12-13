import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import InputBase from '@mui/material/InputBase';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { HiOutlineChevronLeft, HiOutlineAdjustments, HiOutlineChevronDown } from 'react-icons/hi';
import './Vault.css';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
const drawerWidth = 315;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
    width: 56,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden'
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& > div': {
        marginTop: '70px',
        height: 'calc(100% - 70px)'
    },
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const filter_list = [
    {
        name: 'Face Decoration',
        data: [
            { type: 'nose ring silver', value: 61 },
            { type: 'nose ring gold', value: 54 },
            { type: 'star heart tattoo', value: 52 },
            { type: 'face piercings', value: 43 },
            { type: 'Teardrops Tattoo', value: 41 },
            { type: 'snakebites', value: 35 },
            { type: 'Temple Cross Tattoo', value: 32 },
            { type: 'milady pilled tattoo', value: 20 },
            { type: 'black hearts tattoo', value: 11 },
            { type: 'crescent tattoo', value: 6 },
            { type: 'Tyson Tribal Tattoo', value: 1 }
        ]
    },
    {
        name: 'Hat',
        data: [
            { type: 'trucker anime', value: 75 },
            { type: 'blue pink bow', value: 37 },
            { type: 'maid hat', value: 36 },
            { type: 'Trucker Oasis', value: 31 },
            { type: 'pink bonnet', value: 29 },
            { type: 'plaid bonnet', value: 61 },
            { type: 'nose ring silver', value: 61 },
            { type: 'nose ring gold', value: 54 },
            { type: 'star heart tattoo', value: 52 },
            { type: 'face piercings', value: 43 },
            { type: 'Teardrops Tattoo', value: 41 },
            { type: 'snakebites', value: 35 },
            { type: 'Temple Cross Tattoo', value: 32 },
            { type: 'milady pilled tattoo', value: 20 },
            { type: 'black hearts tattoo', value: 11 },
            { type: 'crescent tattoo', value: 6 },
            { type: 'Tyson Tribal Tattoo', value: 1 }
        ]
    },
    {
        name: 'Glasses',
        data: [
            { type: 'nose ring silver', value: 61 },
            { type: 'nose ring gold', value: 54 },
            { type: 'star heart tattoo', value: 52 },
            { type: 'face piercings', value: 43 },
            { type: 'Teardrops Tattoo', value: 41 },
            { type: 'snakebites', value: 35 },
            { type: 'Temple Cross Tattoo', value: 32 },
            { type: 'milady pilled tattoo', value: 20 },
            { type: 'black hearts tattoo', value: 11 },
            { type: 'crescent tattoo', value: 6 },
            { type: 'Tyson Tribal Tattoo', value: 1 }
        ]
    },
    {
        name: 'Eyes',
        data: [
            { type: 'nose ring silver', value: 61 },
            { type: 'nose ring gold', value: 54 },
            { type: 'star heart tattoo', value: 52 },
            { type: 'face piercings', value: 43 },
            { type: 'Teardrops Tattoo', value: 41 },
            { type: 'snakebites', value: 35 },
            { type: 'Temple Cross Tattoo', value: 32 },
            { type: 'milady pilled tattoo', value: 20 },
            { type: 'black hearts tattoo', value: 11 },
            { type: 'crescent tattoo', value: 6 },
            { type: 'Tyson Tribal Tattoo', value: 1 }
        ]
    },
    {
        name: 'Background',
        data: [
            { type: 'nose ring silver', value: 61 },
            { type: 'nose ring gold', value: 54 },
            { type: 'star heart tattoo', value: 52 },
            { type: 'face piercings', value: 43 },
            { type: 'Teardrops Tattoo', value: 41 },
            { type: 'snakebites', value: 35 },
            { type: 'Temple Cross Tattoo', value: 32 },
            { type: 'milady pilled tattoo', value: 20 },
            { type: 'black hearts tattoo', value: 11 },
            { type: 'crescent tattoo', value: 6 },
            { type: 'Tyson Tribal Tattoo', value: 1 }
        ]
    },
    {
        name: 'Face Decoration',
        data: [
            { type: 'nose ring silver', value: 61 },
            { type: 'nose ring gold', value: 54 },
            { type: 'star heart tattoo', value: 52 },
            { type: 'face piercings', value: 43 },
            { type: 'Teardrops Tattoo', value: 41 },
            { type: 'snakebites', value: 35 },
            { type: 'Temple Cross Tattoo', value: 32 },
            { type: 'milady pilled tattoo', value: 20 },
            { type: 'black hearts tattoo', value: 11 },
            { type: 'crescent tattoo', value: 6 },
            { type: 'Tyson Tribal Tattoo', value: 1 }
        ]
    }
];

export default function Filter() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const light_mode = useSelector<RootState, boolean>((state) => state.changeTheme.payload);

    return (
        <Box sx={{ display: 'flex' }} className="filterVault">
            <Drawer variant="permanent" open={open} className="filterBtn">
                <DrawerHeader sx={{ p: 0 }}>
                    <Button
                        disableRipple
                        sx={{
                            p: 0,
                            minWidth: 0,
                            // background: 'red',
                            width: '100%',
                            height: '100%',
                            '&:hover': {
                                background: 'transparent'
                            }
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            {open && (
                                <Typography sx={{ ml: 1.5 }} fontSize={16} fontWeight={700} color="white">
                                    Filters
                                </Typography>
                            )}
                            <Stack
                                sx={{
                                    height: '100%',
                                    // background: 'rgb(36 37 38)',
                                    p: 2,
                                    justifyContent: 'center'
                                }}
                            >
                                {open ? <HiOutlineChevronLeft fontSize={24} className={light_mode? 'iconfilter light' : ''}/> : <HiOutlineAdjustments fontSize={24} className={light_mode? 'iconfilter light' : ''} />}
                            </Stack>
                        </Stack>
                    </Button>
                </DrawerHeader>
                {open && (
                    <Stack
                        className={light_mode? "aside light" : ''}
                        flexGrow={1}
                        sx={{
                            // background: 'rgb(25 26 27)',
                            overflow: 'auto',
                            pb: 6
                        }}
                    >
                        <Stack>
                            <InputBase
                                placeholder="Search for ID..."
                                sx={{
                                    width: '100%',
                                    '& input': {
                                        borderRadius: 0,
                                        py: 3,
                                        px: 1.5,
                                        transition: '.3s',
                                        border: '1px solid transparent',
                                        fontSize: 14,
                                        '&:focus': {
                                            borderColor: 'rgb(75, 85, 99)'
                                        }
                                    }
                                }}
                            />
                        </Stack>
                        <Stack
                            sx={{
                                p: 1,
                                // background: 'red'
                            }}
                            spacing={1}

                        >
                            {filter_list.map((list, index) => (
                                <Accordion
                                    key={index}
                                    disableGutters
                                    className={light_mode ? 'filterData Light' : ''}
                                    sx={{
                                        background: 'rgb(36 37 38)',
                                        // background: 'red',
                                        color: 'white',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(75, 85, 99, 0.5)',
                                        '& .MuiAccordionSummary-content': {
                                            my: 1.25
                                        }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<HiOutlineChevronDown fontSize={24} />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        sx={{
                                            color: 'white'
                                        }}
                                    >
                                        <Typography fontSize={16} fontWeight={700}>
                                            {list.name}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            pt: 0,
                                            maxHeight: 380,
                                            overflow: 'auto'
                                        }}
                                    >
                                        <FormGroup>
                                            {list.data.map((item, i) => (
                                                <FormControlLabel
                                                    key={i}
                                                    sx={{
                                                        ml: -0.5,
                                                        mr: 0,
                                                        width: '101%',
                                                        '&>span:last-child': {
                                                            width: 250
                                                        }
                                                    }}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                p: 0.2,
                                                                mr: 0.5,
                                                                color: 'rgb(251, 59, 112)',
                                                                '& svg': {
                                                                    width: 22
                                                                },
                                                                '&.Mui-checked': {
                                                                    color: 'rgb(251, 59, 112)'
                                                                }
                                                            }}
                                                        />
                                                    }
                                                    label={
                                                        <Stack
                                                            direction="row"
                                                            justifyContent="space-between"
                                                            sx={{
                                                                width: '100%'
                                                            }}
                                                        >
                                                            <Typography fontSize={14} lineHeight="14px">
                                                                {item.type}
                                                            </Typography>
                                                            <Typography
                                                                fontSize={14}
                                                                lineHeight="14px"
                                                                fontFamily="DM Mono"
                                                                color="rgba(255,255,255,0.6)"
                                                            >
                                                                {item.value}
                                                            </Typography>
                                                        </Stack>
                                                    }
                                                />
                                            ))}
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Stack>
                    </Stack>
                )}
            </Drawer>
            <Box component="main" flexGrow={1}>
                
            </Box>
        </Box>
    );
}
