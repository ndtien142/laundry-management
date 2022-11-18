import { Flex, Icon, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { NavItemProps } from './interfaceSideBar';

export const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {

    return (
        <Link style={{ textDecoration: 'none' }} as={RouteLink} to={path}>
            <Flex
                bg='whiteColor'
                width='90%'
                ml='auto'
                to={path}
                borderLeftRadius='20px'
                justifyContent='start'
                alignItems='center'
                gap='5'
                px='30px'
                mb='5'
                fontSize='xl'
                py='10px'
                _hover={{
                    bg: 'mainBg',
                    color: 'primary',
                }}
                {...rest}
                style={{ textDecoration: 'none' }}
            >
                {icon && (
                    <Icon
                        mr='4'
                        fontSize='16'
                        _groupHover={{
                            color: 'primary',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
