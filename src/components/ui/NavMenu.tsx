import React from 'react';
import { Stack, ButtonGroup, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const NavMenu = () => {
  return (
    <Stack direction='column'>
      <ButtonGroup>
        <Button
          bg='#fff'
          width='90%'
          ml='auto'
          as={Link}
          to="/"
          shadow='base'
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
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
          to="/order"
          shadow='base'
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
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
          to="/customer"
          shadow='base'
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
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
          to="statistical"
          shadow='base'
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
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
          to="/setting"
          shadow='base'
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
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
          to="/login"
          shadow='base'
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
        >
          <LogoutOutlinedIcon />
          <Text>Đăng xuất</Text>
        </Button>
      </ButtonGroup>
    </Stack >
  );
};

export default NavMenu;
