import React from 'react';
import {
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Box,
    Button,
    Flex
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@chakra-ui/react'

interface CreateOrderInputs {
    id: string | number;
    customerName: string;
    date: Date | string;
    dateDelivery: Date | string;
    employeeId: string | number;
    note: string
    status: 'Completed' | 'Pending' | 'Process';
}

const CreateNewOrder = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateOrderInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<CreateOrderInputs> = (data) => {
        console.log(errors?.customerName?.message)
        console.log(data);
    }
    return (

        <>
            <Heading as='h3' mb="3">Tạo phiếu nhận hàng mới</Heading>
            <Box bgColor="#FFF" p="5" borderRadius="10" shadow="2xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex mb="5" gap="5" flexWrap="wrap">
                        <FormControl minWidth="320px" width="325px">
                            <FormLabel htmlFor='customerName'>Tên khách hàng</FormLabel>
                            <Input
                                type='text'
                                placeholder='Tên khách hàng'
                                {...register("customerName", { required: "Tên khách hàng không được trống!" })}
                            />
                            <FormErrorMessage>{errors?.customerName?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl minWidth="320px" width="325px">
                            <FormLabel htmlFor='customerName'>Ngày nhận đơn</FormLabel>
                            <Input
                                type='date'
                                {...register("date", { required: true })}
                            // value={result}
                            />
                            <FormErrorMessage>{ }</FormErrorMessage>
                        </FormControl>
                        <FormControl minWidth="320px" width="325px">
                            <FormLabel htmlFor='customerName'>Ngày hẹn giao</FormLabel>
                            <Input
                                type='date'
                                {...register("dateDelivery")}
                            // value={result}
                            />
                            <FormErrorMessage>{ }</FormErrorMessage>
                        </FormControl>
                        <FormControl minWidth="320px" width="325px">
                            <FormLabel htmlFor='customerName'>Ghi chú</FormLabel>
                            <Textarea
                                {...register("note")}
                                placeholder="ghi chú thêm"
                            />
                            <FormErrorMessage>{ }</FormErrorMessage>
                        </FormControl>
                    </Flex>
                    <Box textAlign="end">
                        <Button colorScheme="whatsapp" type="submit" mr="5">Lưu</Button>
                        <Button ml="auto" colorScheme="red" onClick={() => navigate(-1)}>Huỷ</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default CreateNewOrder;
