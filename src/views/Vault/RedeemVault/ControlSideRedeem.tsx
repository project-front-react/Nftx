import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Vault.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
const ContolSideRedeem = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <Stack
            className="ControlSide"
            sx={{
                height: '100%',
                // width: 385,
                minWidth: '390px',
                // width: '100%',
                p: 3
            }}
            spacing={4}
        >
            <Stack spacing={2}>
                <Stack direction="row">
                    <Stack className="logo-leftRedeem" sx={{ width: '50px', marginTop: '6px' }}>
                        <img
                            src="https://nftx.io/images/random-redeem.svg"
                            alt=""
                            style={{ height: '28px', width: '30px' }}
                        />
                    </Stack>
                    <Stack>
                        <Typography fontSize={15} textAlign="left">
                            Random
                        </Typography>
                        <Typography fontSize={13} textAlign="right" >
                            1.04 PXLDY
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        sx={{
                            height: '25px',
                            border: '1px solid rgb(75,76,77)',
                            width: '79px',
                            marginLeft: '43%',
                            px: '10px',
                            borderRadius: '120px',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <i
                            className="fa fa-minus"
                            aria-hidden="true"
                            style={{
                                fontSize: '10px',
                                background: '#8e8e8e',
                                padding: '3px',
                                borderRadius: '100%',
                                color: 'black'
                            }}
                        ></i>
                        <Typography fontSize={13}>0</Typography>
                        <i
                            className="fa fa-plus"
                            aria-hidden="true"
                            style={{
                                fontSize: '10px',
                                background: '#8e8e8e',
                                padding: '3px',
                                borderRadius: '100%',
                                color: 'black'
                            }}
                        ></i>
                    </Stack>
                </Stack>
                <Typography fontSize={13} textAlign="right" sx={{marginTop: '-10px !important', marginRight: '8px !important', marginBottom: '25px !important'}}>
                        <a href="" style={{color: 'inherit'}}>Max</a>
                    </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize={15} textAlign="left">
                        Your balance
                    </Typography>
                    <Typography fontSize={13} textAlign="right">
                        0.00 PXLDY
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize={18} textAlign="left">
                        Total
                    </Typography>
                    <Typography fontSize={16} textAlign="right">
                        0 PXLDY
                    </Typography>
                </Stack>
                <Button
                    variant="contained"
                    disableRipple
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        px: 6,
                        py: 1.5,
                        cursor: 'not-allowed',
                        color: 'white',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        backgroundImage: 'linear-gradient(rgb(36, 37, 38), rgb(0, 0, 0))'
                    }}
                    
                >
                    Insufficient PXLDY balance
                </Button>
                <Button
                    variant="contained"
                    disableRipple
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        px: 6,
                        py: 1.5,
                        cursor: 'not-allowed',
                        color: 'black',
                        width: '100%',
                        backgroundColor: 'white'
                    }}
                >
                    Buy PXLDY
                </Button>
            </Stack>
            <Stack spacing={1}>
                <Typography fontSize={16} textAlign="center" color="rgb(209 213 219)">
                    Looking for advanced features?
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        px: 3
                    }}
                >
                    <Button
                        variant="contained"
                        className={light_mode? 'buttoncontrolsideGrey': ''}

                        sx={{
                            fontSize: 14,
                            p: 1,
                            color: 'white',
                            width: '100%',
                            fontWeight: 400,
                            lineHeight: '20px',
                            backgroundColor: 'rgb(36 37 38)',
                            '&:hover': {
                                backgroundColor: 'rgb(36 37 38)'
                            }
                        }}
                    >
                        <Link to="/vault/:addr/:type/mint" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {' '}
                            MINT
                        </Link>
                    </Button>
                    <Button
                        variant="contained"
                        className={light_mode? 'buttoncontrolsideGrey': ''}

                        sx={{
                            fontSize: 14,
                            p: 1,
                            color: 'white',
                            width: '100%',
                            fontWeight: 400,
                            lineHeight: '20px',
                            backgroundColor: 'rgb(36 37 38)',
                            '&:hover': {
                                backgroundColor: 'rgb(36 37 38)'
                            }
                        }}
                    >
                        <Link to="/vault/:addr/:type/reedem" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {' '}
                            REDEEM
                        </Link>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ContolSideRedeem;
