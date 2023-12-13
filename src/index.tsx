import App from './App';

import {
    Root,
    MuiThemeProvider,
    ConfigProvider,
    ToastsProvider,
    ModalProvider,
    Web3ReactProvider,
    APIProvider
} from './providers';
import store from '../src/redux/store'
import {Provider} from 'react-redux'

Root.render(

    <Provider store={store}>
    <ConfigProvider>
        <MuiThemeProvider>
            <APIProvider>
                <Web3ReactProvider>
                    <ToastsProvider>
                        <ModalProvider>
                           
                            <App />
                           
                        </ModalProvider>
                    </ToastsProvider>
                </Web3ReactProvider>
            </APIProvider>
        </MuiThemeProvider>
    </ConfigProvider>
    </Provider>
);
