import React from 'react';
import { Box, Text, Flex, Image, Center } from '@chakra-ui/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Props {
    path: string;
    bgc: string;
    title: string;
    quantity: string;
}

const Widget: React.FC<Props> = ({ path, bgc, title, quantity }) => {
    return (
        <Box
            width='100%'
            maxWidth={{ base: "", lg: '300' }}
            borderRadius='10'
            p='5'
            bgColor={bgc}
            color='white'
            display={{ base: "flex", lg: "block" }}
            alignItems="center"
        >
            <Flex gap='5' alignItems='center'>
                <Box
                    p='3'
                >
                    <Image src={path} />
                </Box>
                <Box>
                    <Text fontSize='30'>{quantity}</Text>
                    <Text>{title}</Text>
                </Box>
            </Flex>
            <Center textAlign="center" width="170px" color={bgc} bgColor="#fff" borderRadius="10" justifyContent="space-evenly" mx="auto" fontSize="14px" mt="2">
                <Text as="span">11/12/2022</Text>
                <ArrowDropDownIcon sx={{ fontSize: 40 }} />
            </Center>
        </Box>
    );
};

export default Widget;
