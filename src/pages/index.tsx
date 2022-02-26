import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '@components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-5xl">Home</h1>
      <Link href="/posts/1">
        <a className="block">Post 1</a>
      </Link>
      <Link href="/posts/2">
        <a className="sm:grid block bg-red-100 sm:m-0">Post 2</a>
      </Link>
      <Link href="/posts/3">
        <a className="block">Post 3</a>
      </Link>
    </Layout>
  );
};

export default Home;
