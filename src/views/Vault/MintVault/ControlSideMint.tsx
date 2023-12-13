import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Vault.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
const ControlSideMint = () => {
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
                <Typography fontSize={20} textAlign="center">
                    Select NFTs to mint
                </Typography>
                <Button
                    variant="contained"
                    disableRipple
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        px: 6,
                        py: 3,
                        cursor: 'not-allowed',
                        color: 'white',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        backgroundImage: 'linear-gradient(rgb(36, 37, 38), rgb(0, 0, 0))'
                    }}
                >
                    Mint NFTs
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

export default ControlSideMint;
