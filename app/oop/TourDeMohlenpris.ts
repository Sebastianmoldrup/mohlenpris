import { HostList } from '@/app/oop/Host';
import { GuestList } from '@/app/oop/Guest';

import guestsData from '@/app/data/guests.json';
import hostsData from '@/app/data/hosts.json';

export class TourDeMohlenpris {
  guests: GuestList;
  hosts: HostList;

  constructor() {
    this.guests = new GuestList(guestsData);
    this.hosts = new HostList(hostsData);
  }

  //   guests.sortAppetizer();
  //   guests.sortMainCourse();
  //   guests.sortDessert();
}
