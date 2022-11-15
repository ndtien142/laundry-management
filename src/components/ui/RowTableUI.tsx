import React, { } from 'react';
import {
    Badge,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Td,
    Tr,
} from '@chakra-ui/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { useAppDispatch } from '../../redux/hooks';
import { deleteOrder } from '../../features/Order/OrderSlice';

interface Props {
    id: number | string;
    name: string;
    status: 'Completed' | 'Process' | 'Pending';
    dayOfReceive: string;
}

const RowTableUI: React.FC<Props> = ({ id, name, status, dayOfReceive }) => {
    const dispatch = useAppDispatch();
    const handleDeleteOrder = () => dispatch(deleteOrder(id));
    return (
        <>
            <Tr key={id}>
                <Td>{id}</Td>
                <Td>{name}</Td>
                <Td>
                    <Badge
                        colorScheme={
                            status === 'Completed'
                                ? 'green'
                                : status === 'Process'
                                    ? 'red'
                                    : 'gray'
                        }
                    >
                        {status}
                    </Badge>
                </Td>
                <Td>{dayOfReceive}</Td>
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
                            <MenuItem icon={<PageviewIcon />} alignItems='center'>
                                Chi tiết đơn hàng
                            </MenuItem>
                            <MenuItem icon={<EditIcon />}>Chỉnh sửa</MenuItem>
                            <MenuItem
                                icon={<DeleteOutlineIcon />}
                                onClick={handleDeleteOrder}
                            >
                                Xoá đơn hàng
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Td>
            </Tr>
        </>
    );
};

export default RowTableUI;
