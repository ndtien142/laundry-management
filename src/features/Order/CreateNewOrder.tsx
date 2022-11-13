import React from 'react';
import {
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Box,
    Button,
    Flex,
    FormHelperText,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@chakra-ui/react';

interface CreateOrderInputs {
    id: string | number;
    customerName: string;
    date: Date | string;
    dateDelivery: Date | string;
    employeeId: string | number;
    note: string;
    status: 'Completed' | 'Pending' | 'Process';
}

const CreateNewOrder = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<CreateOrderInputs>();
    const navigate = useNavigate();
    console.log('re-render');
    const onSubmit: SubmitHandler<CreateOrderInputs> = (data) => {
        console.log(errors?.customerName?.message);
        console.log(data);
    };
    return (
        <>
            <Heading as='h3' mb='3'>
                Tạo phiếu nhận hàng mới
            </Heading>
            <Box bgColor='#FFF' p='5' borderRadius='10' shadow='2xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex mb='5' gap='5' flexWrap='wrap' rowGap='0'>
                        <FormControl
                            minWidth='320px'
                            width='325px'
                            isInvalid={errors.customerName ? true : false}
                        >
                            <FormLabel htmlFor='customerName'>Tên khách hàng</FormLabel>
                            <Input
                                type='text'
                                placeholder='Tên khách hàng'
                                {...register('customerName', {
                                    required: 'Tên khách hàng không được trống!',
                                    onBlur: (e) => {
                                        if (e.target.value.trim().length < 2)
                                            setError('customerName', {
                                                type: 'required',
                                                message: 'Tên khách hàng không được trống!',
                                            });
                                    },
                                })}
                            />
                            {errors.customerName ? (
                                <FormErrorMessage>
                                    {errors.customerName?.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText color='#FFF'>|</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl minWidth='320px' width='325px' isInvalid={errors.date ? true : false}>
                            <FormLabel htmlFor='date'>Ngày nhận đơn</FormLabel>
                            <Input
                                type='date'
                                {...register('date', {
                                    required: 'Tên khách hàng không được trống!',
                                    onBlur: (e) => {
                                        if (e.target.value.trim().length < 2)
                                            setError('date', {
                                                type: 'required',
                                                message: 'Vui lòng chọn ngày nhận',
                                            });
                                    },
                                })}
                            />
                            {errors.customerName ? (
                                <FormErrorMessage>
                                    {errors.date?.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText color='#FFF'>|</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl minWidth='320px' width='325px'>
                            <FormLabel htmlFor='customerName'>Ngày hẹn giao</FormLabel>
                            <Input
                                type='date'
                                {...register('dateDelivery')}
                            // value={result}
                            />
                            <FormErrorMessage>{ }</FormErrorMessage>
                        </FormControl>
                        <FormControl minWidth='320px' width='325px'>
                            <FormLabel htmlFor='customerName'>Ghi chú</FormLabel>
                            <Textarea {...register('note')} placeholder='ghi chú thêm' />
                            <FormErrorMessage>{ }</FormErrorMessage>
                        </FormControl>
                    </Flex>
                    <Box textAlign='end'>
                        <Button colorScheme='whatsapp' type='submit' mr='5'>
                            Lưu
                        </Button>
                        <Button ml='auto' colorScheme='red' onClick={() => navigate(-1)}>
                            Huỷ
                        </Button>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default CreateNewOrder;
