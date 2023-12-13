import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Icon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="none"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
        </SvgIcon>
    );
};

export default Icon;
