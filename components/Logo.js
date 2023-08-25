"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    
    return <Link href="/">
        <Image height={100} width={200} src="/icons/CatwikiLogo.svg" alt="logo"/>
    </Link>
}
