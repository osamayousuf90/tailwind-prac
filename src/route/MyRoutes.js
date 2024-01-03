import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import AdminPrivate from './adminPrivateRoute';

const MyRoutes = () => {
    const token = window?.localStorage?.getItem("token") ? true : false

    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        {token ? <Route path="/dashboard" element={<Dashboard />}></Route> : <Route path="/login" element={<Login />}></Route>}
                        <Route element={<AdminPrivate token={token} />}>
                            <Route path="/dashboard" element={<Dashboard />}></Route>
                        </Route>
                        <Route path="*" element={token ? (<Navigate to="/dashboard" replace />) : (<Navigate to="/login" replace />)}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default MyRoutes