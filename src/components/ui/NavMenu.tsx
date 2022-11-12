import React from 'react';
import { Stack, ButtonGroup, Button, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const NavMenu = () => {
  const location = useLocation()
  return (
    <Stack direction='column'>
      <ButtonGroup>
        <Button
          bg="#FFF"
          width='90%'
          ml='auto'
          as={Link}
          to='/'
          borderLeftRadius='20px'
          justifyContent='start'
          gap='5'
          px='30px'
          mb='5'
          shadow={location.pathname === "/" ? 'base' : "none"}
          color={location.pathname === "/" ? 'primary' : "blurColor"}
        >
          <HomeIcon />
          <Text>Trang chủ</Text>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          bg='#fff'
          width='90%'
          ml='auto'
          as={Link}
          to='/order'
          borderLeftRadius='20px'
          justifyContent='start'
          gap='5'
          px='30px'
          mb='5'
          shadow={location.pathname.includes("/order") ? 'base' : "none"}
          color={location.pathname.includes("/order") ? 'primary' : "blurColor"}
        >
          <ReceiptOutlinedIcon />
          <Text>Phiếu nhận hàng</Text>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          bg='#fff'
          width='90%'
          ml='auto'
          as={Link}
          to='/customer'
          borderLeftRadius='20px'
          justifyContent='start'
          gap='5'
          px='30px'
          mb='5'
          shadow={location.pathname === "/customer" ? 'base' : "none"}
          color={location.pathname === "/customer" ? 'primary' : "blurColor"}
        >
          <Person4OutlinedIcon />
          <Text>Khách hàng</Text>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          bg='#fff'
          width='90%'
          ml='auto'
          as={Link}
          to='statistical'
          borderLeftRadius='20px'
          justifyContent='start'
          gap='5'
          px='30px'
          mb='5'
          shadow={location.pathname === "/statistical" ? 'base' : "none"}
          color={location.pathname === "/statistical" ? 'primary' : "blurColor"}
        >
          <SignalCellularAltOutlinedIcon />
          <Text>Thống kê</Text>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          bg='#fff'
          width='90%'
          ml='auto'
          as={Link}
          to='/setting'
          borderLeftRadius='20px'
          justifyContent='start'
          gap='5'
          px='30px'
          mb='5'
          shadow={location.pathname === "/setting" ? 'base' : "none"}
          color={location.pathname === "/setting" ? 'primary' : "blurColor"}
        >
          <SettingsApplicationsOutlinedIcon />
          <Text>Cài đặt</Text>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          bg='#fff'
          width='90%'
          ml='auto'
          as={Link}
          to='/login'
          borderLeftRadius='20px'
          justifyContent='start'
          gap='5'
          px='30px'
          mb='5'
          color="blurColor"
        >
          <LogoutOutlinedIcon />
          <Text>Đăng xuất</Text>
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default NavMenu;
