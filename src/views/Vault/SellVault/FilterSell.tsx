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
import '../Vault.css';
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

export default function FilterSell({ children }) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    


    return (
        <Box sx={{ display: 'flex' }} className="filterVault">
            <Drawer variant="permanent" open={open} className="filterBtn">
                <DrawerHeader sx={{ p: 0 }}>
                    <Button
                        disableRipple
                        sx={{
                            p: 0,
                            minWidth: 0,
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
                                {open ? <HiOutlineChevronLeft fontSize={24} /> : <HiOutlineAdjustments fontSize={24} />}
                            </Stack>
                        </Stack>
                    </Button>
                </DrawerHeader>
                {open && (
                    <Stack
                    className={light_mode? "aside light" : ''}
                        flexGrow={1}
                        sx={{
                            background: 'rgb(25 26 27)',
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
                    </Stack>
                )}
            </Drawer>
            <Box component="main" flexGrow={1}>
                {children}
            </Box>
        </Box>
    );
}
