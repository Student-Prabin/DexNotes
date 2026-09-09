import { PlusIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../lib/axios'

const Navbar = () => {
    const [name, setName] = useState("")
    const [isOpen, setIsOpen] = useState(false) 
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                 const res = await api.get("/auth/me")
                 setName(res.data.name)
            } catch (error) {
               
            }
        } 
        fetchUser()
    }, [])
    
    const handleLogout = async () => {
        try {
            
            localStorage.removeItem("token");
            
            
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <header className='bg-base-300 border-b border-base-content/10 sticky top-0 z-50'>
            <div className='mx-auto max-w-7xl px-4 py-3'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link to='/' className='text-2xl md:text-3xl font-bold text-primary font-mono tracking-tighter'>
                        DexGoals
                    </Link>

                    <div className='hidden md:flex items-center gap-4'>
                        <Link to={'/create'} className='btn btn-primary btn-sm md:btn-md'>
                            <PlusIcon className='size-5'/>
                            <span>New Goal</span>
                        </Link>

                        <button 
                            onClick={handleLogout} 
                            className='btn btn-outline btn-sm md:btn-md gap-2'
                        >
                            <span>{name || "Account"}</span>
                            <LogOutIcon className='size-5'/>
                        </button>
                    </div>

                   
                    <div className='flex md:hidden items-center gap-2'>
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className='btn btn-ghost btn-square'
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <XIcon className='size-6' /> : <MenuIcon className='size-6' />}
                        </button>
                    </div>
                </div>

        
                {isOpen && (
                    <div className='md:hidden flex flex-col gap-3 mt-3 pt-3 border-t border-base-content/10 animate-fadeIn'>
                        <Link 
                            to={'/create'} 
                            className='btn btn-primary w-full justify-start'
                            onClick={() => setIsOpen(false)}
                        >
                            <PlusIcon className='size-5'/>
                            <span>New Goal</span>
                        </Link>

                        <button 
                            onClick={() => {
                                setIsOpen(false);
                                handleLogout();
                            }} 
                            className='btn btn-outline w-full justify-between'
                        >
                            <span className="truncate">Logout ({name || "User"})</span>
                            <LogOutIcon className='size-5'/>
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar