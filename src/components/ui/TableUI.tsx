import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import React from 'react';
import { useGetAllOrder } from '../../features/Order/hooks/useGetAllOrder';
import { Order } from '../../types/OrderInterface';
import TableUILoadingSkeleton from '../loading/TableUILoadingSkeleton';
import RowTableUI from './RowTableUI';

const TableUI = () => {
    const { data, status } = useGetAllOrder()
    const transData: Order[] = [];
    if (status === 'loading') return <TableUILoadingSkeleton />;
    if (status === 'success') {
        let key: number | string;
        for (key in data) {
            transData.push({ ...data[key], id: key });
        }
    }
    return (
        <TableContainer
            bgColor='#FFF'
            borderRadius='10'
            as='section'
            overflowY="auto"
            overflowX="auto"
            width="100%"
            maxWidth={{ base: "315px", md: "640px", lg: "none" }}
            height="400px"
        >
            <Table variant='simple'>
                <Thead position='sticky' top={0} bgColor='#FFF' zIndex='10' >
                    <Tr>
                        <Th fontSize="sm" fontWeight="600">Mã đơn hàng</Th>
                        <Th fontSize="sm" fontWeight="600">Tên khách hàng</Th>
                        <Th fontSize="sm" fontWeight="600">Trạng thái</Th>
                        <Th fontSize="sm" fontWeight="600">Ngày nhận đơn</Th>
                        <Th fontSize="sm" fontWeight="600">Chỉnh sửa/Xoá</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {transData.map((order) => {
                        return (
                            <RowTableUI
                                key={order.id}
                                name={order.name}
                                dayOfReceive={order.dayOfReceive}
                                status={order.status}
                                id={order.id}
                            />
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer >
    );
};

export default TableUI;
