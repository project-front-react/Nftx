import { lazy } from 'react';

// project imports
import Layout from 'layouts';
import Loadable from 'components/Loadable';
import Activity from 'pages/Activity';
import RewardDashboard from 'views/RewardDashboard/RewardDashboard';
import RewardPool from 'views/RewardPool/RewardPool';
import SellVault from 'views/Vault/SellVault/SellVault';
import StakeVault from 'views/Vault/Stake/StakeVault';
import MintVAULT from 'views/Vault/MintVault/MintVAULT';
import SwapVAULT from 'views/Vault/SwapVault/SwapVAULT';
import RedeemVault from 'views/Vault/RedeemVault/RedeemVault';
import InfoVAULT from 'views/Vault/InfoVault/InfoVAULT';

const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const Buy = Loadable(lazy(() => import('pages/Buy')));
const Sell = Loadable(lazy(() => import('pages/Sell')));
const Swap = Loadable(lazy(() => import('pages/Swap')));
const Create = Loadable(lazy(() => import('pages/Create')));
const Coins = Loadable(lazy(() => import('pages/Coins')));
const Vault = Loadable(lazy(() => import('pages/Vault')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/buy',
            element: <Buy />
        },
        {
            path: '/sell',
            element: <Sell />
        },
        {
            path: '/swap',
            element: <Swap />
        },
        {
            path: '/create',
            element: <Create />
        },
        {
            path: '/coins',
            element: <Coins />
        },
        {
            path: '/vault/:addr/:type',
            element: <Vault />
        },
        {
            path: '/activity',
            element: <Activity />
        },
        {
            path: '/rewards/dashboard',
            element: <RewardDashboard />
        },
        {
            path: '/rewards',
            element: <RewardDashboard />
        },
        {
            path: '/rewards/pool',
            element: <RewardPool />
        },
        {
            path: '/vault/:addr/:type/sell',
            element: <SellVault />
        },
        {
            path: '/vault/:addr/:type/stake',
            element: <StakeVault />
        },
        {
            path: '/vault/:addr/:type/mint',
            element: <MintVAULT />
        },
        {
            path: '/vault/:addr/:type/swap',
            element: <SwapVAULT />
        },
        {
            path: '/vault/:addr/:type/reedem',
            element: <RedeemVault />
        }
        ,
        {
            path: '/vault/:addr/:type/info',
            element: <InfoVAULT />
        },
        
    ]
};

export default MainRoutes;
