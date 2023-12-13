import BigNumber from 'bignumber.js';
import useLocalStorage from 'hooks/useLocalStorage';
import { ConfigContext, initialState } from 'contexts/config';

type ConfigProviderProps = {
    children: React.ReactNode;
};

BigNumber.config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80
});

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
    const origin = window?.location.origin ?? 'nftx-config';
    const [config, setConfig] = useLocalStorage(origin, {
        ...initialState
    });

    const onChangeSideBar = () => {
        setConfig((prevState) => ({
            ...prevState,
            isOpenSideBar: !prevState.isOpenSideBar
        }));
    };
    const onChangeThemeMode = () => {
        setConfig((prevState) => ({
            ...prevState,
            isDark: !prevState.isDark
        }));
    };

    return (
        <ConfigContext.Provider value={{ ...config, onChangeThemeMode, onChangeSideBar }}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;
