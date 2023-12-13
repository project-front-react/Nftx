import React from 'react';
import './activity.css';
import { Box } from '@mui/material';
import { features } from 'process';
import { Link } from 'react-router-dom';
import Footer2 from 'components/Footer2';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
// import Footer from 'components/Footer';
import nftx from '../../assets/img/logo_mini_nftx.avif'


const ListData = [
    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/c-oJCeJ80CkjrgDHcGsP5F77vyfQAZoLAHRgLAPx1LwaOp8whJw_MA5YWuDUnLzkDHFNacUYR-2ymvvnlMo0fsxuzgnLV9rD6mK4WbU',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/212/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/jeXl3wXGW2GO0p6mZfxUS0Em7CAxIfn--ejJHDk8vmFFFl6Dv0PG-k14i0EluEqFfGoZy2d0JNYPAvgTJjP7nkGpNoAbbhC7lQzG69g',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/c-oJCeJ80CkjrgDHcGsP5F77vyfQAZoLAHRgLAPx1LwaOp8whJw_MA5YWuDUnLzkDHFNacUYR-2ymvvnlMo0fsxuzgnLV9rD6mK4WbU',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/212/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/IZyBQNJbXVoen1pzpaBTNkBUxq9WfcYQXoGMhaNRk7_LJcyCpzdRMKRAuGht7l1r_4nEwD5B5RlluVrevY3I9dcycEUTdUq2qFbHxA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#434',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/jeXl3wXGW2GO0p6mZfxUS0Em7CAxIfn--ejJHDk8vmFFFl6Dv0PG-k14i0EluEqFfGoZy2d0JNYPAvgTJjP7nkGpNoAbbhC7lQzG69g',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),
        tokeId: '#1007',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/c-oJCeJ80CkjrgDHcGsP5F77vyfQAZoLAHRgLAPx1LwaOp8whJw_MA5YWuDUnLzkDHFNacUYR-2ymvvnlMo0fsxuzgnLV9rD6mK4WbU',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/212/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/IZyBQNJbXVoen1pzpaBTNkBUxq9WfcYQXoGMhaNRk7_LJcyCpzdRMKRAuGht7l1r_4nEwD5B5RlluVrevY3I9dcycEUTdUq2qFbHxA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#434',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/jeXl3wXGW2GO0p6mZfxUS0Em7CAxIfn--ejJHDk8vmFFFl6Dv0PG-k14i0EluEqFfGoZy2d0JNYPAvgTJjP7nkGpNoAbbhC7lQzG69g',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/c-oJCeJ80CkjrgDHcGsP5F77vyfQAZoLAHRgLAPx1LwaOp8whJw_MA5YWuDUnLzkDHFNacUYR-2ymvvnlMo0fsxuzgnLV9rD6mK4WbU',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/212/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),

        tokeId: '#1007',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/IZyBQNJbXVoen1pzpaBTNkBUxq9WfcYQXoGMhaNRk7_LJcyCpzdRMKRAuGht7l1r_4nEwD5B5RlluVrevY3I9dcycEUTdUq2qFbHxA',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#434',
        fee: 0.1
    },
    {
        image: 'https://lh3.googleusercontent.com/jeXl3wXGW2GO0p6mZfxUS0Em7CAxIfn--ejJHDk8vmFFFl6Dv0PG-k14i0EluEqFfGoZy2d0JNYPAvgTJjP7nkGpNoAbbhC7lQzG69g',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MINT
            </Link>
        ),
        tokeId: '#1007',
        fee: 0.1
    },

    {
        image: 'https://lh3.googleusercontent.com/yS_TFIEQnz3vb49_lhr5TXykvE4Iwoix4rE5j3l40ONejB-rfCMOyvtrN21nSDkUbJdABKF6vDhOVifJT4ujmxvwPjwYJBYqLCW6mDY',
        logo: 'https://images.nftx.io/cdn-cgi/image/anim=false,width=150,height=150,format=auto/https://raw.githubusercontent.com/NFTX-project/nftx-assets/main/vaults-v2/392/256x256.png',
        logo_name: (
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                BUY
            </Link>
        ),

        tokeId: '#1320',
        fee: 0.1
    }
];

function MainContent() {
    const light_mode = useSelector<RootState, boolean>(state=>state.changeTheme.payload)    

    return (
        <>
            <Box className={light_mode? "container light" : 'container'}>
                {ListData.map((item: any) => (
                    <Box className={light_mode? "ActivityMain light" : 'ActivityMain'} style={{ marginLeft: '1%', marginRight: '2%' }}>
                        <Box className="Main_img">
                            <img src={item.image} alt="" />
                        </Box>
                        <h5 style={{ marginTop: '5px', fontSize: '17px', fontWeight: '600' }}>Swap</h5>
                        <Link to="/">
                            <p style={{ marginTop: '-30px', fontSize: '12px', paddingTop: '6px', color: 'rgb(157,151,151)' }}>
                                12 minutes ago <i className="fa fa-external-link" aria-hidden="true"></i>
                            </p>
                        </Link>
                        <Box className="logo_img">
                            <img src={nftx} alt="" />
                            <h6>{item.logo_name}</h6>
                        </Box>
                        <Box className="activity_details">
                            <Box className="tokenfeeTit">
                                <p className="tokenId">Token ID</p>
                                <p className="milfee">MILDAY Fee</p>
                            </Box>
                            <Box className="tokenfeeDetail">
                                <p className="id">{item.tokeId}</p>
                                <p className="feeee">{item.fee}</p>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Footer2 />
            {/* <Footer/> */}
        </>
    );
}

export default MainContent;
