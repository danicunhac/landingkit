import Image from 'next/image';
import logos from '@/../public/images/logos.svg';
import copyright from '@/../public/images/copyright.svg';
import logo from '@/../public/images/starter-logo-large.svg';
import { Container, Wrapper } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Container justify="center">
        <Image width="36px" src={logo} alt="Starter Logo" />
        <strong
          style={{
            marginLeft: '0.75rem',
            fontSize: '1.75rem',
          }}
        >
          Starter
        </strong>
      </Container>
      <Container justify="space-around">
        <span>Home</span>
        <span>About</span>
        <span>Docs</span>
        <span>Github</span>
      </Container>
      <Container justify="center">
        <Image src={logos} alt="Social media logos" />
      </Container>
      <Container justify="center">
        <Image
          src={copyright}
          alt="© Copyright 2021 Nextjs Starter. Powered with ♥ by CreativeDesignsGuru"
        />
      </Container>
    </Wrapper>
  );
}
