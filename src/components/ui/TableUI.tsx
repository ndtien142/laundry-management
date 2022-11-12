import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Badge,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
} from '@chakra-ui/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

interface Customer {
    id: number | string;
    name: string;
    status: 'Completed' | 'Pending' | 'Process';
    dayOfReceive: string;
}

const DUMMY_CUSTOMER: Customer[] = [
    { id: 123, name: 'Tến', status: 'Completed', dayOfReceive: '12-11-2022' },
    { id: 124, name: 'Nhân', status: 'Pending', dayOfReceive: '13-11-2022' },
    { id: 125, name: 'Huế', status: 'Process', dayOfReceive: '15-11-2022' },
    { id: 126, name: 'Tín', status: 'Process', dayOfReceive: '18-11-2022' },
    { id: 127, name: 'Quân', status: 'Completed', dayOfReceive: '19-11-2022' },
    { id: 128, name: 'Lương', status: 'Pending', dayOfReceive: '20-11-2022' },
    { id: 129, name: 'Toản', status: 'Completed', dayOfReceive: '20-11-2022' },
    { id: 130, name: 'Thảo', status: 'Pending', dayOfReceive: '20-11-2022' },
];

const TableUI = () => {
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
                <Thead position='sticky' top={0} bgColor="#FFF" zIndex="10">
                    <Tr>
                        <Th>Mã đơn hàng</Th>
                        <Th>Tên khách hàng</Th>
                        <Th>Trạng thái</Th>
                        <Th>Ngày nhận đơn</Th>
                        <Th>Chỉnh sửa/Xoá</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {DUMMY_CUSTOMER.map((customer) => {
                        return (
                            <Tr key={customer.id}>
                                <Td>{customer.id}</Td>
                                <Td>{customer.name}</Td>
                                <Td>
                                    <Badge
                                        colorScheme={
                                            customer.status === 'Completed'
                                                ? 'green'
                                                : customer.status === 'Process'
                                                    ? 'red'
                                                    : 'gray'
                                        }
                                    >
                                        {customer.status}
                                    </Badge>
                                </Td>
                                <Td>{customer.dayOfReceive}</Td>
                                <Td>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<MoreHorizIcon />}
                                            border='0'
                                            bgColor='#fff'
                                            borderRadius='50%'
                                        />
                                        <MenuList>
                                            <MenuItem icon={<EditIcon />}>Chỉnh sửa</MenuItem>
                                            <MenuItem icon={<DeleteOutlineIcon />}>
                                                Xoá đơn hàng
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TableUI;
