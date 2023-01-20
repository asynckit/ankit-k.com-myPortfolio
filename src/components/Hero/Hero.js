import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, buttonStyle  } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Wow! Someone's here :) <br />
        Hi There! I am Ankit k 
      </SectionTitle>
      <SectionText>
        I am learning to improve my coding! currently DSA and How to Develop Industry-Level Web Apps! In love with Python and Javascript! On a Journey of Learning to build softwares that impacts lives of billion!
      </SectionText>
      <Button style={{fontSize:"100px !important"}} onClick={()=>window.location ="https://youtube.com/@hypercoder1"}>On YouTube &rarr;</Button>
    </LeftSection>
  </Section>
);

export default Hero;