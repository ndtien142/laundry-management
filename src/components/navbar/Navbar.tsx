import React from 'react'
import { Box, Heading, Center } from '@chakra-ui/react'
import NavMenu from './NavMenu'

const Navbar = () => {
    return (
        <Box>
            <Center flexDirection="column" mb="50px" mt="30px">
                <Heading as="h1" textTransform="uppercase" color="primary">Laundry</Heading>
            </Center>
            <NavMenu></NavMenu>
        </Box>
    )
}

export default Navbar