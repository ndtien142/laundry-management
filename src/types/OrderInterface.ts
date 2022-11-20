export interface Order {
  id: number;
  name: string;
  status: 'Completed' | 'Pending' | 'Process';
  dayOfReceive: string;
  dayOfAppointment: string;
  note: string;
  idReceive?: number;
}
