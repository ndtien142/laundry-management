import { Box, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchServices = () => {
    return (

        <Box textAlign="center" width="100%">
            <Text as="span" display="inline-block" mr="5">Tìm kiếm</Text>
            <InputGroup display="inline-block" width="80%">
                <Input type="text" display="inline-block" borderRadius="20" />
                <InputRightElement
                    bgColor="primary"
                    borderRightRadius="20"
                    width="50px"
                    color="#FFF"
                    pointerEvents='none'
                    children={<SearchIcon />}
                />
            </InputGroup>
        </Box>
    )
}

export default SearchServices