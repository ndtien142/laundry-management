import React from 'react'
import Layout from '../../components/layout/Layout'

import { Route, Routes } from "react-router-dom"
import CreateNewOrder from './CreateNewOrder';
import NotFound from '../Error/NotFound';
import DisplayAllOrder from './DisplayAllOrder';

const Order = () => {
    return (
        <Layout>
            <>
                <Routes>
                    <Route element={<DisplayAllOrder />} path="/" />
                    <Route element={<CreateNewOrder />} path="create-order" />
                    <Route element={<NotFound />} path="*" />
                </Routes>
            </>
        </Layout>
    )
}

export default Order