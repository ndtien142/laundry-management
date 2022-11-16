import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    FormHelperText,
    FormErrorMessage,
} from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getDataUser } from '../../api/AuthContextAPI';
import { useAppDispatch } from '../../redux/hooks';
import { setInfoUserLogin } from './LoginSlice';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { LoginState, useLoginValidation } from '../../hooks/useLoginValidation';

interface LoginPayload {
    email: string;
    idToken: string | null;
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useLoginValidation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { mutate: loginMutation, isSuccess } = useMutation(
        getDataUser,
        {
            onSuccess: (data) => {
                const result: LoginPayload = {
                    email: data.data.email,
                    idToken: data.data.idToken,
                };
                dispatch(setInfoUserLogin({ ...result }));
            },
        }
    );
    useEffect(() => {
        isSuccess && navigate('/');
    }, [isSuccess, navigate]);
    const onSubmit: SubmitHandler<LoginState> = (data) => {
        loginMutation({ email: data.email, password: data.password });
    };
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign='center'>
                        Đăng nhập với tài khoản của bạn
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <FormControl id='email' isInvalid={errors?.email ? true : false}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' {...register('email')} />
                                {errors?.email ? (
                                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                                ) : (
                                    <FormHelperText color='#FFF'>!</FormHelperText>
                                )}
                            </FormControl>
                            <FormControl
                                id='password'
                                isInvalid={errors?.password ? true : false}
                            >
                                <FormLabel>Mật khẩu</FormLabel>
                                <Input type='password' {...register('password')} />
                                {errors?.password ? (
                                    <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                                ) : (
                                    <FormHelperText color='#FFF'>!</FormHelperText>
                                )}
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}
                                >
                                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                                    <Link color={'blue.400'}>Quên mật khẩu</Link>
                                </Stack>
                                <Button
                                    type='submit'
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                >
                                    Đăng nhập
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}
