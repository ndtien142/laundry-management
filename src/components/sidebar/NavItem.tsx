import { Flex, Icon, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { NavItemProps } from './interfaceSideBar';

export const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
    return (
        <Link style={{ textDecoration: 'none' }} as={RouteLink} to={path}>
            <Flex
                align='center'
                p='4'
                mx='4'
                fontSize="xl"
                borderRadius='lg'
                role='group'
                cursor='pointer'
                _hover={{
                    bg: 'mainBg',
                    color: 'primary',
                }}
                {...rest}
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
