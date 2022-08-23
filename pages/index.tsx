import Head from 'next/head';
import React from 'react';
import { Home } from '../components/home/Home';

export default function home() {
  return(
    <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_WEBSITE_TITLE}</title>
      <meta name="description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION} />
    </Head>
    <Home />
    </>
  );
}