import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import { FC } from 'react';
import Logo from '../assets/blaze_square.png';
import styles from './Home.module.css';

const Top: FC = () => {
    return (
        <div className={styles.main}>
            <Image className="md:pt-10 pt-4 mx-auto block mb-10" src={Logo} alt="Logo" />

            <h1 
                className="text-3xl md:text-5xl lg:text-7xl text-center px-3 font-light" 
                style={{ lineHeight: "1.7ch" }}>
                Welcome to&nbsp;
                <span className="text-blue-600">the world</span> of&nbsp;
                <br className="hidden md:block" />
                <span className="text-blue-600">Blaze</span>.
            </h1>

            <h2 className='text-center mt-5 mb-10 md:mb-[80px] font-light'>Yet another general purpose programming language,<br className="hidden md:block" /> that's <span className='text-blue-600'>BlazeScript</span>.</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[40vw] mx-auto px-2 md:px-0">
                <CustomButton className="px-5 block" variant="outlined">
                    <span className='text-center block'>Download</span>
                    <small className='text-center block text-sm'>v1.0.0-beta1</small>
                </CustomButton>
                <CustomButton className="px-5 mt-3 md:mt-0 md:ml-3 block" variant="outlined">
                    <span className='text-center block'>Documentation</span>
                    <small className='text-center block text-sm'>Updated 1 day ago</small>
                </CustomButton>
            </div>
        </div>
    );
};

export default Top;