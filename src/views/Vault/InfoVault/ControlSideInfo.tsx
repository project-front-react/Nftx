import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Vault.css';
import { Link } from 'react-router-dom';

const ControlSideInfo = () => {

    return (
        <Stack
            className="ControlSide"
            sx={{

                minWidth: '370px',
                
overflow: 'auto',


                p: 3
            }}
            spacing={4}
        >
            <Typography variant="h6" fontSize={17}>
                Vault ID
            </Typography>
            <Typography variant="subtitle1" fontSize={15} sx={{ marginTop: '0px !Important' }}>
                672
            </Typography>
            <Typography variant="h6" fontSize={17} sx={{ marginTop: '10px !Important' }}>
                Holdings
            </Typography>
            <Typography variant="subtitle1" fontSize={15} sx={{ marginTop: '0px !Important' }}>
                393
            </Typography>

            <Stack className="LinkInfoControlSideLayout" sx={{marginTop: '15px !important'}}>
                <Typography variant="h6" fontSize={17}>
                    Links
                </Typography>
                <Stack className="LinkInfoControlSideContent">
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center'>
                        <img src="https://nftx.io/images/x-logo.svg" alt="" />

                        <Typography variant="subtitle1" fontSize={15} sx={{marginLeft: '8px', marginRight: '5px'}}>
                            NFTX Pool
                        </Typography>
                        <i className="fa fa-external-link" aria-hidden="true"></i>

                    </Stack>
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center'>
<img src="https://nftx.io/images/sushi.png" alt="" />
<Typography variant='subtitle1' fontSize={15}sx={{marginLeft: '8px', marginRight: '5px'}} >
Sushi Pool
</Typography>
<i className="fa fa-external-link" aria-hidden="true"></i>

</Stack>
<Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center' >
<img src="https://nftx.io/images/dune.png" alt=""  />
<Typography variant='subtitle1' fontSize={15} sx={{marginLeft: '8px', marginRight: '5px'}}>
    Dune Analytics
</Typography>
<i className="fa fa-external-link" aria-hidden="true"></i>

</Stack>
                </Stack>
            </Stack>


            <Stack className="ContractInfoControlSideLayout" sx={{marginTop: '18px !important'}}>
                <Typography variant="h6" fontSize={17}>
                    Contracts
                </Typography>
                <Stack className="ContractInfoControlSideContent">
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center' sx={{py: '3px'}}>
                        <img src="https://nftx.io/images/etherscan-logo-circle.webp" alt="" />

                        <Typography variant="subtitle1" fontSize={16} sx={{marginLeft: '8px', marginRight: '3px'}}>
                            <b style={{marginRight: '5px'}}>NFT:</b> 0xaf...5b61 
                        </Typography>
                        <i className="fa fa-clone" aria-hidden="true"></i>
                    </Stack>
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center'  sx={{py: '3px'}}>
                        <img src="https://nftx.io/images/etherscan-logo-circle.webp" alt="" />

                        <Typography variant="subtitle1" fontSize={16} sx={{marginLeft: '8px',  marginRight: '3px'}}>
                            <b style={{marginRight: '5px'}}>CYPH:
</b> 0x67…99fe
                        </Typography>
                        <i className="fa fa-clone" aria-hidden="true"></i>

                    </Stack>
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center'  sx={{py: '3px'}}>
                        <img src="https://nftx.io/images/etherscan-logo-circle.webp" alt="" />

                        <Typography variant="subtitle1" fontSize={16} sx={{marginLeft: '8px',  marginRight: '3px'}}>
                            <b style={{marginRight: '5px'}}>XCYPH:</b>0xf...2a1d
 
                        </Typography>
                        <i className="fa fa-clone" aria-hidden="true"></i>

                    </Stack>
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center'  sx={{py: '3px'}}>
                        <img src="https://nftx.io/images/etherscan-logo-circle.webp" alt="" />

                        <Typography variant="subtitle1" fontSize={16} sx={{marginLeft: '8px',  marginRight: '3px'}}>
                            <b style={{marginRight: '5px'}}>CYPHWETH:</b> 0xf1...42b1
                        </Typography>
                        <i className="fa fa-clone" aria-hidden="true"></i>

                    </Stack>
                    <Stack className="logoInfoLink" direction="row" justifyContent='flex-start' alignItems='center'>
                        <img src="https://nftx.io/images/etherscan-logo-circle.webp" alt="" />

                        <Typography variant="subtitle1" fontSize={16} sx={{marginLeft: '8px', marginRight: '3px'}}>
                            <b style={{marginRight: '5px'}}>xCYPHWETH:
</b> 0x0a...7c83
                        </Typography>
                        <i className="fa fa-clone" aria-hidden="true"></i>

                    </Stack>


                </Stack>
            </Stack>




        </Stack>
    );
};

export default ControlSideInfo;
