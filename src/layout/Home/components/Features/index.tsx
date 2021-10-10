import Image from 'next/image';
import topFeature from '@/../public/images/feature1.svg';
import middleFeature from '@/../public/images/feature2.svg';
import bottomFeature from '@/../public/images/feature3.svg';
import { Card, MicroSections, Wrapper } from './styles';

export default function Features() {
  return (
    <Wrapper>
      <MicroSections>
        <h2>Your title here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </p>
      </MicroSections>
      <MicroSections>
        <h3>Your title here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum, nunc non posuere consectetur, justo erat semper enim, non
          hendrerit dui odio id enim.
        </p>
      </MicroSections>
      <MicroSections>
        <Image
          src={topFeature}
          alt="Woman driving a shopping cart and a huge laptop beside"
        />
      </MicroSections>
      <MicroSections>
        <h3>Your title here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum, nunc non posuere consectetur, justo erat semper enim, non
          hendrerit dui odio id enim.
        </p>
      </MicroSections>
      <MicroSections>
        <Image
          src={middleFeature}
          alt="Woman going up stairs to reach a golden coin on top"
        />
      </MicroSections>
      <MicroSections>
        <h3>Your title here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum, nunc non posuere consectetur, justo erat semper enim, non
          hendrerit dui odio id enim.
        </p>
      </MicroSections>
      <MicroSections>
        <Image
          src={bottomFeature}
          alt="Woman on a rocket holding a megaphone and a man beside her inside a blue trophy"
        />
      </MicroSections>
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <strong>Start your Free Trial.</strong>
        <button>Get Started</button>
      </Card>
    </Wrapper>
  );
}
