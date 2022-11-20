import {
    Avatar,
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from '@chakra-ui/react';
import { MobileProps } from './interfaceSideBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import { useUser } from '../../features/User/hooks/useUser';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { resetInfoUserSignin } from '../../features/User/SigninSlice';

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { clearUser } = useUser();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((state) => state.userLogin);
    const navigate = useNavigate();
    const handleSigOut = () => {
        dispatch(resetInfoUserSignin());
        clearUser();
        navigate('/login');
    };
    return (
        <Flex
            bgColor='mainBg'
            px={{ base: 4, md: 4 }}
            height='20'
            alignItems='center'
            borderBottomWidth='1px'
            borderBottomColor='grey'
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant='outline'
                aria-label='open menu'
                icon={<MenuIcon />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize='2xl'
                fontWeight='bold'
                as={RouteLink}
                to='/'
            >
                Laundry
            </Text>

            <HStack spacing={{ base: '0', md: '6' }} bgColor='mainBg'>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition='all 0.3s'
                            _focus={{ boxShadow: 'none' }}
                        >
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems='flex-start'
                                    spacing='1px'
                                    ml='2'
                                >
                                    <Text fontSize='sm'>{userInfo.email}</Text>
                                    <Text
                                        fontSize='xs'
                                        color='gray.600'
                                        textTransform='capitalize'
                                    >
                                        {userInfo.authority}
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <KeyboardArrowDownIcon />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList bg='whiteColor' borderColor='grey' zIndex='100'>
                            <MenuItem>Thông tin cá nhân</MenuItem>
                            <MenuItem>Cài đặt</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={handleSigOut}>Đăng xuất</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
