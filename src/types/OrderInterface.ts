export interface Order {
  id: number | string;
  name: string;
  status: 'Completed' | 'Pending' | 'Process';
  dayOfReceive: string;
  dayOfAppointment: string;
  note: string;
}
