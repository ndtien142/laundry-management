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
            templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'110px 1fr 65px'}
            gridTemplateColumns={'280px 1fr'}
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
            <GridItem area="nav" bg="#fff" shadow="2xl">
                <Navbar />
            </GridItem>
        </Grid>
    )
}

export default Layout