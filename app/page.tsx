import Image from 'next/image';
import guests from '@/app/data/guests.json';
import hosts from '@/app/data/hosts.json';
import allergies from '@/app/data/allergies.json';

export default function Home() {
  // console.log(Object.entries(guests));
  // console.log(Object.entries(hosts));

  const assignGroups = () => {};

  function assignAppetizer() {
    Object.values(hosts).map((host) => {
      // console.log(host);
      // Check all the ingredients
      host.ingredients.map((ingredient) => {
        // console.log(ingredient);
        // Check all the guest groups allergies
        guests.groups.map((group) => {
          // console.log(Object.entries(group.allergies));
          // Check if the ingredient is in the group allergies
          Object.entries(group.allergies).map(([key, allergy], index) => {
            // console.log(allergy);
            // console.log(ingredient.appetizer);
            ingredient.appetizer.includes(allergy) ? console.log('yes') : null;
          });
        });
      });
    });
  }
  assignAppetizer();

  return (
    <main className='flex flex-col min-h-screen items-start justify-center mt-10 gap-x-10'>
      <ul className='flex space-x-4'>
        {allergies.map((allergy, index) => {
          return (
            <li
              className='px-4 py-2 bg-white text-black rounded-md hover:text-white hover:bg-black hover:cursor-pointer'
              key={index}
            >
              {allergy}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
