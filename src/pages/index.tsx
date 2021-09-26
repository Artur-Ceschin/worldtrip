import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Banner } from '../components/Banner';
import { Caracteristcs } from '../components/Characteristics';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Slider } from '../components/Slider';
export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristcs />
      <Separator />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['xl', '3xl', '4xl']}
      >
        Vamos nessa ? <br /> Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  );
}
