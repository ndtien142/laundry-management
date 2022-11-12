import React from 'react';
import { Text, Flex, Box, Select } from '@chakra-ui/react';

const HeaderTable = () => {
    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            width='100%'
        >
            <Box>
                <Text as='h5' fontSize='20px'>
                    Chi tiết đơn hàng
                </Text>
            </Box>
            <Flex>
                <Select placeholder='Sắp xếp theo'>
                    <option value='option1'>Mã đơn hàng</option>
                    <option value='option2'>Ngày nhận hàng</option>
                    <option value='option3'>Trạng thái</option>
                </Select>
            </Flex>
        </Flex>
    );
};

export default HeaderTable;
