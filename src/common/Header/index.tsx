import { Wrapper, Container, Icon } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaSignInAlt } from 'react-icons/fa';
import logo from '@/../public/images/starter-logo-large.svg';

export default function Header() {
  return (
    <Wrapper>
      <Container>
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
