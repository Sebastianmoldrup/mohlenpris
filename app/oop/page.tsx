import Image from 'next/image';
import allergies from '@/app/data/allergies.json';
import guests from '@/app/data/guests.json';
import hosts from '@/app/data/hosts.json';

export default function Home() {
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
          <h3>Singel:</h3>
          <ul className='space-y-4'>
            {guests.individuals.map((person, index) => (
              <li key={index}>
                <h3 data-name='sm-title' className=''>
                  {person.name}
                </h3>
                <div className=''>
                  {person.allergies.map((allergy, index) => (
                    <div key={index}>{allergy}</div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <h3>Grupper:</h3>
          {guests.groups.map((group, index) => (
            <div key={index}>
              <ul className='flex gap-x-2'>
                {group.names.map((name, index) => (
                  <li data-name='sm-title' key={index}>
                    {name}
                  </li>
                ))}
              </ul>
              <ul className='flex gap-x-2'>
                {group.allergies.map((allergy, index) => (
                  <li key={index}>{allergy}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
