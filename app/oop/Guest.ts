import { GuestTypes } from '../utils/types';
import { Host, HostList } from './Host';

export class GuestList {
  guests: Guest[] = [];

  constructor(data: any) {
    this.guests = data.map((x: any) => new Guest(x));
  }

  //   function sortAppetizer() {}

  //   function sortMainCourse() {}

  //   function sortDessert() {}
}

export class Guest {
  name: string = '';
  lastName: string = '';
  age: number = 0;
  phone: string = '';
  companions: string[] = [];
  allergies: string[] = [];
  appetizer: Host | null = null;
  mainCourse: Host | null = null;
  dessert: Host | null = null;

  constructor(data: GuestTypes) {
    this.name = data['name'];
    this.lastName = data['lastName'];
    this.age = data['age'];
    this.phone = data['phone'];
    this.companions = data['companions'];
    this.allergies = data['allergies'];
    this.appetizer = data['appetizer'];
    this.mainCourse = data['mainCourse'];
    this.dessert = data['dessert'];
  }

  // function getSize() {}

  // function getAllergies() {}

  // function getAppetizer() {}

  // function getMainCourse() {}

  // function getDessert() {}

  // function setAppetizer() {}

  // function setMainCourse() {}

  // function setDessert() {}
}
