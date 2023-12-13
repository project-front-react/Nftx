// ** Material UI Components ** //
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import './Item.css'
const Item: React.FC<any> = ({ id, name, image, avatar, by, price, count }) => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)
    return (

        <Grid id={id} item xs={12} sm={6} md={4} lg={3} xl={12 / 5}>
        <Link to="/vault/0x227c7df69d3ed1ae7574a1a7685fded90292eb48/buy" className= 'textDecoNone'>
            <Card
                variant="outlined"
                sx={{
                    // borderColor: 'rgb(36 37 38)',
                    // textDecorationStyle: 'none !important'
                    // bgcolor: 'rgb(25 26 27)'
                }}
                className = {light_mode? 'lightCardBuy' : 'buyCardss'}
            >
                <CardContent sx={{ padding: '12px !important' }}>
                    <Stack sx={{ lineHeight: 0, height: 0, paddingTop: '100%', position: 'relative' }}>
                        <Box
                            component="img"
                            src={image}
                            alt={name}
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                objectFit: 'cover',
                                borderRadius: 1
                            }}
                        />
                    </Stack>
                    <Stack py={1} spacing={0.5} className = 'typoRemoveStyle'>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Avatar src={avatar} variant="circular" sx={{ width: 24, height: 24 }} />
                            <Typography fontSize={20} fontWeight={500} lineHeight="28px"  className = 'typoRemoveStyle'>
                                {name}
                            </Typography>
                        </Stack>
                        <Typography fontSize={14} lineHeight="20px" color="rgb(209 213 219)">
                            {by}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                        <Stack>
                            <Typography fontSize={12} lineHeight="16px" color="rgb(156 163 175)">
                                Price
                            </Typography>
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Box
                                    component="img"
                                    src="https://nftx.io/images/ethereum-nftx.svg"
                                    alt="ether-icon"
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        mt: 0.25
                                    }}
                                />
                                <Typography fontSize={18} lineHeight="28px">
                                    {price}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Typography fontSize={12} lineHeight="16px" color="rgb(156 163 175)">
                                Items
                            </Typography>
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Typography fontSize={18} lineHeight="28px">
                                    {count}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    </Grid>

    )

 
};

export default Item;
