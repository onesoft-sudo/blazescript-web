"use client";

import { Button } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface CustomButtonProps extends PropsWithChildren {
    style?: object;
    className?: string;
    variant?: any;
}

const CustomButton: FC<CustomButtonProps> = ({ children, style = {}, ...props }) => {
    return (
        <Button style={{
            textTransform: 'none',
            fontSize: 20,
            fontWeight: 300,
            ...style
        }} {...props}>
            {children}
        </Button>
    );
};

export default CustomButton;