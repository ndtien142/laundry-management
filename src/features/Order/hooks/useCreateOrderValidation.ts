import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Order } from '../../../types/OrderInterface';

export interface LoginState {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Tên không được để trống.'),
  dayOfReceive: yup.string().required('Ngày không được để trống'),
});

export const useCreateOrderValidation = () =>
  useForm<Order>({
    resolver: yupResolver(schema),
  });
