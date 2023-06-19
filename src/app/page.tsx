import Image from 'next/image';
import Logo from '../assets/blaze_square.png';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.main}>
            <Image className="md:pt-10 pt-4 mx-auto block mb-10" src={Logo} alt="Logo" />

            <h1 
                className="text-3xl md:text-5xl lg:text-7xl text-center px-3" 
                style={{ lineHeight: "1.7ch" }}>
                Welcome to&nbsp;
                <br className="hidden md:block" />
                <span className="text-blue-600">the world</span> of&nbsp;
                <br className="hidden md:block" />
                <span className="text-blue-600">Blaze</span>.
            </h1>
        </div>
    );
};
