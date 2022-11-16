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
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { MobileProps } from './interfaceSideBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouteLink } from 'react-router-dom';

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            bgColor="mainBg"
            px={{ base: 4, md: 4 }}
            height='20'
            alignItems='center'
            borderBottomWidth='1px'
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
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
                fontFamily='monospace'
                fontWeight='bold'
                as={RouteLink}
                to='/'
            >
                Laundry
            </Text>

            <HStack spacing={{ base: '0', md: '6' }} bgColor="mainBg">
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
                                    <Text fontSize='sm'>Justina Clark</Text>
                                    <Text fontSize='xs' color='gray.600'>
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <KeyboardArrowDownIcon />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            zIndex='100'
                        >
                            <MenuItem>Thông tin cá nhân</MenuItem>
                            <MenuItem>Cài đặt</MenuItem>
                            <MenuDivider />
                            <MenuItem>Đăng xuất</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
