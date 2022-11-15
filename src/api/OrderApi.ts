import axios from 'axios';
import { Order } from '../types/OrderInterface';

const baseUrl: string = `https://laundry-54ff8-default-rtdb.asia-southeast1.firebasedatabase.app/`;

const apiOrder = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAllOrder = async () => {
  const response = await apiOrder.get<Order[]>('/order.json');
  return response.data;
};

export const postNewOrder = async (order: Order) => {
  const response = await apiOrder.put<any>(`/order/${order.id}.json`, {
    ...order,
  });
  return response.data;
};
