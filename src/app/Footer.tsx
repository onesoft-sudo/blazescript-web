import Image from "next/image";
import Logo from '../assets/blaze_original.png';
import { DISCORD_URL, EMAIL_ADDR, GITHUB_REPO } from "@/utils/links";
import Link from "next/link";
import styles from './Footer.module.css';
import { FaDiscord, FaEnvelope, FaGithub, FaInbox } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image src={Logo} alt="BlazeScript" className="h-[40px] md:h-[50px] w-auto" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Resources</h2>
                            <ul className="list-none text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/docs" className="hover:underline">Docs</Link>
                                </li>

                                <li className="mb-4">
                                    <Link href="/downloads" className="hover:underline">Downloads</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Support</h2>
                            <ul className="list-none text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href={GITHUB_REPO} className="hover:underline">Github</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Legal</h2>
                            <ul className="list-none text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href={`${GITHUB_REPO}/tree/main/LICENSE`} className="hover:underline">Licensing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link href="/" className="hover:underline">OSN, Inc</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href={GITHUB_REPO} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaGithub />
                            <span className="sr-only">GitHub</span>
                        </a>

                        <a href={DISCORD_URL} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaDiscord />
                            <span className="sr-only">Discord</span>
                        </a>
                        
                        <a href={`mailto:${EMAIL_ADDR}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaEnvelope />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
