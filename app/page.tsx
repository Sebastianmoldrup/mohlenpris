'use client';
import Image from 'next/image';
import { TourDeMohlenpris } from '@/app/oop/TourDeMohlenpris';

export default function Home() {
  const tour = new TourDeMohlenpris();

  return (
    <main className='flex flex-col min-h-screen items-center justify-center mt-10 gap-x-10'></main>
  );
}
