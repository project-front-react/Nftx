export type EnvProps = {
    development: any;
    production: any;
    test: any;
};

export type ConfigProps = {
    isDark?: boolean;
    isOpenSideBar?: boolean;
    env: EnvProps;
};
