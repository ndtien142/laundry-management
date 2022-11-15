import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import React from 'react';
import { useGetAllOrder } from '../../hooks/getAllOrder';
import { Order } from '../../types/OrderInterface';
import TableUILoadingSkeleton from '../loading/TableUILoadingSkeleton';
import RowTableUI from './RowTableUI';

const TableUI = () => {
    const { data, status } = useGetAllOrder()
    console.log("re-render")
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
            my='5'
            borderRadius='10'
            as='section'
            overflowY='auto'
            maxHeight='480px'
        >
            <Table variant='simple' overflow='auto' height='100px'>
                <Thead position='sticky' top={0} bgColor='#FFF' zIndex='10'>
                    <Tr>
                        <Th>Mã đơn hàng</Th>
                        <Th>Tên khách hàng</Th>
                        <Th>Trạng thái</Th>
                        <Th>Ngày nhận đơn</Th>
                        <Th>Chỉnh sửa/Xoá</Th>
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
        </TableContainer>
    );
};

export default TableUI;
