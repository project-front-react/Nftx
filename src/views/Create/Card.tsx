import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import './Create.css';
const RedditTextField = styled((props: TextFieldProps) => (
    <TextField InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
    '& .MuiFormLabel-root': {
        color: 'white',
        left: 4,
        opacity: 0.5,
        '&.Mui-focused': {
            opacity: 0.7,
            top: 4
        }
    },
    '& .MuiFilledInput-root': {
        fontSize: 18,
        border: '1px solid rgb(75 85 99)',
        overflow: 'hidden',
        borderRadius: 2,
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#0c0d0d'
        },
        '& input': {
            backgroundColor: '#0c0d0d',
            padding: '32px 16px 16px 16px'
        }
    }
}));

const Card = () => {
    const [addr, setAddr] = useState('');
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [step, setStep] = useState(1);

    return (
        <Stack p={6}>
            <Box sx={{ my: 5, mx: 'auto', width: 512 }} className="create_input">
                {step === 1 ? (
                    <Stack
                        sx={{
                            p: 3,
                            borderRadius: '6px',
                            // background: 'rgb(25 26 27)',
                            border: '1px solid rgb(36 37 38)'
                        }}
                        spacing={2}
                    >
                        <Typography fontSize={24} fontWeight={700} textAlign="center">
                            Create NFTX Vault
                        </Typography>
                        <Stack
                            sx={{
                                p: 2,
                                borderRadius: '6px',
                                background: 'rgb(19 78 74)',
                                border: '1px solid rgb(20 184 166)'
                            }}
                        >
                            <Typography fontSize={14}>
                                <b>Note: </b>
                                Fees and eligibilities can be set after vault creation, but the name and symbol cannot.
                                Please consult our&nbsp;
                                <Link to="#" style={{ color: 'inherit' }}>
                                    create vault tutorial
                                </Link>
                                <Typography fontSize={14}>
                                    for details, and if you have any questions or concerns, please reach out to us in
                                    &nbsp;
                                    <Link to="#" style={{ color: 'inherit' }}>
                                        Discord
                                    </Link>
                                    .
                                </Typography>
                            </Typography>
                        </Stack>
                        <Stack>
                            <RedditTextField
                                label="NFT Assets Address"
                                id="reddit-input"
                                variant="filled"
                                style={{ marginTop: 11 }}
                                onChange={(e) => setAddr(e.target.value)}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        top: addr ? 4 : 18
                                    }
                                }}
                            />
                        </Stack>
                        <Stack spacing={0.5}>
                            <RedditTextField
                                label="Vault Name"
                                id="reddit-input"
                                variant="filled"
                                style={{ marginTop: 11 }}
                                onChange={(e) => setName(e.target.value)}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        top: name ? 4 : 18
                                    }
                                }}
                            />
                            <Typography fontSize={12} color="rgb(156 163 175)">
                                Use the full asset name, e.g. CryptoPunks, and do not include the word 'vault'.
                            </Typography>
                        </Stack>
                        <Stack spacing={0.5}>
                            <RedditTextField
                                label="Vault Symbol"
                                id="reddit-input"
                                variant="filled"
                                style={{ marginTop: 11 }}
                                onChange={(e) => setSymbol(e.target.value)}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        top: symbol ? 4 : 18
                                    }
                                }}
                            />
                            <Typography fontSize={12} color="rgb(156 163 175)">
                                We recommend vault symbols be singular, e.g. PUNK, and max 6 characters.
                            </Typography>
                        </Stack>
                        <Stack>
                            <Button
                                variant="contained"
                                onClick={() => setStep(2)}
                                sx={{
                                    mt: 2,
                                    fontSize: 16,
                                    lineHeight: '24px',
                                    px: 6,
                                    py: 3,
                                    color: 'inherit',
                                    width: '100%',
                                    borderColor: 'rgb(251, 59, 112)',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                                }}
                            >
                                Review
                            </Button>
                        </Stack>
                    </Stack>
                ) : (
                    <Stack
                        sx={{
                            p: 3,
                            borderRadius: '6px',
                            background: 'rgb(25 26 27)',
                            border: '1px solid rgb(36 37 38)'
                        }}
                        spacing={4}
                    >
                        <Typography fontSize={24} fontWeight={700} textAlign="center">
                            Review your Vault
                        </Typography>
                        <Stack spacing={2}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography fontSize={14} color="rgb(209 213 219)">
                                    ASSET
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <img
                                        src="https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/658/256x256.png"
                                        alt="icon"
                                        width="32"
                                        height="32"
                                    />
                                    <Stack alignItems="end">
                                        <Typography fontSize={14} fontWeight={700} color="inherit" fontFamily="DM Mono">
                                            PARALLEL
                                        </Typography>
                                        <Typography fontSize={14} color="rgb(156 163 175)" fontFamily="DM Mono">
                                            0x76…8e77
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography fontSize={14} color="rgb(209 213 219)">
                                    TOKEN STANDARD
                                </Typography>
                                <Typography
                                    fontSize={14}
                                    fontWeight={700}
                                    color="rgb(209 213 219)"
                                    fontFamily="DM Mono"
                                >
                                    ERC1155
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography fontSize={14} color="rgb(209 213 219)">
                                    VAULT NAME
                                </Typography>
                                <Typography
                                    fontSize={14}
                                    fontWeight={700}
                                    color="rgb(209 213 219)"
                                    fontFamily="DM Mono"
                                >
                                    {name}
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography fontSize={14} color="rgb(209 213 219)">
                                    SYMBOL
                                </Typography>
                                <Typography
                                    fontSize={14}
                                    fontWeight={700}
                                    color="rgb(209 213 219)"
                                    fontFamily="DM Mono"
                                    textTransform="uppercase"
                                >
                                    {symbol}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            sx={{
                                p: 2,
                                borderRadius: '6px',
                                background: 'rgb(102 44 26)',
                                border: '1px solid rgb(255 109 65)'
                            }}
                        >
                            <Typography fontSize={14}>
                                Please be aware that bootstrapping a successful vault requires up to 3 transactions —
                                one to create the vault, one to add inventory (NFTs) and liquidity (ETH), and one to
                                publish. For more information please visit &nbsp;
                                <Link to="#" style={{ color: 'inherit' }}>
                                    our discord
                                </Link>
                                .
                            </Typography>
                        </Stack>
                        <Stack spacing={2} alignItems="center">
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: 16,
                                    lineHeight: '24px',
                                    px: 6,
                                    py: 3,
                                    color: 'inherit',
                                    width: '100%',
                                    borderColor: 'rgb(251, 59, 112)',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                                }}
                            >
                                Create Vault
                            </Button>
                            <Button
                                variant="text"
                                onClick={() => setStep(1)}
                                disableRipple
                                sx={{
                                    fontSize: 16,
                                    lineHeight: '24px',
                                    color: 'inherit',
                                    width: 'fit-content',
                                    '&:hover': {
                                        background: 'transparent'
                                    }
                                }}
                            >
                                Edit
                            </Button>
                        </Stack>
                    </Stack>
                )}
            </Box>
        </Stack>
    );
};

export default Card;
