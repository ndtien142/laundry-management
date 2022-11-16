import { Text, Box, Divider, Center, Badge } from '@chakra-ui/react';
import React from 'react';
import { Order } from '../../../types/OrderInterface';

const OrderInfo: React.FC<Order> = ({
    id,
    name,
    dayOfAppointment,
    dayOfReceive,
    status,
}) => {
    return (
        <Box p='3'>
            <Text textAlign='center' as='h3' fontSize='26px'>
                Thông tin nhận đơn
            </Text>
            <Divider />
            <Text mb='5'>Thông tin khách hàng</Text>
            <Center justifyContent='space-between' mb='5'>
                <Text as='span'>Tên khách hàng: </Text>
                <Text as='span'>{name}</Text>
            </Center>
            <Center justifyContent='space-between' mb='5'>
                <Text variant='span'>Ngày nhận hàng: </Text>
                <Text variant='span'>{dayOfReceive}</Text>
            </Center>
            <Center justifyContent='space-between' mb='5'>
                <Text variant='span'>Ngày hẹn trả: </Text>
                <Text variant='span'>{dayOfAppointment}</Text>
            </Center>
            <Center justifyContent='space-between' mb='5'>
                <Text variant='span'>Trạng thái đơn hàng:</Text>
                <Text variant='span'>
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
                </Text>
            </Center>
            <Divider />
        </Box>
    );
};

export default OrderInfo;
