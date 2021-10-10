import { Wrapper, Container } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/images/starter-logo-large.svg';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Image width="36px" src={logo} alt="Starter Logo" />
        <span
          style={{
            marginLeft: '0.75rem',
            fontSize: '1.75rem',
            fontWeight: 500,
          }}
        >
          Starter
        </span>
      </Container>
      <Container width="75%" justify="space-around">
        <Link href="https://github.com/danicunhac">
          <a>Github</a>
        </Link>
        <span>Sign in</span>
      </Container>
    </Wrapper>
  );
}
