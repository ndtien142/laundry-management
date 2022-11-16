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
import { Order } from '../../types/OrderInterface';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewOrder } from './OrderSlice';
import { useMutation } from '@tanstack/react-query';
import { postNewOrder } from '../../api/OrderApi';

const CreateNewOrder = () => {
    const { mutate: createNewOrder } = useMutation(postNewOrder);
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm<Order>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const getNextId = useAppSelector((state) => state.order.nextId);
    const onSubmit: SubmitHandler<Order> = (data) => {
        dispatch(addNewOrder(data));
        createNewOrder({ ...data, status: 'Pending', id: getNextId });
        console.log({ ...data, status: 'Pending', id: getNextId });
        reset();
    };
    return (
        <>
            <Heading as='h3' mb='3'>
                Tạo phiếu nhận hàng mới
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box bgColor='#FFF' p='5' borderRadius='10' shadow='2xl'>
                    <Flex mb='5' gap='5' flexWrap='wrap' rowGap='0'>
                        <FormControl
                            minWidth={{ md: '320px' }}
                            width={{ base: '100%', md: '325px' }}
                            isInvalid={errors.name ? true : false}
                        >
                            <FormLabel htmlFor='name'>Tên khách hàng</FormLabel>
                            <Input
                                type='text'
                                placeholder='Tên khách hàng'
                                {...register('name', {
                                    required: 'Tên khách hàng không được trống!',
                                    onBlur: (e) => {
                                        if (e.target.value.trim().length < 2)
                                            setError('name', {
                                                type: 'required',
                                                message: 'Tên khách hàng không được trống!',
                                            });
                                    },
                                    onChange: (e) => {
                                        clearErrors('name');
                                    },
                                })}
                            />
                            {errors.name ? (
                                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                            ) : (
                                <FormHelperText color='#FFF'>|</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            minWidth={{ md: '320px' }}
                            width={{ base: '100%', md: '325px' }}
                            isInvalid={errors.dayOfReceive ? true : false}
                        >
                            <FormLabel htmlFor='date'>Ngày nhận đơn</FormLabel>
                            <Input
                                type='date'
                                {...register('dayOfReceive', {
                                    required: 'Tên khách hàng không được trống!',
                                    onBlur: (e) => {
                                        if (e.target.value.trim().length < 2)
                                            setError('dayOfReceive', {
                                                type: 'required',
                                                message: 'Vui lòng chọn ngày nhận',
                                            });
                                    },
                                    onChange: (e) => {
                                        clearErrors('dayOfReceive');
                                    },
                                })}
                            />
                            {errors.dayOfReceive?.type === 'required' ? (
                                <FormErrorMessage>
                                    {errors.dayOfReceive?.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText color='#FFF'>|</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            minWidth={{ md: '320px' }}
                            width={{ base: '100%', md: '325px' }}
                        >
                            <FormLabel htmlFor='customerName'>Ngày hẹn giao</FormLabel>
                            <Input
                                type='date'
                                {...register('dayOfAppointment')}
                            // value={result}
                            />
                            <FormErrorMessage>{ }</FormErrorMessage>
                        </FormControl>
                        <FormControl
                            minWidth={{ md: '320px' }}
                            width={{ base: '100%', md: '325px' }}
                        >
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
                </Box>
            </form>
        </>
    );
};

export default CreateNewOrder;
