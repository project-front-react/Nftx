import { useState } from 'react';
import Stack from '@mui/material/Stack';
import './Vault.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoGrid } from 'react-icons/io5';
import { BsBox, BsFillGrid3X3GapFill } from 'react-icons/bs';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';


const ListJSON = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/hdocFJDOpZj0GeYsXJH6fivHjcYGbkZUee9lSk2kSnEivf7N18dvn5S6H32-nHkcD_V1GbvVxenBlxQGmzRZVChduazZ5drXZifp1Zs',
        token: '#122'
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/nABImISWUUJeWR9qA5ZbPF9hIxTU0Z2DYI7uwBlow4Kn16HMWg8ACrFUklU64dYgikeAApEHepPsROM7Ve4i1uvbwQP6MGUQeTRzpqk',
        token: '#4009'
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/1tn0yHA8PFKr89qBzPSDQbPK7ektv7j_LPl6-9442QsR3ubhZZFumjiS9Pkw7RELjDb_uGiHy9wnufpVluqKW63I2gFV1Gmy1dJx',
        token: '#4203'
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/fRezLrGuUOEpZNMVhRL14i9FbT7wyNbDMa7xfLoi0gp1OkHgouEkoM0dL3u4-V2Gmjk-RVqqpV-WU9jHpsW0vydm12cwmMYPwZAo1g',
        token: '#3002'
    },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/6RAKv-asht03P1MPtvIWU6i7aUtiyuunE64e_O2_5QWXqGwOrRo4Bhp1dT_2FPoRNZzRQCc5z0BjkYjxgN2IuFa6',
        token: '#1310'
    },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/KvxtU86ldWwLnmcyEijinD7ZSlvqQ0_3FTPpLTP5yLxQG04lv7O2FmVxxBb88V4VmiZDG2wiDGhxvN09GAXG3wA8',
        token: '#009'
    },
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/hdocFJDOpZj0GeYsXJH6fivHjcYGbkZUee9lSk2kSnEivf7N18dvn5S6H32-nHkcD_V1GbvVxenBlxQGmzRZVChduazZ5drXZifp1Zs',
        token: '#122'
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/nABImISWUUJeWR9qA5ZbPF9hIxTU0Z2DYI7uwBlow4Kn16HMWg8ACrFUklU64dYgikeAApEHepPsROM7Ve4i1uvbwQP6MGUQeTRzpqk',
        token: '#4009'
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/1tn0yHA8PFKr89qBzPSDQbPK7ektv7j_LPl6-9442QsR3ubhZZFumjiS9Pkw7RELjDb_uGiHy9wnufpVluqKW63I2gFV1Gmy1dJx',
        token: '#4203'
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/fRezLrGuUOEpZNMVhRL14i9FbT7wyNbDMa7xfLoi0gp1OkHgouEkoM0dL3u4-V2Gmjk-RVqqpV-WU9jHpsW0vydm12cwmMYPwZAo1g',
        token: '#3002'
    },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/6RAKv-asht03P1MPtvIWU6i7aUtiyuunE64e_O2_5QWXqGwOrRo4Bhp1dT_2FPoRNZzRQCc5z0BjkYjxgN2IuFa6',
        token: '#1310'
    },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/KvxtU86ldWwLnmcyEijinD7ZSlvqQ0_3FTPpLTP5yLxQG04lv7O2FmVxxBb88V4VmiZDG2wiDGhxvN09GAXG3wA8',
        token: '#009'
    },
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/hdocFJDOpZj0GeYsXJH6fivHjcYGbkZUee9lSk2kSnEivf7N18dvn5S6H32-nHkcD_V1GbvVxenBlxQGmzRZVChduazZ5drXZifp1Zs',
        token: '#122'
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/nABImISWUUJeWR9qA5ZbPF9hIxTU0Z2DYI7uwBlow4Kn16HMWg8ACrFUklU64dYgikeAApEHepPsROM7Ve4i1uvbwQP6MGUQeTRzpqk',
        token: '#4009'
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/1tn0yHA8PFKr89qBzPSDQbPK7ektv7j_LPl6-9442QsR3ubhZZFumjiS9Pkw7RELjDb_uGiHy9wnufpVluqKW63I2gFV1Gmy1dJx',
        token: '#4203'
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/fRezLrGuUOEpZNMVhRL14i9FbT7wyNbDMa7xfLoi0gp1OkHgouEkoM0dL3u4-V2Gmjk-RVqqpV-WU9jHpsW0vydm12cwmMYPwZAo1g',
        token: '#3002'
    },

];

