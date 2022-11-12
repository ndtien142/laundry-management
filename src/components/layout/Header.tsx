import React from 'react';
import {
    Flex,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Heading,
} from '@chakra-ui/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
            justifyContent='space-between'
            px='50px'
            pt='20px'
            alignItems='center'
        >
            <Box color="primary">
                <Heading as='h3'>Dashboard</Heading>
                <Text>Hi Admin, welcome in dashboard</Text>
            </Box>
            <Box>
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<ArrowDropDownIcon />}
                        leftIcon={
                            <Avatar
                                name='Dan Abrahmov'
                                src='https://bit.ly/dan-abramov'
                                w='40px'
                                h='40px'
                            />
                        }
                        bg=' #f8f8f8'
                        gap='3'
                        p='2'
                    >
                        Admin
                    </MenuButton>
                    <MenuList zIndex="100">
                        <MenuItem>Chi tiết</MenuItem>
                        <MenuItem>Chỉnh sửa thông tin</MenuItem>
                        <MenuItem>Đăng xuất</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
};

export default Header;
