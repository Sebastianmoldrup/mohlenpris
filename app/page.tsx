'use client';
import Image from 'next/image';
import guests from '@/app/data/guests.json';
import hosts from '@/app/data/hosts.json';
import List from '@/components/list';
import { useState, useEffect } from 'react';

export default function Home() {
  // // Access token state
  // const [accessToken, setAccessToken] = useState(null);

  // // Organizers state
  // const [organizers, setOrganizers] = useState([]);

  // // Obtain the access token on component mount
  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     try {
  //       const response = await fetch('https://legacyapi.deltager.no/token', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         body: 'grant_type=password&username={tourdemohlenpris@gmail.com}&password={Skjalg1973}&affid=1',
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to obtain access token');
  //       }

  //       const data = await response.json();
  //       setAccessToken(data.access_token);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchAccessToken();
  // }, []); 

  // // Fetch organizers when access token is obtained
  // useEffect(() => {
  //   const fetchOrganizers = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://legacyapi.deltager.no/organizers',
  //         {
  //           headers: {
  //             Authorization: `bearer ${accessToken}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch organizers');
  //       }

  //       const data = await response.json();
  //       setOrganizers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   // Fetch organizers only if the access token is available
  //   if (accessToken) {
  //     fetchOrganizers();
  //   }
  // }, [accessToken]); 

    const [courses, setCourses] = useState([
      { name: 'appetizer', data: [] },
      { name: 'main', data: [] },
      { name: 'dessert', data: [] },
    ]);
  
  function sortAppetizer() {
    return hosts.map((host) => {
      guests.map((guest) => {
        guest.allergies.map((allergy) => {
          if (host.ingredients.appetizer.includes(allergy)) {
            return courses;
          } else {
            setCourses(courses.map((course) => {
              course.name === 'appetizer' 
              ? { ...course, data: [...course.data, host] }
              : course
            }))
            }
        })
      });
    })
  }

  sortAppetizer();

  function sortMainCourse() {
    return hosts
    .filter((host) => console.log(host.ingredients.main))
  }

  function sortDessert() {
    return hosts
    .filter((host) => console.log(host.ingredients.dessert))
  }

  return (
    <main className='flex flex-col min-h-screen items-center justify-center mt-10 gap-x-10'>
      <List />
    </main>
  );
}
