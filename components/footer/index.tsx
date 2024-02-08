'use client'

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <nav className={`flex flex-col max-w-screen-xl text-gray-850 m-auto my-14 px-4 md:px-10 lg:pr-20 my-0 mb-0 mt-0 pb-10`}>
                <div className="flex w-full flex-col-reverse md:flex-row gap-10 justify-between py-10">
                    <div className="flex flex-col gap-8 md:gap-10 items-center md:items-start">
                        <Link href={"/"} className="cursor-pointer">
                            <Image 
                                alt="logo"
                                width={160}
                                height={40}
                                src={`./svg/logo_full.svg`} 
                            /> 
                        </Link>
                        <p className="max-w-sm text-center md:text-left">
                            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
                        </p>
                        <p className="mt-4">All rights reserved.</p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-10 md:gap-6 w-full md:max-w-screen-xs">
                    <div className="flex flex-col gap-8 md:gap-10 justify-center md:justify-start relative md:top-1">
                            <h6 className="font-bold text-black text-lg">Landings</h6>
                            <Link href="#" className="text-lg">
                                Home
                            </Link>
                            <Link href="#" className="text-lg" >
                                Products
                            </Link>
                            <Link href="#" className="text-lg">
                                Service
                            </Link>
                    </div>
                    <div className="flex flex-col gap-8 md:gap-10 justify-center md:justify-start relative md:top-1">
                            <h6 className="font-bold text-black text-lg">Company</h6>
                            <Link href="#" className="text-lg">
                                Home
                            </Link>
                            <div className="flex flex-row gap-2 items-center">
                                <Link href="#" className="text-lg" >
                                    Careers
                                </Link>
                                <Link href="#" className='rounded-full px-2.5 py-2 bg-green-200 font-bold text-xs text-blue-850'>
                                    Hiring!
                                </Link>
                            </div>
                            <Link href="#" className="text-lg">
                                Services
                            </Link>
                    </div>
                    <div className="flex flex-col gap-8 md:gap-10 justify-center md:justify-start relative md:top-1">
                            <h6 className="font-bold text-black text-lg">Resources</h6>
                            <Link href="#" className="text-lg">
                                Blog
                            </Link>
                            <Link href="#" className="text-lg">
                                Products
                            </Link>
                            <Link href="#" className="text-lg">
                                Services
                            </Link>
                    </div>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;