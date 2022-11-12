import { Box, Container, Text, Stack, useColorModeValue } from "@chakra-ui/react"
import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialButton } from "../ui/SocialButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')} as="footer">
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2022 Chakra Templates. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Facebook'} href={'#'}>
                        <FacebookIcon />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <YouTubeIcon />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <InstagramIcon />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}