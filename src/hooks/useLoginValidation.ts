import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface LoginState {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Vui lòng nhập đúng định dạng email.')
    .required('Vui lòng nhập email.'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu.')
    .min(6, 'Mật khẩu phải lớn hơn 6'),
});

export const useLoginValidation = () =>
  useForm<LoginState>({
    resolver: yupResolver(schema),
  });
