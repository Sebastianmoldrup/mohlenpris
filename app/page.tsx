import Image from 'next/image';
import guests from '@/app/data/guests.json';
import hosts from '@/app/data/hosts.json';
import allergies from '@/app/data/allergies.json';
import { SignUpGuest } from '@/components/signUpGuest';

export default function Home() {
  // console.log(Object.entries(guests));
  // console.log(Object.entries(hosts));

  // const assignGroups = () => {};

  // function assignAppetizer() {
  //   Object.values(hosts).map((host) => {
  //     // console.log(host);
  //     // Check all the ingredients
  //     host.ingredients.map((ingredient) => {
  //       // console.log(ingredient);
  //       // Check all the guest groups allergies
  //       guests.groups.map((group) => {
  //         // console.log(Object.entries(group.allergies));
  //         // Check if the ingredient is in the group allergies
  //         Object.entries(group.allergies).map(([key, allergy], index) => {
  //           // console.log(allergy);
  //           // console.log(ingredient.appetizer);
  //           ingredient.appetizer.includes(allergy) ? console.log('yes') : null;
  //         });
  //       });
  //     });
  //   });
  // }
  // assignAppetizer();

  // function addGuest() {
  //   const newIndividual = {};
  //   const newGroup = {};


  // }

  return (
    <main className='flex flex-col min-h-screen items-center justify-center mt-10 gap-x-10'>
      <SignUpGuest />
    </main>
  );
}
