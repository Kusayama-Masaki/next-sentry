import React, { FC } from "react";
import Head from "next/head";

const Home: FC = () => (
  <div>
    <Head>
      <title>home</title>
    </Head>
    <main>
      <h1>Next.js + sentry sample project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        omnis ducimus inventore facere dolores asperiores temporibus cum
        quibusdam exercitationem, deleniti modi impedit numquam. Laudantium,
        ratione tempora doloribus blanditiis sed consectetur.
      </p>
      <button onClick={throwException}>throw exception</button>
    </main>
  </div>
);

const throwException = () => {
  const rand = Math.random();
  try {
    console.log(rand);
    if (rand < 0.5) throw new Error("exception test");
  } catch (err) {
    console.error(rand);
  }
};

export default Home;
