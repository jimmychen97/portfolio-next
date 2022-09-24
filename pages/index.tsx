import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import profilePic from '../public/photo.jpeg';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jimmy Chen Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio site of Jimmy Chen, Frontend developer, QA Automation engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <section>
        <h1>Jimmy Chen</h1>
        <div>
          <p>
            QA Automation Engineer at Esri, experienced with Selenium and Java.
            Working on expanding knowledge and skills for React, Node.js,
            TypeScript and other front-end development related tools.
          </p>
        </div>
        <div>
          <Image src={profilePic} alt="Profile Picture" />
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/haoyan-chen/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jimmychen97"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
