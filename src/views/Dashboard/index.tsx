import Stack from '@mui/material/Stack';
import Footer from 'components/Footer';
import Content from './Content';
import LeftSide from './LeftSide';
import './dashboard.css';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Footer2 from 'components/Footer2';

const Dashboard = () => {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)

    return (
        <Stack className="MainConent" sx={{ height: '100%' }}>
            <Stack direction="row" className="innerMain">
                <LeftSide />
                <Stack
                    flexGrow={1}
                    className={light_mode?  "rightContentLight" : 'rightContent'}
                    sx={{
                    
                        height: '100%',
                        overflow: 'auto'
                    }}
                >
                    <Content />
                <Footer2 />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Dashboard;
