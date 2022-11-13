import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from '@chakra-ui/react';
import React from 'react';
import CardServices from './CardServices';

const ServicesUI = () => {
    return (
        <Accordion defaultIndex={[0]}>
            <AccordionItem bgColor="#FFF" borderRadius="10" overflow="hidden" mb="5" border="0" shadow="base">
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Dịch vụ giặt sấy
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex
                        p='5'
                        flexWrap='wrap'
                        gap='5'
                        justifyContent='space-evenly'
                        alignItems='center'
                    >
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem bgColor="#FFF" borderRadius="10" overflow="hidden" border="0" shadow="base">
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Dịch vụ sấy
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex
                        p='5'
                        flexWrap='wrap'
                        gap='5'
                        justifyContent='space-evenly'
                        alignItems='center'
                    >
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                        <CardServices />
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>


    );
};

export default ServicesUI;
