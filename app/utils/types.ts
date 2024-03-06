import { Host } from '@/app/oop/Host';

export type Allergies = {
  appetizer: string[];
  main: string[];
  dessert: string[];
};

export type HostTypes = {
  allergies: Allergies;
  address: string;
  floor: string;
  capacity: number;
  flex: number;
  phone: string;
  email: string;
  orderId: string;
  appetizerCapacity: number;
  mainCourseCapacity: number;
  dessertCapacity: number;
};

export type GuestTypes = {
  name: string;
  lastName: string;
  age: number;
  phone: string;
  companions: string[];
  allergies: string[];
  appetizer: Host | null;
  mainCourse: Host | null;
  dessert: Host | null;
};
