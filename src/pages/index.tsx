import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@components/layout';

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <h1 className="text-5xl">Home</h1>
      <Link href="/posts/1">
        <a className="block">Post 1</a>
      </Link>
      <Link href="/posts/2">
        <a className="block">Post 2</a>
      </Link>
      <Link href="/posts/3">
        <a className="block">Post 3</a>
      </Link>
    </Layout>
  );
};

export default Home;
