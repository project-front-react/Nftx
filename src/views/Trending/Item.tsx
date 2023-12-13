// ** Material UI Components ** //
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import nftxlogo from '../../assets/img/logo_mini_nftx.avif'
import { RootState } from 'redux/store';

// const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    
const Item: React.FC<any> = ({ id, name, image, avatar, by, price, count },{data}) => {
 const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return(
    
        <Grid id={id} item>
            <Link to="/vault/0x227c7df69d3ed1ae7574a1a7685fded90292eb48/buy">
                <Card
                    sx={{
                        // background: 'red !important',
                        mr: 1,
                        position: 'relative',
                        '&:hover': {
                            '& .bg-image': {
                                transform: 'scale(1.1)'
                            }
                        }
                    }}
                >
                    <CardContent sx={{ padding: '8px !important' }}>
                        <Stack sx={{ lineHeight: 0, height: 0, paddingTop: '100%', position: 'relative' }}></Stack>
                        <Stack py={1} spacing={0.5}>
                            <Box
                                component="img"
                                className="bg-image"
                                src={image}
                                alt={name}
                                sx={{
                                    transition: '.3s',
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    zIndex: 0
                                }}
                            />
                        </Stack>
                        <Stack
                            justifyContent="space-between"
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                zIndex: 10,
                                p: 1,
                                cursor: 'pointer'
                            }}
                        >
                            
                            <CardContent
                                sx={{
                                    py: 1,
                                    px: 1.25,
                                    background: 'rgb(25 26 27)',
                                    borderRadius: 1,
                                    width: 'fit-content',
                                    display: 'flex',
                                    // direction="row"
                                    flexDirection: 'row',
                                    alignItems:"center",
                                    gap: 1
                                }}
    
                            >
                                <Box
                                    component="img"
                                    src={nftxlogo}
                                    alt="icon"
                                    sx={{
                                        width: 24,
                                        height: 24
                                    }}
                                />
                                <Box sx={{flexDirection:"row",display: 'flex',alignItems:"center"}} >
                                    <Typography fontSize={16} lineHeight="16px" fontWeight={700} color="white">
                                        ZENA
                                    </Typography>
                                    <Typography fontSize={14} lineHeight="14px" color="white">
                                        TODPortalsCollection01
                                    </Typography>
                                </Box>
                            </CardContent>
                            
                            <CardContent
                                sx={{
                                    py: 1,
                                    px: 1.5,
                                    background: 'rgb(25 26 27)',
                                    borderRadius: 1,
                                    width: 'fit-content',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems:"center",
                                    row:6,
                                    gap: 1
                                }}
    
                            >
                                <Stack>
                                    <Typography fontSize={12} lineHeight="16px" color="rgb(156 163 175)">
                                        PRICE
                                    </Typography>
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <FaEthereum fontSize={16} color="rgb(251, 59, 112)" />
                                        <Typography fontSize={14} color="white" fontWeight={700}>
                                            {count}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography fontSize={12} lineHeight="16px" color="rgb(156 163 175)">
                                        APR
                                    </Typography>
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <Typography
                                            fontSize={14}
                                            fontWeight={700}
                                            sx={{
                                                backgroundImage:
                                                    'linear-gradient(to right, rgb(20, 184, 166), rgb(168, 85, 247))',
                                                backgroundClip: 'text',
                                                color: 'rgba(0, 0, 0, 0)'
                                            }}
                                        >
                                            53.67%
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Stack>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}

export default Item;
