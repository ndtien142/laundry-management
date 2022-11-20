import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import CardOrderInfoLoading from '../../components/loading/CardOrderInfoLoading';
import OrderInfo from '../../components/ui/Card/OrderInfo';
import { useGetDetailOrder } from './hooks/useGetDetailOrder';

const OrderDetail = () => {
    const { orderId } = useParams();
    const { data } = useGetDetailOrder(orderId);
    console.log(data);
    if (data === undefined) return <CardOrderInfoLoading />;

    return (
        <Grid
            gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gridTemplateRows={{ base: '1fr 1fr', md: '1fr' }}
            height='100%'
            p='5'
            gap='5'
        >
            <GridItem bg='#FFF' shadow='base' borderRadius='10'>
                <OrderInfo {...data} id={Number(orderId)} />
            </GridItem>
            <GridItem bg='blue.200' shadow='base' borderRadius='10'></GridItem>
        </Grid>
    );
};

export default OrderDetail;
