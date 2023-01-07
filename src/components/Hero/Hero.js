import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Wow! You found me <br />
        I am Ankit k 
      </SectionTitle>
      <SectionText>
        I am learning to improve my coding! currently DSA and How to Develop Industry-Level Web Apps! In love with Python and Javascript! On a Journey of Learning to build softwares that impacts lives of billion!
      </SectionText>
      <Button onClick={()=>window.location ="https://youtube.com/@hypercoder1"}>On YouTube</Button>
    </LeftSection>
  </Section>
);

export default Hero;