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
  await apiOrder.put<Order>(`/order/${order.id}.json`, {
    name: order.name,
    dayOfReceive: order.dayOfReceive,
    dayOfAppointment: order.dayOfAppointment,
    status: order.status,
    note: order.note,
    idReceive: order.idReceive,
  });
};

export const getDetailOrder = async ({ queryKey }: any) => {
  const [_, orderId] = queryKey;
  const response = await apiOrder.get<Order>(`/order/${orderId}.json`);
  return response.data;
};

export const deleteOrder = async (id: number) => {
  await apiOrder.delete(`/order/${id}.json`);
};

// Next Id api
export const getNextIdOrder = async () => {
  const response = await apiOrder.get<number>(`/nextId.json`);
  return response.data;
};

export const postNewNextId = async (nextId: number) => {
  await apiOrder.put<number>(`nextId.json`, nextId);
};
