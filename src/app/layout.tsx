"use client";

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import './globals.css';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

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

                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
