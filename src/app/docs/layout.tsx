"use client";

import { PropsWithChildren } from "react";
import styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={`px-2 py-3 md:py-5 md:px-[15.5%] min-h-[70vh] ${styles.mdxMain}`}>
            {children}
        </div>
    );
}
