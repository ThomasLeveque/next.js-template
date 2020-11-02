import React from 'react';
import { NextPage } from 'next';

import Layout from '@components/layout';

interface AboutProps {}

const About: NextPage<AboutProps> = () => {
  return (
    <Layout>
      <h1 className="text-5xl">About</h1>
    </Layout>
  );
};

export default About;
