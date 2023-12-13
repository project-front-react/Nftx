import { ThemeOptions } from '@mui/material';
import { border } from '@mui/system';

export const light: ThemeOptions = {
    palette: {
        mode: 'light'
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiAppBar:{
            styleOverrides: {
                root: {
                    background: 'white !important',

                }
            }
        },

        MuiToolbar:{
            styleOverrides:{
                root: {
                    color: 'black'
                }
            }
        }
,
MuiCard:{
    styleOverrides:{
        root: {
            color: 'white'
        }
    }
},
       MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '20px !important',
                    background: 'white !important',
                    color: 'black !important',
                    border: 'none !important'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    background: 'white !important',
                    color: 'black',
                    fontFamily: 'Segoe UI',
                    '&:hover': {
                        background: 'white !important'
                    },
                    '&:focus': {
                        borderColor: 'rgb(251, 59, 112)',
                        background: 'white',
                        boxShadow: '0px 0px 5px 0px rgb(251 59 112)'
                    }

                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: 'black',
                    background: 'white',
                    fontWeight: 500,
                    fontFamily: 'Segoe UI',
                    borderRadius: '6px'
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Segoe UI'
            },
            styleOverrides:{
                root:{
color: 'black !important'
                }
            }
        }
    }
};

export const dark: ThemeOptions = {
    palette: {
        mode: 'dark'
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '20px !important'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    background: 'rgb(25, 26, 27)',
                    color: 'white',
                    fontFamily: 'Segoe UI'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#ffffff',
                    fontWeight: 500,
                    fontFamily: 'Segoe UI',
                    borderRadius: '6px'
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Segoe UI'
            }
        }
    }
};
