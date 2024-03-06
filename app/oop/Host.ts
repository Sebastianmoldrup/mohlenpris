import { HostTypes, Allergies } from '@/app/utils/types';

export class HostList {
  hosts: Host[] = [];

  constructor(data: any) {
    this.hosts = data.map((x: any) => new Host(x));
  }

  // function getHosts: Host[] {}
}

export class Host {
  allergies: Allergies = { appetizer: [], main: [], dessert: [] };
  address: string = '';
  floor: string = '';
  capacity: number = 0;
  flex: number = 0;
  phone: string = '';
  email: string = '';
  orderId: string = '';

  constructor(data: HostTypes) {
    this.allergies = data['allergies'];
    this.address = data['address'];
    this.floor = data['floor'];
    this.capacity = data['capacity'];
    this.flex = data['flex'];
    this.phone = data['phone'];
    this.email = data['email'];

    this.logData();
  }

  logData() {
    console.log(
      'allergi forrett',
      this.allergies.appetizer.map((x: any) => x)
    );
    console.log(
      'allergi hovedrett',
      this.allergies.main.map((x: any) => x)
    );
    console.log(
      'allergi desert',
      this.allergies.dessert.map((x: any) => x)
    );
    console.log('addresse', this.address);
    console.log('etasje', this.floor);
    console.log('kapasitet', this.capacity);
    console.log('flex kapasitet', this.flex);
    console.log('tlf', this.phone);
    console.log('email', this.email);
  }

  appetizerCapacity: number = 0;
  mainCourseCapacity: number = 0;
  dessertCapacity: number = 0;

  // function availableAppetizer() {}

  // function availableMainCourse() {}

  // function availableDessert() {}
}
