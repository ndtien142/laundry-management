import { Box, Button, Center, Input, Text } from '@chakra-ui/react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useState } from 'react';

const ServicesEditQuantity = () => {
    const [quantity, setQuantity] = useState(1);
    const handleChangeQuantity = (e: any) => {
        setQuantity(e.target.value)
    }
    return (
        <Center width='100%' mb='2' shadow='base' px='5' py='2' borderRadius='10' justifyContent="space-between">
            <Text>Áo quần</Text>
            <Input type="number" min={1} max={20} value={quantity} onChange={handleChangeQuantity} width="50" />
            <Text><Text as="span" display={"inline-block"} width="10" textAlign="right">{quantity * 10}</Text>.000đ</Text>
            <Button variant="outline" border="0" width="30" height="30">
                {<DeleteOutlineIcon />}
            </Button>
        </Center>
    );
};

export default ServicesEditQuantity;
