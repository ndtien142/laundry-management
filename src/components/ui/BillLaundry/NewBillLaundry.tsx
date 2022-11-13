import { Box, Button, Center, Divider, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import ServicesEditQuantity from './ServicesEditQuantity';

const NewBillLaundry = () => {
  return (
    <Center p='5' fontWeight='medium' minHeight="100vh" flexDirection="column" justifyContent="space-between">
      <Box>
        <Text fontSize='26px' textAlign='center'>
          Hoá đơn tạm thời
        </Text>
        <Text mb='5'>Thông tin khách hàng</Text>
        <Center justifyContent='space-between' mb='2'>
          <Text as='span'>Tên khách hàng: </Text>
          <Text as='span'>Tiến</Text>
        </Center>
        <Center justifyContent='space-between' mb='2'>
          <Text variant='span'>Ngày nhận hàng: </Text>
          <Text variant='span'>13/11/2022</Text>
        </Center>
        <Center justifyContent='space-between' mb='2'>
          <Text variant='span'>Ngày hẹn trả: </Text>
          <Text variant='span'></Text>
        </Center>
        <Divider />
        <Text mt='2' mb='5'>
          Chi tiết dịch vụ
        </Text>
        <Box>
          <ServicesEditQuantity />
          <ServicesEditQuantity />
        </Box>
      </Box>
      <Box width="100%">
        <Divider />
        <Textarea placeholder='Ghi chú ở đây' width="100%" />
        <Button colorScheme="whatsapp" mt="5" px="5" width="100%" py="7" borderRadius="20">Lưu trữ hoá đơn | Tổng tiền: 120.000đ</Button>
      </Box>
    </Center >
  );
};

export default NewBillLaundry;
