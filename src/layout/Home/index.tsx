import { Footer, Hero } from '@/common';
import Head from 'next/head';
import Features from './components/Features';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Starter | Home</title>
      </Head>
      <Hero />
      <Features />
      <Footer />
    </Wrapper>
  );
};
