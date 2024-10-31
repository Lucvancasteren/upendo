// src/posts/BlokA.tsx

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_SLUG } from "./queries"; // Ensure this is the correct path to your queries file

const BlokB: React.FC = () => {
  // Hardcode the slug for the post you want to fetch
  const slug = "hello-world";

  // Use the Apollo useQuery hook with the slug as a variable
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data?.postBy;

  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post.content}</h2>
    </div>
  );
};

export default BlokB;
