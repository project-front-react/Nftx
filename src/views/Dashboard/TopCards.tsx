// ** Material UI Components ** //
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import './TopCards.css';
import { StarIcon } from 'components/Svg';
import { Box } from '@mui/system';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
const header_list = [
    {
        title: 'Buy',
        position: 'top',
        description: 'Shop NFT collections',
        bg_out: 'linear-gradient(to right, rgb(105, 227, 94), rgb(59, 130, 246))',
        bg_in: 'linear-gradient(to right, rgb(84, 182, 75), rgb(59, 130, 246))'
    },
    {
        title: 'Sell',
        position: '100%',
        description: 'Instantly sell your holdings',
        bg_out: 'linear-gradient(to right, rgb(239, 68, 68), rgb(244, 63, 94))',
        bg_in: 'linear-gradient(to right, rgb(239, 68, 68), rgb(244, 63, 94))'
    },
    {
        title: 'Swap',
        position: '0',
        description: 'Swap like-kind NFTs',
        bg_out: 'linear-gradient(to right, rgb(168, 85, 247), rgb(59, 130, 246))',
        bg_in: 'linear-gradient(to right, rgb(168, 85, 247), rgb(59, 130, 246))'
    },
    {
        title: `Stake`,
        position: 'bottom',
        description: 'Stake your NFTs to earn yield',
        bg_out: 'linear-gradient(to right, rgb(20 184 166), rgb(20 184 166))',
        bg_in: 'linear-gradient(to right, rgb(16 155 144), rgb(15, 118, 110))'
    }
];

const TopCards = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    
    return (
        <Grid container 
        className= {light_mode?'topcards light' : 'topcards'}
        
        spacing={2} flexWrap="wrap">
            {header_list.map((list, index) => (
                <Grid item key={index} sx={{}} className="topcardsBlcok"
                
                >
                    <Stack
                        sx={{
                            backgroundImage: list.bg_out,
                            width: '100%',
                            direction: 'row',
                            p: '1px',
                            display: 'flex',
                            // marginLeft: '10px',
                            // marginRight: '10px',
                            borderRadius: 1.5,
                            height: '100%',
                            maxHeight: '110px',
                            minHeight: '110px'
                        }}
       

                    >
                        <Card
                            variant="outlined"
                            sx={{
                                overflow: 'hidden',
                                backgroundImage: 'url(https://nftx.io/images/banner-bg.jpeg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '150%',
                                backgroundPosition: list.position,
                                borderRadius: 1.5,
                                border: 'none',
                                height: '100%',
                                position: 'relative',
                                maxHeight: '108px',
                                minHeight: '108px',
                                width: '100%'
                            }}
                        >
                            <Box className="insider-details">
                                <Stack
                                    sx={{
                                        backgroundImage: list.bg_in,
                                        position: 'absolute',
                                        opacity: 0.7,
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0,
                                        maxHeight: '110px',
                                        minHeight: '110px'
                                        // display: 'block',
                                    }}
                                ></Stack>
                                <Stack spacing={1} sx={{ position: 'relative', height: '100%' }}  >
                                    <Typography fontSize={24} lineHeight="32px" fontWeight={700}  className= {light_mode?'topcardsss light' : 'topcardsss'}>
                                        {list.title}
                                    </Typography>
                                    <Typography fontSize={14} lineHeight="20px"  className= {light_mode?'topcardsss light' : 'topcardsss'}>
                                        {list.description}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Card>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )

};

export default TopCards;
