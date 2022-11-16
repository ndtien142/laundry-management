import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailOrder } from '../../hooks/useGetDetailOrder'

const OrderDetail = () => {
    const { orderId } = useParams()
    const { data } = useGetDetailOrder(orderId)
    console.log(data)
    return (
        <div>{orderId}</div>
    )
}

export default OrderDetail