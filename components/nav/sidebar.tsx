import Link from "next/link";
import Image from "next/image";
import { useClickOutside } from "@/hooks/useClickOutside";
import { BsXCircleFill } from "react-icons/bs";

const SideBar = ({
    toggleNav = () => {},
    closeNav = () => {},
    isOpen = true
}) => {
    const [ref] = useClickOutside(() => {
        if (isOpen) closeNav();
        console.log("Is onpeninaonas")
    })
    return (
        <section>
            <div className={`fixed top-0 left-0 z-20 grid xs:items-center bg-gray-transparent w-[100vw] overflow-hidden h-[100vh] justify-end`}>
            <div ref={ref} className={`bg-white relative w-[85vw] h-full max-w-md`}>
                <div className="p-10 pb-5 flex justify-between flex-col h-full">
                    <div className="self-end" >
                        <BsXCircleFill onClick={toggleNav} className="cursor-pointer text-3xl font-bold text-blue-850"/>
                    </div>
                    <div className={`flex flex-col gap-6 items-center justify-center`}>
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
                    <div className="flex flex-col gap-16 z-20 items-center">
                    <div className="flex items-center self-center gap-6">
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default SideBar