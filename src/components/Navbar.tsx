import { useState } from 'react'
import logo from '../assets/1.png'
import { Menu, X } from 'lucide-react'

export type NavbarProps = {
    activeMenu: 'home' | 'about' | 'speaker' | 'schedule' | 'payment' | 'contact'
}

export default function Navbar({ activeMenu } : NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const NavItems = [
        {
            id: 'home',
            name: "Beranda",
            url: "#home",
        },
        {
            id: 'about',
            name: "Tentang",
            url: "#about",
        },
        {
            id: 'speaker',
            name: "Narasumber",
            url: "#speaker",
        },
        {
            id: 'schedule',
            name: "Jadwal",
            url: "#schedule",
        },
        {
            id: 'payment',
            name: "Biaya",
            url: "#payment",
        },
        {
            id: "contact",
            name: "Kontak",
            url: "#contact",
        },
    ]

    return (
        <>
            <nav className="fixed top-0 z-50 left-0 w-full px-5 bg-gradient-to-r from-green-800 to-purple-700">
                <div className='container mx-auto flex justify-between items-center h-16'>
                    <div>
                        <img src={logo} alt="logo senari" height={100} width={100}/>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex space-x-5 text-white font-bold'>
                            { NavItems.map((data, idx) => (
                                <li key={idx} className={`${activeMenu === data.id ? 'border-white' : 'border-transparent'} transition-all border-b-2 duration-300 pb-1 `}>
                                    <a href={data.url}>{data.name}</a>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className='text-white md:hidden block'>
                        { isOpen ? (<X />) : (<Menu />)}
                    </div>
                </div>
            </nav>
            <div className={`${isOpen ? 'h-[280px]' : 'h-0'} bg-white/95 backdrop-blur-3xl w-full fixed z-50 top-16 left-0 overflow-hidden shadow-md transition-all duration-300 ease-in`}>
                <ul className='flex flex-col space-y-2 font-semibold p-6'>
                    { NavItems.map((data, idx) => (
                        <li onClick={() => setIsOpen(false)} key={idx} className={`${activeMenu === data.id ? 'text-green-600' : 'text-gray-600'} transition-all text-xl duration-300 pb-1 `}>
                            <a href={data.url}>{data.name}</a>
                        </li>
                    )) }
                </ul>
            </div>
        </>
    )
}