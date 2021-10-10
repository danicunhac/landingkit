import { Wrapper, Container, Icon } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Image
          width="44px"
          height="44px"
          src="/images/starter-logo-large.svg"
          alt="Starter Logo"
        />
        <strong>Starter</strong>
      </Container>
      <Container width="75%" justify="space-around">
        <Link passHref={true} href="https://github.com/danicunhac">
          <Icon color="#03a9f4">
            <FaGithub size={32} />
          </Icon>
        </Link>
        <Link passHref={true} href="/">
          <Icon color="#718094">
            <FaSignInAlt size={24} />
          </Icon>
        </Link>
      </Container>
    </Wrapper>
  );
}
