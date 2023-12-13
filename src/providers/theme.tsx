import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { RootState } from '../redux/store'
import '../assets/css/index.css';
import useConfig from 'hooks/useConfig';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { dark, light } from 'config/constants/theme';
import React from 'react';

type MuiThemeProviderProps = {
    children: React.ReactNode;
};

// ** Declare Theme Provider
const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
    // const dark_mode = useSelector((state:<RootState, boolean> (state.SaveState.payload)
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    
    console.log(light_mode, 'dark modeeeeeeeeeeeeeeeeeeeeeee')
    const { isDark } = useConfig();
    const theme = createTheme( light_mode ? light : dark);
    // console.log(state)
    console.log(isDark, "hiiiiiiiiiiiiii")
   
//    const [themeColor,setThemeColor]=React.useState('');
//   React.useEffect(()=>{
     
//     const themeID = document.getElementById('theme');
//     const themeChange = themeID.getAttribute('data-theme');
//      setThemeColor(themeChange)
//     console.log(themeChange,"THEME",themeColor);
//   },[themeColor])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
