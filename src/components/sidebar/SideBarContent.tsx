import {
    Box,
    CloseButton,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { LinkItemProps, SidebarProps } from './interfaceSideBar';
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import { NavItem } from './NavItem';

const LinkItems: Array<LinkItemProps> = [
    { name: 'Trang chủ', icon: HomeIcon, path: '/' },
    { name: 'Đơn hàng', icon: ReceiptOutlinedIcon, path: '/order' },
    { name: 'Đơn giặt', icon: LocalLaundryServiceOutlinedIcon, path: '/laundry' },
    {
        name: 'Thống kê',
        icon: SignalCellularAltOutlinedIcon,
        path: '/statistical',
    },
    { name: 'Cài đặt', icon: SettingsApplicationsOutlinedIcon, path: '/setting' },
];

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bgColor='FFF'
            transition='3s ease'
            bg={useColorModeValue('white', 'gray.900')}
            borderRight='1px'
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos='fixed'
            h='full'
            {...rest}
        >
            <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
                <Text fontFamily='monospace' fontWeight='bold' color="primary" fontSize="logo">
                    Laundry
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} path={link.path}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};
