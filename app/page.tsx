'use client';
import Image from 'next/image';
import guests from '@/app/data/guests.json';
import hosts from '@/app/data/hosts.json';
import allergies from '@/app/data/allergies.json';
import List from '@/components/list';
// import { SignUpGuest } from '@/components/signUpGuest';
import { useState, useEffect } from 'react';

export default function Home() {
  // State to store the access token
  const [accessToken, setAccessToken] = useState(null);

  // State to store organizers, events, or any other data you retrieve
  const [organizers, setOrganizers] = useState([]);

  // Effect to obtain the access token on component mount
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch('https://legacyapi.deltager.no/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'grant_type=password&username={username}&password={password}&affid=1',
        });

        if (!response.ok) {
          throw new Error('Failed to obtain access token');
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAccessToken();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  // Effect to fetch organizers when access token is obtained
  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const response = await fetch(
          'https://legacyapi.deltager.no/organizers',
          {
            headers: {
              Authorization: `bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch organizers');
        }

        const data = await response.json();
        setOrganizers(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch organizers only if the access token is available
    if (accessToken) {
      fetchOrganizers();
    }
  }, [accessToken]); // Run this effect whenever access token changes

  return (
    <main className='flex flex-col min-h-screen items-center justify-center mt-10 gap-x-10'>
      {/* <SignUpGuest /> */}
      <List />
    </main>
  );
}
