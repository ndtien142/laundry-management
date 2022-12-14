import React from 'react';
import { Center } from "@chakra-ui/react"
import Widget from '../../components/ui/Widget';
import HeaderTable from '../../components/ui/HeaderTable';
import TableUI from '../../components/ui/TableUI';
import SidebarWithHeader from '../../components/sidebar/SideBar';


const Home = () => {
    return (
        <SidebarWithHeader>
            <Center as="section" justifyContent="space-between" gap="2" mb="4" flexDirection={{ base: "column", lg: "row" }}>
                <Widget path='./image/invoice-svgrepo-com.svg' bgc="#441bb8 " title="Tổng đơn nhận" quantity={"17"} />
                <Widget path='./image/iconmonstr-coin-3.svg' bgc="#51c0f1" title="Tổng doanh thu" quantity={`$250`} />
                <Widget path='./image/package-svgrepo-com.svg' bgc="#c752f2" title="Tổng đơn tồn kho" quantity={"30"} />
            </Center>
            <Center as="section" mb="5">
                <HeaderTable />
            </Center>
            <TableUI />
        </SidebarWithHeader>
    );
};

export default Home;
