"use client";

import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import LogoOriginal from '../assets/blaze_original.png';
import styles from './Navbar.module.css';

export const navbarLinks = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Documentation",
        path: '/docs'
    },
    {
        name: "Downloads",
        path: '/downloads'
    }
];

const Navbar: FC = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="p-2 py-0 flex items-center relative">
            {open && <div className={styles.overlay + " md:hidden"} onClick={() => setOpen(false)}></div>}

            <Button onClick={() => setOpen(true)} style={{ minWidth: 0 }} className="md:hidden mr-3">
                <MdMenu size={25} />
            </Button>

            <Link href="/" className='md:mr-10'>
                <Image src={LogoOriginal} className='h-[35px] md:h-[40px] w-[auto]' alt="BlazeScript" />
            </Link>

            <ul className={styles.ul + ` ${open ? styles.activated : ''}`}>
                <li className='flex justify-end mb-3 md:hidden'>
                    <Button onClick={() => setOpen(false)} style={{ minWidth: 0 }} className="m-2 ml-auto">
                        <MdClose size={30} />
                    </Button>
                </li>

                {navbarLinks.map(link => (
                    <li key={link.path} className={`mx-1 px-3 py-4 relative ${pathname === link.path ? styles.active : ""}`}><Link className="no-underline text-[#ccc] hover:text-[#fff]" href={link.path}>{link.name}</Link></li>
                ))}
            </ul>

            <div className='absolute top-1 right-2 hidden md:block'>
                <Button style={{ textTransform: 'none', padding: "7px 15px" }} className='mr-3' variant='outlined'>Discord</Button>
                <Button style={{ textTransform: 'none', padding: "7px 15px" }} variant='outlined'>GitHub</Button>
            </div>
        </nav>
    );
};

export default Navbar;