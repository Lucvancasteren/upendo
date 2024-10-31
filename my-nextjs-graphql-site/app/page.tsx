// src/pages/index.tsx (of HomePage component file)

"use client";

import { ApolloWrapper } from "../apollo";
import BlokA from "../posts/blokA";
import BlokB from "../posts/blokB";


const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <BlokA />
      <BlokB />
    </ApolloWrapper>
  );
};

export default HomePage;
