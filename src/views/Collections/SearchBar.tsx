// ** Material UI Components ** //
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBar = () => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ zIndex: 999 }}>
            <Typography fontSize={20} fontWeight={700} lineHeight="28px" textTransform="uppercase" my={2}>
                All Collections
            </Typography>
            <TextField
                variant="standard"
                inputProps={{
                    placeholder: 'Search Vaults'
                }}
                InputProps={{
                    sx: {
                        padding: (theme) => theme.spacing(1, 1.5),
                        paddingLeft: 0,
                        '& input': {
                            background: 'none',
                            py: 0
                        }
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon
                                sx={{
                                    color: 'rgb(154 150 163)'
                                }}
                            />
                        </InputAdornment>
                    )
                }}
            />
        </Stack>
    );
};

export default SearchBar;
