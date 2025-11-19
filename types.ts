export enum CourtStatus {
  Available = "Available",
  Selected = "Selected",
  Booked = "Booked",
  Maintenance = "Maintenance",
  Pending = "Pending"
}

export interface Booking {
  id: string;
  customerName: string;
  date: string;
  startTime: string;
  endTime: string;
  courts: string[];
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  price: number;
  isPaid: boolean;
}

export interface TimeSlot {
  time: string;
  courts: {
    courtId: number;
    status: CourtStatus;
    booking?: Booking;
  }[];
}

export interface AdminStat {
  label: string;
  value: string;
  icon: string;
  colorClass: string;
}