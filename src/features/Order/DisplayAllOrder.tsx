import { Center, Button, Text } from '@chakra-ui/react'
import React from 'react'
import TableUI from '../../components/ui/TableUI'
import AddIcon from '@mui/icons-material/Add';
import { Link as RouteLink } from "react-router-dom"

const DisplayAllOrder = () => {
    return (
        <>
            <Center>
                <Text>Tổng đơn hàng trong kho</Text>
                <Button leftIcon={<AddIcon />} colorScheme="whatsapp" ml="auto" minWidth="150px" as={RouteLink} to="create-order">Thêm đơn hàng</Button>
            </Center>
            <TableUI />
        </>
    )
}

export default DisplayAllOrder