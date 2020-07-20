import React from 'react';
import { NextPage } from 'next';

import Layout from '@components/layout/layout';

interface AboutProps {}

const About: NextPage<AboutProps> = () => {
  return <Layout title="About">About</Layout>;
};

export default About;
