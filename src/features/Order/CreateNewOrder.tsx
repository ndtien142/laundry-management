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
    Text,
} from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@chakra-ui/react';
import { Order } from '../../types/OrderInterface';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getNextIdOrder, postNewNextId, postNewOrder } from '../../api/OrderApi';
import { useCreateOrderValidation } from '../../hooks/useCreateOrderValidation';
import { Spinner } from '@chakra-ui/react';

const CreateNewOrder = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data: getNextId } = useQuery(['nextId'], getNextIdOrder, {
        staleTime: Infinity,
    });
    const { mutate: createNewOrder } = useMutation(postNewOrder);
    const { mutate: postNextId } = useMutation(postNewNextId, {
        onSuccess: () => {
            queryClient.invalidateQueries(["nextId"])
        }
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useCreateOrderValidation();
    const onSubmit: SubmitHandler<Order> = (data) => {
        // createNewOrder({ ...data, status: 'Pending', id: getNextId });
        // console.log({ ...data, status: 'Pending', id: getNextId });
        postNextId(Number(getNextId) + 1)
        navigate("/order")
    };
    return (
        <>
            <Heading as='h3' mb='3'>
                Tạo phiếu nhận hàng mới
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box bgColor='#FFF' p='5' borderRadius='10' shadow='2xl'>
                    <Flex mb='5' gap='5' flexWrap='wrap' rowGap='0'>
                        <Box
                            minWidth={{ md: '320px' }}
                            width={{ base: '100%', md: '325px' }}
                            mb={{ base: "5", lg: "" }}
                        >
                            <Text mb="2" fontWeight="semibold">Mã đơn hàng</Text>
                            <Button
                                disabled
                                width="100%"
                                fontWeight='700'
                                border="1px solid black"
                                color="red"
                            >{getNextId ? getNextId : <Spinner />}</Button>

                        </Box>
                        <FormControl
                            minWidth={{ md: '320px' }}
                            width={{ base: '100%', md: '325px' }}
                            isInvalid={errors.name ? true : false}
                        >
                            <FormLabel htmlFor='name'>Tên khách hàng</FormLabel>
                            <Input
                                type='text'
                                placeholder='Tên khách hàng'
                                {...register('name')}
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
                            <Input type='date' {...register('dayOfReceive')} />
                            {errors.dayOfReceive ? (
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
                            mb={{ base: "5", lg: "" }}
                        >
                            <FormLabel htmlFor='customerName'>Ngày hẹn giao</FormLabel>
                            <Input type='date' {...register('dayOfAppointment')} />
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
