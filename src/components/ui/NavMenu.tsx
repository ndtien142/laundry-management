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
          color="primary"
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
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
          color="blurColor"
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
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
          color="blurColor"
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
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
          color="blurColor"
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
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
          color="blurColor"
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
          borderLeftRadius='20px'
          justifyContent="start"
          gap="5"
          px="30px"
          mb="5"
          color="blurColor"
        >
          <LogoutOutlinedIcon />
          <Text>Đăng xuất</Text>
        </Button>
      </ButtonGroup>
    </Stack >
  );
};

export default NavMenu;
