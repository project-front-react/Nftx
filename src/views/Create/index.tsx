import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Header from './Header';
import Wrapper from './Wrapper';

import Card from './Card';
import Footer2 from 'components/Footer2';

const Buy = () => {
    const [connected, setConnected] = useState(false);

    return (
        <Stack flexGrow={1} sx={{ height: '100%' }}>
            {connected ? (
                <Card />
            ) : (
                <Wrapper>
                    <Header />
                    <Stack sx={{ height: '50vh' }}>
                        <Stack
                            className="CreateConnectBtn"
                            sx={{
                                my: 10,
                                mx: 'auto'
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={() => setConnected(true)}
                                sx={{
                                    fontSize: 16,
                                    lineHeight: '24px',
                                    px: 6,
                                    py: 3,
                                    color: 'white',
                                    width: 576,
                                    borderColor: 'rgb(251, 59, 112)',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    backgroundImage: 'linear-gradient(rgb(252, 98, 141), rgb(251, 59, 112))'
                                }}
                            >
                                Connect
                            </Button>
                        </Stack>
                    </Stack>
                </Wrapper>
            )}
            <Footer2 />
        </Stack>
    );
};

export default Buy;
