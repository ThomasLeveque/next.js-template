import React from "react";
import { NextPage } from "next";

import Layout from "@components/layout/layout";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return <Layout title="Home">Home</Layout>;
};

export default Home;
