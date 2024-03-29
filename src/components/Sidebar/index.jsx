import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/slices/sidebarValue';

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const open = useSelector((state) => state?.sidebarValue?.open)

    const list = [
        {
            name: "Dashboard",
            url: "/dashboard",
        },
        {
            name: "Users",
            url: "/users",
        },
    ];

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    };

    useEffect(() => {
        const handleResize = () => {
            dispatch(setOpen(window.innerWidth > 700));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`w-[320px] z-[999] min-h-screen px-2 py-4 bg-black transition-all ease-in-out duration-300 transform ${open ? 'translate-x-0 absolute' : '-translate-x-full relative '}`}>
            <h1 className='text-[15px] mt-5 text-center text-white font-bold md:text-[26px]'>Welcome Admin</h1>
            <div className='pl-[50px] mt-2 flex flex-col items-start justify-center w-full'>
                <ul className='mt-5'>
                    {list?.map((item) => {
                        return (
                            <li key={item.url} onClick={() => navigate(item.url)} className='text-white py-1 my-2 cursor-pointer hover:text-blue-400 transition-all ease-out'>{item.name}</li>
                        );
                    })}
                    <li onClick={handleLogout} className='text-white py-1 my-2 cursor-pointer hover:text-blue-400 transition-all ease-out'>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;