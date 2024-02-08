'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import SideBar from "./sidebar";
import { BsList } from "react-icons/bs";
import Image from "next/image";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const size = useWindowSize()

    useEffect(() => {
        if(size > 768) setIsOpen(false)
    }, [size])

    const toggleNav = () => {
        setIsOpen(prev => !prev)
    }

    const closeNav = () => {
        setIsOpen(false)
    }

    return (
        <>
        <section className={`pb-4 py-10 md:mt-0 md:top-0 md:pt-6 w-full z-20 xl:bg-transparent`}>
            <nav className={`flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-10`}>
                <Link href={'#'}>
                    <Image 
                        alt="logo"
                        width={160}
                        height={40}
                        src={`./svg/logo_full.svg`} 
                    /> 
                </Link>
                <div className={`hidden md:flex gap-6 items-center`}>
                    <Link href="#" className={`text-base font-semibold text-blue-850 `}>
                        Product 
                    </Link>
                    <Link href="#" className={`text-base font-semibold text-blue-850 `}>
                        Services
                    </Link>
                    <Link href="#" className={`text-base font-semibold text-blue-850 `}>
                        About
                    </Link>
                    <Link href="#" className={`text-base font-semibold text-blue-850 rounded-full border-2 border-blue-850 px-9 py-2`}>
                        Login
                    </Link>
                </div>
                <BsList onClick={toggleNav} fill={`#000`} className="md:hidden cursor-pointer text-4xl font-bold" />
            </nav>
        </section>
        {
            isOpen ? (
                <SideBar isOpen={isOpen} closeNav={closeNav} toggleNav={toggleNav} />
            ) : null
        }
        </>
    )
};

export default Nav;