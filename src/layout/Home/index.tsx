import { Title } from '@/common';
import Head from 'next/head';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Starter | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Wrapper>
  );
};
