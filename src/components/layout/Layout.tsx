import React, { PropsWithChildren, ReactElement } from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';

interface Props {
    children: ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Grid
            templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'80px 1fr 30px'}
            gridTemplateColumns={'280px 1fr'}
            h='100vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem area="header" bg="pink.100">
            </GridItem>
            <GridItem area="nav" bg="#fff">
                <Navbar />
            </GridItem>
            <GridItem area="main" bg="blue">{children}</GridItem>
            <GridItem area="footer" pl="2"></GridItem>
        </Grid>
    )
}

export default Layout