import Image from 'next/image';
import {
  FaAt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWifi,
  FaYoutube,
} from 'react-icons/fa';
import { Container, Wrapper } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Container justify="center">
        <Image
          width="44px"
          height="44px"
          src="/images/starter-logo-large.svg"
          alt="Starter Logo"
        />
        <strong>Starter</strong>
      </Container>
      <Container justify="space-around">
        <span>Home</span>
        <span>About</span>
        <span>Docs</span>
        <span>Github</span>
      </Container>
      <Container gap="1rem" justify="center">
        <FaGithub size={24} />
        <FaFacebook size={24} />
        <FaTwitter size={24} />
        <FaYoutube size={24} />
        <FaLinkedin size={24} />
        <FaAt size={24} />
        <FaWifi size={24} />
      </Container>
      <Container justify="center">
        <Image
          width="324px"
          height="34px"
          src="/images/copyright.svg"
          alt="© Copyright 2021 Nextjs Starter. Powered with ♥ by CreativeDesignsGuru"
        />
      </Container>
    </Wrapper>
  );
}
