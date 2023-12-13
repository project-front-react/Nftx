import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Vault.css';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SWAP } from 'redux/actions/types';
import { RootState } from 'redux/store';
const ControlSideSwap = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    const dispatch = useDispatch()
    const [Swap, setSwap] = useState('')
    console.log(Swap, '123e4rty')
    dispatch({
        type: SET_SWAP, payload: Swap
    
    })
    return (
        <Stack
            className="ControlSide"
            sx={{
                // height: '100%',
                height: '500px !important', 
                overflow: 'auto !important',
                minWidth: '390px',
                // position: 'sticky',
                p: 3
            }}
            spacing={4}
        >
            <Stack className="SwapLayout">
                <Stack className="SwapLayHead" direction="row" justifyContent="space-between">
                    <h4 style={{ padding: '0', marginTop: '0' }}>Swap assets</h4>{' '}
                    <i className="fa fa-cog" aria-hidden="true" style={{ color: 'grey' }}></i>
                </Stack>
                <Stack className="SwapButtons">
                  <div onClick={()=>setSwap("swapFrom")}>
                    <Stack
                        className="SwapFrom"
                        sx={{
                            border: '1px solid rgb(251, 59, 112)',
                            borderRadius: '7px 7px 0px 0px',
                            padding: '15px',
                            color: 'inherit',
                            background: 'rgb(251, 59, 112, 0.1)'
                        }}
                    >
                        <p style={{ margin: '0' }}>Swap From</p>
                        <p style={{ margin: '0' }}>Choose your assets to swap from</p>
                    </Stack>
                    </div>
<div onClick={()=>setSwap("swapTo")}>
                    <Stack
                        className="SwapTo"
                        
                        sx={{
                            border: '1px solid rgb(65, 66, 67 )',
                            borderRadius: '0px 0px 10px 10px',
                           
                            // backgroundColor: 'rgba(35, 36, 38)',
                            background: 'rgb(251, 59, 112, 0.1)',
                            padding: '15px'
                           
                        }}
                    >
                        <p style={{ margin: '0', marginTop: '20px' }}>Swap To</p>
                        <p style={{ margin: '0' }}>Choose your assets to receive</p>
                        <Button sx={{ width: '35%', background: 'white', color: 'black', marginTop: '10px' ,
                                                '&:hover': {
                                                    backgroundColor: 'white !important'
                                                }
                 }}>
                            Select assets
                        </Button>
                    </Stack>
                    </div>
                </Stack>
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

export default ControlSideSwap;
