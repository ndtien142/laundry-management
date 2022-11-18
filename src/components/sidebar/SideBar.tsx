import React, { ReactNode } from 'react';
import {
    Drawer,
    DrawerContent,
    useDisclosure,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { SidebarContent } from './SideBarContent';
import { MobileNav } from './MobileNav';
import Footer from '../layout/Footer';

export default function SidebarWithHeader({
    children,
}: {
    children: ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Grid
            minH='100vh'
            bgColor="mainBg"
            gridTemplateAreas={{
                md: `"nav header"
                    "nav main"
                    "nav footer"
        `,
                base: `"header"
                        "main"
                    "footer"
        `,
            }}
            gridTemplateColumns={{ base: '1fr', md: '240px 1fr' }}
            gridTemplateRows={{ base: "100px 1fr 50px" }}
        >
            <GridItem bgColor="mainBg" area='nav' display={{ base: "none", md: "block" }} shadow="base">
                <SidebarContent
                    onClose={() => onClose}
                    display={{ base: 'none', md: 'block' }}
                />
                <Drawer
                    autoFocus={false}
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size='full'
                >
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
            </GridItem>
            {/* mobilenav */}
            <GridItem bgColor="mainBg" area='header'>
                <MobileNav onOpen={onOpen} />
            </GridItem>
            <GridItem bgColor="mainBg" area='main' p="4" maxWidth={{ base: "320px", md: "800px", lg: "1000px", xl: "1150px" }} mx="auto" width="100%">
                {children}
            </GridItem>
            <GridItem bgColor="mainBg" area='footer'>
                <Footer />
            </GridItem>
        </Grid>
    );
}
