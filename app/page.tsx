import Image from 'next/image';
import allergies from '@/app/data/allergies.json';
import guests from '@/app/data/guests.json';
import hosts from '@/app/data/hosts.json';

export default function Home() {
  // Find the amount of hosts
  const hostAmount = hosts.length;
  // Find the amount of total guests (individual and group)
  const guestAmount =
    Object.values(guests.individuals).length +
    guests.groups.reduce((sum, acc) => sum + acc.group.length, 0);
  // Find the base amount of people per host
  const baseAmount = Math.floor(guestAmount / hostAmount);
  // Find the remainding extra people
  const remainder = guestAmount % hostAmount;
  // Create an array with the length of the host amount and fill in the base amount
  const organizedAmounts = Array(hostAmount).fill(baseAmount);
  // Loop through the remainder and add them into the host array so it gets equally distributed
  for (let i = 0; i < remainder; i++) {
    organizedAmounts[i]++;
  }

  // function getGuestsWithAllergy(allergy: string) {
  //   return guests.individuals.filter((guest) =>
  //     guest.allergies.includes(allergy)
  //   );
  // }

  // function getMealWithIngredient(ingredient: string) {
  //   return hosts.flatMap((host) =>
  //     Object.entries(host.ingredients).filter(([meal, ingredients]) =>
  //       Object.values(ingredients).some((ingredientList) =>
  //         ingredientList.includes(ingredient)
  //       )
  //     )
  //   );
  // }

  // const allergyMealMap = {};

  // allergies.forEach((allergy) => {
  //   const guestsWithAllergy = getGuestsWithAllergy(allergy);
  //   const mealsToAvoid = guestsWithAllergy.flatMap((guest) =>
  //     guest.allergies.flatMap((allergy) => getMealWithIngredient(allergy))
  //   );
  //   const allergyMealMap: { [key: string]: any } = mealsToAvoid;
  // });

  // console.log(allergyMealMap);

  const guestsWithAllergy = [];
  const guestsWithoutAllergy = [];
  function getGuestsWithAllergy(allergy: string) {
    guests.individuals.map((individual) => {
      if (individual.allergies.includes(allergy))
        guestsWithAllergy.push(individual);
      else if (individual.allergies.length === 0)
        guestsWithoutAllergy.push(individual);
    });
  }

  const mealsWithIngredient = [];
  function getMealWithIngredient(ingredient: string) {
    hosts.map((host) => {
      Object.entries(host.ingredients).map(([meal, ingredients]) => {
        Object.values(ingredients).map((ingredientList) => {
          if (ingredientList.includes(ingredient))
            mealsWithIngredient.push(meal);
        });
      });
    });
  }

  return (
    <main className='flex flex-col min-h-screen items-start justify-center mt-10 gap-x-10'>
      <div className='w-full h-[500px]'></div>

      <div className='flex items-start justify-center gap-x-10 font-sm w-full'>
        <div className='space-y-4'>
          <h2 data-name='md-title' className=''>
            Allergener:
          </h2>
          <ul className='space-y-2'>
            {allergies.map((allergy, index) => (
              <li key={index}>{allergy}</li>
            ))}
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 data-name='md-title' className=''>
            Vertskap:
          </h2>
          <ul className='space-y-6'>
            {hosts.map((host, index) => (
              <li key={index}>
                <h3 data-name='sm-title' className=''>
                  {host.address}
                </h3>
                <ul className='flex gap-x-4'>
                  {host.names.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
                <div className='flex gap-x-4'>
                  {host.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <div>{ingredient.appetizer}</div>
                      <div>{ingredient.main}</div>
                      <div>{ingredient.dessert}</div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 data-name='md-title' className=''>
            Gjester:
          </h2>
          <ul className='space-y-4'>
            {guests.individuals.map((person, index) => (
              <li key={index}>
                <h3 data-name='sm-title' className=''>
                  {person.name}
                </h3>
                <div className=''>{person.allergies}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
