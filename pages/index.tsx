import React from 'react';
import Head from "next/head";
import { FrseAvatar } from '../components/Avatar';

const FrsePixelarts = () => {
  return (
    <div>
      <Head>
        <title>FRSE CSS Avatar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FrseAvatar />
      </main>
    </div>
  );
};

export default FrsePixelarts;
