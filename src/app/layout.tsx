"use client";

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BlazeScript',
    description: 'A general purpose interpreted scripting language',
};

const theme = createTheme({
    palette: {
        mode: "dark"
    }
});

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body style={inter.style}>
                <ThemeProvider theme={theme}>
                    <header>
                        <Navbar />
                    </header>

                    <main>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