const Lists = () => {
    const [GridActive, setGridActive] = useState(false);

    const [cardStyle, setCardStyle] = useState('sm');
    const toggleClass = () => {
        setGridActive (true)

    }
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <>
    
        <Stack
            className={light_mode? "ListVault light pos-left" : 'ListVault pos-left' }
            flexGrow={1}
            sx={{
                height: '100%',
                width: '100%',
                overflow: 'auto',
                // background: 'rgb(36 37 38)',
                p: 3,
                position:'relative',
                "&": {
                  // your root styles but with higher CSS specificity
                },
                "&.MuiListItem-root": {
                    background: 'yellow',
                  // your root styles but with even higher CSS specificity
                }
              }}
            
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography fontSize={14}>73 items</Typography>
                <Stack direction="row" spacing={0.5}>
                    <Button
                        variant={"outlined"}
                        onClick= {toggleClass}
                        sx={{
                            height: '100%',
                            fontSize: 14,
                            borderColor: cardStyle === 'md' ? 'rgb(251, 59, 112)' : 'transparent',
                            background: cardStyle === 'md' ? 'rgb(251, 59, 112, 0.1)' : 'transparent',
                            px: 1,
                            py: 0.75,
                            minWidth: 0,
                            '&:hover': {
                                background: cardStyle === 'md' ? 'rgb(251, 59, 112, 0.1)' : 'transparent',
                                borderColor: 'rgb(251, 59, 112)'
                            }
                        }}
                    >
                        <BsFillGrid3X3GapFill fontSize={20} />
                    </Button>
                    <Button
                        variant={"outlined"}
                        onClick={()=>{setGridActive(false)}}
                        sx={{
                            height: '100%',
                            fontSize: 14,
                            borderColor: cardStyle === 'md' ? 'rgb(251, 59, 112)' : 'transparent',
                            background: cardStyle === 'md' ? 'rgb(251, 59, 112, 0.1)' : 'transparent',
                            px: 1,
                            py: 0.75,
                            minWidth: 0,
                            '&:hover': {
                                background: cardStyle === 'md' ? 'rgb(251, 59, 112, 0.1)' : 'transparent',
                                borderColor: 'rgb(251, 59, 112)'
                            }
                        }}
                    >
                        <IoGrid fontSize={20}  />
                    </Button>
                </Stack>
            </Stack>
            {/* griditems */}
            <Stack direction="row"  sx={{ justifyContent: 'flex-start', gap: '1.26%',  flexWrap: 'wrap', marginTop: '10px' }} className={GridActive ?  'GRIDCSSS': null }>
                {ListJSON.map((item: any) => (
                    <Box className={light_mode? "VaultBuyBox light" : 'VaultBuyBox'}>
                        <p className="vaultTokenId">{item.token}</p>
                        <img src={item.image} alt="" className="vaultImg" />
                    </Box>
                ))}
            </Stack>
            {/* button */}
            <Stack direction="row" spacing={2}  justifyContent="center" className="buy_btn"  sx={{
                  width:'100%', my:'50px'}}>
                <Button
                    variant="contained"
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        color: 'white',
                        py: 1.25,
                        px: 2,
                        borderColor: 'rgb(251, 59, 112)',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'

                    }}
                >
                    Show more
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        fontSize: 16,
                        lineHeight: '24px',
                        color: 'black',
                        py: 1.25,
                        px: 2,
                        borderColor: 'rgb(251, 59, 112)',
                        backgroundColor: 'white'
                    }}
                >
                    Show all
                </Button>
            </Stack> 

        </Stack>
        
         </>
    );
};

export default Lists;
