import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { Center } from "@chakra-ui/react"
import Widget from '../../components/ui/Widget';
import HeaderTable from '../../components/ui/HeaderTable';
import TableUI from '../../components/ui/TableUI';
import { getAllOrder } from '../../api/OrderApi';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../../redux/hooks';
import { replaceAllOrder } from '../Order/OrderSlice';
import TableUILoadingSkeleton from '../../components/loading/TableUILoadingSkeleton';


const Home = () => {
    const { data, isSuccess } = useQuery(["order"], getAllOrder)
    const dispatch = useAppDispatch()
    useEffect(() => {
        isSuccess && dispatch(replaceAllOrder(data))
    }, [data, isSuccess, dispatch])
    return (
        <Layout>
            <>
                <Center as="section" justifyContent="space-between" gap="2" mb="4">
                    <Widget path='./image/invoice-svgrepo-com.svg' bgc="#441bb8 " title="Tổng đơn nhận" quantity={"17"} />
                    <Widget path='./image/iconmonstr-coin-3.svg' bgc="#51c0f1" title="Tổng doanh thu" quantity={`$250`} />
                    <Widget path='./image/package-svgrepo-com.svg' bgc="#c752f2" title="Tổng đơn tồn kho" quantity={"30"} />
                </Center>
                <Center as="section">
                    <HeaderTable />
                </Center>
                <TableUI />
            </>
        </Layout>
    );
};

export default Home;
