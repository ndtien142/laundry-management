import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CardServices = () => {
    const handleAddService = () => {
        console.log("add")
    }
    return (
        <Box border="1px solid" borderRadius="10" maxHeight="150" maxWidth="150" p="2" textAlign="center" as="button" onClick={handleAddService}>
            <Image src="https://cdn-icons-png.flaticon.com/512/5222/5222802.png" alt="clothes" width="100" height="100" objectFit="cover" overflow="hidden" mx="auto" />
            <Text as="span" fontSize="16" fontWeight="medium">
                CardServices
            </Text>
        </Box>
    )
}

export default CardServices