import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import './LeftSide.css';
import nftxLogoIcon from '../../assets/img/logo_mini_nftx.avif'
import { Box } from '@mui/system';
import { CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
const trending_list = [
    { title: 'BPRINT', value: 342, color: 'rgb(255 109 65)' },
    { title: 'CYPH', value: 170, color: 'rgb(248 113 113)' },
    { title: 'PHUNKY', value: 160, color: 'rgb(239 68 68)' },
    { title: 'DESBES', value: 160, color: 'rgb(252 98 141)' },
    { title: 'DITTO', value: 143, color: 'rgb(251 59 112)' }
];

const activity_list = [
    { title: 'BPRINT #126068', status: 'REDEEM', color: 'rgb(132 204 22)' },
    { title: 'REGULR #3020', status: 'SELL', color: 'rgb(244 63 94)' },
    { title: 'WHALE #1113', status: 'SELL', color: 'rgb(244 63 94)' },
    { title: 'WHALE #2114', status: 'MINT', color: 'rgb(255 109 65)' },
    { title: 'WHALE #2194', status: 'MINT', color: 'rgb(255 109 65)' }
];

const bestapr_list = [
    {
        title: 'DESBES',
        apr: '5,261.72%',
        color: 'linear-gradient(to right, #14b8a6, rgb(168, 85, 247))',
        icon: '../../assets/img/logo_mini_nftx.avif'
    },
    {
        title: 'YUNK',
        apr: '1,982.43%',
        color: 'linear-gradient(to right, #ff6d41, rgb(251, 59, 112))',
        icon: '../../assets/img/logo_mini_nftx.avif'
    },
    {
        title: 'DESBES',
        apr: '1,281.71%',
        color: 'linear-gradient(to right, #ff6d41, rgb(251, 59, 112))',
        icon: '../../assets/img/logo_mini_nftx.avif'
    },
    {
        title: 'PUPS',
        apr: '1,181.82%',
        color: 'linear-gradient(to right, #ff6d41, rgb(251, 59, 112))',
        icon: '../../assets/img/logo_mini_nftx.avif'
    },
    {
        title: 'BPRINT',
        apr: '971.77%',
        color: 'linear-gradient(to right, #14b8a6, rgb(168, 85, 247))',
        icon: '../../assets/img/logo_mini_nftx.avif'
    }
];

const LeftSide = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)
    return (
        <Stack className="LeftBarMain">
            <Stack
                className="aside w-full sm:w-64 md:w-72 lg:w-80 flex-none px-4"
                sx={{
                    px: 2,
                    marginTop: '- 40px',

                    overflow: 'auto'
                }}
            >
                <Stack>
                    <Stack
                        sx={{
                            pt: 4,
                            pb: { xs: '2', md: '6' }
                        }}
                    >
                        <Stack spacing={3} sx={{ width: '310px' }} className="sidebar">
                            <Box
                                className={light_mode? 'LeftBarLight': 'trending'}
                                sx={{
                                    p: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.05)',

                                    // marginTop: '20px',
                                    borderRadius: '8px',
                                    // background: 'rgb(36 37 38)',
                                    // background: 'red',

                                    gap:1
                                }}
                                // spacing={1}
                            >
                                <Stack>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography fontSize={14} fontWeight={700} color="rgb(156 163 175)">
                                    Activity
                                        </Typography>
                                        <Typography fontSize={12} fontWeight={700} color="rgb(209 213 219)">
                                            (7D TURNOVER)
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={0.5}>
                                        {trending_list.map((item, index) => {
                                            return (
                                                <Box
                                                    key={index}
                                                    className={light_mode? 'leftSideDataLight': 'leftSideData'}
                                                    sx={{
                                                        px: 2,
                                                        py: 1,
                                                        height: 42,
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '8px',
                                                        // background: '#191a1b',
                                                        // direction="row"
                                                        flexDirection: 'row',
                                                        display: 'flex',
                                                        alignItems:"center",
                                                        justifyContent:"space-between"
                                                    }}

                                                >
                                                    <Stack direction="row" alignItems="center" spacing={1}>
                                                        <Typography
                                                            sx={{
                                                                background: item.color,
                                                                px: 0.5,
                                                                py: 0,
                                                                color: 'black',
                                                                fontSize: 12,
                                                                borderRadius: '4px',
                                                                lineHeight: '16px',
                                                                fontWeight: 500
                                                            }}
                                                        >
                                                            #{index + 1}
                                                        </Typography>
                                                        <Typography fontSize={14} fontWeight={500} color="white">
                                                            {item.title}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography fontSize={12} fontWeight={500} color="white">
                                                        {item.value}%
                                                    </Typography>
                                                </Box>
                                            );
                                        })}
                                    </Stack>
                                    {/* <br /> */}
                                </Stack>
                            </Box>
                            <Stack
                                className={light_mode?  "activityLight" : 'activity'}
                                sx={{
                                    borderRadius: '8px',
                                    marginTop: '20px',

                                  
                                    padding: '15px'
                                }}
                                spacing={1}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography fontSize={14} fontWeight={700} color="rgb(156 163 175)">
                                        ACTIVITY
                                    </Typography>
                                </Stack>
                                <Box
                                className={light_mode? 'leftSideDataLight': 'leftSideData'}
                                    sx={{
                                        p: 2,
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                       
                                        gap: 1,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                 
                                >
                                    {activity_list.map((item, index) => (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            spacing={1}
                                        >
                                            <Typography fontSize={12} fontWeight={500} color="white">
                                                {item.title}
                                            </Typography>
                                            <Chip
                                                label={item.status}
                                                variant="outlined"
                                                sx={{
                                                    fontSize: 8,
                                                    color: item.color,
                                                    borderColor: item.color,
                                                    minHeight: 0,
                                                    height: 'fit-content',
                                                    '& span': {
                                                        px: 1,
                                                        pt: '2px'
                                                    }
                                                }}
                                            />
                                        </Stack>
                                    ))}
                                </Box>
                                <Stack sx={{ pt: 1 }}>
                                    <Link
                                        href="#"
                                        sx={{ textDecoration: 'none', fontSize: 14, color: 'white', fontWeight: 500 }}
                                    >
                                        {'See more >'}
                                    </Link>
                                </Stack>
                            </Stack>

                            <Stack
                                className={light_mode?  "best_aprLight" : 'best_apr'}
                                sx={{
                                    p: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',

                                    // background: 'rgb(36 37 38)'
                                }}
                                spacing={1}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography fontSize={14} fontWeight={700} color="rgb(156 163 175)">
                                        BEST APRs
                                    </Typography>
                                </Stack>
                                <Box
                                className={light_mode? 'leftSideDataLight': 'leftSideData'}

                                    sx={{
                                        p: 2,
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        // background: '#191a1b',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1
                                    }}
                                
                                >
                                    {bestapr_list.map((item, index) => (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <img src={nftxLogoIcon} alt="token" width="24px" height="24px" />
                                                <Typography fontSize={12} fontWeight={500} color="white">
                                                    {item.title}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                fontSize={12}
                                                fontWeight={500}
                                                color="rgba(0, 0, 0, 0)"
                                                sx={{
                                                    backgroundImage: item.color,
                                                    backgroundClip: 'text'
                                                }}
                                            >
                                                {item.apr}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Box>
                                <Stack sx={{ pt: 1 }}>
                                    <Link
                                        href="#"
                                        sx={{ textDecoration: 'none', fontSize: 14, color: 'white', fontWeight: 500 }}
                                    >
                                        {'See more >'}
                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LeftSide;
