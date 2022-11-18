import React from 'react'
import { Route, Routes } from "react-router-dom"
import CreateNewOrder from './CreateNewOrder';
import NotFound from '../Error/NotFound';
import DisplayAllOrder from './DisplayAllOrder';
import CreateDetailOrder from './CreateDetailOrder';
import OrderDetail from './OrderDetail';
import SidebarWithHeader from '../../components/sidebar/SideBar';

const Order = () => {
    return (
        <SidebarWithHeader>
            <Routes>
                <Route element={<DisplayAllOrder />} path="/" />
                <Route element={<CreateNewOrder />} path="create-order" />
                <Route element={<CreateDetailOrder />} path="create-detail-order" />
                <Route element={<OrderDetail />} path="/:orderId" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </SidebarWithHeader>
    )
}

export default Order