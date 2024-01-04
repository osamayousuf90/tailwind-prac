import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import UserTable from '../../components/Tables/UserTable'
import { setOpen } from '../../redux/slices/sidebarValue'
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
    const [show, setShow] = useState(window.innerWidth < 700 ? true : false)
    const dispatch = useDispatch()
    const sidebarShowValue = useSelector((state) => state?.sidebarValue?.open)

    console.log('sidebarShowValue', sidebarShowValue)

    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth < 700 ? true : false)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex w-full fixed'>
            <Sidebar />
            <div className='relative mt-5 py-4 px-8 flex flex-col w-full overflow-auto'>
                {
                    show &&
                    <div className='w-full flex justify-end relative'>
                        <i onClick={() => dispatch(setOpen(!sidebarShowValue))} class="fa-solid text-lg text-black fa-bars"></i>
                    </div>
                }
                <UserTable />
            </div>
        </div>
    )
}

export default Dashboard