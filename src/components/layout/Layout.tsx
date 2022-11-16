import React, { ReactElement } from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import Header from './Header';
import Footer from './Footer';

interface Props {
    children: ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Grid
            templateAreas={{
                lg: `"nav header"
                  "nav main"
                  "nav footer"`,
                base: `"header"
                    "main"
                    "footer"
                `
            }}
            gridTemplateRows={{ lg: '110px 1fr 65px' }}
            gridTemplateColumns={{ lg: '280px 1fr' }}
            h='100vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem area="header" bg="#f8f8f8">
                <Header />
            </GridItem>
            <GridItem area="main" bg="#f8f8f8" px="50">{children}</GridItem>
            <GridItem area="footer" bg="f8f8f8">
                <Footer />
            </GridItem>
            <GridItem area="nav" bg="#fff" shadow="2xl" display={{ lg: "block" }} position={{ base: "absolute", lg: "relative" }} zIndex="100" height="100%">
                <Navbar />
            </GridItem>
        </Grid>
    )
}

export default Layout