import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import NewBillLaundry from '../../components/ui/BillLaundry/NewBillLaundry';
import SearchServices from '../../components/ui/SearchServices';
import ServicesUI from '../../components/ui/ServicesUI/ServicesUI';

const CreateDetailOrder = () => {
    return (
        <Grid
            templateAreas={`"search invoices"
                            "main invoices"`}
            gridTemplateRows={'80px 1fr'}
            gridTemplateColumns={'2fr 1fr'}
            h='100%'
            gap='5'
            pb="5"
        >
            <GridItem
                area='search'
                bgColor='#FFF'
                p='2'
                borderRadius='10'
                display='flex'
                alignItems='center'
                width='100%'
                shadow='base'
            >
                <SearchServices />
            </GridItem>
            <GridItem area='main'>
                <ServicesUI />
            </GridItem>
            <GridItem area='invoices' bgColor='#FFF' shadow='base' borderRadius='10'>
                <NewBillLaundry />
            </GridItem>
        </Grid>
    );
};

export default CreateDetailOrder;
