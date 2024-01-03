import React from 'react'
import Sidebar from '../../components/Sidebar'
import UserTable from '../../components/Tables/UserTable'

const Dashboard = () => {
    return (
        <div className='flex  h-full'>
            <Sidebar />
            <div className='mt-5 py-4 px-8 flex flex-col w-full '>
                <UserTable />
            </div>
        </div>
    )
}

export default Dashboard