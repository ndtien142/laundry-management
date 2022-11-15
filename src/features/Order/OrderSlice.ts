import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/OrderInterface';

interface OrderState {
  order: Order[];
  nextId: number;
}

const initialState: OrderState = {
  order: [],
  nextId: 131,
};

const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<Order>) => {
      state.order.push({
        ...action.payload,
        id: state.nextId,
        status: 'Pending',
      });
      state.nextId = state.nextId + 1;
    },
    deleteOrder: (state, action: PayloadAction<number | string>) => {
      const indexOfDelete = state.order.findIndex((order: Order) => {
        return order.id === action.payload;
      });
      state.order.splice(indexOfDelete, 1);
    },
    replaceAllOrder: (state, action) => {
      console.log(action.payload);
      // state.order = action.payload;
    },
  },
});

export const { addNewOrder, deleteOrder, replaceAllOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
