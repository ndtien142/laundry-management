import React from 'react';
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
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { useDeleteOrder } from '../../features/Order/hooks/useDeleteOrder';

interface Props {
    id: number | string;
    name: string;
    status: 'Completed' | 'Process' | 'Pending';
    dayOfReceive: string;
}

const RowTableUI: React.FC<Props> = ({ id, name, status, dayOfReceive }) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const deleteOrderFromServer = useDeleteOrder();
    const handleDeleteOrder = () => {
        dispatch(deleteOrder(id));
        deleteOrderFromServer(Number(id))
    };
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
                        <MenuList zIndex="100">
                            <MenuItem
                                icon={<PageviewIcon />}
                                alignItems='center'
                                as={RouteLink}
                                to={
                                    location.pathname.includes('order') ? `${id}` : `order/${id}`
                                }
                            >
                                Chi ti???t ????n h??ng
                            </MenuItem>
                            <MenuItem icon={<EditIcon />}>Ch???nh s???a</MenuItem>
                            <MenuItem
                                icon={<DeleteOutlineIcon />}
                                onClick={handleDeleteOrder}
                            >
                                Xo?? ????n h??ng
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Td>
            </Tr>
        </>
    );
};

export default RowTableUI;
